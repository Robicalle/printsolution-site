// Master migration script - calls individual scripts
import { execSync } from 'child_process';
const scripts = [
  'migrate-ab2500-solutions.mjs',
  'migrate-products-1.mjs',
  'migrate-products-2.mjs',
  'migrate-products-3.mjs',
  'cleanup-pages.mjs',
];
for (const s of scripts) {
  console.log(`\n========== Running ${s} ==========`);
  execSync(`node scripts/${s}`, { cwd: process.cwd(), stdio: 'inherit' });
}
console.log('\n✅ All migrations complete!');
