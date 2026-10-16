import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const directory = "public/images";
await fs.mkdir(path.join(directory, "optimized"), { recursive: true });
let original = 0,
  optimized = 0;
for (const file of await fs.readdir(directory)) {
  if (!/\.(jpg|png|webp)$/i.test(file) || file === "favicon.png") continue;
  const source = path.join(directory, file);
  original += (await fs.stat(source)).size;
  for (const width of [640, 1280, 1920]) {
    const output = await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 79 })
      .toBuffer();
    await fs.writeFile(
      path.join(
        directory,
        "optimized",
        `${path.parse(file).name}-${width}.webp`,
      ),
      output,
    );
    if (width === 1280) optimized += output.length;
  }
}
console.log(
  `1280px image set: ${(original / 1e6).toFixed(1)} MB → ${(optimized / 1e6).toFixed(1)} MB`,
);
