import sharp from "sharp";
import { readdir, stat, unlink, rename } from "fs/promises";
import { join, extname } from "path";

const PHOTOS_DIR = "public/photos";
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 75;
const JPEG_QUALITY = 75;

async function optimizeImages() {
  const files = await readdir(PHOTOS_DIR);
  const imageFiles = files.filter((f) =>
    [".jpg", ".jpeg", ".png"].includes(extname(f).toLowerCase())
  );

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  for (const file of imageFiles) {
    const filePath = join(PHOTOS_DIR, file);
    const stats = await stat(filePath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);

    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if larger than MAX_WIDTH
    let pipeline = image;
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    // Create optimized JPEG (replace original)
    const tempJpegPath = filePath.replace(extname(file), "-temp.jpg");
    await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(tempJpegPath);

    // Create WebP version
    const webpPath = filePath.replace(extname(file), ".webp");
    await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(webpPath);

    // Replace original with optimized JPEG
    await unlink(filePath);
    await rename(tempJpegPath, filePath);

    const jpegStats = await stat(filePath);
    const jpegSize = (jpegStats.size / 1024 / 1024).toFixed(2);
    const webpStats = await stat(webpPath);
    const webpSize = (webpStats.size / 1024 / 1024).toFixed(2);

    console.log(
      `${file}: ${originalSize} MB → ${jpegSize} MB (JPEG) + ${webpSize} MB (WebP)`
    );
  }

  console.log("\n✅ Image optimization complete!");
  console.log(
    "Next.js will automatically serve WebP to supported browsers."
  );
}

optimizeImages().catch(console.error);
