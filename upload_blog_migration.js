#!/usr/bin/env node
/**
 * Script di upload migrazione blog su Sanity
 * Legge blog_migration_data.json e fa PATCH su ogni documento
 */

const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false
});

async function main() {
  // Cerca il file JSON nella stessa directory dello script o in C:\Users\Jarvis
  const possiblePaths = [
    path.join(__dirname, 'blog_migration_data.json'),
    'C:\\Users\\Jarvis\\blog_migration_data.json',
    path.join(process.cwd(), 'blog_migration_data.json'),
  ];

  let dataPath = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      dataPath = p;
      break;
    }
  }

  if (!dataPath) {
    console.error('ERRORE: blog_migration_data.json non trovato!');
    console.error('Percorsi cercati:', possiblePaths);
    process.exit(1);
  }

  console.log(`Carico dati da: ${dataPath}`);
  const articles = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  console.log(`Trovati ${articles.length} articoli da migrare\n`);

  let success = 0;
  let errors = 0;

  for (const article of articles) {
    const { _id, slug, body, body_en } = article;

    console.log(`[${success + errors + 1}/${articles.length}] Patch: ${slug} (${_id})`);
    console.log(`  body IT: ${body.length} blocchi | body EN: ${body_en.length} blocchi`);

    try {
      await client
        .patch(_id)
        .set({ body, body_en })
        .commit();

      console.log(`  OK`);
      success++;
    } catch (err) {
      console.error(`  ERRORE: ${err.message}`);
      if (err.response) {
        console.error(`  Status: ${err.response.statusCode}`);
        console.error(`  Body: ${JSON.stringify(err.response.body).slice(0, 200)}`);
      }
      errors++;
    }

    // Piccola pausa per evitare rate limiting
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`Completato: ${success} successi, ${errors} errori su ${articles.length} articoli`);

  if (errors > 0) {
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Errore fatale:', err);
  process.exit(1);
});
