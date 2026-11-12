// Optimises the site images referenced by the pages into public/img/ as
// responsive WebP variants, and writes a src/data/images.json manifest.
// Run with: npm run images  (not part of the build)
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = path.join(root, 'public', 'Images');
const outDir = path.join(root, 'public', 'img');
const manifestPath = path.join(root, 'src', 'data', 'images.json');

const WIDTHS = [480, 960, 1600];
const QUALITY = 75;

// key -> source file under public/Images
const sources = {
  hero: '5 Misc_images/1.jpg',
  'service-electrical': '1 Electrical/ernest-brillo-9_vReDaom2Q-unsplash.jpg',
  'service-control': '2 Control/isawred-ZERrk2fKuJI-unsplash.jpg',
  'service-instrumentation': '3 Instrumentation/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
  'industry-automation-card': '3 Projects/Automation/Scada.jpg',
  'industry-automation-1': '3 Projects/Automation/Scada.jpg',
  'industry-automation-2': '3 Projects/Automation/SCADA 1.png',
  'industry-automation-3': '3 Projects/Automation/SCADA 2.png',
  'industry-automation-4': '3 Projects/Automation/SCADA 3.png',
  'industry-biochem-card': '3 Projects/Biochem Plants/oilspill 5.jpg',
  'industry-biochem-1': '3 Projects/Biochem Plants/Oilspill 1.jpg',
  'industry-biochem-2': '3 Projects/Biochem Plants/oilspill 3.jpg',
  'industry-biochem-3': '3 Projects/Biochem Plants/oilspill 4.jpg',
  'industry-biochem-4': '3 Projects/Biochem Plants/oilspill 5.jpg',
  'industry-power-card': '3 Projects/Power Plants/Lucara Skids 1.jpg',
  'industry-power-1': '3 Projects/Power Plants/Lucara Skids 1.jpg',
  'industry-power-2': '3 Projects/Power Plants/Venentia Substation 1.jpg',
  'industry-power-3': '3 Projects/Power Plants/Lucara Skids 3.jpg',
  'industry-power-4': '5 Misc_images/6.jpg',
  'industry-process-card': '3 Projects/Process Plants/Nidec Tailings pumps 4.jpg',
  'industry-process-1': '3 Projects/Process Plants/Nidec Tailings pumps 4.jpg',
  'industry-process-2': '3 Projects/Process Plants/Nidec Tailings pumps 2.jpg',
  'industry-process-3': '3 Projects/Process Plants/Nidec Tailings pumps 3.jpg',
  'industry-process-4': '3 Projects/Process Plants/Nidec Tailings pumps 1.jpg',
  'industry-ventilation-card': '3 Projects/Ventilation & Cooling/BBE Loulo 3.jpg',
  'industry-ventilation-1': '3 Projects/Ventilation & Cooling/BBE Loulo 3.jpg',
  'industry-ventilation-2': '3 Projects/Ventilation & Cooling/BBE Loulo 1.jpg',
  'industry-ventilation-3': '3 Projects/Ventilation & Cooling/BBE Loulo 2.jpg',
  'industry-ventilation-4': '3 Projects/Ventilation & Cooling/Seriti.jpeg',
};

const manifest = {};
let written = 0;

// Remove previous variants so a source with fewer widths leaves no stale files.
for (const file of await fs.readdir(outDir)) {
  if (Object.keys(sources).some((key) => new RegExp(`^${key}-\\d+\\.webp$`).test(file))) {
    await fs.rm(path.join(outDir, file));
  }
}

for (const [key, rel] of Object.entries(sources)) {
  const srcPath = path.join(imagesDir, rel);
  // Apply the EXIF orientation so phone photos are not shown sideways.
  const { info: meta } = await sharp(srcPath).rotate().toBuffer({ resolveWithObject: true });
  const widths = WIDTHS.filter((w) => w <= meta.width);
  if (widths.length === 0) widths.push(meta.width);
  const files = [];
  for (const w of [...new Set(widths)]) {
    const name = `${key}-${w}.webp`;
    await sharp(srcPath)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(path.join(outDir, name));
    files.push({ w, url: `/img/${name}` });
    written++;
  }
  const largest = files[files.length - 1];
  const height = Math.round((meta.height / meta.width) * largest.w);
  manifest[key] = {
    src: largest.url,
    width: largest.w,
    height,
    srcset: files.map((f) => `${f.url} ${f.w}w`).join(', '),
  };
}

// Logo: compact webp + png fallback for the header.
const logoSrc = path.join(imagesDir, 'Logo.png');
const logoMeta = await sharp(logoSrc).metadata();
await sharp(logoSrc).resize({ height: 160 }).webp({ quality: 85 }).toFile(path.join(outDir, 'logo.webp'));
const logoResized = await sharp(logoSrc).resize({ height: 160 }).png().toBuffer();
await fs.writeFile(path.join(outDir, 'logo.png'), logoResized);
manifest['logo'] = {
  src: '/img/logo.webp',
  fallback: '/img/logo.png',
  width: Math.round((logoMeta.width / logoMeta.height) * 160),
  height: 160,
  srcset: `/img/logo.webp 1x`,
};

// Favicons + apple touch icon + og image.
const pubDir = path.join(root, 'public');
await sharp(logoSrc).resize(32, 32).png().toFile(path.join(pubDir, 'favicon-32x32.png'));
await sharp(logoSrc).resize(32, 32).png().toFile(path.join(pubDir, 'favicon.ico'));
await sharp(logoSrc).resize(180, 180).png().toFile(path.join(pubDir, 'apple-touch-icon.png'));

const heroSrc = path.join(imagesDir, sources.hero);
await sharp(heroSrc)
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 80 })
  .toFile(path.join(pubDir, 'og-image.jpg'));

await fs.mkdir(path.dirname(manifestPath), { recursive: true });
await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

console.log(`Wrote ${written} image variants + logo, favicons and og-image.`);
console.log(`Manifest: ${manifestPath} (${Object.keys(manifest).length} entries)`);
