import { query, mutate } from './sanity-helpers.mjs';

// FASE 3a: Move AB2500 page builder from Pages to Product
async function migrateAB2500() {
  console.log('=== AB2500: Moving sections from Pages to Product ===');
  const page = await query('*[_type=="page" && slug.current=="ab2500"][0]{sections, seo, seo_en}');
  if (!page?.sections?.length) { console.log('AB2500 page not found or empty'); return; }
  await mutate([{ patch: { id: 'product-ab2500', set: { sezioniPagina: page.sections } } }]);
  console.log(`✅ AB2500: ${page.sections.length} sections moved`);
}

// FASE 3b: Move solutions from Pages to Solution docs
async function migrateSolutions() {
  console.log('\n=== Solutions: Moving sections from Pages ===');
  const map = { etichette: 'solution-etichette', packaging: 'solution-packaging', shopper: 'solution-shopper', labbratura: 'solution-labbratura' };
  for (const [slug, docId] of Object.entries(map)) {
    const page = await query('*[_type=="page" && slug.current==$slug][0]{sections, seo, seo_en}', { slug });
    if (!page?.sections?.length) { console.log(`${slug}: no sections`); continue; }
    await mutate([{ patch: { id: docId, set: { sezioniPagina: page.sections } } }]);
    console.log(`✅ ${slug}: ${page.sections.length} sections moved`);
  }
  // Consumabili - may need to create solution doc
  const cp = await query('*[_type=="page" && slug.current=="consumabili"][0]{sections, seo, seo_en, title, title_en}');
  if (cp?.sections?.length) {
    const existing = await query('*[_type=="solution" && slug.current=="consumabili"][0]{_id}');
    if (existing) {
      await mutate([{ patch: { id: existing._id, set: { sezioniPagina: cp.sections } } }]);
    } else {
      await mutate([{ create: { _id: 'solution-consumabili', _type: 'solution', title: cp.title || 'Consumabili e Ricambi', title_en: cp.title_en || 'Consumables & Spare Parts', slug: { _type: 'slug', current: 'consumabili' }, category: 'etichette', order: 99, sezioniPagina: cp.sections } }]);
    }
    console.log(`✅ consumabili: ${cp.sections.length} sections moved`);
  }
}

await migrateAB2500();
await migrateSolutions();
console.log('\n✅ AB2500 + Solutions migration done');
