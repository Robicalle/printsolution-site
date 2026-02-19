import { query } from './sanity-helpers.mjs';
try {
  const r = await query('*[_type=="page"][0]');
  console.log('Keys:', Object.keys(r));
} catch(e) {
  console.error('Error:', e.message);
}
