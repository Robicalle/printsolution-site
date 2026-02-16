import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function createCategory(src, dest) {
  let img = sharp(src);
  const meta = await img.metadata();
  if (meta.width > 400) img = img.resize(400);
  await img.png().toFile(dest);
  console.log('Created', dest);
}

async function createPlaceholder() {
  const svg = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#f0f0f0"/>
    <text x="150" y="150" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="14" fill="#999">Immagine non disponibile</text>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile('public/images/shop/placeholder.png');
  console.log('Created placeholder');
}

async function main() {
  fs.mkdirSync('public/images/shop/categories', { recursive: true });
  
  await createPlaceholder();
  
  const mappings = [
    ['public/images/products/any-002.avif', 'public/images/shop/categories/any-002.png'],
    ['public/images/products/afinia-lt5c.avif', 'public/images/shop/categories/afinia-lt5c.png'],
    ['public/images/products/afinia-l901.png', 'public/images/shop/categories/afinia-l901.png'],
  ];
  
  for (const [src, dest] of mappings) {
    if (fs.existsSync(src)) {
      await createCategory(src, dest);
    } else {
      console.log('Missing source:', src);
    }
  }
}

main().catch(console.error);
