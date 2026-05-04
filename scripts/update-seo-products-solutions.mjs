/**
 * Aggiorna i campi SEO di prodotti Afinia, AurumPress e pagine Soluzioni in Sanity.
 * node scripts/update-seo-products-solutions.mjs
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let envToken = '';
try {
  const envFile = readFileSync(resolve(__dirname, '../.env.local'), 'utf-8');
  const writeMatch = envFile.match(/SANITY_API_WRITE_TOKEN=(.+)/);
  const readMatch  = envFile.match(/SANITY_API_READ_TOKEN=(.+)/);
  envToken = (writeMatch?.[1] || readMatch?.[1] || '').trim();
} catch {
  console.error('❌ .env.local non trovato');
  process.exit(1);
}

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: envToken,
  useCdn: false,
});

// ── SEO data per prodotti ────────────────────────────────────────────────────

const PRODUCT_SEO = {
  'afinia-l901': {
    seo: {
      title: 'Afinia L901: Stampante Etichette Colori 1600 dpi | Print Solution',
      description: 'Afinia L901: stampante etichette a colori Memjet 1600 dpi, fino a 22 m/min. Etichette in bobina CMYK+bianco, ideale per produzione in-house.',
      keywords: ['stampante etichette colori', 'afinia l901', 'stampante etichette bobina', 'memjet 1600 dpi', 'stampa etichette in-house'],
    },
    seo_en: {
      title: 'Afinia L901: Color Label Printer 1600 dpi | Print Solution',
      description: 'Afinia L901: Memjet 1600 dpi color label printer, up to 22 m/min. CMYK+white roll labels, ideal for in-house label production.',
    },
  },
  'afinia-x350': {
    seo: {
      title: 'Afinia X350: Stampante Etichette Industriale Pigmento | Print Solution',
      description: 'Afinia X350: stampante etichette industriale a pigmento, 45 m/min, resistente acqua e UV. Etichette durature per ambienti difficili.',
      keywords: ['stampante etichette industriale', 'afinia x350', 'etichette resistenti acqua', 'stampante pigmento', 'etichette industriali'],
    },
    seo_en: {
      title: 'Afinia X350: Industrial Pigment Label Printer | Print Solution',
      description: 'Afinia X350: industrial pigment label printer, 45 m/min, water and UV resistant. Durable labels for harsh environments.',
    },
  },
  'afinia-dc350': {
    seo: {
      title: 'Afinia DC350: Stampante Etichette con Finitura UV | Print Solution',
      description: 'Afinia DC350: stampante etichette a colori con finitura UV integrata. Etichette lucide e opache di alta qualità direttamente in-house.',
      keywords: ['stampante etichette uv', 'afinia dc350', 'finitura uv etichette', 'stampante etichette colori', 'etichette lucide in-house'],
    },
    seo_en: {
      title: 'Afinia DC350: Color Label Printer with UV Finishing | Print Solution',
      description: 'Afinia DC350: color label printer with integrated UV finishing. High-quality gloss and matte labels in-house.',
    },
  },
  'aurumpress': {
    seo: {
      title: 'AurumPress: Stampante Hot Foil per Packaging Premium | Print Solution',
      description: 'AurumPress: macchina hot foil stamping per packaging premium e finiture metalliche. Stampa a caldo su cartone, etichette e materiali rigidi.',
      keywords: ['hot foil stamping', 'stampa a caldo packaging', 'aurumpress', 'packaging premium', 'finiture metalliche stampa', 'stampante foil'],
    },
    seo_en: {
      title: 'AurumPress: Hot Foil Stamping Machine for Premium Packaging | Print Solution',
      description: 'AurumPress: hot foil stamping machine for premium packaging and metallic finishes. Foil printing on cardboard, labels and rigid materials.',
    },
  },
};

// ── SEO data per soluzioni ───────────────────────────────────────────────────

const SOLUTION_SEO = {
  'packaging': {
    seo: {
      title: 'Soluzioni Stampa Packaging Digitale | Print Solution',
      description: 'Stampanti digitali per packaging: stampa su cartone ondulato, scatole su misura on-demand. GreenBox EVO, EDM-650X, Anypack AB2500. Consulenza gratuita.',
      keywords: ['stampa packaging digitale', 'stampante cartone ondulato', 'box maker automatico', 'packaging personalizzato', 'stampa digitale scatole'],
    },
    seo_en: {
      title: 'Digital Packaging Printing Solutions | Print Solution',
      description: 'Digital printers for packaging: corrugated cardboard printing, on-demand custom boxes. GreenBox EVO, EDM-650X, Anypack AB2500. Free consultation.',
    },
  },
  'etichette': {
    seo: {
      title: 'Soluzioni Stampa Etichette Colori Industriale | Print Solution',
      description: 'Stampanti etichette a colori per uso industriale: etichette in bobina CMYK, resistenti acqua e UV. Afinia L901, X350, DC350. Demo gratuita.',
      keywords: ['stampante etichette colori', 'etichettatura industriale', 'etichette in bobina', 'stampante etichette industriale', 'afinia etichette'],
    },
    seo_en: {
      title: 'Industrial Color Label Printing Solutions | Print Solution',
      description: 'Color label printers for industrial use: CMYK roll labels, water and UV resistant. Afinia L901, X350, DC350. Free demo.',
    },
  },
  'labbratura': {
    seo: {
      title: 'Soluzioni Labbratura Libri e Book Edge Printing | Print Solution',
      description: 'Macchine per labbratura libri e stampa bordi: colora e personalizza i tagli dei libri con stampa digitale ad alta risoluzione.',
      keywords: ['labbratura libri', 'book edge printing', 'stampa bordi libri', 'personalizzazione libri', 'labbratura digitale'],
    },
    seo_en: {
      title: 'Book Edge Printing Solutions | Print Solution',
      description: 'Book edge printing machines: digitally print and customize book edges with high-resolution digital printing.',
    },
  },
};

// ── Main ─────────────────────────────────────────────────────────────────────

async function updateProductsSEO() {
  console.log('\n📦 Aggiornamento SEO prodotti...\n');

  const products = await client.fetch(
    `*[_type == "product" && slug.current in $slugs]{ _id, name, "slug": slug.current, seo, seo_en }`,
    { slugs: Object.keys(PRODUCT_SEO) }
  );

  console.log(`Trovati ${products.length} prodotti su ${Object.keys(PRODUCT_SEO).length} attesi\n`);

  for (const product of products) {
    const data = PRODUCT_SEO[product.slug];
    if (!data) continue;

    // Mergia seo esistente con i nuovi dati (non sovrascrive se già compilato meglio)
    const currentTitle = product.seo?.title || '';
    const currentDesc  = product.seo?.description || '';

    const newSeo = {
      title: currentTitle.length > 20 ? currentTitle : data.seo.title,
      description: currentDesc.length > 40 ? currentDesc : data.seo.description,
      keywords: data.seo.keywords,
    };

    const currentTitleEn = product.seo_en?.title || '';
    const currentDescEn  = product.seo_en?.description || '';

    const newSeoEn = {
      title: currentTitleEn.length > 20 ? currentTitleEn : data.seo_en.title,
      description: currentDescEn.length > 40 ? currentDescEn : data.seo_en.description,
    };

    try {
      await client.patch(product._id).set({ seo: newSeo, seo_en: newSeoEn }).commit();
      console.log(`✅ ${product.name} (${product.slug})`);
      console.log(`   Title: ${newSeo.title}`);
      console.log(`   Keywords: ${data.seo.keywords.join(', ')}\n`);
    } catch (err) {
      console.error(`❌ Errore su ${product.slug}:`, err.message);
    }

    await new Promise(r => setTimeout(r, 150));
  }
}

async function updateSolutionsSEO() {
  console.log('\n🎯 Aggiornamento SEO soluzioni...\n');

  const solutions = await client.fetch(
    `*[_type == "solution" && slug.current in $slugs]{ _id, title, "slug": slug.current, seo, seo_en }`,
    { slugs: Object.keys(SOLUTION_SEO) }
  );

  console.log(`Trovate ${solutions.length} soluzioni su ${Object.keys(SOLUTION_SEO).length} attese\n`);

  for (const solution of solutions) {
    const data = SOLUTION_SEO[solution.slug];
    if (!data) continue;

    const currentTitle = solution.seo?.title || '';
    const currentDesc  = solution.seo?.description || '';

    const newSeo = {
      title: currentTitle.length > 20 ? currentTitle : data.seo.title,
      description: currentDesc.length > 40 ? currentDesc : data.seo.description,
      keywords: data.seo.keywords,
    };

    const currentTitleEn = solution.seo_en?.title || '';
    const currentDescEn  = solution.seo_en?.description || '';

    const newSeoEn = {
      title: currentTitleEn.length > 20 ? currentTitleEn : data.seo_en.title,
      description: currentDescEn.length > 40 ? currentDescEn : data.seo_en.description,
    };

    try {
      await client.patch(solution._id).set({ seo: newSeo, seo_en: newSeoEn }).commit();
      console.log(`✅ ${solution.title} (${solution.slug})`);
      console.log(`   Title: ${newSeo.title}`);
      console.log(`   Keywords: ${data.seo.keywords.join(', ')}\n`);
    } catch (err) {
      console.error(`❌ Errore su ${solution.slug}:`, err.message);
    }

    await new Promise(r => setTimeout(r, 150));
  }
}

async function main() {
  console.log('🚀 Avvio aggiornamento SEO prodotti e soluzioni...');
  await updateProductsSEO();
  await updateSolutionsSEO();
  console.log('\n🎉 Completato!');
}

main();
