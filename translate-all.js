const fs = require('fs');
const path = require('path');

const base = 'C:/Users/Jarvis/.openclaw/workspace/website/src/app/[locale]';

// Helper: add getLocale import and locale variable to server components
function addLocaleToServerComponent(content) {
  // Add import
  if (!content.includes('getLocale')) {
    // Add after last import
    const lastImportIdx = content.lastIndexOf('import ');
    const endOfLastImport = content.indexOf('\n', content.indexOf(';', lastImportIdx));
    content = content.slice(0, endOfLastImport + 1) + 
      'import { getLocale } from "next-intl/server";\n' + 
      content.slice(endOfLastImport + 1);
  }
  
  // Make function async and add locale const
  // Match: export default function XXX() {
  content = content.replace(
    /export default function (\w+)\(\) \{/,
    'export default async function $1() {\n  const locale = await getLocale();'
  );
  
  return content;
}

// Helper: add useLocale import and locale variable to client components
function addLocaleToClientComponent(content) {
  if (!content.includes('useLocale')) {
    // Add after "use client" or first import
    if (content.includes('"use client"')) {
      content = content.replace('"use client"', '"use client"\nimport { useLocale } from "next-intl";');
    } else {
      const lastImportIdx = content.lastIndexOf('import ');
      const endOfLastImport = content.indexOf('\n', content.indexOf(';', lastImportIdx));
      content = content.slice(0, endOfLastImport + 1) + 
        'import { useLocale } from "next-intl";\n' + 
        content.slice(endOfLastImport + 1);
    }
  }
  
  // Add locale const after function declaration
  content = content.replace(
    /(export default function \w+\([^)]*\) \{)/,
    '$1\n  const locale = useLocale();'
  );
  
  return content;
}

// Process each file with specific translations
function processFile(filePath, translations) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const isClient = content.includes('"use client"') || content.includes("'use client'");
  
  if (isClient) {
    content = addLocaleToClientComponent(content);
  } else {
    content = addLocaleToServerComponent(content);
  }
  
  // Apply translations - replace Italian text with locale ternary
  for (const [it, en] of translations) {
    // Escape special regex chars
    const escaped = it.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    content = content.replace(new RegExp(escaped, 'g'), `{locale === 'it' ? "${it.replace(/"/g, '\\"')}" : "${en.replace(/"/g, '\\"')}"}`);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed: ' + filePath.replace(base, '.'));
}

// But actually the ternary approach inside JSX attributes and strings is complex.
// Let me use a different approach: define a t() helper function in each file.

function processFileV2(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const isClient = content.includes('"use client"') || content.includes("'use client'");
  
  if (isClient) {
    content = addLocaleToClientComponent(content);
  } else {
    content = addLocaleToServerComponent(content);
  }
  
  // Apply direct string replacements
  for (const [oldStr, newStr] of replacements) {
    content = content.replaceAll(oldStr, newStr);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed: ' + path.relative(base, filePath));
}

// ====== TRANSLATIONS FOR EACH FILE ======

// Helper to create locale-conditional strings for JSX text content
// For text inside JSX: {locale === 'it' ? 'Italian' : 'English'}
// For string props: locale === 'it' ? 'Italian' : 'English'

const files = {};

// ---------- PRODOTTI/AB2500 ----------
files['prodotti/ab2500/page.tsx'] = [
  ['>Prodotti<', '>{locale === \'it\' ? \'Prodotti\' : \'Products\'}<'],
  ['Box maker automatico all-in-one. Taglio, scanalatura, cordonatura e incollaggio\n              in un&apos;unica macchina. 500-600 scatole/ora con cambio formato in 10 secondi.',
   '{locale === \'it\' ? \'Box maker automatico all-in-one. Taglio, scanalatura, cordonatura e incollaggio in un\\\'unica macchina. 500-600 scatole/ora con cambio formato in 10 secondi.\' : \'Automatic all-in-one box maker. Cutting, creasing, scoring and gluing in a single machine. 500-600 boxes/hour with format change in 10 seconds.\'}'],
  ['>Richiedi Demo →<', '>{locale === \'it\' ? \'Richiedi Demo →\' : \'Request Demo →\'}<'],
  ['>Produzione Automatica di Scatole<', '>{locale === \'it\' ? \'Produzione Automatica di Scatole\' : \'Automatic Box Production\'}<'],
  ['>Vantaggi Principali<', '>{locale === \'it\' ? \'Vantaggi Principali\' : \'Key Benefits\'}<'],
  ['>Specifiche Tecniche<', '>{locale === \'it\' ? \'Specifiche Tecniche\' : \'Technical Specifications\'}<'],
  ['>AB2500 in Azione<', '>{locale === \'it\' ? \'AB2500 in Azione\' : \'AB2500 in Action\'}<'],
  ['>Automatizza la Produzione di Scatole<', '>{locale === \'it\' ? \'Automatizza la Produzione di Scatole\' : \'Automate Your Box Production\'}<'],
  ['>Prodotti Correlati<', '>{locale === \'it\' ? \'Prodotti Correlati\' : \'Related Products\'}<'],
];

// OK this approach is getting unwieldy. Let me try a completely different strategy.
// I'll create a global t() function pattern and batch-replace common patterns across ALL files.

console.log("Starting translation process...\n");

// Step 1: Get all page.tsx files
function getAllFiles(dir) {
  let results = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(getAllFiles(full));
    } else if (item.endsWith('.tsx')) {
      results.push(full);
    }
  }
  return results;
}

const allFiles = getAllFiles(base);

// Step 2: For each file, add locale support and a t() helper
for (const filePath of allFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  const rel = path.relative(base, filePath);
  
  // Skip layout.tsx (already has locale handling)
  if (rel === 'layout.tsx') {
    console.log('SKIP: ' + rel);
    continue;
  }
  
  // Skip page.tsx root (just imports HomePageClient)
  if (rel === 'page.tsx') {
    console.log('SKIP: ' + rel);
    continue;
  }
  
  // Already has locale support
  if (content.includes('getLocale') || content.includes('useLocale')) {
    console.log('SKIP (already has locale): ' + rel);
    continue;
  }
  
  const isClient = content.includes('"use client"') || content.includes("'use client'");
  
  if (isClient) {
    // Add useLocale import
    if (content.includes('from "next-intl"')) {
      // Already imports from next-intl, add useLocale
      content = content.replace('from "next-intl"', ', useLocale } from "next-intl"');
      content = content.replace('import {, useLocale }', 'import { useLocale }');
      content = content.replace('import { useLocale, useLocale }', 'import { useLocale }');
    } else {
      // Add new import after use client
      content = content.replace(
        /("use client";?\s*\n)/,
        '$1import { useLocale } from "next-intl";\n'
      );
    }
    
    // Add locale const - find function body start
    const funcMatch = content.match(/(?:export default function \w+\([^)]*\)\s*\{)/);
    if (funcMatch) {
      const idx = content.indexOf(funcMatch[0]) + funcMatch[0].length;
      content = content.slice(0, idx) + '\n  const locale = useLocale();' + content.slice(idx);
    }
  } else {
    // Server component - add getLocale import
    const lastImport = content.lastIndexOf('\nimport ');
    if (lastImport >= 0) {
      const endOfImport = content.indexOf('\n', content.indexOf(';', lastImport + 1));
      content = content.slice(0, endOfImport + 1) + 
        'import { getLocale } from "next-intl/server";\n' +
        content.slice(endOfImport + 1);
    }
    
    // Make function async and add locale const
    content = content.replace(
      /export default function (\w+)\(\)\s*\{/,
      'export default async function $1() {\n  const locale = await getLocale();'
    );
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Added locale: ' + rel);
}

console.log('\nPhase 1 complete - locale support added to all files.');
console.log('Phase 2: Run translate-texts.js for text replacements.');
