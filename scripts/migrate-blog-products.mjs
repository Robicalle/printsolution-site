/**
 * Migration script: popola i post del blog con relatedProducts e productMention inline.
 *
 * Uso:
 *   node scripts/migrate-blog-products.mjs
 *
 * Il token usato è SANITY_API_READ_TOKEN (se ha permessi di scrittura)
 * oppure SANITY_API_WRITE_TOKEN se definito nel .env.local
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Carica .env.local
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

// ── Catalogo prodotti ────────────────────────────────────────────────────────
const P = {
  ab2500: {
    name: 'Anypack AB2500',
    desc: 'Macchina automatica per scatole su misura in cartone ondulato on-demand',
    desc_en: 'Automatic machine for on-demand custom corrugated cardboard boxes',
    href: '/prodotti/ab2500',
    image: '/images/products/ab2500-nobg.png',
  },
  greenboxEvo: {
    name: 'GreenBox EVO',
    desc: 'Stampante single-pass per packaging in cartone ondulato',
    desc_en: 'Single-pass inkjet printer for corrugated cardboard packaging',
    href: '/prodotti/greenbox-evo',
    image: '/images/products/greenbox-evo-site-nobg.png',
  },
  edm650x: {
    name: 'EDM 650X',
    desc: 'Stampante inkjet single-pass grande formato per packaging industriale',
    desc_en: 'Large format single-pass inkjet printer for industrial packaging',
    href: '/prodotti/edm-650x',
    image: '/images/products/edm-650x-2hd-nobg-v4.png',
  },
  aurumpress: {
    name: 'AurumPress',
    desc: 'Stampante hot foil per packaging premium e finiture metalliche',
    desc_en: 'Hot foil stamping machine for premium packaging and metallic finishes',
    href: '/prodotti/aurumpress',
    image: '/images/products/aurumpress-nobg.png',
  },
  afiniaL901: {
    name: 'Afinia L901',
    desc: 'Stampante per etichette a colori Memjet 1600 dpi ad alta velocità',
    desc_en: 'High-speed Memjet 1600 dpi color label printer',
    href: '/prodotti/afinia-l901',
    image: '/images/products/afinia-l901.png',
  },
  afiniaX350: {
    name: 'Afinia X350',
    desc: 'Stampante etichette industriale a pigmento, 45 m/min resistente acqua',
    desc_en: 'Industrial pigment label printer, 45 m/min, water-resistant',
    href: '/prodotti/afinia-x350',
    image: '/images/products/afinia-x350-full.png',
  },
  afiniaDC350: {
    name: 'Afinia DC350',
    desc: 'Stampante per etichette a colori con finitura UV integrata',
    desc_en: 'Color label printer with integrated UV finishing',
    href: '/prodotti/afinia-dc350',
    image: '/images/products/afinia-dc350.png',
  },
  packprinterUV: {
    name: 'PackPrinter UV',
    desc: 'Stampante inkjet UV per packaging e superfici rigide',
    desc_en: 'UV inkjet printer for packaging and rigid surfaces',
    href: '/prodotti/packprinter-uv',
    image: '/images/products/packprinter-uv-front-nobg.png',
  },
  robotjet: {
    name: 'RobotJet',
    desc: 'Sistema inkjet robotizzato per stampa su packaging di ogni formato',
    desc_en: 'Robotic inkjet system for printing on packaging of any format',
    href: '/prodotti/robotjet',
    image: '/images/products/robotjet.png',
  },
};

// ── Mappatura post → prodotti correlati ─────────────────────────────────────
// Massimo 3 prodotti per post. Il primo verrà usato anche come productMention inline.
const POST_PRODUCTS = {
  'automatizzare-produzione-scatole':                             [P.ab2500, P.greenboxEvo, P.edm650x],
  'box-maker-produzione-automatica-scatole':                      [P.ab2500, P.greenboxEvo, P.edm650x],
  'box-maker-vs-fornitore-risparmio-reale':                       [P.ab2500, P.greenboxEvo, P.edm650x],
  'come-ridurre-costi-packaging':                                 [P.ab2500, P.greenboxEvo, P.edm650x],
  'come-scegliere-stampante-etichette-colori':                    [P.afiniaL901, P.afiniaX350, P.afiniaDC350],
  'etichette-adesive-materiali-finiture':                         [P.afiniaL901, P.afiniaX350, P.afiniaDC350],
  'hot-foil-stamping-cose-quando-usarlo':                         [P.aurumpress, P.afiniaX350],
  'packaging-ecommerce-costi-reali':                              [P.ab2500, P.greenboxEvo, P.edm650x],
  'packaging-personalizzato-vantaggi-pmi':                        [P.greenboxEvo, P.edm650x, P.packprinterUV],
  'stampa-cartone-ondulato-guida-completa':                       [P.greenboxEvo, P.edm650x, P.packprinterUV],
  'stampa-digitale-cartone-ondulato-vs-flessografia':             [P.greenboxEvo, P.edm650x, P.packprinterUV],
  'stampa-digitale-vs-offset-piccoli-lotti':                      [P.greenboxEvo, P.edm650x, P.packprinterUV],
  'stampante-etichette-colori-bobina-guida':                      [P.afiniaL901, P.afiniaX350, P.afiniaDC350],
  'stampante-inkjet-industriale-come-scegliere':                  [P.greenboxEvo, P.edm650x, P.robotjet],
  'tendenze-packaging-2026':                                      [P.greenboxEvo, P.edm650x, P.ab2500],
  'come-gfc-stampa-ha-trasformato-packaging-personalizzato-stampa-digitale': [P.edm650x, P.greenboxEvo],
};

// ── Helper: genera _key univoco ──────────────────────────────────────────────
function key(prefix = 'k') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
}

// ── Helper: inserisce productMention dopo il 5° blocco di testo ─────────────
function insertProductMention(body, product, lang = 'it') {
  if (!body || !Array.isArray(body) || !product) return body;

  const mention = {
    _type: 'productMention',
    _key: key('pm'),
    name: product.name,
    desc: product.desc,
    desc_en: product.desc_en,
    href: product.href,
    image: product.image,
  };

  // Trova la posizione: dopo il 5° blocco normale (paragrafo/h2/h3)
  let normalBlocks = 0;
  let insertAt = -1;
  for (let i = 0; i < body.length; i++) {
    const block = body[i];
    if (block._type === 'block') {
      normalBlocks++;
      if (normalBlocks === 5) {
        insertAt = i + 1;
        break;
      }
    }
  }

  // Se l'articolo è troppo corto, inserisci a metà
  if (insertAt === -1) {
    insertAt = Math.floor(body.length / 2);
  }

  // Controlla che non ci sia già un productMention vicino
  const nearby = body.slice(Math.max(0, insertAt - 2), insertAt + 3);
  if (nearby.some(b => b._type === 'productMention')) {
    return body; // già presente, non duplicare
  }

  const result = [...body];
  result.splice(insertAt, 0, mention);
  return result;
}

// ── Migrazione principale ────────────────────────────────────────────────────
async function migrate() {
  console.log('🚀 Avvio migrazione blog products...\n');

  // Fetch tutti i post con body
  let posts;
  try {
    posts = await client.fetch(
      `*[_type == "post"]{ _id, "slug": slug.current, body, body_en, relatedProducts }`
    );
  } catch (err) {
    console.error('❌ Errore fetch posts:', err.message);
    process.exit(1);
  }

  console.log(`📋 Trovati ${posts.length} post\n`);

  let updated = 0;
  let skipped = 0;

  for (const post of posts) {
    const slug = post.slug;
    const products = POST_PRODUCTS[slug];

    if (!products?.length) {
      console.log(`⏭  Skip (no mapping): ${slug}`);
      skipped++;
      continue;
    }

    const relatedProducts = products.slice(0, 3);
    const primaryProduct = products[0];

    // Inserisce productMention nel body IT e EN
    const patchedBody   = insertProductMention(post.body,    primaryProduct, 'it');
    const patchedBodyEn = insertProductMention(post.body_en, primaryProduct, 'en');

    try {
      const patch = client.patch(post._id).set({ relatedProducts });

      if (patchedBody !== post.body)       patch.set({ body: patchedBody });
      if (patchedBodyEn !== post.body_en)  patch.set({ body_en: patchedBodyEn });

      await patch.commit();
      console.log(`✅ Aggiornato: ${slug} (${relatedProducts.length} prodotti)`);
      updated++;
    } catch (err) {
      console.error(`❌ Errore su ${slug}:`, err.message);
    }

    // Rate limiting gentile
    await new Promise(r => setTimeout(r, 150));
  }

  console.log(`\n🎉 Migrazione completata: ${updated} aggiornati, ${skipped} saltati`);
}

migrate();
