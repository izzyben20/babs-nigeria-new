import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: "reduce",
});
const root = process.env.AGRO_URL || "http://127.0.0.1:5173";
const routes = [
  "/",
  "/about",
  "/products",
  "/gallery",
  "/team",
  "/partners",
  "/contact",
  "/page-that-does-not-exist",
];
await fs.mkdir("artifacts", { recursive: true });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
try {
  if (process.argv.includes("--live")) {
    const live = [];
    for (const route of routes.slice(0, -1)) {
      await page.goto(`https://ee-agro.com${route}`, {
        waitUntil: "networkidle",
        timeout: 45000,
      });
      const info = await page.evaluate(() => ({
        title: document.title,
        headings: [...document.querySelectorAll("h1,h2,h3")].map((e) =>
          e.textContent.trim(),
        ),
        links: [...document.querySelectorAll("nav a")].map((a) => ({
          text: a.textContent.trim(),
          href: a.getAttribute("href"),
        })),
        forms: [...document.querySelectorAll("form")].map((f) =>
          [...f.elements].map((e) => ({
            tag: e.tagName,
            name: e.name,
            type: e.type,
          })),
        ),
        overflow: document.documentElement.scrollWidth > innerWidth,
        brokenImages: [...document.images]
          .filter((i) => i.complete && !i.naturalWidth)
          .map((i) => i.src),
      }));
      live.push({ route, ...info });
      await page.screenshot({
        path: `artifacts/original-${route === "/" ? "home" : route.slice(1)}.png`,
        fullPage: true,
      });
      console.log("Live audit:", route, info.headings.length, "headings");
    }
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("https://ee-agro.com/", { waitUntil: "networkidle" });
    await page.screenshot({
      path: "artifacts/original-mobile.png",
      fullPage: true,
    });
    await fs.writeFile(
      "artifacts/live-audit.json",
      JSON.stringify(live, null, 2),
    );
    process.exitCode = 0;
  } else {
    const report = [];
    // Keep external maps out of layout checks; no real messages are submitted.
    await page.route("https://www.google.com/maps**", (route) => route.abort());
    for (const width of process.argv.includes("--interactions")
      ? []
      : process.env.AGRO_WIDTHS
        ? process.env.AGRO_WIDTHS.split(",").map(Number)
        : [320, 375, 390, 430, 768, 1024, 1280, 1440]) {
      await page.setViewportSize({ width, height: width < 700 ? 844 : 1000 });
      for (const route of routes) {
        await page.goto(`${root}${route}`, { waitUntil: "networkidle" });
        await page.locator("main h1").waitFor();
        // Scroll to trigger all image loads and reveal sections.
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += innerHeight) {
            scrollTo(0, y);
            await new Promise((resolve) => setTimeout(resolve, 10));
          }
          scrollTo(0, 0);
          await Promise.all(
            [...document.images].map((img) => img.decode().catch(() => {})),
          );
        });
        const state = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth - innerWidth,
          h1: document.querySelectorAll("main h1").length,
          broken: [...document.images]
            .filter((img) => !img.complete || !img.naturalWidth)
            .map((img) => img.currentSrc),
          health: /community\s*health|public\s*health|health alerts/i.test(
            document.body.innerText,
          ),
          badLinks: [...document.querySelectorAll("a[href]")].filter(
            (a) => a.getAttribute("href") === "#",
          ).length,
        }));
        if (state.overflow > 1) {
          console.log(
            await page.evaluate(() =>
              [...document.querySelectorAll("main *:not(svg):not(svg *)")]
                .filter((e) => {
                  const r = e.getBoundingClientRect();
                  return r.right > innerWidth + 1 && r.width;
                })
                .map((e) => ({
                  tag: e.tagName,
                  class: e.className,
                  text: e.textContent.slice(0, 60),
                  right: e.getBoundingClientRect().right,
                }))
                .slice(0, 20),
            ),
          );
          await page.screenshot({
            path: "artifacts/overflow.png",
            fullPage: true,
          });
        }
        assert.ok(
          state.overflow <= 1,
          `${width}px ${route}: ${state.overflow}px overflow`,
        );
        assert.equal(state.h1, 1, `${route}: h1 count`);
        assert.deepEqual(state.broken, [], `${route}: broken images`);
        assert.equal(state.health, false, `${route}: health content`);
        assert.equal(state.badLinks, 0, `${route}: placeholder links`);
        report.push({ width, route, ...state });
        if ([375, 1440].includes(width))
          await page.screenshot({
            path: `artifacts/${route === "/" ? "home" : route.slice(1)}-${width}.png`,
            fullPage: width === 375,
            animations: "disabled",
          });
      }
      console.log(`PASS: all ${routes.length} pages at ${width}px`);
    }
    await page.setViewportSize({ width: 375, height: 844 });
    await page.goto(root, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Open menu", exact: true }).click();
    assert.equal(
      await page
        .getByRole("button", { name: "Close menu" })
        .getAttribute("aria-expanded"),
      "true",
    );
    await page.keyboard.press("Escape");
    assert.equal(
      await page
        .getByRole("button", { name: "Open menu", exact: true })
        .getAttribute("aria-expanded"),
      "false",
    );
    await page.getByRole("button", { name: "Open menu", exact: true }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation", exact: true })
      .getByRole("link", { name: "Our crops" })
      .click();
    await page.waitForURL("**/products");
    assert.equal(
      await page
        .getByRole("button", { name: "Open menu", exact: true })
        .getAttribute("aria-expanded"),
      "false",
    );
    console.log(
      "PASS: mobile menu, Escape, navigation, and close on route change",
    );
    await page.goto(`${root}/gallery`, { waitUntil: "networkidle" });
    const photoButton = page.getByRole("button", {
      name: "Open Land preparation",
    });
    await photoButton.click();
    await page.getByRole("dialog").waitFor({ state: "visible" });
    await page.keyboard.press("Escape");
    await page.getByRole("dialog").waitFor({ state: "detached" });
    assert.equal(
      await photoButton.evaluate((e) => document.activeElement === e),
      true,
    );
    await page.getByRole("tab", { name: "Films" }).click();
    await page
      .getByRole("button", { name: "Open Planting / A field journal" })
      .click();
    await page.getByRole("dialog").waitFor({ state: "visible" });
    assert.ok(
      (await page.locator("dialog video").getAttribute("src")).endsWith(
        "planting_pictures.mp4",
      ),
    );
    await page.getByRole("button", { name: "Close media" }).click();
    console.log(
      "PASS: gallery filters, photo and video viewer, Escape and focus restoration",
    );
    await page.goto(`${root}/contact?subject=Farm%20visit`, {
      waitUntil: "networkidle",
    });
    assert.equal(
      await page.getByLabel("Subject", { exact: false }).inputValue(),
      "Farm visit",
    );
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    assert.equal(
      await page
        .getByLabel("Full name")
        .evaluate((e) => e.validity.valueMissing),
      true,
    );
    const fill = async () => {
      await page.getByLabel("Full name").fill("Browser Test");
      await page.getByLabel("Email address").fill("test@example.com");
      await page.getByLabel("Subject", { exact: false }).fill("Test inquiry");
      await page
        .getByLabel("Your message")
        .fill("This request is intercepted by the local browser test.");
    };
    await fill();
    await page.route("**/api/mailer/src/contact-us.php", (route) =>
      route.fulfill({ json: { success: true } }),
    );
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page
      .getByRole("status")
      .filter({ hasText: "Your message has been sent" })
      .waitFor();
    assert.equal(await page.getByLabel("Full name").inputValue(), "");
    await page.unroute("**/api/mailer/src/contact-us.php");
    await fill();
    await page.route("**/api/mailer/src/contact-us.php", (route) =>
      route.fulfill({ status: 500, body: "error" }),
    );
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.getByRole("alert").waitFor();
    assert.equal(
      await page.getByLabel("Full name").inputValue(),
      "Browser Test",
    );
    console.log(
      "PASS: contact required fields, inquiry prefill, mocked success/error, data retained after error",
    );
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto(root, { waitUntil: "networkidle" });
    const firstReveal = page.locator(".roots-copy[data-reveal]");
    await firstReveal.scrollIntoViewIfNeeded();
    await page.waitForFunction(() =>
      document.querySelector(".roots-copy")?.classList.contains("is-visible"),
    );
    await page.getByRole("link", { name: "Get to know EE Agro" }).click();
    await page.waitForURL("**/about");
    await page.locator(".story-body[data-reveal]").scrollIntoViewIfNeeded();
    await page.waitForFunction(() =>
      document.querySelector(".story-body")?.classList.contains("is-visible"),
    );
    await page.emulateMedia({ reducedMotion: "reduce" });
    assert.equal(
      await page.evaluate(
        () => getComputedStyle(document.documentElement).scrollBehavior,
      ),
      "auto",
    );
    console.log(
      "PASS: scroll reveals after lazy navigation and reduced-motion preference",
    );
    assert.deepEqual(errors, [], "Browser runtime errors");
    await fs.writeFile(
      "artifacts/responsive-report.json",
      JSON.stringify(report, null, 2),
    );
    console.log(
      `PASS: ${report.length} responsive page checks; no runtime errors.`,
    );
  }
} finally {
  await browser.close();
}
