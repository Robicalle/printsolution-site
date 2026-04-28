/**
 * Script per creare il post "Case Study GFC Stampa" su Sanity CMS
 * Run: node scripts/create-gfc-post.mjs
 */

import { mutate, k } from './sanity-helpers.mjs';

// Helpers per blocchi portable text
const block = (style, text, marks = []) => ({
  _type: 'block',
  _key: k(),
  style,
  markDefs: [],
  children: [{ _type: 'span', _key: k(), text, marks }],
});

const bullet = (text, marks = []) => ({
  _type: 'block',
  _key: k(),
  style: 'normal',
  listItem: 'bullet',
  level: 1,
  markDefs: [],
  children: [{ _type: 'span', _key: k(), text, marks }],
});

const h2 = (text) => block('h2', text);
const h3 = (text) => block('h3', text);
const p = (text) => block('normal', text);
const quote = (text) => block('blockquote', text);

const body = [
  // Intro
  h2('Da Flexo a Digitale: La Storia di Successo di GFC Stampa'),
  p('Nel settore del packaging, la capacità di rispondere rapidamente alle richieste dei clienti con piccole tirature personalizzate è diventata un vantaggio competitivo fondamentale. GFC Stampa di Volla (NA) lo ha capito perfettamente, trasformando la propria produzione grazie alla stampa digitale.'),

  // Chi è
  h2('Chi è GFC Stampa'),
  p('Fondata nel 2014, GFC Stampa è un\'azienda specializzata nella produzione di packaging personalizzato, con particolare focus su shopper e packaging. Con 18 dipendenti e una solida presenza nel mercato campano, GFC offre soluzioni su misura per attività commerciali, combinando qualità dei materiali e design accattivante per valorizzare il brand dei propri clienti.'),

  // La Sfida
  h2('La Sfida: Piccole Tirature, Grandi Problemi'),
  p('Come molte aziende del settore, GFC Stampa si è trovata di fronte a una trasformazione radicale del mercato:'),
  bullet('Tirature sempre più piccole: I clienti richiedono quantità ridotte e personalizzate'),
  bullet('Costi elevati con la flexo: Le tecniche tradizionali risultano antieconomiche per piccoli lotti'),
  bullet('Tempi di consegna lunghi: La preparazione cliché e l\'avviamento macchina rallentavano le consegne'),
  bullet('Domanda di personalizzazione crescente: Impossibilità di offrire personalizzazione efficiente'),
  quote('"Il mercato richiede sempre tirature più piccole e la domanda di personalizzazione è in costante crescita. Con le tecniche tradizionali i costi erano troppo elevati e i tempi di consegna troppo lunghi. Volevamo offrire ai nostri clienti la possibilità di personalizzare shopper e packaging, cosa che prima non riuscivamo a fare in modo efficiente." — Giovanni Landolfi, GFC Stampa'),

  // La Soluzione
  h2('La Soluzione: EDM-650X Versione Due Teste'),
  p('Dopo un\'attenta valutazione, GFC Stampa ha scelto la EDM-650X versione due teste di Print Solution per la stampa digitale su packaging.'),
  h3('Perché la EDM-650X?'),
  bullet('Rapporto qualità/costo per passaggio imbattibile'),
  bullet('Larghezza fino a 600 mm — ideale per shopper e cartoni anche di grande formato'),
  bullet('Due teste di stampa HP PageWide — maggiore larghezza di stampa e flessibilità'),
  bullet('Stampa diretta senza cliché — nessun costo di avviamento'),
  bullet('Versatilità di supporti — carta kraft, cartoncino, cartone ondulato'),
  bullet('Qualità fotografica — stampa a 1200 DPI'),
  p('La EDM-650X è una stampante digitale inkjet industriale basata su tecnologia HP PageWide, che utilizza teste di stampa single-pass per eliminare completamente i costi e i tempi legati alla preparazione cliché tipici della flexografia tradizionale.'),

  // I Risultati
  h2('I Risultati: Trasformazione Produttiva'),
  p('L\'investimento nella EDM-650X ha portato risultati concreti e misurabili per GFC Stampa:'),
  bullet('✅ Riduzione drastica tempi di produzione — consegne rapide ai clienti'),
  bullet('✅ Costi ridotti per piccole tirature — stampa digitale senza minimi economici'),
  bullet('✅ Nuove opportunità di business — offerta ampliata con personalizzazione on-demand'),
  bullet('✅ Flessibilità produttiva — capacità di rispondere rapidamente alla domanda'),
  bullet('✅ Qualità fotografica — stampa a 1200 DPI anche su piccoli formati'),
  quote('"Ci ha sorpreso positivamente la qualità di stampa anche su piccoli formati e materiali diversi, come shopper e packaging. La semplicità d\'uso della macchina ci ha permesso di integrare velocemente la produzione interna senza complicazioni." — Giovanni Landolfi, GFC Stampa'),

  // Il Valore della Personalizzazione
  h2('Il Valore della Personalizzazione'),
  p('La stampa digitale ha aperto a GFC Stampa un mercato completamente nuovo: la personalizzazione su piccole tirature. Le attività commerciali possono ora ordinare shopper e packaging personalizzati anche per 100-200 pezzi, un servizio che prima era economicamente impossibile da offrire.'),
  p('Questo significa:'),
  bullet('Maggior valore per il cliente finale — packaging che valorizza il brand'),
  bullet('Differenziazione competitiva — servizio che pochi competitor offrono'),
  bullet('Margini più elevati — personalizzazione premium pricing'),
  bullet('Fidelizzazione clienti — servizio su misura crea loyalty'),

  // Il Parere
  h2('Il Parere di GFC Stampa'),
  quote('"Assolutamente sì. Print Solution ci ha fornito una macchina affidabile, facile da usare e con un\'ottima assistenza, permettendoci di offrire ai nostri clienti soluzioni di packaging personalizzate e di alta qualità. La consigliamo senza dubbio a chiunque voglia innovare la propria produzione e rispondere rapidamente alle esigenze del mercato." — Giovanni Landolfi, GFC Stampa'),

  // CTA finale
  h2('La Vostra Azienda è Pronta per il Digitale?'),
  p('La storia di GFC Stampa dimostra come la stampa digitale non sia solo una tecnologia, ma un vero abilitatore di business. Se la vostra azienda riceve richieste di piccole tirature che non riuscite a soddisfare economicamente, vuole offrire personalizzazione ai clienti, deve ridurre i tempi di consegna o cerca maggiore flessibilità produttiva, allora la stampa digitale potrebbe essere la soluzione che stavate cercando.'),
  p('Scoprite di più sulla EDM-650X e richiedete una demo presso i nostri showroom di Milano.'),
];

const doc = {
  _type: 'post',
  _id: 'post-gfc-stampa-edm650x',
  title: 'Come GFC Stampa ha Trasformato la Produzione di Packaging Personalizzato con la Stampa Digitale',
  slug: { _type: 'slug', current: 'come-gfc-stampa-ha-trasformato-packaging-personalizzato-stampa-digitale' },
  author: 'Print Solution',
  category: 'packaging',
  publishedAt: '2026-04-10T10:00:00.000Z',
  excerpt: 'Scopri come GFC Stampa di Napoli ha ridotto costi e tempi di produzione per packaging personalizzato grazie alla EDM-650X. Case study completo.',
  body,
  seo: {
    title: 'Case Study GFC Stampa: Packaging Digitale con EDM-650X',
    description: 'Scopri come GFC Stampa di Napoli ha ridotto costi e tempi di produzione per packaging personalizzato grazie alla EDM-650X. Case study completo.',
  },
};

async function run() {
  console.log('📝 Creazione post "Case Study GFC Stampa"...');
  try {
    await mutate([{ createOrReplace: doc }]);
    console.log('✅ Post creato con successo!');
    console.log('   ID:', doc._id);
    console.log('   Slug:', doc.slug.current);
    console.log('\n⚠️  Ricordati di:');
    console.log('   1. Aprire Sanity Studio → Blog → trovare il post');
    console.log('   2. Aggiungere l\'immagine di copertina');
    console.log('   3. Pubblicare il documento (pulsante "Publish")');
  } catch (err) {
    console.error('❌ Errore:', err.message);
    process.exit(1);
  }
}

run();
