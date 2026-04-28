/**
 * Carica logo + video di GFC Stampa e aggiorna il post su Sanity
 * Run: node scripts/update-gfc-post-media.mjs
 */

import { createClient } from '@sanity/client';
import fs from 'fs';
import { k } from './sanity-helpers.mjs';

const TOKEN = fs.readFileSync('C:\\Users\\Jarvis\\.openclaw\\workspace\\memory\\vault\\sanity-token.key', 'utf-8').trim();

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: TOKEN,
  useCdn: false,
});

const POST_ID = 'post-gfc-stampa-edm650x';
const LOGO_PATH = 'C:\\Users\\Jarvis\\Desktop\\GFC\\gfc logo.png';
const VIDEO_PATH = 'C:\\Users\\Jarvis\\Desktop\\GFC\\Video produzione GFC.mp4';

async function run() {
  // 1. Carica logo come immagine
  console.log('📷 Caricamento logo GFC...');
  const logoAsset = await client.assets.upload('image', fs.createReadStream(LOGO_PATH), {
    filename: 'gfc-stampa-logo.png',
    contentType: 'image/png',
  });
  console.log('   ✅ Logo caricato:', logoAsset._id);

  // 2. Carica video come file
  console.log('🎬 Caricamento video GFC (potrebbe richiedere qualche minuto)...');
  const videoAsset = await client.assets.upload('file', fs.createReadStream(VIDEO_PATH), {
    filename: 'video-produzione-gfc.mp4',
    contentType: 'video/mp4',
  });
  console.log('   ✅ Video caricato:', videoAsset._id);
  console.log('   URL:', videoAsset.url);

  // 3. Costruisci blocco videoEmbed da inserire nel body (dopo il primo paragrafo intro)
  const videoBlock = {
    _type: 'videoEmbed',
    _key: k(),
    url: videoAsset.url,
    caption: 'GFC Stampa — La produzione di packaging personalizzato con la EDM-650X',
  };

  // 4. Leggi il post attuale per prendere il body esistente
  console.log('📄 Recupero post attuale...');
  const post = await client.fetch('*[_id == $id][0]{ body }', { id: POST_ID });

  // Inserisci il video dopo il secondo blocco (dopo il titolo h2 + primo paragrafo intro)
  const body = post.body || [];
  const insertAt = 2; // dopo h2 "Da Flexo a Digitale" e il paragrafo intro
  const newBody = [
    ...body.slice(0, insertAt),
    videoBlock,
    ...body.slice(insertAt),
  ];

  // 5. Patch: coverImage + body aggiornato
  console.log('🔧 Aggiornamento post...');
  await client.patch(POST_ID).set({
    coverImage: {
      _type: 'image',
      asset: { _type: 'reference', _ref: logoAsset._id },
      alt: 'GFC Stampa — Logo aziendale',
    },
    body: newBody,
  }).commit();

  console.log('\n✅ Post aggiornato con successo!');
  console.log('   Copertina: logo GFC Stampa');
  console.log('   Video inserito nel corpo dopo l\'introduzione');
}

run().catch((err) => {
  console.error('❌ Errore:', err.message);
  process.exit(1);
});
