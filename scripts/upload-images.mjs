import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

const TOKEN = fs.readFileSync("C:\\Users\\Jarvis\\.openclaw\\workspace\\memory\\vault\\sanity-token.key", "utf-8").trim();
const PUBLIC = "C:\\Users\\Jarvis\\.openclaw\\workspace\\website\\public";

const client = createClient({
  projectId: "dnhjoqwl",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

let uploaded = 0, failed = 0, skipped = 0;
const uploadCache = {}; // path -> asset ref

async function uploadImage(relPath) {
  if (uploadCache[relPath]) return uploadCache[relPath];
  const abs = path.join(PUBLIC, relPath);
  if (!fs.existsSync(abs)) {
    console.log(`  SKIP (not found): ${relPath}`);
    skipped++;
    return null;
  }
  try {
    const asset = await client.assets.upload("image", fs.createReadStream(abs), {
      filename: path.basename(abs),
    });
    const ref = { _type: "image", asset: { _type: "reference", _ref: asset._id } };
    uploadCache[relPath] = ref;
    console.log(`  UPLOADED: ${relPath} → ${asset._id}`);
    uploaded++;
    return ref;
  } catch (e) {
    console.log(`  FAIL: ${relPath} → ${e.message}`);
    failed++;
    return null;
  }
}

// Image mappings based on file analysis
const productImages = {
  "product-greenbox-evo": [
    "images/products/greenbox-evo-front.webp",
    "images/products/greenbox-evo-site.png",
    "images/products/greenbox-evo.jpeg",
    "images/products/greenbox-evo-gallery1.jpeg",
  ],
  "product-edm-650x": [
    "images/products/edm-650x-real.webp",
    "images/products/edm-650x-montage.webp",
    "images/products/edm-650x.jpg",
    "images/products/edm-650x-2hd.jpg",
  ],
  "product-ab2500": [
    "images/products/ab2500-hero.webp",
    "images/products/ab2500.png",
    "images/products/ab2500-detail.webp",
  ],
  "product-packprinter-uv": [
    "images/products/packprinter-uv-front.webp",
    "images/products/packprinter-uv.avif",
  ],
  "product-afinia-dc350": [
    "images/products/afinia-dc350.png",
  ],
  "product-afinia-dlf": [
    "images/products/afinia-dlf-220l.png",
  ],
  "product-afinia-dlp2200": [
    "images/products/afinia-dlp2200.avif",
    "images/products/afinia-dlp2200-detail.webp",
  ],
  "product-afinia-l901": [
    "images/products/afinia-l901.png",
  ],
  "product-afinia-lt5c": [
    "images/products/afinia-lt5c.avif",
  ],
  "product-afinia-x350": [
    "images/products/afinia-x350.webp",
    "images/products/afinia-x350-detail.webp",
    "images/products/afinia-x350-2.webp",
  ],
  "product-any-002": [
    "images/products/any-002.avif",
    "images/products/any-002-screenshot.avif",
  ],
  "product-any-press": [
    "images/products/any-press.avif",
  ],
  "product-aurumpress": [
    "images/products/aurumpress.jpg",
    "images/products/aurumpress-printing.avif",
    "images/products/aurumpress-site.avif",
  ],
  "product-greenbox-printbook": [
    "images/products/greenbox-printbook.jpg",
  ],
  "product-robotjet": [
    // no specific image found in products folder
  ],
};

// Solution images
const solutionImages = {
  "solution-packaging": "images/products/boxes.webp",
  "solution-etichette": "images/hero-labels.webp",
  "solution-shopper": "images/shopper-d1.jpg",
  "solution-labbratura": "images/products/greenbox-printbook.jpg",
};

// Blog cover images - map to relevant hero/product images
const postImages = {
  "blog-stampa-digitale-cartone-ondulato-vs-flessografia": "images/products/edm-650x-real.webp",
  "blog-come-scegliere-stampante-etichette-colori": "images/hero-labels.webp",
  "blog-packaging-personalizzato-vantaggi-pmi": "images/products/greenbox-evo-front.webp",
  "blog-stampa-digitale-vs-offset-piccoli-lotti": "images/hero-packaging.webp",
  "blog-automatizzare-produzione-scatole": "images/products/ab2500-hero.webp",
  "blog-etichette-adesive-materiali-finiture": "images/hero-labels.webp",
  "blog-hot-foil-stamping-cose-quando-usarlo": "images/products/aurumpress.jpg",
  "blog-stampa-cartone-ondulato-guida-completa": "images/products/greenbox-evo-front.webp",
  "blog-come-ridurre-costi-packaging": "images/products/boxes.webp",
  "blog-tendenze-packaging-2026": "images/hero-packaging.webp",
  "blog-stampante-inkjet-industriale-come-scegliere": "images/products/edm-650x-montage.webp",
  "blog-box-maker-produzione-automatica-scatole": "images/products/ab2500-hero.webp",
  "blog-stampante-etichette-colori-bobina-guida": "images/products/afinia-l901.png",
};

// Shop product images
const shopImages = {
  "shop-any-drum-k": "images/shop/any-drum-black.png",
  "shop-any-drum-c": "images/shop/any-drum-cyan.png",
  "shop-any-drum-m": "images/shop/any-drum-magenta.png",
  "shop-any-drum-y": "images/shop/any-drum-yellow.png",
  "shop-any-drum-w": "images/shop/any-drum-white.png",
  "shop-any-toner-k": "images/shop/black-toner-any002.png",
  "shop-any-toner-c": "images/shop/cyan-toner-any002.png",
  "shop-any-toner-m": "images/shop/magenta-toner-any002.png",
  "shop-any-toner-y": "images/shop/yellow-toner-any002.png",
  "shop-any-toner-w": "images/shop/white-toner-any002.png",
  "shop-any-belt": "images/shop/belt-itu-any002.png",
  "shop-any-fuser-6": "images/shop/fusore-6-any002.png",
  "shop-any-fuser-8": "images/shop/fusore-8-any002.png",
  "shop-gb-cyan": "images/shop/cyan-greenbox.png",
  "shop-gb-magenta": "images/shop/magenta-greenbox.png",
  "shop-gb-yellow": "images/shop/yellow-greenbox.png",
  "shop-gb-black": "images/shop/black-greenbox.png",
  "shop-gb-service": "images/shop/service-station-greenbox.png",
  "shop-gbevo-pig-c": "images/shop/cyan-pigment-edm-gbevo.png",
  "shop-gbevo-pig-m": "images/shop/magenta-pigment-edm-gbevo.png",
  "shop-gbevo-pig-y": "images/shop/yellow-pigment-edm-gbevo.png",
  "shop-gbevo-pig-k": "images/shop/black-pigment-edm-gbevo.png",
  "shop-gbevo-dye-c": "images/shop/cyan-dye-edm-gbevo.png",
  "shop-gbevo-dye-m": "images/shop/magenta-dye-edm-gbevo.png",
  "shop-gbevo-dye-y": "images/shop/yellow-dye-edm-gbevo.png",
  "shop-gbevo-dye-k": "images/shop/black-dye-edm-gbevo.png",
  "shop-edm-pig-c": "images/shop/cyan-pigment-edm-gbevo.png",
  "shop-edm-pig-m": "images/shop/magenta-pigment-edm-gbevo.png",
  "shop-edm-pig-y": "images/shop/yellow-pigment-edm-gbevo.png",
  "shop-edm-pig-k": "images/shop/black-pigment-edm-gbevo.png",
  "shop-edm-dye-c": "images/shop/cyan-dye-edm-gbevo.png",
  "shop-edm-dye-m": "images/shop/magenta-dye-edm-gbevo.png",
  "shop-edm-dye-y": "images/shop/yellow-dye-edm-gbevo.png",
  "shop-edm-dye-k": "images/shop/black-dye-edm-gbevo.png",
  "shop-lt5c-c": "images/shop/lt5c-cyan.jpg",
  "shop-lt5c-m": "images/shop/lt5c-magenta.jpg",
  "shop-lt5c-y": "images/shop/lt5c-yellow.jpg",
  "shop-lt5c-k": "images/shop/lt5c-black.jpg",
  "shop-lt5c-w": "images/shop/lt5c-white.jpg",
  "shop-lt5c-belt": "images/shop/lt5c-belt.jpg",
  "shop-lt5c-fuser": "images/shop/lt5c-fuser.jpg",
  "shop-lt5c-waste": "images/shop/lt5c-waste.jpg",
  "shop-l801-c": "images/shop/l801-cyan.jpg",
  "shop-l801-m": "images/shop/l801-magenta.jpg",
  "shop-l801-y": "images/shop/l801-yellow.jpg",
  "shop-l801-k": "images/shop/l801-black.jpg",
  "shop-l801-head": "images/shop/l801-testina.jpg",
  "shop-l801p-c": "images/shop/l801p-cyan.jpg",
  "shop-l801p-m": "images/shop/l801p-magenta.jpg",
  "shop-l801p-y": "images/shop/l801p-yellow.jpg",
  "shop-l801p-k": "images/shop/l801p-black.jpg",
  "shop-l901p-c": "images/shop/l901-cyan.jpg",
  "shop-l901p-m": "images/shop/l901-magenta.jpg",
  "shop-l901p-y": "images/shop/l901-yellow.jpg",
  "shop-l901p-k": "images/shop/l901-black.jpg",
  "shop-l901p-head": "images/shop/l901-testina.png",
  "shop-cx-k": "images/shop/cx1000-nero.jpg",
  "shop-cx-c": "images/shop/cx1000-ciano.jpg",
  "shop-cx-m": "images/shop/cx1000-magenta.jpg",
  "shop-cx-y": "images/shop/cx1000-giallo.jpg",
  "shop-cx-itu": "images/shop/cx1000-itu.jpg",
  "shop-dp41-c": "images/shop/dp41xx-ciano.jpg",
  "shop-dp41-m": "images/shop/dp41xx-magenta.jpg",
  "shop-dp41-y": "images/shop/dp41xx-giallo.jpg",
  "shop-dp41-k": "images/shop/dp41xx-nero.jpg",
  "shop-dp41-head": "images/shop/dp41xx-testina.jpg",
  "shop-dpse-color": "images/shop/dpse-cmy.jpg",
  "shop-lx2k-c": "images/shop/lx2000-ciano.jpg",
  "shop-lx2k-m": "images/shop/lx2000-magenta.jpg",
  "shop-lx2k-y": "images/shop/lx2000-giallo.jpg",
  "shop-lx2k-k": "images/shop/lx2000-nero.jpg",
  "shop-lx2k-kit": "images/shop/lx2000-kit.jpg",
  "shop-lx9-c": "images/shop/lx900-ciano.jpg",
  "shop-lx9-m": "images/shop/lx900-magenta.jpg",
  "shop-lx9-y": "images/shop/lx900-giallo.jpg",
  "shop-lx9-k": "images/shop/lx900-nero.jpg",
  "shop-lx9-head": "images/shop/lx900-testina.jpg",
};

// Site settings
const settingsImage = "images/logo.png";

console.log("=== UPLOADING IMAGES TO SANITY ===\n");

// 1. Products (images array)
for (const [docId, imagePaths] of Object.entries(productImages)) {
  if (!imagePaths.length) continue;
  console.log(`\n[PRODUCT] ${docId}`);
  const images = [];
  for (const p of imagePaths) {
    const ref = await uploadImage(p);
    if (ref) images.push({ ...ref, _key: Math.random().toString(36).slice(2, 8) });
  }
  if (images.length) {
    try {
      await client.patch(docId).set({ images }).commit();
      console.log(`  ✓ Patched ${docId} with ${images.length} images`);
    } catch (e) {
      console.log(`  ✗ Patch failed: ${e.message}`);
      failed++;
    }
  }
}

// 2. Solutions (image field)
for (const [docId, imgPath] of Object.entries(solutionImages)) {
  console.log(`\n[SOLUTION] ${docId}`);
  const ref = await uploadImage(imgPath);
  if (ref) {
    try {
      await client.patch(docId).set({ image: ref }).commit();
      console.log(`  ✓ Patched ${docId}`);
    } catch (e) {
      console.log(`  ✗ Patch failed: ${e.message}`);
      failed++;
    }
  }
}

// 3. Posts (coverImage field)
for (const [docId, imgPath] of Object.entries(postImages)) {
  console.log(`\n[POST] ${docId}`);
  const ref = await uploadImage(imgPath);
  if (ref) {
    try {
      await client.patch(docId).set({ coverImage: ref }).commit();
      console.log(`  ✓ Patched ${docId}`);
    } catch (e) {
      console.log(`  ✗ Patch failed: ${e.message}`);
      failed++;
    }
  }
}

// 4. Shop products (image field)
for (const [docId, imgPath] of Object.entries(shopImages)) {
  console.log(`\n[SHOP] ${docId}`);
  const ref = await uploadImage(imgPath);
  if (ref) {
    try {
      await client.patch(docId).set({ image: ref }).commit();
      console.log(`  ✓ Patched ${docId}`);
    } catch (e) {
      console.log(`  ✗ Patch failed: ${e.message}`);
      failed++;
    }
  }
}

// 5. Site settings (logo)
console.log(`\n[SETTINGS] siteSettings`);
const logoRef = await uploadImage(settingsImage);
if (logoRef) {
  try {
    await client.patch("siteSettings").set({ logo: logoRef }).commit();
    console.log(`  ✓ Patched siteSettings`);
  } catch (e) {
    console.log(`  ✗ Patch failed: ${e.message}`);
    failed++;
  }
}

console.log(`\n=== RIEPILOGO ===`);
console.log(`Uploaded: ${uploaded}`);
console.log(`Skipped:  ${skipped}`);
console.log(`Failed:   ${failed}`);
console.log(`Cached:   ${Object.keys(uploadCache).length} unique images`);
