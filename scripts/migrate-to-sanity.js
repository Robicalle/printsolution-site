#!/usr/bin/env node
/**
 * Migration script: generates NDJSON and imports to Sanity
 * Run: node scripts/migrate-to-sanity.js
 */
const fs = require('fs');
const path = require('path');

// Helper: create Portable Text block from plain text paragraphs
function toPortableText(paragraphs) {
  if (!paragraphs || paragraphs.length === 0) return [];
  return paragraphs.map((text, i) => ({
    _type: 'block',
    _key: `block${i}`,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `span${i}`, text, marks: [] }],
  }));
}

function toPortableTextWithHeadings(sections) {
  const blocks = [];
  let i = 0;
  for (const s of sections) {
    if (s.heading) {
      blocks.push({
        _type: 'block',
        _key: `block${i++}`,
        style: 'h2',
        markDefs: [],
        children: [{ _type: 'span', _key: `span${i}`, text: s.heading, marks: [] }],
      });
    }
    if (s.text) {
      const paras = Array.isArray(s.text) ? s.text : [s.text];
      for (const p of paras) {
        blocks.push({
          _type: 'block',
          _key: `block${i++}`,
          style: 'normal',
          markDefs: [],
          children: [{ _type: 'span', _key: `span${i}`, text: p, marks: [] }],
        });
      }
    }
    if (s.items) {
      for (const item of s.items) {
        blocks.push({
          _type: 'block',
          _key: `block${i++}`,
          style: 'normal',
          listItem: 'bullet',
          level: 1,
          markDefs: [],
          children: [{ _type: 'span', _key: `span${i}`, text: item, marks: [] }],
        });
      }
    }
  }
  return blocks;
}

const docs = [];

// ============================================================
// 1. PRODUCTS
// ============================================================
const products = [
  {
    _id: 'product-greenbox-evo',
    name: 'GreenBox EVO',
    slug: 'greenbox-evo',
    category: 'stampanti-packaging',
    descriptionText: [
      'Stampante digitale inkjet single-pass CMYK per cartone, carta e juta. L\'entry point ideale nel mondo della stampa digitale su packaging.',
      'La GreenBox EVO è una stampante inkjet single-pass progettata per chi vuole entrare nel mercato della stampa digitale su packaging con un investimento accessibile ma senza rinunciare alla qualità. Dotata di testina HP Pagewide da 30 cm, raggiunge velocità fino a 30 metri al minuto con risoluzione 1200×1200 dpi.',
      'Gli inchiostri pigmentati a base acqua sono privi di solventi, inodori e garantiscono un\'eccellente resistenza a sfregamento, acqua e agenti atmosferici. Sono disponibili in taniche da 3 litri per colore, riducendo i costi operativi e semplificando la manutenzione.',
      'Il piano aspirato con pompa a vuoto assicura il perfetto ancoraggio del supporto durante la stampa. L\'alimentatore automatico opzionale velocizza ulteriormente la produzione. Il software RIP Flexprint è incluso, con display digitale integrato per il controllo diretto della macchina.',
    ],
    specs: [
      { label: 'Tecnologia', value: 'Inkjet single-pass CMYK' },
      { label: 'Testina di stampa', value: 'HP Pagewide, 30 cm' },
      { label: 'Risoluzione', value: '1200 × 1200 dpi' },
      { label: 'Velocità di stampa', value: 'Fino a 30 m/min' },
      { label: 'Larghezza stampa', value: 'Fino a 30 cm' },
      { label: 'Larghezza supporto', value: 'Fino a 80 cm' },
      { label: 'Spessore max supporto', value: 'Fino a 15 cm' },
      { label: 'Inchiostri', value: 'Pigmentati a base acqua, taniche 3L/colore' },
      { label: 'Piano', value: 'Aspirato con pompa a vuoto' },
      { label: 'Software RIP', value: 'Flexprint incluso' },
      { label: 'Display', value: 'Digitale integrato' },
      { label: 'Alimentatore', value: 'Automatico opzionale con pompa a vuoto' },
      { label: 'Alimentazione', value: '230V AC monofase' },
    ],
    seo: {
      title: 'GreenBox EVO - Stampante Single-Pass',
      description: 'GreenBox EVO: stampante single-pass per packaging. Stampa CMYK diretta su cartone e carta, 30 m/min, inchiostri eco. Print Solution',
    },
  },
  {
    _id: 'product-edm-650x',
    name: 'EDM-650X',
    slug: 'edm-650x',
    category: 'stampanti-packaging',
    descriptionText: [
      'Stampante digitale inkjet single-pass per carta e cartone a fogli stesi. Grande formato, velocità industriale, inchiostri a base acqua CMYK.',
      'La EDM-650X è la soluzione professionale per la stampa digitale inkjet su carta e cartone a fogli stesi. Progettata per volumi industriali, combina la tecnologia single-pass con teste di stampa HP di ultima generazione per garantire velocità e qualità senza precedenti nel settore.',
      'Disponibile in 6 configurazioni diverse, da 2 a 6 teste di stampa HP da 30 cm ciascuna, la EDM-650X si adatta perfettamente alle esigenze di ogni azienda. La larghezza di stampa varia da 60 a 180 cm, con un passaggio carta che può raggiungere i 250 cm.',
      'Gli inchiostri a base acqua CMYK garantiscono stampe di alta qualità con colori vividi e resistenti. Il piano aspirato e il caricatore automatico opzionale completano una macchina pensata per la produzione continua ad alta efficienza.',
    ],
    specs: [
      { label: 'Tecnologia', value: 'Inkjet single-pass CMYK' },
      { label: 'Teste di stampa', value: 'Da 2 a 6 teste HP (30 cm ciascuna)' },
      { label: 'Risoluzione', value: '1200 × 1200 dpi' },
      { label: 'Velocità di stampa', value: 'Fino a 30 m/min' },
      { label: 'Larghezza stampa', value: 'Da 60 a 180 cm' },
      { label: 'Passaggio carta', value: 'Da 120 a 250 cm' },
      { label: 'Modelli disponibili', value: '6 configurazioni' },
      { label: 'Inchiostri', value: 'A base acqua CMYK, taniche 4L/colore' },
      { label: 'Piano', value: 'Aspirato con pompa a vuoto' },
      { label: 'Software RIP', value: 'Incluso' },
      { label: 'Alimentatore', value: 'Caricatore automatico opzionale' },
      { label: 'Opzioni', value: 'Stampa bobina a bobina' },
    ],
    seo: {
      title: 'EDM-650X - Stampante per Cartone Ondulato',
      description: 'EDM-650X: stampante inkjet single-pass per cartone ondulato. Da 2 a 6 teste HP, fino a 30 m/min, 1200 dpi. Print Solution',
    },
  },
  {
    _id: 'product-ab2500',
    name: 'Anypack AB2500',
    slug: 'ab2500',
    category: 'stampanti-packaging',
    descriptionText: [
      'Box maker automatico all-in-one per taglio, scanalatura, cordonatura e incollaggio di scatole in cartone ondulato. 500-600 scatole/ora.',
      'L\'Anypack AB2500 è una macchina completamente automatica che esegue taglio, scanalatura, cordonatura, rifilatura, fustellatura, punzonatura maniglie e incollaggio in un\'unica operazione. Progettata per varietà multiple e piccoli ordini.',
      'Cambio formato in soli 10 secondi, con oltre 100 modelli Fefco precaricati e 20.000 record memorizzabili. Lavora con cartone ondulato da 1 a 7 mm di spessore.',
      'Sistema di incollaggio a caldo e a freddo per adattarsi a ogni tipo di cartone e applicazione. Un solo operatore necessario.',
    ],
    specs: [
      { label: 'Tipo macchina', value: 'Box maker automatico all-in-one' },
      { label: 'Operazioni', value: 'Taglio, scanalatura, cordonatura, incollaggio' },
      { label: 'Produttività', value: '500-600 scatole/ora' },
      { label: 'Cambio formato', value: '10 secondi' },
      { label: 'Spessore cartone', value: 'Da 1 a 7 mm' },
      { label: 'Incollaggio', value: 'A caldo e a freddo' },
      { label: 'Automazione', value: 'Completamente automatico' },
    ],
    seo: {
      title: 'Anypack AB2500 - Box Maker Automatico',
      description: 'Anypack AB2500: box maker automatico per scatole in cartone ondulato. 500-600 pezzi/ora, cambio formato in 10 sec. Print Solution',
    },
  },
  {
    _id: 'product-packprinter-uv',
    name: 'PackPrinter UV',
    slug: 'packprinter-uv',
    category: 'stampanti-packaging',
    descriptionText: [
      'Stampante digitale UV single-pass CMYK+Bianco fino a 50 m/min. Stampa su PVC, vetro, cartone, legno, ceramica e materiali sintetici. 9 configurazioni disponibili.',
      'La PackPrinter UV è una stampante industriale UV single-pass che stampa su praticamente qualsiasi materiale: PVC, ABS, acrilico, cartone, legno, vetro, ceramica, metallo, gommapiuma e similpelle.',
      'Con 9 modelli disponibili e luce di stampa da 12 a 118 cm, si adatta a ogni esigenza produttiva. Testine S3200 U3 con 3200 ugelli garantiscono qualità e velocità.',
    ],
    specs: [
      { label: 'Modelli', value: '9 modelli con luce di stampa variabile' },
      { label: 'Luce di stampa', value: 'Da 12 cm a 118 cm' },
      { label: 'Risoluzione', value: '600 × 1200 dpi' },
      { label: 'Velocità di stampa', value: 'Fino a 50 metri al minuto' },
      { label: 'Modalità di stampa', value: '4 colori + Bianco (CMYKW)' },
      { label: 'Tipo di inchiostri', value: 'UV ad alte prestazioni' },
      { label: 'Testine', value: 'S3200 U3 - 3200 ugelli' },
      { label: 'Supporti stampabili', value: 'PVC, ABS, acrilico, cartone, legno, vetro, ceramica, metallo, gommapiuma, similpelle' },
    ],
    seo: {
      title: 'PackPrinter UV - Stampante UV Single-Pass',
      description: 'PackPrinter UV: stampante UV single-pass CMYK+Bianco fino a 50 m/min. Stampa su PVC, vetro, cartone, legno. Print Solution',
    },
  },
  {
    _id: 'product-afinia-dc350',
    name: 'Afinia DC250 / DC350',
    slug: 'afinia-dc350',
    category: 'finishing',
    descriptionText: [
      'Fustellatori semi-rotativi per etichette con laminazione, fustellatura con fustelle flessibili, rimozione sfrido e slitting.',
      'La serie DC250/DC350 offre fustellatura semi-rotativa fino a 30 m/min con laminazione integrata, rimozione sfrido automatica e slitting. Il DC250 gestisce nastri fino a 250 mm, il DC350 fino a 350 mm.',
    ],
    specs: [
      { label: 'Velocità semi-rotativa', value: 'Fino a 30 m/min' },
      { label: 'Larghezza max nastro (DC250)', value: '250 mm' },
      { label: 'Larghezza max nastro (DC350)', value: '350 mm' },
      { label: 'Laminazione', value: 'Sì — self-wound e con liner' },
      { label: 'Modulo vernice UV', value: 'Sì' },
      { label: 'Fustelle', value: 'Flessibili in acciaio' },
      { label: 'Lame slitting', value: 'Fino a 12 (DC250) / 15 (DC350)' },
    ],
    seo: {
      title: 'Afinia DC250 / DC350 — Fustellatori Semi-Rotativi per Etichette',
      description: 'Afinia DC350: fustellatore semi-rotativo per etichette con laminazione, slitting e riavvolgimento. Fino a 30 m/min. Print Solution',
    },
  },
  {
    _id: 'product-afinia-dlf',
    name: 'Afinia DLF-220L / DLF-350L',
    slug: 'afinia-dlf',
    category: 'finishing',
    descriptionText: [
      'Fustellatori digitali plotter per etichette: taglio di qualsiasi forma da file digitale, laminazione in linea, rimozione sfrido e slitting.',
      'La serie DLF elimina la necessità di fustelle fisiche: il taglio avviene direttamente da file digitale tramite plotter. Laminazione in linea disponibile nei modelli L.',
    ],
    specs: [
      { label: 'Tecnologia di taglio', value: 'Plotter digitale (senza fustelle fisiche)' },
      { label: 'Larghezza nastro (DLF-220L)', value: '220 mm' },
      { label: 'Larghezza nastro (DLF-350L)', value: '350 mm' },
      { label: 'Laminazione in linea', value: 'Sì (modelli L)' },
      { label: 'Taglio forme', value: 'Qualsiasi forma da file digitale' },
      { label: 'Rimozione sfrido', value: 'Automatica integrata' },
      { label: 'Slitting', value: 'Integrato' },
    ],
    seo: {
      title: 'Afinia DLF-220L / DLF-350L — Fustellatori Digitali per Etichette',
      description: 'Afinia DLF: fustellatore digitale a plotter per etichette. Taglio da file, nessuna fustella fisica. Laminazione in linea. Print Solution',
    },
  },
  {
    _id: 'product-afinia-dlp2200',
    name: 'Afinia DLP-2200',
    slug: 'afinia-dlp2200',
    category: 'stampanti-etichette',
    descriptionText: [
      'Digital Label Press completa: stampa, laminazione, fustellatura, rimozione sfridi, slitting e riavvolgimento in un unico sistema.',
      'Il sistema DLP-2200 integra la stampante Afinia L901 con moduli di finitura per creare una linea completa di produzione etichette. Produce oltre 25.000 etichette 3×4 pollici all\'ora.',
    ],
    specs: [
      { label: 'Tipo sistema', value: 'Digital Label Press completa (stampa + finitura)' },
      { label: 'Stampante integrata', value: 'Afinia L901 (Memjet Waterfall)' },
      { label: 'Velocità di stampa', value: 'Da 9 a 18 m/min' },
      { label: 'Produttività', value: '25.000+ etichette 3×4 pollici all\'ora' },
      { label: 'Risoluzione', value: '1600 dpi full-color CMYKK' },
      { label: 'Larghezza stampa max', value: '216 mm' },
      { label: 'Larghezza supporto', value: '100 mm — 229 mm' },
      { label: 'Laminazione', value: 'In linea, con o senza liner' },
      { label: 'Fustelle', value: 'Acciaio flessibile, 140–360 mm' },
    ],
    seo: {
      title: 'Afinia DLP-2200 — Digital Label Press Completa',
      description: 'Afinia DLP-2200: pressa digitale per etichette completa. Stampa, laminazione, fustellatura e riavvolgimento. 25.000+ etichette/ora. Print Solution',
    },
  },
  {
    _id: 'product-afinia-l901',
    name: 'Afinia L901',
    slug: 'afinia-l901',
    category: 'stampanti-etichette',
    descriptionText: [
      'Stampante etichette a colori professionale con tecnologia Memjet Waterfall. 1600 dpi, doppio nero, testina sostituibile.',
      'La L901 utilizza la tecnologia Memjet Waterfall con testina da 216 mm in un singolo passaggio, raggiungendo risoluzioni di 1600 dpi in CMYKK (doppio nero). Testina sostituibile dall\'utente senza fermo macchina.',
    ],
    specs: [
      { label: 'Tecnologia', value: 'Memjet Waterfall Inkjet' },
      { label: 'Risoluzione', value: '1600 dpi full-color' },
      { label: 'Inchiostri', value: 'CMYKK (doppio nero)' },
      { label: 'Larghezza stampa max', value: '216 mm' },
      { label: 'Testina', value: 'Sostituibile dall\'utente' },
      { label: 'Display', value: 'Touchscreen integrato' },
      { label: 'Cartucce', value: 'Alta capacità' },
      { label: 'Modalità', value: 'Standalone o in linea con DLP-2200' },
    ],
    seo: {
      title: 'Afinia L901 - Stampante Etichette Memjet',
      description: 'Afinia L901: stampante etichette a colori professionale Memjet. 1600 dpi, CMYKK, testina sostituibile dall\'utente. Print Solution',
    },
  },
  {
    _id: 'product-afinia-lt5c',
    name: 'Afinia LT5C',
    slug: 'afinia-lt5c',
    category: 'stampanti-etichette',
    descriptionText: [
      'Stampante etichette a toner LED con resistenza immediata all\'acqua e tecnologia elettrofotografica CMYK.',
      'La LT5C utilizza la tecnologia toner LED per garantire etichette immediatamente resistenti all\'acqua, senza necessità di asciugatura. Ideale per ambienti umidi e industriali come alimentare, chimico e cosmetico.',
    ],
    specs: [
      { label: 'Tecnologia', value: 'Toner LED elettrofotografica CMYK' },
      { label: 'Risoluzione', value: '1200 × 1200 dpi' },
      { label: 'Resistenza', value: 'Immediata all\'acqua e abrasione' },
      { label: 'Asciugatura', value: 'Non necessaria (fusione toner)' },
      { label: 'Alimentazione supporto', value: 'Da rotolo' },
      { label: 'Cartucce toner', value: 'Alta resa CMYK' },
      { label: 'Fusore', value: 'Integrato per massima resistenza' },
      { label: 'Ambiente', value: 'Ideale per ambienti umidi e industriali' },
    ],
    seo: {
      title: 'Afinia LT5C — Stampante Etichette Toner LED Industriale',
      description: 'Afinia LT5C: stampante etichette a toner LED. Resistenza immediata all\'acqua, ideale per ambienti umidi e industriali. Print Solution',
    },
  },
  {
    _id: 'product-afinia-x350',
    name: 'Afinia X350',
    slug: 'afinia-x350',
    category: 'stampanti-etichette',
    descriptionText: [
      'Stampante digitale roll-to-roll ad alta velocità. Fino a 45 m/min, 1600 dpi, inchiostri pigmentati a base acqua.',
      'La X350 è la stampante per etichette più veloce della gamma Afinia, con velocità fino a 45 m/min e risoluzione 1600 dpi. Inchiostri pigmentati Memjet DuraFlex per la massima resistenza.',
    ],
    specs: [
      { label: 'Tecnologia', value: 'Inkjet pigmentato a base acqua (Memjet DuraFlex)' },
      { label: 'Velocità di stampa', value: 'Fino a 45 m/min' },
      { label: 'Risoluzione', value: '1600 dpi' },
      { label: 'Larghezza stampa max', value: '324,4 mm' },
      { label: 'Larghezza supporto', value: 'Min 50 mm — Max 350 mm' },
      { label: 'Inchiostri', value: 'Pigmentati a base acqua CMYK' },
      { label: 'Capacità inchiostro', value: '2 litri per colore — 8 litri totali' },
      { label: 'Display', value: 'Touchscreen 21 pollici' },
      { label: 'Alimentazione', value: 'Monofase 220V' },
    ],
    seo: {
      title: 'Afinia X350 — Stampante Etichette Roll-to-Roll Alta Velocità',
      description: 'Afinia X350: stampante etichette industriale ad alta velocità. Fino a 45 m/min, 1600 dpi, inchiostri pigmentati. Print Solution',
    },
  },
  {
    _id: 'product-any-002',
    name: 'Anytron ANY-002',
    slug: 'any-002',
    category: 'stampanti-etichette',
    descriptionText: [
      'Sistema completo stampa laser digitale + fustellatura per etichette on-demand. Toner resistente, 1200 dpi, 9 m/min.',
      'L\'ANY-002 integra stampa laser LED e fustellatura in un unico sistema compatto. Produce fino a 5.000 etichette in 2 ore con risoluzione 1200 dpi su carta, PP e PET.',
    ],
    specs: [
      { label: 'Motore di stampa', value: 'Laser digitale LED' },
      { label: 'Risoluzione', value: '1.200 dpi a toner' },
      { label: 'Velocità di stampa', value: 'Fino a 9 m/min' },
      { label: 'Produttività', value: 'Fino a 5.000 etichette in 2 ore' },
      { label: 'Lunghezza stampa max', value: 'Fino a 1,2 m per etichetta' },
      { label: 'Materiali supportati', value: 'Carta, PP certificato, PET' },
      { label: 'Toner', value: 'CMYK – K 11.000 pag / CMY 11.500 pag' },
      { label: 'Alimentazione', value: '220-240V, 50/60Hz' },
      { label: 'Dimensioni', value: '180 × 480 × 600 mm' },
      { label: 'Peso', value: '95 kg' },
    ],
    seo: {
      title: 'Anytron ANY-002 – Stampa + Fustella Etichette',
      description: 'Anytron ANY-002: sistema stampa laser + fustellatura per etichette on-demand. 5.000 etichette in 2 ore, 1200 dpi. Print Solution',
    },
  },
  {
    _id: 'product-any-press',
    name: 'Any-Press',
    slug: 'any-press',
    category: 'stampanti-etichette',
    descriptionText: [
      'Stampante laser LED a 5 colori (CMYK+Bianco) per etichette e packaging flessibile. 1200 dpi, laminazione integrata.',
      'L\'Any-Press è una stampante laser LED a 5 colori con toner bianco per stampa su kraft e trasparenti. Velocità 5 m/min, larghezza stampa max 324 mm. Laminatore opzionale integrato.',
    ],
    specs: [
      { label: 'Motore di stampa', value: 'Laser digitale LED' },
      { label: 'Colori', value: '5 colori – CMYKW (incluso bianco)' },
      { label: 'Risoluzione', value: '1.200 × 1.200 dpi' },
      { label: 'Velocità di stampa', value: '5 m/min' },
      { label: 'Larghezza stampa max', value: '324 mm' },
      { label: 'Larghezza supporto max', value: '330 mm' },
      { label: 'Diametro max rotolo', value: '350 mm' },
      { label: 'Laminatore', value: 'Opzionale – a freddo o a caldo' },
      { label: 'Software', value: 'ANY-FLOW' },
      { label: 'Dimensioni', value: 'L 1350 × P 1090 × H 1615 mm' },
    ],
    seo: {
      title: 'Any-Press – Stampante Laser LED 5 Colori CMYK+Bianco',
      description: 'Any-Press: stampante laser LED 5 colori CMYK+Bianco per etichette e packaging flessibile. 1200 dpi. Print Solution',
    },
  },
  {
    _id: 'product-aurumpress',
    name: 'AurumPress',
    slug: 'aurumpress',
    category: 'stampanti-packaging',
    descriptionText: [
      'Stampatrice termica per foil metallizzati, argentati, colori pastello e trasparente lucido. Stampa a caldo digitale per nobilitazione packaging.',
      'L\'AurumPress è una stampatrice termica ad impressione idraulica per hot foil stamping. Permette di applicare foil oro, argento, metallizzati, colori pastello, olografici e trasparente lucido su cartone, carta, pelle e legno.',
    ],
    specs: [
      { label: 'Tecnologia', value: 'Stampa termica ad impressione idraulica' },
      { label: 'Tipo stampa', value: 'Hot foil stamping' },
      { label: 'Materiali foil', value: 'Argentati, metallizzati, colori pastello, trasparente lucido' },
      { label: 'Applicazioni', value: 'Loghi, scritte, decorazioni su packaging' },
      { label: 'Supporti', value: 'Cartone, carta, packaging rigido' },
    ],
    seo: {
      title: 'AurumPress – Stampa a Caldo Digitale per Packaging',
      description: 'AurumPress: stampa a caldo digitale con foil oro, argento e olografici. Nobilitazione on-demand per packaging di lusso. Print Solution',
    },
  },
  {
    _id: 'product-greenbox-print-book',
    name: 'GreenBox Print Book',
    slug: 'greenbox-print-book',
    category: 'labbratura',
    descriptionText: [
      'Soluzione digitale per la labbratura dei libri basata su GreenBox 2. Stampa inkjet HP PageWide single-pass, inchiostri a base acqua, 30 m/min, 1200x1200 dpi. Industria 4.0 ready.',
      'Il GreenBox Print Book è pensato per la personalizzazione del bordo delle pagine di libri, quaderni, agende e block notes. Utilizza la tecnologia HP PageWide single-pass con inchiostri pigmentati a base acqua.',
    ],
    specs: [
      { label: 'Sistema di stampa', value: 'Getto di inchiostro ultraveloce HP PageWide' },
      { label: 'Tipo di inchiostro', value: 'Base acqua pigmentato, 4 cartucce CMYK' },
      { label: 'Testina di stampa', value: 'HP single-pass di ultima generazione' },
      { label: 'Risoluzione di stampa', value: 'Fino a 1200×1200 dpi' },
      { label: 'Velocità di stampa', value: 'Fino a 30 m/min' },
      { label: 'Area di stampa', value: '297 mm (passaggio singolo), larghezza max 90 cm' },
      { label: 'Passaggio carta/cartone', value: 'Spessore max 11 cm, larghezza max 100 cm' },
      { label: 'Altezza escursione verticale', value: 'Fino a 30 cm di spessore' },
      { label: 'Dimensioni', value: '210 × 160 × 140 cm' },
      { label: 'Peso', value: '120 kg' },
    ],
    seo: {
      title: 'GreenBox Print Book — Labbratura Digitale Libri',
      description: 'GreenBox Print Book: stampante per labbratura libri con tecnologia HP PageWide. Single-pass, 30 m/min, 1200 dpi. Print Solution',
    },
  },
  {
    _id: 'product-robotjet',
    name: 'Robotjet Book Edge Printer',
    slug: 'robotjet',
    category: 'labbratura',
    descriptionText: [
      'Stampante digitale per labbratura e personalizzazione del bordo delle pagine di libri, quaderni, agende e block notes. 400 pezzi/ora, CMYK single-pass, 1200 dpi.',
      'Il Robotjet è una stampante automatica per la labbratura dei libri con capacità produttiva di circa 400 pezzi/ora (3200 pezzi/giorno). Utilizza tecnologia inkjet a base acqua pigmentata con teste HP A3 / Epson I3200.',
    ],
    specs: [
      { label: 'Capacità produttiva', value: 'Circa 400 pezzi/ora, 3200 pezzi/giorno' },
      { label: 'Risoluzione di stampa', value: '1200 dpi' },
      { label: 'Colori', value: '4 colori CMYK' },
      { label: 'Tecnologia di stampa', value: 'Inkjet a base acqua pigmentata' },
      { label: 'Teste di stampa', value: 'HP A3 / Epson I3200' },
      { label: 'Altezza libri', value: 'Da 90 a 350 mm' },
      { label: 'Larghezza di stampa', value: 'Da 5 a 218 mm' },
      { label: 'Velocità di stampa', value: '0–15 m/min (regolabile)' },
      { label: 'Dimensioni', value: '190 × 120 × 165 cm' },
      { label: 'Peso', value: '450 kg' },
    ],
    seo: {
      title: 'Robotjet Book Edge Printer — Stampante per Labbratura Libri',
      description: 'Robotjet: stampante per labbratura libri, quaderni e agende. 400 pezzi/ora, CMYK inkjet 1200 dpi. Print Solution',
    },
  },
];

// Generate product documents
for (const p of products) {
  docs.push({
    _id: p._id,
    _type: 'product',
    name: p.name,
    slug: { _type: 'slug', current: p.slug },
    description: toPortableText(p.descriptionText),
    specs: p.specs.map((s, i) => ({ _key: `spec${i}`, _type: 'object', label: s.label, value: s.value })),
    category: p.category,
    seo: p.seo,
  });
}

// ============================================================
// 2. BLOG POSTS
// ============================================================
const posts = [
  {
    _id: 'post-come-scegliere-stampante-etichette-colori',
    title: 'Come Scegliere una Stampante per Etichette a Colori',
    slug: 'come-scegliere-stampante-etichette-colori',
    category: 'etichette',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-15T10:00:00Z',
    excerpt: 'Guida pratica alle tecnologie, criteri di valutazione e modelli consigliati per ogni esigenza: inkjet, pigmento, toner e industriale.',
    seo: {
      title: 'Come Scegliere una Stampante per Etichette a Colori',
      description: 'Guida pratica alla scelta della stampante per etichette a colori: tecnologie, criteri di valutazione e modelli consigliati per ogni esigenza produttiva.',
    },
    body: [
      { heading: null, text: 'Scegliere la stampante per etichette a colori giusta è una decisione strategica per qualsiasi azienda che produce beni di consumo, alimenti, cosmetici o prodotti chimici. Un\'etichetta di qualità comunica professionalità, rispetta le normative e differenzia il prodotto sullo scaffale.' },
      { heading: '1. Le Tecnologie Disponibili', text: 'Le principali tecnologie per la stampa di etichette a colori sono: inkjet a base acqua (Memjet), inkjet pigmentato, toner LED elettrofotografico e laser digitale.' },
      { heading: '2. Criteri di Scelta', text: ['La scelta dipende da volume di produzione, resistenza richiesta (acqua, UV, abrasione), materiali supportati, costo per etichetta e velocità necessaria.'] },
      { heading: '3. Modelli Consigliati', text: 'Per volumi bassi-medi: Afinia L901 (Memjet, 1600 dpi). Per resistenza all\'acqua: Afinia LT5C (toner LED). Per alta velocità: Afinia X350 (45 m/min). Per stampa+fustella: Anytron ANY-002.' },
    ],
  },
  {
    _id: 'post-packaging-personalizzato-vantaggi-pmi',
    title: 'Packaging Personalizzato: Vantaggi per le PMI',
    slug: 'packaging-personalizzato-vantaggi-pmi',
    category: 'packaging',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-15T10:00:00Z',
    excerpt: 'Perché il packaging personalizzato è un investimento strategico per le PMI: brand identity, fidelizzazione e produzione on-demand.',
    seo: {
      title: 'Packaging Personalizzato: Vantaggi per le PMI',
      description: 'Perché il packaging personalizzato è un investimento strategico per le PMI: brand identity, fidelizzazione e produzione on-demand.',
    },
    body: [
      { heading: null, text: 'Il packaging personalizzato non è più un lusso riservato alle grandi aziende. Grazie alla stampa digitale, anche le PMI possono personalizzare scatole, etichette e shopper con investimenti contenuti e tirature minime.' },
      { heading: 'Brand Identity', text: 'Un packaging personalizzato rafforza l\'identità del brand e comunica i valori aziendali al consumatore finale.' },
      { heading: 'Produzione On-Demand', text: 'Con le stampanti digitali come GreenBox EVO e EDM-650X, è possibile produrre packaging personalizzato anche per lotti minimi, eliminando scorte e sprechi.' },
    ],
  },
  {
    _id: 'post-stampa-digitale-vs-offset-piccoli-lotti',
    title: 'Stampa Digitale vs Offset per Piccoli Lotti',
    slug: 'stampa-digitale-vs-offset-piccoli-lotti',
    category: 'tecnologia',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-15T10:00:00Z',
    excerpt: 'Confronto tra stampa digitale e offset: quando conviene il digitale, vantaggi economici e flessibilità per packaging ed etichette.',
    seo: {
      title: 'Stampa Digitale vs Offset per Piccoli Lotti',
      description: 'Confronto tra stampa digitale e offset: quando conviene il digitale, vantaggi economici e flessibilità per packaging ed etichette.',
    },
    body: [
      { heading: null, text: 'Quando il volume di produzione è basso o medio, la stampa digitale supera l\'offset per convenienza economica e flessibilità. Nessun costo di avviamento, dati variabili e cambio lavoro istantaneo.' },
    ],
  },
  {
    _id: 'post-automatizzare-produzione-scatole',
    title: 'Come Automatizzare la Produzione di Scatole',
    slug: 'automatizzare-produzione-scatole',
    category: 'packaging',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-15T10:00:00Z',
    excerpt: 'Dalla produzione manuale all\'automazione: tecnologie, vantaggi operativi e ROI per scatolifici e aziende e-commerce.',
    seo: {
      title: 'Come Automatizzare la Produzione di Scatole',
      description: 'Dalla produzione manuale all\'automazione: tecnologie, vantaggi operativi e ROI per scatolifici e aziende e-commerce.',
    },
    body: [
      { heading: null, text: 'I box maker automatici come l\'Anypack AB2500 permettono di automatizzare l\'intero processo di produzione scatole: dal taglio all\'incollaggio, in un\'unica operazione.' },
      { heading: 'Vantaggi dell\'Automazione', text: 'Riduzione della manodopera, aumento della produttività (500-600 scatole/ora), eliminazione degli errori, cambio formato in 10 secondi.' },
    ],
  },
  {
    _id: 'post-etichette-adesive-materiali-finiture',
    title: 'Etichette Adesive: Materiali e Finiture',
    slug: 'etichette-adesive-materiali-finiture',
    category: 'etichette',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-15T10:00:00Z',
    excerpt: 'Guida completa ai materiali e finiture per etichette adesive: carta, polipropilene, poliestere, laminazione e verniciatura.',
    seo: {
      title: 'Etichette Adesive: Materiali e Finiture',
      description: 'Guida completa ai materiali e finiture per etichette adesive: carta, polipropilene, poliestere, laminazione e verniciatura.',
    },
    body: [
      { heading: null, text: 'La scelta del materiale e della finitura dell\'etichetta influenza la resistenza, l\'aspetto estetico e il costo finale del prodotto.' },
      { heading: 'Materiali', text: 'Carta (opaca o lucida), polipropilene (PP), poliestere (PET), vinile. Ogni materiale ha caratteristiche specifiche di resistenza e aspetto.' },
      { heading: 'Finiture', text: 'Laminazione (opaca, lucida, soft-touch), verniciatura UV, hot foil per dettagli premium.' },
    ],
  },
  {
    _id: 'post-hot-foil-stamping-cose-quando-usarlo',
    title: 'Hot Foil Stamping: Cos\'è e Quando Usarlo',
    slug: 'hot-foil-stamping-cose-quando-usarlo',
    category: 'tecnologia',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-15T10:00:00Z',
    excerpt: 'Scopri cos\'è l\'hot foil stamping, come funziona e quando conviene usarlo per etichette e packaging premium.',
    seo: {
      title: 'Hot Foil Stamping: Cos\'è e Quando Usarlo',
      description: 'Scopri cos\'è l\'hot foil stamping, come funziona e quando conviene usarlo per etichette e packaging premium.',
    },
    body: [
      { heading: null, text: 'L\'hot foil stamping è una tecnica di nobilitazione che applica foil metallizzati (oro, argento, olografici) su packaging ed etichette tramite calore e pressione.' },
      { heading: 'Come Funziona', text: 'Un cliché riscaldato preme il foil sulla superficie del materiale, trasferendo il motivo metallizzato. Con sistemi come AurumPress, è possibile farlo on-demand anche per tirature minime.' },
    ],
  },
  {
    _id: 'post-stampa-cartone-ondulato-guida-completa',
    title: 'Stampa su Cartone Ondulato: Guida Completa',
    slug: 'stampa-cartone-ondulato-guida-completa',
    category: 'packaging',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-15T10:00:00Z',
    excerpt: 'Tecnologie disponibili, confronto tra digitale e flessografia, consigli pratici per stampare su cartone ondulato.',
    seo: {
      title: 'Stampa su Cartone Ondulato: Guida Completa',
      description: 'Tecnologie disponibili, confronto tra digitale e flessografia, consigli pratici per stampare su cartone ondulato.',
    },
    body: [
      { heading: null, text: 'La stampa su cartone ondulato è una fase fondamentale nella produzione di imballaggi. Le tecnologie disponibili includono flessografia, serigrafia, stampa digitale inkjet single-pass e offset.' },
      { heading: 'Digitale vs Flessografia', text: 'La stampa digitale elimina i costi di impianto, permette dati variabili e personalizzazione. Ideale per tirature fino a 5.000-10.000 pezzi.' },
    ],
  },
  {
    _id: 'post-come-ridurre-costi-packaging',
    title: 'Come Ridurre i Costi di Packaging',
    slug: 'come-ridurre-costi-packaging',
    category: 'packaging',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-15T10:00:00Z',
    excerpt: 'Strategie pratiche per ridurre i costi di packaging: ottimizzazione dimensioni, produzione on-demand e automazione.',
    seo: {
      title: 'Come Ridurre i Costi di Packaging',
      description: 'Strategie pratiche per ridurre i costi di packaging: ottimizzazione dimensioni, produzione on-demand e automazione.',
    },
    body: [
      { heading: null, text: 'Ridurre i costi di packaging senza sacrificare la qualità è possibile attraverso l\'ottimizzazione delle dimensioni (right-sizing), la produzione on-demand, l\'automazione dei processi e la scelta dei materiali più adatti.' },
    ],
  },
  {
    _id: 'post-tendenze-packaging-2026',
    title: 'Tendenze Packaging 2026: Cosa Aspettarsi',
    slug: 'tendenze-packaging-2026',
    category: 'news',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-15T10:00:00Z',
    excerpt: 'Le principali tendenze del packaging nel 2026: sostenibilità, personalizzazione digitale, smart packaging e automazione.',
    seo: {
      title: 'Tendenze Packaging 2026: Cosa Aspettarsi',
      description: 'Le principali tendenze del packaging nel 2026: sostenibilità, personalizzazione digitale, smart packaging, minimalismo e automazione della produzione.',
    },
    body: [
      { heading: null, text: 'Il mondo del packaging è in costante evoluzione, guidato da cambiamenti nelle abitudini dei consumatori, normative ambientali sempre più stringenti e innovazioni tecnologiche.' },
      { heading: '1. Sostenibilità al Centro', text: 'La sostenibilità non è più un\'opzione ma un requisito. Il regolamento europeo PPWR impone obiettivi ambiziosi di riciclabilità e riduzione degli imballaggi.', items: ['Monomateriali per facilitare il riciclo', 'Cartone ondulato riciclabile all\'83%', 'Eliminazione della plastica', 'Right-sizing: scatole su misura'] },
      { heading: '2. Personalizzazione di Massa', text: 'I consumatori si aspettano esperienze personalizzate. La stampa digitale permette di creare packaging unici per ogni cliente, campagna o stagione senza costi aggiuntivi di avviamento.' },
      { heading: '3. Smart Packaging e Connettività', text: 'Il packaging diventa interattivo grazie a QR code dinamici, NFC, realtà aumentata e indicatori intelligenti.' },
      { heading: '4. Minimalismo e Design Essenziale', text: 'Design puliti, tipografie essenziali e palette cromatiche ridotte comunicano autenticità e trasparenza.' },
      { heading: '5. E-Commerce Packaging', text: 'Scatole su misura, packaging frustration-free, design per l\'unboxing e sistemi di reso integrati.' },
      { heading: '6. Automazione e Industria 4.0', text: 'Box maker automatici come l\'AB2500 si integrano con i sistemi WMS per produrre la scatola giusta nel momento giusto.' },
      { heading: '7. Etichette Intelligenti e Trasparenza', text: 'I consumatori chiedono trasparenza sulla provenienza, composizione e impatto ambientale dei prodotti.' },
    ],
  },
  {
    _id: 'post-stampante-inkjet-industriale-come-scegliere',
    title: 'Stampante Inkjet Industriale: Come Scegliere',
    slug: 'stampante-inkjet-industriale-come-scegliere',
    category: 'tecnologia',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-15T10:00:00Z',
    excerpt: 'Guida alla scelta della stampante inkjet industriale: single-pass vs multi-pass, inchiostri e applicazioni per packaging.',
    seo: {
      title: 'Stampante Inkjet Industriale: Come Scegliere',
      description: 'Guida alla scelta della stampante inkjet industriale: single-pass vs multi-pass, inchiostri e applicazioni per packaging.',
    },
    body: [
      { heading: null, text: 'Le stampanti inkjet industriali si dividono in due categorie principali: single-pass e multi-pass. La scelta dipende da velocità, qualità e costo per metro quadro richiesti.' },
    ],
  },
  {
    _id: 'post-box-maker-produzione-automatica-scatole',
    title: 'Box Maker: Cos\'è e Come Funziona la Produzione Automatica di Scatole',
    slug: 'box-maker-produzione-automatica-scatole',
    category: 'packaging',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-05T10:00:00Z',
    excerpt: 'Scopri come un box maker automatico come l\'Anypack AB2500 rivoluziona la produzione di scatole in cartone ondulato.',
    seo: {
      title: 'Box Maker: Produzione Automatica di Scatole',
      description: 'Scopri come un box maker automatico come l\'Anypack AB2500 rivoluziona la produzione di scatole in cartone ondulato.',
    },
    body: [
      { heading: null, text: 'Un box maker è una macchina automatica che produce scatole in cartone ondulato partendo da fogli stesi. Esegue taglio, scanalatura, cordonatura e incollaggio in un\'unica operazione.' },
    ],
  },
  {
    _id: 'post-stampante-etichette-colori-bobina-guida',
    title: 'Stampante Etichette a Colori in Bobina: Guida alla Scelta',
    slug: 'stampante-etichette-colori-bobina-guida',
    category: 'etichette',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-03T10:00:00Z',
    excerpt: 'Come scegliere la stampante per etichette giusta tra Memjet, pigmento e toner? Confronto tra Afinia L701, L901, X350 e LT5C.',
    seo: {
      title: 'Stampante Etichette a Colori in Bobina: Guida alla Scelta',
      description: 'Come scegliere la stampante per etichette giusta tra Memjet, pigmento e toner? Confronto tra Afinia L901, X350 e LT5C.',
    },
    body: [
      { heading: null, text: 'La scelta tra le diverse stampanti per etichette in bobina dipende da diversi fattori: tecnologia di stampa, resistenza necessaria, velocità, costo per etichetta e materiali compatibili.' },
    ],
  },
  {
    _id: 'post-stampa-digitale-cartone-ondulato-vs-flessografia',
    title: 'Stampa Digitale su Cartone Ondulato: Vantaggi vs Flessografia',
    slug: 'stampa-digitale-cartone-ondulato-vs-flessografia',
    category: 'packaging',
    author: 'Print Solution S.r.l.',
    publishedAt: '2026-02-01T10:00:00Z',
    excerpt: 'Perché sempre più aziende scelgono la stampa digitale single-pass per il packaging in cartone ondulato? Analisi dei vantaggi rispetto alla flessografia tradizionale.',
    seo: {
      title: 'Stampa Digitale su Cartone Ondulato: Vantaggi vs Flessografia',
      description: 'Perché sempre più aziende scelgono la stampa digitale single-pass per il packaging in cartone ondulato?',
    },
    body: [
      { heading: null, text: 'La stampa digitale single-pass sta rivoluzionando il settore del packaging in cartone ondulato. Rispetto alla flessografia tradizionale, offre personalizzazione, zero costi di avviamento, tirature minime e time-to-market ridotto.' },
    ],
  },
];

// Generate post documents
for (const p of posts) {
  docs.push({
    _id: p._id,
    _type: 'post',
    title: p.title,
    slug: { _type: 'slug', current: p.slug },
    author: p.author,
    category: p.category,
    excerpt: p.excerpt,
    body: toPortableTextWithHeadings(p.body),
    publishedAt: p.publishedAt,
    seo: p.seo,
  });
}

// ============================================================
// 3. SOLUTIONS
// ============================================================
const solutions = [
  {
    _id: 'solution-packaging',
    title: 'Soluzioni Packaging',
    slug: 'packaging',
    category: 'packaging',
    descriptionText: [
      'Box maker automatici, stampa digitale su cartone ondulato, stampa UV e hot foil. Packaging digitale personalizzato on-demand.',
      'Dalla creazione automatica di scatole alla stampa diretta su cartone ondulato, fino alla stampa UV sulla maggior parte dei materiali: offriamo soluzioni complete per ogni esigenza di packaging.',
    ],
    seo: {
      title: 'Soluzioni Packaging On-Demand',
      description: 'Soluzioni packaging on-demand: box maker automatici, stampanti single-pass per cartone ondulato, stampa UV e hot foil. Packaging digitale personalizzato.',
    },
    productRefs: ['product-ab2500', 'product-edm-650x', 'product-greenbox-evo', 'product-packprinter-uv'],
  },
  {
    _id: 'solution-etichette',
    title: 'Stampanti Etichette Industriali',
    slug: 'etichette',
    category: 'etichette',
    descriptionText: [
      'Stampanti per etichette a colori in bobina e foglio. Soluzioni complete per etichettatura industriale.',
      'Offriamo una gamma completa di stampanti per etichette: dalla Any-Press con toner bianco alla Afinia X350 ad alta velocità, passando per la Afinia L901 e la LT5C resistente all\'acqua.',
    ],
    seo: {
      title: 'Stampanti Etichette Industriali',
      description: 'Stampante etichette industriale: etichettatura in bobina con Afinia Label L901, X350, LT5C e DLP-2200. Soluzioni complete per etichette a colori.',
    },
    productRefs: ['product-any-press', 'product-afinia-l901', 'product-afinia-x350', 'product-afinia-lt5c', 'product-any-002', 'product-afinia-dlp2200', 'product-afinia-dc350', 'product-afinia-dlf'],
  },
  {
    _id: 'solution-shopper',
    title: 'Shopper & Packaging di Lusso',
    slug: 'shopper',
    category: 'shopper',
    descriptionText: [
      'Stampa hot foil digitale e stampa diretta per shopper, buste e packaging premium. Nobilitazione con foil metallizzati, personalizzazione on-demand.',
      'Soluzioni per la personalizzazione di shopper, buste e packaging di lusso con stampa hot foil digitale (AurumPress) e stampa diretta (GreenBox EVO).',
    ],
    seo: {
      title: 'Shopper & Packaging di Lusso - Hot Foil',
      description: 'Stampa hot foil digitale e stampa diretta per shopper, buste e packaging premium. Nobilitazione con foil metallizzati, personalizzazione on-demand.',
    },
    productRefs: ['product-aurumpress', 'product-greenbox-evo'],
  },
  {
    _id: 'solution-labbratura',
    title: 'Labbratura Libri',
    slug: 'labbratura',
    category: 'labbratura',
    descriptionText: [
      'Labbratura libri digitale: stampa personalizzata sui bordi di libri, quaderni, agende e block notes. Tecnologia inkjet CMYK single-pass.',
      'Due soluzioni per la labbratura: GreenBox Print Book (HP PageWide, 30 m/min) e Robotjet (400 pezzi/ora). Entrambe con inchiostri a base acqua pigmentati.',
    ],
    seo: {
      title: 'Labbratura Libri - Stampa Bordi Libri',
      description: 'Labbratura libri digitale: stampa personalizzata sui bordi di libri, quaderni, agende e block notes. Tecnologia inkjet CMYK single-pass, 400 pezzi/ora.',
    },
    productRefs: ['product-greenbox-print-book', 'product-robotjet'],
  },
];

for (const s of solutions) {
  docs.push({
    _id: s._id,
    _type: 'solution',
    title: s.title,
    slug: { _type: 'slug', current: s.slug },
    category: s.category,
    description: toPortableText(s.descriptionText),
    products: s.productRefs.map((ref, i) => ({ _key: `ref${i}`, _type: 'reference', _ref: ref })),
    seo: s.seo,
  });
}

// ============================================================
// 4. PAGES
// ============================================================
const pages = [
  {
    _id: 'page-homepage',
    title: 'Homepage',
    slug: 'homepage',
    content: [
      {
        _type: 'textBlock',
        _key: 'intro',
        heading: 'Soluzioni Digitali per Stampa e Packaging',
        body: toPortableText([
          'Stampa digitale packaging, etichettatura industriale e consumabili. Dal 2010, Print Solution è il punto di riferimento italiano per soluzioni di stampa digitale.',
          'Vendita e assistenza stampanti digitali per etichette e packaging. Sala demo a Sesto San Giovanni (MI).',
        ]),
      },
    ],
    seo: {
      title: 'Print Solution — Soluzioni Digitali per Stampa e Packaging',
      description: 'Stampa digitale packaging, etichettatura industriale e consumabili. Dal 2010, Print Solution è il punto di riferimento italiano per soluzioni di stampa digitale.',
    },
  },
  {
    _id: 'page-chi-siamo',
    title: 'Chi Siamo',
    slug: 'chi-siamo',
    content: [
      {
        _type: 'textBlock',
        _key: 'storia',
        heading: 'La Nostra Storia',
        body: toPortableText([
          'Print Solution S.r.l. nasce nel 2010 a Sesto San Giovanni (MI) con una missione chiara: portare in Italia le migliori soluzioni di stampa digitale per packaging ed etichette.',
          'In oltre 15 anni di attività abbiamo costruito partnership solide con i brand leader del settore — Afinia Label, GreenBox, Anypack e DTM Print — diventando il loro distributore ufficiale per il mercato italiano.',
          'Non siamo semplici rivenditori: affianchiamo i nostri clienti dalla consulenza iniziale alla formazione, dall\'installazione all\'assistenza post-vendita, con un team dedicato e competente.',
        ]),
      },
      {
        _type: 'ctaBlock',
        _key: 'cta',
        heading: 'Vieni a Trovarci',
        text: 'La nostra sala demo a Sesto San Giovanni è attrezzata con tutti i prodotti in funzione. Porta i tuoi materiali e testa direttamente le soluzioni.',
        buttonText: 'Contattaci',
        buttonUrl: '/contatti',
      },
    ],
    seo: {
      title: 'Chi Siamo',
      description: 'Print Solution S.r.l. — Dal 2010, distributore italiano di soluzioni digitali per stampa packaging, etichette e consumabili. Sesto San Giovanni (MI).',
    },
  },
  {
    _id: 'page-contatti',
    title: 'Contatti',
    slug: 'contatti',
    content: [
      {
        _type: 'textBlock',
        _key: 'info',
        heading: 'Contattaci',
        body: toPortableText([
          'Richiedi informazioni, consulenza gratuita o visita la sala demo a Sesto San Giovanni (MI).',
          'Telefono: +39 0141 352 032',
          'Email: info@printsolutionsrl.it',
        ]),
      },
    ],
    seo: {
      title: 'Contatti',
      description: 'Contatta Print Solution: richiedi informazioni, consulenza gratuita o visita la sala demo a Sesto San Giovanni (MI). Tel. +39 0141 352 032.',
    },
  },
];

for (const p of pages) {
  docs.push({
    _id: p._id,
    _type: 'page',
    title: p.title,
    slug: { _type: 'slug', current: p.slug },
    content: p.content,
    seo: p.seo,
  });
}

// ============================================================
// 5. SHOP PRODUCTS
// ============================================================
// Import from shop-data.ts
const shopDataPath = path.join(__dirname, '..', 'src', 'lib', 'shop-data.ts');
const shopDataRaw = fs.readFileSync(shopDataPath, 'utf-8');

// Parse categories and products from the TS file
// We'll extract them with regex since we can't import TS directly
const categoryRegex = /\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*image:\s*"([^"]+)",\s*products:\s*\[([\s\S]*?)\],?\s*\}/g;
const productRegex = /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*sku:\s*"([^"]+)",\s*price:\s*([\d.]+),\s*image:\s*"([^"]+)"(?:,\s*description:\s*"([^"]*)")?(?:,\s*inStock:\s*(true|false))?\s*\}/g;

let catMatch;
while ((catMatch = categoryRegex.exec(shopDataRaw)) !== null) {
  const catSlug = catMatch[1];
  const catName = catMatch[2];
  const productsBlock = catMatch[5];
  
  let prodMatch;
  const localProdRegex = /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*sku:\s*"([^"]+)",\s*price:\s*([\d.]+),\s*image:\s*"([^"]+)"(?:,\s*description:\s*"([^"]*)")?(?:,\s*inStock:\s*(true|false))?\s*\}/g;
  while ((prodMatch = localProdRegex.exec(productsBlock)) !== null) {
    const shopCategory = catSlug.includes('inchiostri') ? 'inchiostri' 
      : catSlug.includes('toner') || prodMatch[2].toLowerCase().includes('toner') ? 'inchiostri'
      : prodMatch[2].toLowerCase().includes('testina') || prodMatch[2].toLowerCase().includes('head') ? 'testine'
      : prodMatch[2].toLowerCase().includes('tamburo') || prodMatch[2].toLowerCase().includes('drum') ? 'accessori'
      : prodMatch[2].toLowerCase().includes('fusore') || prodMatch[2].toLowerCase().includes('fuser') ? 'accessori'
      : prodMatch[2].toLowerCase().includes('belt') || prodMatch[2].toLowerCase().includes('itu') ? 'accessori'
      : prodMatch[2].toLowerCase().includes('waste') ? 'accessori'
      : prodMatch[2].toLowerCase().includes('service') ? 'accessori'
      : prodMatch[2].toLowerCase().includes('kit') ? 'accessori'
      : prodMatch[2].toLowerCase().includes('cartuccia') || prodMatch[2].toLowerCase().includes('cartridge') ? 'inchiostri'
      : prodMatch[2].toLowerCase().includes('inchiostro') || prodMatch[2].toLowerCase().includes('ink') ? 'inchiostri'
      : prodMatch[2].toLowerCase().includes('tanica') ? 'inchiostri'
      : 'accessori';

    docs.push({
      _id: `shopProduct-${prodMatch[1]}`,
      _type: 'shopProduct',
      name: prodMatch[2],
      slug: { _type: 'slug', current: prodMatch[1] },
      sku: prodMatch[3],
      price: parseFloat(prodMatch[4]),
      category: shopCategory,
      description: prodMatch[6] ? `${prodMatch[6]} — Compatibile con ${catName}` : `Consumabile per ${catName}`,
    });
  }
}

// ============================================================
// 6. FAQ
// ============================================================
const faqs = [
  {
    _id: 'faq-1',
    question: 'Quali stampanti vendete?',
    answer: 'Vendiamo stampanti per etichette a colori (Afinia Label, Anytron), stampanti per packaging su cartone ondulato (EDM-650X, GreenBox EVO), stampanti UV (PackPrinter UV), stampatrici hot foil (AurumPress), box maker automatici (Anypack AB2500) e stampanti per labbratura libri (Robotjet, GreenBox Print Book).',
    category: 'prodotti',
  },
  {
    _id: 'faq-2',
    question: 'Offrite assistenza post-vendita?',
    answer: 'Sì, offriamo assistenza tecnica completa, formazione sull\'utilizzo delle macchine, manutenzione programmata e fornitura di ricambi e consumabili originali.',
    category: 'assistenza',
  },
  {
    _id: 'faq-3',
    question: 'È possibile vedere le macchine in funzione?',
    answer: 'Certamente. La nostra sala demo a Sesto San Giovanni (MI) è attrezzata con tutti i prodotti in funzione. Potete portare i vostri materiali e testare direttamente le soluzioni.',
    category: 'generale',
  },
  {
    _id: 'faq-4',
    question: 'Quali materiali si possono stampare?',
    answer: 'I materiali stampabili dipendono dalla macchina: cartone ondulato, carta, kraft, juta, shopper (con GreenBox EVO e EDM-650X); PVC, vetro, legno, ceramica, metallo (con PackPrinter UV); etichette in carta, PP, PET, vinile (con le stampanti etichette).',
    category: 'prodotti',
  },
  {
    _id: 'faq-5',
    question: 'Vendete consumabili online?',
    answer: 'Sì, il nostro e-shop offre inchiostri, cartucce, toner, testine e ricambi originali per tutte le stampanti che distribuiamo. Spedizione in 24/48 ore. Tutti i prezzi sono IVA esclusa.',
    category: 'generale',
  },
  {
    _id: 'faq-6',
    question: 'Quali sono i tempi di spedizione?',
    answer: 'Per i consumabili disponibili a magazzino, la spedizione avviene in 24/48 ore lavorative. Per le macchine, i tempi dipendono dalla configurazione richiesta.',
    category: 'spedizioni',
  },
  {
    _id: 'faq-7',
    question: 'Come posso richiedere un preventivo?',
    answer: 'Potete contattarci via email a info@printsolutionsrl.it, telefonare al numero 0141 352 032, oppure utilizzare il modulo contatti sul nostro sito.',
    category: 'generale',
  },
  {
    _id: 'faq-8',
    question: 'Offrite finanziamenti o leasing?',
    answer: 'Sì, offriamo soluzioni di finanziamento e leasing per l\'acquisto delle macchine. Contattateci per maggiori dettagli sulle opzioni disponibili.',
    category: 'generale',
  },
];

for (const f of faqs) {
  docs.push({
    _id: f._id,
    _type: 'faq',
    question: f.question,
    answer: toPortableText([f.answer]),
    category: f.category,
  });
}

// ============================================================
// 7. SITE SETTINGS
// ============================================================
docs.push({
  _id: 'siteSettings',
  _type: 'siteSettings',
  companyName: 'Print Solution S.r.l.',
  contact: {
    email: 'info@printsolutionsrl.it',
    phone: '+39 0141 352 032',
    address: 'Asti, Piemonte, Italia',
  },
  social: {
    facebook: 'https://www.facebook.com/printsolutionsrl',
    linkedin: 'https://www.linkedin.com/company/print-solution-srl',
  },
});

// ============================================================
// WRITE NDJSON
// ============================================================
const ndjsonPath = path.join(__dirname, '..', 'migration.ndjson');
const lines = docs.map((d) => JSON.stringify(d));
fs.writeFileSync(ndjsonPath, lines.join('\n') + '\n', 'utf-8');

console.log(`✅ Generated ${docs.length} documents in migration.ndjson`);
console.log(`   - Products: ${products.length}`);
console.log(`   - Blog Posts: ${posts.length}`);
console.log(`   - Solutions: ${solutions.length}`);
console.log(`   - Pages: ${pages.length}`);
console.log(`   - Shop Products: ${docs.filter(d => d._type === 'shopProduct').length}`);
console.log(`   - FAQs: ${faqs.length}`);
console.log(`   - Site Settings: 1`);
console.log('\nNext step: cd website ; npx sanity dataset import migration.ndjson production');
