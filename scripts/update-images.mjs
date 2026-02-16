// Map existing shop images to products in shop-data.ts
import fs from 'fs';

const shopDir = 'public/images/shop/';
const files = fs.readdirSync(shopDir).filter(f => !f.includes('category') && !f.includes('placeholder') && !f.includes('greenbox'));

console.log('Available shop images:');
files.forEach(f => console.log(' ', f));

// Build mapping: product id -> image file
const mapping = {
  // L801 products
  'l801-y': '/images/shop/l801-yellow.jpg' ,  // not existing? check
  'l801-m': '/images/shop/l801-magenta.jpg',
  'l801-c': '/images/shop/l801-cyan.jpg',
  'l801-k': '/images/shop/l801-black.jpg',
  'l801-head': '/images/shop/l801-testina.jpg',
  'l801p-y': '/images/shop/l801p-yellow.jpg',
  'l801p-m': '/images/shop/l801p-magenta.jpg',
  'l801p-c': '/images/shop/l801p-cyan.webp',
  'l801p-k': '/images/shop/l801p-black.jpg',
  // CX1000
  'cx-k': '/images/shop/cx1000-nero.jpg',
  'cx-c': '/images/shop/cx1000-ciano.jpg',
  'cx-m': '/images/shop/cx1000-magenta.jpg',
  'cx-y': '/images/shop/cx1000-giallo.jpg',
  'cx-itu': '/images/shop/cx1000-itu.jpg',
  // LX2000
  'lx2k-y': '/images/shop/lx2000-giallo.jpg',
  'lx2k-c': '/images/shop/lx2000-ciano.jpg',
  'lx2k-m': '/images/shop/lx2000-magenta.jpg',
  'lx2k-k': '/images/shop/lx2000-nero.jpg',
  // LX900
  'lx9-c': '/images/shop/lx900-ciano.jpg',
  'lx9-m': '/images/shop/lx900-magenta.jpg',
  'lx9-y': '/images/shop/lx900-giallo.jpg',
  'lx9-k': '/images/shop/lx900-nero.jpg',
  'lx9-head': '/images/shop/lx900-testina.jpg',
  // DP-SE
  'dpse-color': '/images/shop/dpse-cmy.jpg',
  // DP41xx
  'dp41-head': '/images/shop/dp41xx-testina.jpg',
  'dp41-c': '/images/shop/dp41xx-ciano.jpg',
  'dp41-m': '/images/shop/dp41xx-magenta.jpg',
  'dp41-y': '/images/shop/dp41xx-giallo.jpg',
  'dp41-k': '/images/shop/dp41xx-nero.jpg',
  // VP700 (300x series = VP700 / Colordyne 3800)
  // ANY-002 uses i700 images (same OEM)
  'any-toner-m': '/images/shop/i700-magenta.jpg',
  'any-toner-c': '/images/shop/i700-ciano.jpg',
  'any-toner-y': '/images/shop/i700-giallo.jpg',
  'any-toner-k': '/images/shop/i700-nero.jpg',
  'any-toner-w': '/images/shop/i700-bianco.jpg',
  'any-fuser-6': '/images/shop/i700-fusore-101.jpg',
  'any-fuser-8': '/images/shop/i700-fusore-201.jpg',
  'any-belt': '/images/shop/i700-itu.jpg',
};

// Verify all mapped files exist
let data = fs.readFileSync('src/lib/shop-data.ts', 'utf8');
let replaced = 0;
for (const [id, img] of Object.entries(mapping)) {
  const filePath = 'public' + img.slice(0); // /images/shop/x -> public/images/shop/x
  const realPath = filePath.replace(/^\/images/, 'public/images').replace('public/images', 'public/images');
  const actualPath = 'public' + img;
  if (!fs.existsSync(actualPath)) {
    console.log(`MISSING: ${actualPath} for ${id}`);
    continue;
  }
  // Replace in the line containing this product id
  const regex = new RegExp(`(id: "${id}",.*?image: )"[^"]*"`, 's');
  if (regex.test(data)) {
    data = data.replace(regex, `$1"${img}"`);
    replaced++;
  }
}

fs.writeFileSync('src/lib/shop-data.ts', data);
console.log(`Replaced ${replaced} product images`);
