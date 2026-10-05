import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url));
const source = `${publicDirectory}prag-continuum.svg`;

await Promise.all([
  [2048, 'prag-continuum.png'],
  [32, 'prag-favicon.png'],
  [180, 'prag-apple-touch-icon.png']
].map(([size, name]) => sharp(source).resize(size, size).png().toFile(`${publicDirectory}${name}`)));

console.log('Generated 2048px logo, 32px favicon, and 180px touch icon.');