import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import FieldArt from "./FieldArt";

export function Photo({
  src,
  alt,
  className = "",
  eager = false,
  sizes = "(max-width: 700px) 100vw, 50vw",
}) {
  const name = src
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");
  return (
    <img
      className={className}
      src={`/images/optimized/${name}-1280.webp`}
      srcSet={[640, 1280, 1920]
        .map((width) => `/images/optimized/${name}-${width}.webp ${width}w`)
        .join(", ")}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  );
}
export function Eyebrow({ children, light = false }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
export function Action({ to, children, secondary = false, className = "" }) {
  return (
    <Link
      to={to}
      className={`button ${secondary ? "button-secondary" : ""} ${className}`}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function TextLink({ to, children }) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function PageHero({
  label,
  title,
  accent,
  description,
  image,
  imageAlt,
  note,
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <Eyebrow>{label}</Eyebrow>
          <h1>
            {title} <em>{accent}</em>
          </h1>
          <p className="lead">{description}</p>
          <span className="hero-footnote">
            EE AGRO FARMS · ROOTED IN NIGERIA
          </span>
        </div>
        <div className="page-hero-image">
          <Photo src={image} alt={imageAlt} eager />
          <span className="image-note">
            {note || "A closer look at what we grow."}
          </span>
        </div>
      </div>
      <FieldArt />
    </section>
  );
}
export function Invitation({
  label = "Good things grow together",
  title = "The next harvest starts",
  accent = "with a conversation.",
  description = "Whether you need premium soybeans for processing or want to join our grower network, let’s grow together.",
  to = "/contact",
  action = "Let’s talk",
}) {
  return (
    <section className="invitation">
      <FieldArt />
      <div className="container invitation-inner">
        <div>
          <Eyebrow>{label}</Eyebrow>
          <h2>
            {title}
            <br />
            <em>{accent}</em>
          </h2>
        </div>
        <div>
          <p>{description}</p>
          <Action to={to}>{action}</Action>
        </div>
      </div>
    </section>
  );
}
export function RevealObserver() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = `${{ "/": "Cultivating possibilities", "/about": "Our story", "/products": "Our crops", "/gallery": "Life on the farm", "/team": "Our people", "/partners": "Growing together", "/contact": "Get in touch" }[pathname] || "Page not found"} | EE Agro Farms`;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    let hashHandled = false;
    const scanContent = () => {
      if (!reduced) {
        document
          .querySelectorAll("[data-reveal]:not(.is-visible)")
          .forEach((element) => {
            element.classList.add("will-reveal");
            observer.observe(element);
          });
      }
      const target = hash && document.getElementById(hash.slice(1));
      if (target && !hashHandled) {
        target.scrollIntoView();
        hashHandled = true;
      }
    };
    // Route content can mount after the layout when a lazy page finishes loading.
    const mutations = new MutationObserver(scanContent);
    mutations.observe(document.getElementById("main-content"), {
      childList: true,
      subtree: true,
    });
    scanContent();
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname, hash]);
  return null;
}
