const { createClient } = require('@sanity/client');
const https = require('https');
const http = require('http');

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false
});

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function uploadImageFromUrl(imageUrl, filename) {
  console.log(`Scarico: ${filename}...`);
  const buffer = await fetchBuffer(imageUrl);
  console.log(`Upload su Sanity: ${filename} (${Math.round(buffer.length / 1024)}KB)...`);
  const asset = await client.assets.upload('image', buffer, {
    filename,
    contentType: 'image/jpeg',
  });
  console.log(`✓ Caricato: ${asset._id}`);
  return asset;
}

async function run() {
  // Immagine 1: scatole cartone ondulato aperte → articolo box maker vs fornitore
  const img1 = await uploadImageFromUrl(
    'https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?fm=jpg&q=80&w=1600&auto=format&fit=crop',
    'cardboard-boxes-warehouse.jpg'
  );

  // Immagine 2: scatole spedizione e-commerce con nastro blu → articolo packaging e-commerce
  const img2 = await uploadImageFromUrl(
    'https://images.unsplash.com/photo-1766040923580-16ad32fae8b4?fm=jpg&q=80&w=1600&auto=format&fit=crop',
    'ecommerce-shipping-boxes.jpg'
  );

  // Associa immagine 1 all'articolo box maker vs fornitore + aggiorna data al 21 aprile
  await client.patch('blog-box-maker-vs-fornitore-risparmio-reale')
    .set({
      coverImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: img1._id },
        alt: 'Scatole in cartone ondulato in magazzino — confronto box maker vs fornitore esterno'
      },
      publishedAt: '2026-04-21T09:00:00.000Z'
    })
    .commit();
  console.log('✓ Articolo 1 aggiornato con immagine e data 21 aprile');

  // Associa immagine 2 all'articolo packaging e-commerce
  await client.patch('blog-packaging-ecommerce-costi-reali')
    .set({
      coverImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: img2._id },
        alt: 'Scatole di spedizione e-commerce impilate in magazzino — costi packaging reali'
      }
    })
    .commit();
  console.log('✓ Articolo 2 aggiornato con immagine');

  console.log('\nDone!');
}

run().catch(console.error);
