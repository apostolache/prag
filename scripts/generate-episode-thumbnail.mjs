import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url));
const width = 1600;
const height = 900;
const artwork = (leftName, rightName) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="1600" height="900" fill="#F5F5F0" />
  <g fill="#0A0A0A" font-family="Helvetica, sans-serif">
    <text x="64" y="375" font-size="154" font-weight="700">PRAG</text>
    <text x="72" y="448" font-size="25" font-weight="500">THE SOFTWARE</text>
    <text x="72" y="485" font-size="25" font-weight="500">SERVICES PODCAST</text>
    <text x="640" y="838" font-size="22">${leftName}</text>
    <text x="1104" y="838" font-size="22">${rightName}</text>
  </g>
  <rect x="72" y="734" width="224" height="18" fill="#2457FF" />
  <rect x="296" y="734" width="120" height="18" fill="#FF354F" />
</svg>`);

const portraitWidth = 432;
const portraitHeight = 720;
const portraits = await Promise.all(['Andrei Postolache.jpeg', 'Manu.jpg'].map(name =>
  sharp(`${publicDirectory}pics/${name}`)
    .rotate()
    .resize(portraitWidth, portraitHeight, { fit: 'cover', position: 'north' })
    .grayscale()
    .png()
    .toBuffer()
));
const logo = await sharp(`${publicDirectory}prag-continuum.svg`).resize(104, 104).png().toBuffer();

const names = ['Andrei Postolache', 'Emanuel Martonca'];
await Promise.all([
  { left: 0, right: 1, filename: 'prag-episode-thumbnail.webp' },
  { left: 1, right: 0, filename: 'prag-episode-thumbnail-reversed.webp' }
].map(({ left, right, filename }) => sharp(artwork(names[left], names[right]))
  .composite([
    { input: logo, left: 64, top: 140 },
    { input: portraits[left], left: 640, top: 64 },
    { input: portraits[right], left: 1104, top: 64 }
  ])
  .webp({ quality: 90 })
  .toFile(`${publicDirectory}${filename}`)));

console.log('Generated both episode thumbnail portrait orders.');