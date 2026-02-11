const fs = require('fs');
const path = require('path');
const outDir = path.join(__dirname, '..', 'out');
const basePath = '/printsolution-site';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix all references to /images/ and /videos/
  const fixed = content
    .replace(/"\/images\//g, `"${basePath}/images/`)
    .replace(/"\/videos\//g, `"${basePath}/videos/`)
    .replace(/srcSet="\/images\//g, `srcSet="${basePath}/images/`)
    .replace(/url\(\/images\//g, `url(${basePath}/images/`)
    .replace(/'\/images\//g, `'${basePath}/images/`)
    .replace(/'\/videos\//g, `'${basePath}/videos/`);
  
  if (fixed !== content) {
    fs.writeFileSync(filePath, fixed, 'utf-8');
    console.log('Fixed:', path.relative(outDir, filePath));
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html') || entry.name.endsWith('.js')) fixFile(full);
  }
}

walk(outDir);
console.log('Done.');
