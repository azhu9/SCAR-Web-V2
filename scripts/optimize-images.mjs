// Converts the source photos in assets-src/ into web-sized WebP files in src/assets/.
// Run with `npm run images` after adding or replacing a source image.
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'assets-src';
const OUT = 'src/assets';
// Hero slides are full-bleed, so they get a larger cap than in-page photos.
const maxWidth = (name) => (name.startsWith('hero') ? 2400 : 1400);

await mkdir(OUT, { recursive: true });
for (const file of await readdir(SRC)) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  const name = path.parse(file).name;
  const input = sharp(path.join(SRC, file)).rotate();
  const { width, height } = await input.metadata();
  const info = await input
    .resize({ width: maxWidth(name), withoutEnlargement: true })
    .webp({ quality: name === 'logo' ? 90 : 78, alphaQuality: 100 })
    .toFile(path.join(OUT, `${name}.webp`));
  console.log(`${file} ${width}x${height} -> ${name}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
}

// Season photos for the About page timeline (assets-src/history/ -> src/assets/history/).
const HISTORY_SRC = path.join(SRC, 'history');
const HISTORY_OUT = path.join(OUT, 'history');
await mkdir(HISTORY_OUT, { recursive: true });
for (const file of await readdir(HISTORY_SRC)) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  const name = path.parse(file).name.toLowerCase();
  const info = await sharp(path.join(HISTORY_SRC, file))
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(HISTORY_OUT, `${name}.webp`));
  console.log(`history/${file} -> history/${name}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
}

// Sponsor and alumni logos (assets-src/logos/, transparent backgrounds) become white
// silhouettes so they read as one set on black: keep each logo's shape (alpha),
// fill it white, trim empty margins, and size for ~80px-tall display at 2x.
const LOGO_SRC = path.join(SRC, 'logos');
const LOGO_OUT = path.join(OUT, 'logos');
await mkdir(LOGO_OUT, { recursive: true });
for (const file of await readdir(LOGO_SRC)) {
  if (!/\.(png|webp|avif)$/i.test(file)) continue;
  const name = path.parse(file).name.toLowerCase();
  const trimmed = await sharp(path.join(LOGO_SRC, file)).ensureAlpha().trim({ threshold: 1 }).toBuffer();
  const alpha = await sharp(trimmed)
    .resize({ width: 640, height: 160, fit: 'inside', withoutEnlargement: true })
    .extractChannel('alpha')
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = alpha.info;
  const info = await sharp({ create: { width, height, channels: 3, background: '#fff' } })
    .joinChannel(alpha.data, { raw: { width, height, channels: 1 } })
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(path.join(LOGO_OUT, `${name}.webp`));
  console.log(`logos/${file} -> logos/${name}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(1)}KB`);
}
