import { query, mutate } from './sanity-helpers.mjs';

// Delete pages that have been moved to products/solutions
// Keep: chi-siamo, soluzioni (listing page)
const KEEP = ['chi-siamo', 'soluzioni'];

const pages = await query('*[_type=="page"]{_id, slug, title}');
console.log(`Found ${pages.length} pages:`);
for (const p of pages) {
  const slug = p.slug?.current || 'unknown';
  if (KEEP.includes(slug)) {
    console.log(`  KEEP: ${slug} (${p._id})`);
  } else {
    console.log(`  DELETE: ${slug} (${p._id})`);
    await mutate([{ delete: { id: p._id } }]);
  }
}
console.log('\n✅ Pages cleanup done');
