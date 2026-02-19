/**
 * Migration script part 2: labbratura + consumabili pages
 */
import { createClient } from "@sanity/client";
import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";

const TOKEN = fs.readFileSync(
  path.resolve("C:/Users/Jarvis/.openclaw/workspace/memory/vault/sanity-token.key"),
  "utf-8"
).trim();

const client = createClient({
  projectId: "dnhjoqwl",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

function key() {
  return randomUUID().replace(/-/g, "").slice(0, 12);
}

const labbraturaPage = {
  _id: "page-labbratura",
  _type: "page",
  title: "Labbratura Libri",
  title_en: "Book Edge Printing",
  slug: { _type: "slug", current: "labbratura" },
  pageType: "soluzione",
  seo: {
    title: "Labbratura Libri - Stampa Bordi Libri",
    description: "Labbratura libri digitale: stampa personalizzata sui bordi di libri, quaderni, agende e block notes. Tecnologia inkjet CMYK single-pass, 400 pezzi/ora.",
    keywords: ["labbratura libri","stampa bordi libri","book edge printing","personalizzazione libri","stampante labbratura"],
    image: "/images/products/book-edge-printer.png",
    canonical: "/soluzioni/labbratura",
  },
  sections: [
    {
      _type: "pageHero",
      _key: key(),
      title: "Labbratura Libri",
      title_en: "Book Edge Printing",
      subtitle: "Stampa digitale personalizzata sui bordi di libri, quaderni e agende. Tecnologia inkjet CMYK a base acqua, 400 pezzi/ora.",
      subtitle_en: "Custom digital printing on book edges of books, notebooks and diaries. Water-based CMYK inkjet technology, 400 pieces/hour.",
      breadcrumb: "Soluzioni",
      breadcrumb_en: "Solutions",
      videoSrc: "/videos/labbratura-hero.mp4",
    },
    {
      _type: "productCardList",
      _key: key(),
      sectionEyebrow: "Le Nostre Soluzioni",
      sectionEyebrow_en: "Our Solutions",
      sectionHeading: "Stampa Bordi Libri Professionale",
      sectionHeading_en: "Professional Book Edge Printing",
      eyebrowColor: "text-cyan-500",
      bgClass: "bg-white",
      ctaSubject: "Richiesta Consulenza Labbratura",
      products: [
        {
          _key: key(), name: "GreenBox Print Book",
          subtitle: "Labbratura Digitale con Tecnologia HP PageWide", subtitle_en: "Digital Book Edge Printing with HP PageWide Technology",
          image: "/images/products/greenbox-printbook.jpg", href: "/prodotti/greenbox-print-book",
          desc: "La soluzione digitale per la labbratura dei libri basata su GreenBox 2. Stampa inkjet HP PageWide single-pass a base acqua, 30 m/min, 1200×1200 dpi. Industria 4.0 ready con software GreenFlow.",
          desc_en: "The digital solution for book edge printing based on GreenBox 2. Single-pass, up to 30 m/min, HP printhead with 1200 dpi resolution. Water-based inks.",
          specs: ["Velocità fino a 30 m/min","Risoluzione 1200×1200 dpi","CMYK — inchiostri a base acqua","Testina HP PageWide single-pass","Escursione verticale fino a 30 cm","Piano motorizzato 180 cm","Industria 4.0 ready","Peso: 120 kg"],
          gradient: "from-green-500 to-cyan-500",
          tag: "Print Book", tag_en: "Print Book",
          brand: "Print Solution",
        },
        {
          _key: key(), name: "RobotJet",
          subtitle: "Book Edge Printer Compatto", subtitle_en: "Compact Book Edge Printer",
          image: "/images/products/robotjet.png", href: "/prodotti/robotjet",
          desc: "Stampante per labbratura libri compatta e versatile. Stampa inkjet a base acqua fino a 400 pezzi/ora con qualità fotografica sui bordi di libri, quaderni, agende e block notes.",
          desc_en: "Compact and versatile book edge printer. Water-based inkjet printing up to 400 pieces/hour with photographic quality on book edges, notebooks, diaries and notepads.",
          specs: ["Fino a 400 pezzi/ora","Inchiostri a base acqua CMYK","Risoluzione 1200 dpi","Stampa su tutti i bordi","Dimensioni compatte","Software dedicato incluso","Nessun cliché necessario","Dato variabile supportato"],
          gradient: "from-violet-500 to-violet-600",
          tag: "Compatto", tag_en: "Compact",
          brand: "Print Solution",
        },
      ],
    },
    {
      _type: "ctaBanner",
      _key: key(),
      heading: "Vuoi Personalizzare i Bordi dei Tuoi Libri?",
      heading_en: "Want to Customise Your Book Edges?",
      text: "Contattaci per una consulenza gratuita o porta i tuoi libri nella nostra sala demo per una prova di stampa.",
      text_en: "Contact us for a free consultation or bring your books to our demo room for a print test.",
      buttonText: "Contattaci Ora",
      buttonText_en: "Contact Us Now",
      buttonUrl: "mailto:info@printsolution.it?subject=Richiesta%20Info%20Labbratura&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sulla%20labbratura%20libri.%0A%0AGrazie",
      bgClass: "bg-surface-50",
    },
  ],
};

const consumabiliPage = {
  _id: "page-consumabili",
  _type: "page",
  title: "Consumabili e Ricambi",
  title_en: "Consumables and Spare Parts",
  slug: { _type: "slug", current: "consumabili" },
  pageType: "soluzione",
  seo: {
    title: "Consumabili e Ricambi Stampa Digitale",
    description: "Cartucce stampante etichette, inchiostri stampa digitale, testine e ricambi originali per GreenBox EVO, EDM-650X e Afinia Label. Spedizione rapida.",
    keywords: ["cartucce stampante etichette","inchiostri stampa digitale","consumabili stampante packaging","testine stampa HP","ricambi stampante etichette"],
    canonical: "/soluzioni/consumabili",
  },
  sections: [
    {
      _type: "pageHero",
      _key: key(),
      title: "Consumabili e Ricambi",
      title_en: "Consumables and Spare Parts",
      subtitle: "Inchiostri, cartucce, testine di stampa, foil e materiali di consumo originali per tutte le nostre stampanti.",
      subtitle_en: "Inks, cartridges, printheads, foils and original consumables for all our printers.",
      breadcrumb: "Soluzioni",
      breadcrumb_en: "Solutions",
    },
    {
      _type: "consumablesCategoryList",
      _key: key(),
      sectionEyebrow: "Ricambi Originali",
      sectionEyebrow_en: "Original Spare Parts",
      sectionHeading: "Materiali di Consumo per Ogni Macchina",
      sectionHeading_en: "Consumables for Every Machine",
      sectionDesc: "Forniamo tutti i consumabili originali per le stampanti che distribuiamo. Spedizione rapida, assistenza tecnica e consulenza sulla scelta dei materiali più adatti alla tua applicazione.",
      sectionDesc_en: "We supply all original consumables for the printers we distribute. Fast shipping, technical support and guidance on choosing the most suitable materials for your application.",
      categories: [
        {
          _key: key(),
          title: "Inchiostri Packaging — GreenBox EVO / EDM-650X",
          title_en: "Packaging Inks — GreenBox EVO / EDM-650X",
          desc: "Inchiostri pigmentati a base acqua per stampanti single-pass. Senza solventi, inodori, eco-friendly. Resistenti ad agenti atmosferici, sfregamento e acqua.",
          desc_en: "Pigmented water-based inks for single-pass printers. Solvent-free, odorless, eco-friendly. Resistant to weather, rubbing and water.",
          items: [
            { _key: key(), name: "Inchiostro Cyan (C)", detail: "Tanica 3L — pigmentato base acqua" },
            { _key: key(), name: "Inchiostro Magenta (M)", detail: "Tanica 3L — pigmentato base acqua" },
            { _key: key(), name: "Inchiostro Yellow (Y)", detail: "Tanica 3L — pigmentato base acqua" },
            { _key: key(), name: "Inchiostro Black (K)", detail: "Tanica 3L — pigmentato base acqua" },
          ],
          features: ["A base acqua, eco-friendly","Senza solventi, inodori","Resistenza acqua, sfregamento, UV","Compatibili con testine HP Pagewide"],
          features_en: ["Water-based, eco-friendly","Solvent-free, odorless","Water, rub, UV resistant","Compatible with HP Pagewide printheads"],
          gradient: "from-cyan-500 to-cyan-600",
          icon: "🎨",
        },
        {
          _key: key(),
          title: "Cartucce Afinia Label",
          title_en: "Afinia Label Cartridges",
          desc: "Cartucce originali per stampanti etichette Afinia. Tecnologia dye-based e pigmentata per risultati professionali su ogni supporto.",
          desc_en: "Original cartridges for Afinia label printers. Dye-based and pigmented technology for professional results on any media.",
          items: [
            { _key: key(), name: "Kit CMYKK per L901", detail: "5 cartucce alta capacità, doppio nero" },
            { _key: key(), name: "Kit CMYK per X350", detail: "Taniche 2L pigmentate, 8L totali" },
            { _key: key(), name: "Toner CMYK per LT5C", detail: "Cartucce toner ad alta resa" },
          ],
          features: ["Cartucce originali garantite","Alta capacità per bassi costi/etichetta","Colori calibrati per fedeltà cromatica","Disponibili singole o in kit"],
          features_en: ["Guaranteed original cartridges","High capacity for low cost/label","Calibrated colours for colour fidelity","Available individually or in kits"],
          gradient: "from-magenta-500 to-magenta-600",
          icon: "🖋️",
        },
        {
          _key: key(),
          title: "Testine di Stampa",
          title_en: "Printheads",
          desc: "Testine di stampa originali e compatibili per le nostre stampanti. Sostituzione semplice, anche dall'utente.",
          desc_en: "Original and compatible printheads for our printers. Simple replacement, even by the user.",
          items: [
            { _key: key(), name: "Testina HP Pagewide", detail: "Per EDM-650X e GreenBox EVO — single-pass" },
            { _key: key(), name: "Testina Memjet Waterfall", detail: "Per Afinia L901 — sostituibile senza fermo" },
            { _key: key(), name: "Testina Afinia X350", detail: "Ridondanza 2× ugelli, sostituibile" },
          ],
          features: ["Sostituzione rapida dall'utente","Nessun fermo macchina","Originali per massime prestazioni","Assistenza tecnica inclusa"],
          features_en: ["Quick user replacement","No downtime","Original for maximum performance","Technical support included"],
          gradient: "from-yellow-500 to-yellow-600",
          icon: "⚡",
        },
        {
          _key: key(),
          title: "Finitura e Accessori",
          title_en: "Finishing and Accessories",
          desc: "Materiali per laminazione, fustelle, foil metallizzati e accessori per completare la linea di produzione.",
          desc_en: "Lamination materials, dies, metallic foils and accessories to complete the production line.",
          items: [
            { _key: key(), name: "Film laminazione", detail: "Per DLP-2200 e serie DLF con laminazione" },
            { _key: key(), name: "Fustelle acciaio flessibili", detail: "Per DLP-2200 — qualsiasi forma, 130–360 mm" },
            { _key: key(), name: "Foil metallizzati AurumPress", detail: "Oro, argento, rame, olografici, colori" },
            { _key: key(), name: "Bobine etichette bianche", detail: "Vari formati e materiali (carta, PP, PE, vinile)" },
          ],
          features: ["Fustelle su misura in tempi rapidi","Foil in decine di colori e finiture","Materiali per ogni applicazione","Consulenza sulla scelta"],
          features_en: ["Custom dies in quick turnaround","Foils in dozens of colours and finishes","Materials for every application","Guidance on selection"],
          gradient: "from-green-500 to-green-600",
          icon: "🔧",
        },
      ],
    },
    {
      _type: "carePackGrid",
      _key: key(),
      eyebrow: "Assistenza",
      eyebrow_en: "Support",
      heading: "Care Pack",
      heading_en: "Care Pack",
      description: "Pacchetti di assistenza dedicati per le stampanti packaging EDM-650X e GreenBox EVO.",
      description_en: "Dedicated support packages for EDM-650X and GreenBox EVO packaging printers.",
      packs: [
        { _key: key(), name: "Silver", hours: "15 ore", hours_en: "15 hours", discount: "—", color: "from-gray-400 to-gray-500" },
        { _key: key(), name: "Golden", hours: "25 ore", hours_en: "25 hours", discount: "10% ricambi", color: "from-yellow-400 to-yellow-500" },
        { _key: key(), name: "Platinum", hours: "50 ore", hours_en: "50 hours", discount: "15% ricambi", color: "from-cyan-400 to-cyan-500" },
      ],
    },
    {
      _type: "simpleCta",
      _key: key(),
      heading: "Hai Bisogno di Consumabili?",
      heading_en: "Need Consumables?",
      text: "Contattaci per un preventivo rapido. Spedizione in tutta Italia, prezzi riservati per ordini ricorrenti.",
      text_en: "Contact us for a quick quote. Shipping across Italy, special prices for recurring orders.",
      buttonText: "Ordina Consumabili",
      buttonText_en: "Order Consumables",
      buttonUrl: "mailto:ordini@printsolution.it?subject=Ordine%20Consumabili&body=Buongiorno%2C%0A%0AVorrei%20ordinare%20i%20seguenti%20consumabili%3A%0A%0A%0AGrazie",
      bgClass: "bg-white",
    },
  ],
};

const allPages = [labbraturaPage, consumabiliPage];

async function migrate() {
  console.log(`Migrating ${allPages.length} pages...`);
  for (const page of allPages) {
    try {
      console.log(`  Creating: ${page.title}`);
      await client.createOrReplace(page);
      console.log(`  ✅ ${page.title}`);
    } catch (err) {
      console.error(`  ❌ ${page.title}`, err);
    }
  }
  console.log("Done!");
}

migrate().catch(console.error);
