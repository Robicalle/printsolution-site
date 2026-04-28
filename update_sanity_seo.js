const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false
});

const updates = [
  {
    id: 'blog-automatizzare-produzione-scatole',
    seo: {
      title: 'Come Automatizzare la Produzione di Scatole con un Box Maker',
      description: 'Guida pratica all\'automazione della produzione scatole: box maker automatico, ROI in 12-24 mesi, zero fustelle, cambio formato in 10 secondi.',
      keywords: ['box maker automatico italia', 'produzione scatole on demand macchina', 'anypack ab2500', 'scatole su misura senza fustella', 'automazione scatolifici']
    }
  },
  {
    id: 'blog-box-maker-produzione-automatica-scatole',
    seo: {
      title: 'Box Maker Automatico: Cos\'è, Come Funziona e Quanto Costa',
      description: 'Cos\'è un box maker automatico, come funziona e quali modelli scegliere per PMI e e-commerce. Confronto Anypack AB2500 vs metodi tradizionali.',
      keywords: ['box maker automatico prezzo', 'confronto box maker', 'box maker piccole medie imprese', 'macchina scatole cartone ondulato', 'box on demand costo']
    }
  },
  {
    id: 'blog-come-ridurre-costi-packaging',
    seo: {
      title: 'Come Ridurre i Costi di Imballaggio con la Produzione On-Demand',
      description: 'Strategie concrete per ridurre i costi di packaging: scatole su misura, just-in-time, eliminazione stock. Risparmio medio 30-50% sui costi di spedizione.',
      keywords: ['riduzione costi imballaggio on demand', 'scatole su misura risparmio spedizione', 'packaging just in time vantaggi', 'eliminare stock scatole', 'risparmio imballaggi azienda']
    }
  },
  {
    id: 'blog-come-scegliere-stampante-etichette-colori',
    seo: {
      title: 'Stampante per Etichette a Colori: Guida alla Scelta per Aziende',
      description: 'Come scegliere la migliore stampante per etichette a colori per azienda: inkjet vs toner, costo per etichetta, modelli consigliati Afinia e DTM.',
      keywords: ['migliore stampante etichette colori per azienda', 'stampante etichette colori inkjet vs toner', 'stampante etichette colori professionale prezzo', 'afinia stampante etichette', 'dtm print etichette colori']
    }
  },
  {
    id: 'blog-etichette-adesive-materiali-finiture',
    seo: {
      title: 'Materiali e Finiture per Etichette Adesive: Guida alla Scelta',
      description: 'Guida completa ai materiali per etichette adesive: carta, PP, PET, polipropilene. Come scegliere per resistenza ad acqua, olio, temperature estreme.',
      keywords: ['materiali etichette resistenti acqua olio', 'etichette adesive polipropilene vs carta', 'finitura opaca lucida etichette differenza', 'etichette per prodotti alimentari materiale', 'etichette resistenti temperature']
    }
  },
  {
    id: 'blog-hot-foil-stamping-cose-quando-usarlo',
    seo: {
      title: 'Hot Foil Stamping per Etichette: Cos\'è e Quando Conviene',
      description: 'Guida all\'hot foil stamping per etichette e packaging premium. Come funziona, costi, stampante AurumPress e quando conviene rispetto alla laminazione.',
      keywords: ['stampante hot foil etichette professionale', 'aurumpress hot foil', 'stampa lamina dorata etichette piccole tirature', 'hot foil stamping costo', 'stampa a caldo foil etichette artigianali']
    }
  },
  {
    id: 'blog-packaging-personalizzato-vantaggi-pmi',
    seo: {
      title: 'Packaging Personalizzato per Piccole Tirature: Costi e Vantaggi',
      description: 'Vantaggi del packaging personalizzato senza minimo d\'ordine per PMI e e-commerce. Costi reali, tecnologie e confronto con packaging standard.',
      keywords: ['packaging personalizzato piccole tirature senza minimo', 'scatole personalizzate e-commerce', 'imballaggi su misura piccole imprese costo', 'packaging digitale pmi', 'branding packaging piccoli lotti']
    }
  },
  {
    id: 'blog-stampa-cartone-ondulato-guida-completa',
    seo: {
      title: 'Stampa Diretta su Cartone Ondulato: Tecnologie e Confronto',
      description: 'Come si stampa direttamente sul cartone ondulato: inkjet single-pass vs flessografia vs pre-stampa. Qualità, costi e quando conviene il digitale.',
      keywords: ['come si stampa direttamente sul cartone ondulato', 'stampa inkjet diretta cartone ondulato qualità', 'alternativa alla pre-stampa cartone', 'stampa digitale cartone costo', 'qualità stampa cartone ondulato confronto']
    }
  },
  {
    id: 'blog-stampa-digitale-cartone-ondulato-vs-flessografia',
    seo: {
      title: 'Stampa Digitale vs Flessografia per Cartone Ondulato: Confronto',
      description: 'Confronto reale tra stampa digitale single-pass e flessografia per cartone ondulato. Quando conviene il digitale, costi per pezzo e punto di pareggio.',
      keywords: ['stampa digitale vs flessografia cartone ondulato', 'flessografia svantaggi piccole tirature', 'stampa digitale cartone costo per pezzo', 'quando abbandonare la flessografia', 'single pass vs flexo packaging']
    }
  },
  {
    id: 'blog-stampa-digitale-vs-offset-piccoli-lotti',
    seo: {
      title: 'Stampa Digitale vs Offset per Etichette e Packaging: Quando Conviene',
      description: 'Confronto tra stampa digitale e offset per piccoli lotti: costi minimi, punto di pareggio, tempi di consegna. Quando scegliere il digitale per etichette.',
      keywords: ['stampa etichette piccoli lotti costo minimo', 'offset etichette minimo ordine problema', 'stampa digitale etichette da 1 pezzo', 'break even stampa digitale vs offset', 'etichette tiratura minima']
    }
  },
  {
    id: 'blog-stampante-etichette-colori-bobina-guida',
    seo: {
      title: 'Stampante Etichette a Colori in Bobina: Confronto Modelli 2025',
      description: 'Confronto stampanti etichette a colori in bobina: Afinia L901, X350, LT5C, DLF. Tecnologie Memjet, pigmento e toner a confronto su costo, velocità e qualità.',
      keywords: ['migliore stampante etichette colori bobina 2025', 'afinia l901 vs x350 confronto', 'stampante etichette colori bobina prezzo italia', 'memjet vs pigmento etichette', 'afinia lt5c recensione']
    }
  },
  {
    id: 'blog-stampante-inkjet-industriale-come-scegliere',
    seo: {
      title: 'Stampante Inkjet Industriale per Packaging: Come Scegliere',
      description: 'Guida alla scelta della stampante inkjet industriale per packaging e cartone ondulato. EDM-650X, GreenBox EVO: specifiche, costi e applicazioni reali.',
      keywords: ['stampante inkjet industriale single-pass prezzo', 'edm-650x scheda tecnica', 'stampante per cartone ondulato costo acquisto', 'stampante industriale packaging italia', 'greenbox evo inkjet industriale']
    }
  },
  {
    id: 'blog-tendenze-packaging-2026',
    seo: {
      title: 'Packaging Digitale e On-Demand: Tendenze 2026 per le Aziende',
      description: 'Le tendenze packaging 2026 che contano per le aziende: on-demand, sostenibilità cartone vs plastica, personalizzazione e-commerce e automazione produzione.',
      keywords: ['packaging digitale on demand vantaggi 2026', 'sostenibilità packaging cartone vs plastica', 'innovazione packaging e-commerce 2026', 'tendenze imballaggio industriale', 'automazione packaging pmi 2026']
    }
  },
  {
    id: 'post-gfc-stampa-edm650x',
    seo: {
      title: 'Case Study: GFC Stampa Riduce i Costi con EDM-650X',
      description: 'Come GFC Stampa di Napoli ha ridotto costi e tempi di produzione per packaging personalizzato con la stampante EDM-650X. ROI, volumi e risultati reali.',
      keywords: ['edm-650x case study', 'stampante packaging digitale risultati reali', 'roi stampante inkjet industriale', 'packaging personalizzato napoli', 'edm-650x produzione packaging']
    }
  }
];

async function run() {
  let ok = 0, fail = 0;
  for (const u of updates) {
    try {
      await client.patch(u.id).set({ seo: u.seo }).commit();
      console.log('✓', u.id);
      ok++;
    } catch (e) {
      console.error('✗', u.id, e.message);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
}

run();
