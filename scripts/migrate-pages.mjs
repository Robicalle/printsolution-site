/**
 * Migration script: creates Sanity page builder documents from static page data.
 * Run: node scripts/migrate-pages.mjs
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

// ════════════════════════════════════════════════════════════
// SOLUTION PAGES
// ════════════════════════════════════════════════════════════

const etichettePage = {
  _id: "page-etichette",
  _type: "page",
  title: "Soluzioni Etichette",
  title_en: "Label Solutions",
  slug: { _type: "slug", current: "etichette" },
  pageType: "soluzione",
  seo: {
    title: "Stampanti Etichette Industriali",
    description: "Stampante etichette industriale: etichettatura in bobina con Afinia Label L901, X350, LT5C e DLP-2200. Soluzioni complete per etichette a colori.",
    keywords: ["stampante etichette industriale","etichettatura in bobina","stampante etichette colori","Afinia Label","stampa etichette bobina"],
    image: "/images/hero-labels.webp",
    canonical: "/soluzioni/etichette",
  },
  seo_en: {
    title: "Industrial Label Printers",
    description: "Industrial label printer: roll labelling with Afinia Label L901, X350, LT5C and DLP-2200. Complete colour label solutions.",
  },
  sections: [
    {
      _type: "pageHero",
      _key: key(),
      title: "Soluzioni Etichette",
      title_en: "Label Solutions",
      subtitle: "Stampanti per etichette a colori in bobina, fustellatori digitali, sistemi completi e applicatori. Tecnologia Memjet, pigmento e toner.",
      subtitle_en: "Color label printers for rolls, digital die-cutters, complete systems and applicators. Memjet, pigment and toner technology.",
      breadcrumb: "Soluzioni",
      breadcrumb_en: "Solutions",
      videoSrc: "/videos/etichette-hero.mp4",
    },
    {
      _type: "productCardList",
      _key: key(),
      sectionEyebrow: "Stampanti Etichette",
      sectionEyebrow_en: "Label Printers",
      sectionHeading: "Una Stampante per Ogni Esigenza",
      sectionHeading_en: "A Printer for Every Need",
      eyebrowColor: "text-cyan-500",
      bgClass: "bg-white",
      ctaSubject: "Richiesta Consulenza Etichette",
      products: [
        {
          _key: key(), name: "Any-Press",
          subtitle: "Laser LED 5 Colori — CMYK+Bianco", subtitle_en: "LED Laser 5 Colors — CMYK+White",
          image: "/images/products/any-press.avif", href: "/prodotti/any-press",
          desc: "Stampante laser LED a 5 colori (CMYK+Bianco) per etichette e packaging flessibile. Toner bianco per stampa su kraft e trasparenti, laminazione integrata opzionale.",
          desc_en: "LED laser 5-color printer (CMYK+White) for labels and flexible packaging. White toner for printing on kraft and transparents, optional integrated lamination.",
          specs: ["Motore Laser digitale LED","5 colori CMYKW (incluso bianco)","Risoluzione 1200 × 1200 dpi","Velocità 5 m/min","Larghezza stampa max 324 mm","Laminatore opzionale integrato","Software ANY-FLOW incluso","Design compatto"],
          specs_en: ["LED digital laser engine","5 colors CMYKW (including white)","Resolution 1200 × 1200 dpi","Speed 5 m/min","Max print width 324 mm","Optional integrated laminator","ANY-FLOW software included","Compact design"],
          gradient: "from-orange-500 to-orange-600",
          tag: "CMYK + Bianco", tag_en: "CMYK + White",
        },
        {
          _key: key(), name: "Anytron ANY-002",
          subtitle: "Toner LED — Stampa", subtitle_en: "LED Toner — Print",
          image: "/images/products/any-002.avif", href: "/prodotti/any-002",
          desc: "Sistema completo stampa + fustellatura per etichette on-demand. Tecnologia laser digitale a toner con stampe resistenti ad acqua, temperature e abrasioni. Fino a 5.000 etichette in 2 ore.",
          desc_en: "Complete print + die-cut system for on-demand labels. Digital laser toner technology with prints resistant to water, temperature and abrasion. Up to 5,000 labels in 2 hours.",
          specs: ["Motore laser digitale LED","Risoluzione 1200 dpi a toner","Velocità fino a 9 m/min","Fustellatrice a coltello integrata","Bobina max Ø 370 mm (~500 m)","Supporta carta, PP, PET","RIP integrato + dato variabile","Peso: 95 kg"],
          specs_en: ["LED digital laser engine","Resolution 1200 dpi toner","Speed up to 9 m/min","Integrated knife die-cutter","Max roll Ø 370 mm (~500 m)","Supports paper, PP, PET","Integrated RIP + variable data","Weight: 95 kg"],
          gradient: "from-violet-500 to-violet-600",
          tag: "Stampa", tag_en: "Print",
        },
        {
          _key: key(), name: "Afinia X350",
          subtitle: "Alta Velocità — Pigmento", subtitle_en: "High Speed — Pigment",
          image: "/images/products/afinia-x350-site.webp", href: "/prodotti/afinia-x350",
          desc: "Stampante digitale roll-to-roll ad alta velocità con inchiostri pigmentati acquosi. La più veloce della categoria, con ridondanza ugelli 2× per zero strisce. Ideale per converter e volumi medio-alti.",
          desc_en: "High-speed digital roll-to-roll printer with pigmented water-based inks. The fastest in its class, with 2× nozzle redundancy for zero banding. Ideal for converters and medium-high volumes.",
          specs: ["Velocità fino a 45 m/min","Risoluzione 1600 × 1600 dpi","Larghezza stampa max 324 mm","Inchiostri pigmentati a base acqua","Taniche 2L per colore, 8L totali","Ridondanza ugelli 2×","Touchscreen 21 pollici","Compressore integrato silenzioso"],
          specs_en: ["Speed up to 45 m/min","Resolution 1600 × 1600 dpi","Max print width 324 mm","Pigmented water-based inks","2L tanks per color, 8L total","2× nozzle redundancy","21-inch touchscreen","Silent integrated compressor"],
          gradient: "from-yellow-500 to-yellow-600",
          tag: "Alta Produzione", tag_en: "High Production",
        },
        {
          _key: key(), name: "Afinia L901",
          subtitle: "Professionale — Memjet Dye", subtitle_en: "Professional — Memjet Dye",
          image: "/images/products/afinia-l901.png", href: "/prodotti/afinia-l901",
          desc: "Stampante etichette a colori professionale con tecnologia Memjet Waterfall. Alta produttività, doppio nero per neri più profondi, testina sostituibile dall'utente senza fermare la produzione. Usabile in linea con DLP-2200.",
          desc_en: "Professional color label printer with Memjet Waterfall technology. High productivity, dual black for deeper blacks, user-replaceable printhead without stopping production. Usable inline with DLP-2200.",
          specs: ["Risoluzione 1600 dpi full-color","Inchiostri CMYKK (doppio nero)","Testina sostituibile dall'utente","Touchscreen integrato","Cartucce ad alta capacità","Usabile standalone o in linea","Neri più profondi e autonomia","Manutenzione senza fermo macchina"],
          specs_en: ["1600 dpi full-color resolution","CMYKK inks (dual black)","User-replaceable printhead","Integrated touchscreen","High-capacity cartridges","Standalone or inline use","Deeper blacks and autonomy","Zero-downtime maintenance"],
          gradient: "from-magenta-500 to-magenta-600",
          tag: "Professionale", tag_en: "Professional",
        },
        {
          _key: key(), name: "Afinia LT5C",
          subtitle: "Toner LED", subtitle_en: "LED Toner",
          image: "/images/products/afinia-lt5c.avif", href: "/prodotti/afinia-lt5c",
          desc: "Stampante etichette a toner LED con tecnologia elettrofotografica. Resistenza immediata senza asciugatura, ideale per ambienti umidi e applicazioni industriali che richiedono durabilità istantanea.",
          desc_en: "LED toner label printer with electrophotographic technology. Instant durability without drying, ideal for humid environments and industrial applications requiring instant resistance.",
          specs: ["Tecnologia Toner LED CMYK","Resistenza immediata all'acqua","Nessuna asciugatura necessaria","Alimentazione da rotolo","Cartucce toner ad alta resa","Costo/pagina competitivo","Fusore per resistenza massima","Ideale per ambienti umidi"],
          specs_en: ["CMYK LED toner technology","Instant water resistance","No drying necessary","Roll feed","High-yield toner cartridges","Competitive cost/page","Fuser for maximum durability","Ideal for humid environments"],
          gradient: "from-green-500 to-green-600",
          tag: "Industriale", tag_en: "Industrial",
        },
      ],
    },
    {
      _type: "productCardList",
      _key: key(),
      sectionEyebrow: "Sistemi di Fustellatura",
      sectionEyebrow_en: "Die-Cutting Systems",
      sectionHeading: "Finitura e Fustellatura Etichette",
      sectionHeading_en: "Label Finishing and Die-Cutting",
      eyebrowColor: "text-cyan-500",
      bgClass: "bg-surface-50",
      ctaSubject: "Richiesta Consulenza Etichette",
      products: [
        {
          _key: key(), name: "Afinia DC250 / DC350",
          subtitle: "Fustellatori Semi-Rotativi", subtitle_en: "Semi-Rotary Die-Cutters",
          image: "/images/products/afinia-dc350.png", href: "/prodotti/afinia-dc350",
          desc: "Fustellatori semi-rotativi professionali con laminazione, fustellatura con fustelle flessibili in acciaio, rimozione sfrido, slitting e riavvolgimento. Fino a 30 m/min. Disponibili in larghezza 250 mm e 350 mm.",
          desc_en: "Professional semi-rotary die-cutters with lamination, flexible steel die-cutting, waste removal, slitting and rewinding. Up to 30 m/min. Available in 250 mm and 350 mm widths.",
          specs: ["Velocità fino a 30 m/min","Laminazione integrata","Fustelle flessibili in acciaio","Cilindro magnetico 18\"","Rimozione sfrido automatica","Fino a 15 lame slitting","Modulo vernice UV","Sensore registro laser"],
          specs_en: ["Speed up to 30 m/min","Integrated lamination","Flexible steel dies","18\" magnetic cylinder","Automatic waste removal","Up to 15 slitting blades","UV varnish module","Laser register sensor"],
          gradient: "from-yellow-500 to-yellow-600",
          tag: "Semi-Rotativo", tag_en: "Semi-Rotary",
        },
        {
          _key: key(), name: "Afinia DLF-220L / DLF-350L",
          subtitle: "Fustellatori Digitali Plotter", subtitle_en: "Digital Plotter Die-Cutters",
          image: "/images/products/afinia-dlf-220l.png", href: "/prodotti/afinia-dlf",
          desc: "Fustellatori digitali a plotter: tagliano qualsiasi forma da file digitale senza fustelle fisiche. Laminazione in linea, rimozione sfrido, slitting e riavvolgimento in un unico passaggio. Ideali per tirature brevi e on-demand.",
          desc_en: "Digital plotter die-cutters: cut any shape from digital file without physical dies. Inline lamination, waste removal, slitting and rewinding in a single pass. Ideal for short runs and on-demand.",
          specs: ["Taglio plotter da file digitale","Nessuna fustella fisica necessaria","Qualsiasi forma di etichetta","Laminazione in linea (modelli L)","Rimozione sfrido automatica","Slitting integrato","Larghezza 220 mm o 350 mm","Ideale per tirature brevi"],
          specs_en: ["Plotter cutting from digital file","No physical dies needed","Any label shape","Inline lamination (L models)","Automatic waste removal","Integrated slitting","Width 220 mm or 350 mm","Ideal for short runs"],
          gradient: "from-green-500 to-green-600",
          tag: "Digitale Plotter", tag_en: "Digital Plotter",
        },
      ],
    },
    {
      _type: "productCardList",
      _key: key(),
      sectionEyebrow: "Sistema Integrato",
      sectionEyebrow_en: "Integrated System",
      sectionHeading: "Dalla Bobina Bianca all'Etichetta Finita",
      sectionHeading_en: "From Blank Roll to Finished Label",
      eyebrowColor: "text-magenta-500",
      bgClass: "bg-white",
      ctaSubject: "Richiesta Consulenza Etichette",
      products: [
        {
          _key: key(), name: "Afinia DLP-2200",
          subtitle: "Digital Label Press Completa", subtitle_en: "Complete Digital Label Press",
          image: "/images/products/afinia-dlp2200.avif", href: "/prodotti/afinia-dlp2200",
          desc: "Sistema completo stampa + finitura: dalla bobina bianca all'etichetta finita in un unico passaggio. Integra stampante L901, laminatore, fustellatore rotativo, rimozione sfrido, slitter e doppio riavvolgitore.",
          desc_en: "Complete print + finishing system: from blank roll to finished label in a single pass. Integrates L901 printer, laminator, rotary die-cutter, waste removal, slitter and dual rewinder.",
          specs: ["25.000+ etichette 3×4\" all'ora","Velocità 9–18 m/min","1600 dpi full-color CMYKK","Larghezza stampa max 216 mm","Fustelle acciaio flessibili","Laminazione inclusa in linea","Rotoli fino a 400 mm (~1000 m)","Sensore registro laser"],
          specs_en: ["25,000+ 3×4\" labels/hour","Speed 9–18 m/min","1600 dpi full-color CMYKK","Max print width 216 mm","Flexible steel dies","Inline lamination included","Rolls up to 400 mm (~1000 m)","Laser register sensor"],
          gradient: "from-cyan-500 to-magenta-500",
          tag: "Sistema Completo", tag_en: "Complete System",
        },
      ],
    },
    {
      _type: "ctaBanner",
      _key: key(),
      heading: "Non Sai Quale Stampante Scegliere?",
      heading_en: "Not Sure Which Printer to Choose?",
      text: "Ti aiutiamo a trovare la soluzione perfetta per le tue esigenze. Contattaci per una consulenza gratuita o vieni a testare le macchine nella nostra sala demo.",
      text_en: "We help you find the perfect solution for your needs. Contact us for a free consultation or come test the machines in our demo room.",
      buttonText: "Contattaci Ora",
      buttonText_en: "Contact Us Now",
      buttonUrl: "mailto:info@printsolution.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie",
      bgClass: "bg-surface-50",
    },
  ],
};

const packagingPage = {
  _id: "page-packaging",
  _type: "page",
  title: "Soluzioni Packaging",
  title_en: "Packaging Solutions",
  slug: { _type: "slug", current: "packaging" },
  pageType: "soluzione",
  seo: {
    title: "Soluzioni Packaging On-Demand",
    description: "Soluzioni packaging on-demand: box maker automatici, stampanti single-pass per cartone ondulato, stampa UV e hot foil. Packaging digitale personalizzato.",
    keywords: ["soluzioni packaging on-demand","packaging digitale","box maker automatico","stampa cartone ondulato","packaging personalizzato"],
    image: "/images/hero-packaging.webp",
    canonical: "/soluzioni/packaging",
  },
  sections: [
    {
      _type: "pageHero",
      _key: key(),
      title: "Soluzioni Packaging",
      title_en: "Packaging Solutions",
      subtitle: "Box maker automatici, stampa digitale su cartone ondulato, stampa UV, hot foil stamping e soluzioni speciali per packaging personalizzato.",
      subtitle_en: "Automatic box makers, digital printing on corrugated cardboard, UV printing, hot foil stamping and special solutions for custom packaging.",
      breadcrumb: "Soluzioni",
      breadcrumb_en: "Solutions",
      videoSrc: "/videos/packaging-hero.mp4",
    },
    {
      _type: "productCardList",
      _key: key(),
      sectionEyebrow: "La Nostra Gamma",
      sectionEyebrow_en: "Our Range",
      sectionHeading: "Tutto per il Packaging Digitale",
      sectionHeading_en: "Everything for Digital Packaging",
      eyebrowColor: "text-cyan-500",
      bgClass: "bg-white",
      ctaSubject: "Richiesta Consulenza Packaging",
      products: [
        {
          _key: key(), name: "Anypack AB2500",
          subtitle: "Box Maker Automatico", subtitle_en: "Automatic Box Maker",
          image: "/images/products/ab2500-hero-nobg.png", href: "/prodotti/ab2500",
          desc: "Macchina all-in-one per la creazione di scatole in cartone ondulato: taglio, scanalatura, cordonatura, rifilatura, fustellatura, punzonatura maniglie e incollaggio in un'unica operazione. Progettata per varietà multiple e piccoli ordini.",
          desc_en: "All-in-one machine for creating corrugated cardboard boxes: cutting, slotting, creasing, trimming, die-cutting, handle punching and gluing in a single operation. Designed for multiple varieties and small orders.",
          specs: ["500–600 pezzi/ora","Cambio formato in 10 secondi","100+ modelli Fefco precaricati","20.000 record memorizzabili","Foglio fino a 2500 mm","Spessore cartone 1,5–10 mm","1 solo operatore necessario","Componenti Keyence e Panasonic"],
          specs_en: ["500–600 pieces/hour","Format change in 10 seconds","100+ preloaded Fefco templates","20,000 storable records","Sheet up to 2500 mm","Cardboard thickness 1.5–10 mm","Only 1 operator needed","Keyence and Panasonic components"],
          gradient: "from-cyan-500 to-cyan-600",
          tag: "Box Maker Automatico", tag_en: "Automatic Box Maker",
          brand: "Anypack", brandHref: "/brand/anypack",
        },
        {
          _key: key(), name: "EDM-650X",
          subtitle: "Stampante Single-Pass per Cartone", subtitle_en: "Single-Pass Cardboard Printer",
          image: "/images/products/edm-650x-2hd-nobg-v4.png", href: "/prodotti/edm-650x",
          desc: "Stampa digitale diretta su cartone ondulato e materiali rigidi con tecnologia single-pass HP Pagewide. Velocità industriale, qualità fotografica, inchiostri a base acqua eco-friendly.",
          desc_en: "Direct digital printing on corrugated cardboard and rigid materials with HP Pagewide single-pass technology. Industrial speed, photographic quality, eco-friendly water-based inks.",
          specs: ["Fino a 30 m/min","Risoluzione 1200 × 1200 dpi","CMYK — inchiostri a base acqua","Larghezza stampa 650 mm","Spessore fino a 80 mm","Dati variabili: barcode, QR","Da 2 a 6 testine (scalabile)","Piano aspirato per stabilità"],
          specs_en: ["Up to 30 m/min","Resolution 1200 × 1200 dpi","CMYK — water-based inks","Print width 650 mm","Thickness up to 80 mm","Variable data: barcode, QR","2 to 6 printheads (scalable)","Vacuum table for stability"],
          gradient: "from-magenta-500 to-magenta-600",
          brand: "Print Solution",
        },
        {
          _key: key(), name: "GreenBox EVO",
          subtitle: "Stampante Single-Pass per Packaging", subtitle_en: "Single-Pass Packaging Printer",
          image: "/images/products/greenbox-evo-front-nobg.png", href: "/prodotti/greenbox-evo",
          desc: "Sistema digitale CMYK single-pass per stampa diretta su cartone, carta e juta. Testina HP Pagewide a 30 m/min con inchiostri pigmentati a base acqua. Ideale per scatole, buste, shopper e packaging personalizzato in piccole e medie tirature.",
          desc_en: "CMYK single-pass digital system for direct printing on cardboard, paper and jute. HP Pagewide printhead at 30 m/min with pigmented water-based inks. Ideal for boxes, envelopes, shoppers and custom packaging in short and medium runs.",
          specs: ["Fino a 30 m/min","Risoluzione 1200 × 1200 dpi","CMYK — inchiostri a base acqua","Larghezza stampa fino a 30 cm","Supporto fino a 70 cm","Spessore fino a 15 cm","Taniche 3L per colore","Alimentatore automatico opzionale"],
          specs_en: ["Up to 30 m/min","Resolution 1200 × 1200 dpi","CMYK — water-based inks","Print width up to 30 cm","Media up to 70 cm","Thickness up to 15 cm","3L tanks per colour","Optional automatic feeder"],
          gradient: "from-green-500 to-green-600",
          brand: "Print Solution",
        },
        {
          _key: key(), name: "PackPrinter UV",
          subtitle: "Stampante UV Single-Pass", subtitle_en: "UV Single-Pass Printer",
          image: "/images/products/packprinter-uv.avif", href: "/prodotti/packprinter-uv",
          desc: "Stampa digitale UV ad alta velocità su materiali porosi e non porosi, incluso vetro, PVC, legno, ceramica e materiali sintetici. 9 configurazioni disponibili dalla compatta all'industriale.",
          desc_en: "High-speed UV digital printing on porous and non-porous materials, including glass, PVC, wood, ceramics and synthetic materials. 9 configurations available from compact to industrial.",
          specs: ["Fino a 50 m/min","CMYK + Bianco (5 colori)","Risoluzione 600 × 1200 dpi","Luce stampa da 12 a 118 cm","Stampa su vetro e ceramica","Testine S3200 U3, 3200 ugelli","Asciugatura UV istantanea","9 configurazioni disponibili"],
          specs_en: ["Up to 50 m/min","CMYK + White (5 colours)","Resolution 600 × 1200 dpi","Print width from 12 to 118 cm","Prints on glass and ceramics","S3200 U3 printheads, 3200 nozzles","Instant UV curing","9 configurations available"],
          gradient: "from-yellow-500 to-yellow-600",
          brand: "Print Solution",
        },
      ],
    },
    {
      _type: "ctaBanner",
      _key: key(),
      heading: "Vieni a Vedere le Macchine in Azione",
      heading_en: "Come See the Machines in Action",
      text: "La nostra sala demo a Sesto San Giovanni è attrezzata con tutti i prodotti in funzione. Porta i tuoi materiali e testa direttamente le soluzioni.",
      text_en: "Our demo room in Sesto San Giovanni is equipped with all products up and running. Bring your materials and test the solutions directly.",
      secondButtonText: "Chiamaci Ora",
      secondButtonText_en: "Call Us Now",
      secondButtonUrl: "tel:+390249439417",
      bgClass: "bg-surface-50",
    },
  ],
};

const shopperPage = {
  _id: "page-shopper",
  _type: "page",
  title: "Shopper & Packaging di Lusso",
  title_en: "Shoppers & Luxury Packaging",
  slug: { _type: "slug", current: "shopper" },
  pageType: "soluzione",
  seo: {
    title: "Shopper & Packaging di Lusso - Hot Foil",
    description: "Stampa hot foil digitale e stampa diretta per shopper, buste e packaging premium. Nobilitazione con foil metallizzati, personalizzazione on-demand.",
    canonical: "/soluzioni/shopper",
  },
  sections: [
    {
      _type: "pageHero",
      _key: key(),
      title: "Shopper & Packaging di Lusso",
      title_en: "Shoppers & Luxury Packaging",
      subtitle: "Stampa hot foil digitale e stampa diretta per shopper, buste e packaging premium. Nobilitazione e personalizzazione on-demand.",
      subtitle_en: "Digital hot foil stamping and direct printing for shoppers, bags and premium packaging. On-demand embellishment and customisation.",
      breadcrumb: "Soluzioni",
      breadcrumb_en: "Solutions",
      videoSrc: "/videos/shopper-hero.mp4",
    },
    {
      _type: "productCardList",
      _key: key(),
      sectionEyebrow: "La Nostra Gamma",
      sectionEyebrow_en: "Our Range",
      sectionHeading: "Personalizza Ogni Shopper e Packaging",
      sectionHeading_en: "Customise Every Shopper and Package",
      eyebrowColor: "text-amber-500",
      bgClass: "bg-white",
      ctaSubject: "Richiesta Consulenza Shopper",
      products: [
        {
          _key: key(), name: "AurumPress",
          subtitle: "Stampa a Caldo Digitale - Hot Foil", subtitle_en: "Digital Hot Foil Stamping",
          image: "/images/products/aurumpress-nobg.png", href: "/prodotti/aurumpress",
          desc: "Stampa termica digitale con foil metallizzati (oro, argento, colori), olografici e trasparente lucido. Nobilitazione on-demand per shopper, scatole, buste, etichette e packaging premium.",
          desc_en: "Digital thermal printing with metallic foils (gold, silver, colours), holographic and glossy transparent. On-demand embellishment for shoppers, boxes, bags, labels and premium packaging.",
          specs: ["Foil oro, argento, colori, olografico","Risoluzione 300 × 300 dpi","Area stampa 320 × 470 mm","Cliché necessario","Stampa da 1 pezzo (on-demand)","Dato variabile non possibile","Supporti: carta, cartone, pelle, legno","Nessun software presente"],
          specs_en: ["Gold, silver, colour, holographic foils","Resolution 300 × 300 dpi","Print area 320 × 470 mm","Cliché required","Print from 1 piece (on-demand)","Variable data not possible","Substrates: paper, cardboard, leather, wood","No software included"],
          gradient: "from-amber-500 to-amber-600",
          brand: "Print Solution",
        },
        {
          _key: key(), name: "GreenBox EVO",
          subtitle: "Stampante Single-Pass per Shopper e Buste", subtitle_en: "Single-Pass Printer for Shoppers and Bags",
          image: "/images/products/greenbox-evo-front-nobg.png", href: "/prodotti/greenbox-evo",
          desc: "Stampa digitale CMYK diretta su shopper, buste, carta kraft, juta e cartone. Tecnologia single-pass HP Pagewide a 30 m/min con inchiostri pigmentati a base acqua. Personalizzazione completa on-demand, anche a tiratura 1.",
          desc_en: "Direct CMYK digital printing on shoppers, bags, kraft paper, jute and cardboard. HP Pagewide single-pass technology at 30 m/min with pigmented water-based inks. Complete on-demand customisation, even for a run of 1.",
          specs: ["Fino a 30 m/min","Risoluzione 1200 × 1200 dpi","CMYK - inchiostri a base acqua","Larghezza stampa fino a 30 cm","Supporto fino a 70 cm","Spessore fino a 15 cm","Stampa su kraft, juta, carta, cartone","Alimentatore automatico opzionale"],
          specs_en: ["Up to 30 m/min","Resolution 1200 × 1200 dpi","CMYK – water-based inks","Print width up to 30 cm","Media up to 70 cm","Thickness up to 15 cm","Print on kraft, jute, paper, cardboard","Optional automatic feeder"],
          gradient: "from-green-500 to-green-600",
          brand: "Print Solution",
        },
      ],
    },
    {
      _type: "useCasesGrid",
      _key: key(),
      eyebrow: "Applicazioni",
      eyebrow_en: "Applications",
      heading: "Per Chi Sono Pensate",
      heading_en: "Who They Are Designed For",
      eyebrowColor: "text-amber-500",
      bgClass: "bg-surface-50",
      cases: [
        { _key: key(), title: "Boutique & Fashion", title_en: "Boutique & Fashion", desc: "Shopper personalizzati con logo in hot foil oro o argento per boutique, gioiellerie e brand moda.", desc_en: "Custom shoppers with gold or silver hot foil logo for boutiques, jewellers and fashion brands.", icon: "👗" },
        { _key: key(), title: "Food & Wine", title_en: "Food & Wine", desc: "Packaging premium per cantine, pasticcerie e food gourmet. Personalizzazione su kraft, cartone e materiali naturali.", desc_en: "Premium packaging for wineries, patisseries and gourmet food. Customisation on kraft, cardboard and natural materials.", icon: "🍷" },
        { _key: key(), title: "Eventi & Luxury", title_en: "Events & Luxury", desc: "Buste e shopper per eventi, wedding, corporate gift e edizioni limitate con finiture metalliche e olografiche.", desc_en: "Bags and shoppers for events, weddings, corporate gifts and limited editions with metallic and holographic finishes.", icon: "🎁" },
      ],
    },
    {
      _type: "ctaBanner",
      _key: key(),
      heading: "Vuoi Creare il Tuo Packaging Personalizzato?",
      heading_en: "Want to Create Your Custom Packaging?",
      text: "Contattaci per una consulenza gratuita o inviaci i tuoi file per ricevere campioni stampati. La nostra sala demo è a Sesto San Giovanni.",
      text_en: "Contact us for a free consultation or send us your files to receive printed samples. Our demo room is in Sesto San Giovanni.",
      buttonText: "Contattaci Ora",
      buttonText_en: "Contact Us Now",
      buttonUrl: "mailto:info@printsolution.it?subject=Richiesta%20Info%20Shopper%20%26%20Packaging%20di%20Lusso&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni%20sulle%20soluzioni%20per%20shopper%20e%20packaging%20di%20lusso.%0A%0AGrazie",
      secondButtonText: "Chiamaci",
      secondButtonText_en: "Call Us",
      secondButtonUrl: "tel:+390249439417",
      bgClass: "bg-white",
    },
  ],
};

// I'll continue with labbratura and consumabili - reading those pages first
// For now, let me include the pages I've fully read

const chiSiamoPage = {
  _id: "page-chi-siamo",
  _type: "page",
  title: "Chi Siamo",
  title_en: "About Us",
  slug: { _type: "slug", current: "chi-siamo" },
  pageType: "chi-siamo",
  seo: {
    title: "Chi Siamo",
    description: "Print Solution S.r.l. — Dal 2010, distributore italiano di soluzioni digitali per stampa packaging, etichette e consumabili. Sesto San Giovanni (MI).",
    canonical: "/chi-siamo",
  },
  sections: [
    {
      _type: "pageHero",
      _key: key(),
      title: "Chi Siamo",
      title_en: "About Us",
      subtitle: "Dal 2010, punto di riferimento in Italia per le soluzioni digitali di stampa packaging, etichette e consumabili.",
      subtitle_en: "Since 2010, Italy's reference point for digital printing solutions for packaging, labels and consumables.",
      breadcrumb: "Print Solution",
      breadcrumb_en: "Print Solution",
      imageSrc: "/images/chi-siamo-team.jpg",
    },
    {
      _type: "storyStats",
      _key: key(),
      eyebrow: "La Nostra Storia",
      eyebrow_en: "Our Story",
      heading: "Oltre 15 Anni di Esperienza",
      heading_en: "Over 15 Years of Experience",
      body: "Print Solution S.r.l. nasce nel <strong>2010</strong> a Sesto San Giovanni (MI) con una missione chiara: portare in Italia le migliori soluzioni di stampa digitale per packaging ed etichette.\n\nIn oltre 15 anni di attività abbiamo costruito partnership solide con i brand leader del settore — Afinia Label, GreenBox, Anypack e DTM Print — diventando il loro distributore ufficiale per il mercato italiano.\n\nNon siamo semplici rivenditori: affianchiamo i nostri clienti dalla consulenza iniziale alla formazione, dall'installazione all'assistenza post-vendita, con un team dedicato e competente.",
      body_en: "Print Solution S.r.l. was founded in <strong>2010</strong> in Sesto San Giovanni (Milan) with a clear mission: to bring the best digital printing solutions for packaging and labels to Italy.\n\nOver more than 15 years we have built solid partnerships with leading brands in the industry — Afinia Label, GreenBox, Anypack and DTM Print — becoming their official distributor for the Italian market.\n\nWe are not just resellers: we support our clients from initial consultation to training, from installation to after-sales service, with a dedicated and skilled team.",
      stats: [
        { _key: key(), value: "2010", label: "Anno di fondazione", label_en: "Year Founded" },
        { _key: key(), value: "15+", label: "Anni di esperienza", label_en: "Years of experience" },
        { _key: key(), value: "1500+", label: "Clienti serviti", label_en: "Clients served" },
        { _key: key(), value: "5", label: "Brand distribuiti", label_en: "Brands distributed" },
      ],
    },
    {
      _type: "valuesGrid",
      _key: key(),
      heading: "I Nostri Valori",
      heading_en: "Our Values",
      values: [
        { _key: key(), icon: "🎯", title: "Competenza", title_en: "Expertise", desc: "Conosciamo ogni prodotto nel dettaglio. Il nostro team tecnico ha formazione diretta dai produttori e anni di esperienza sul campo.", desc_en: "We know every product inside out. Our technical team receives training directly from manufacturers and has years of field experience." },
        { _key: key(), icon: "🤝", title: "Partnership", title_en: "Partnership", desc: "Non vendiamo macchine: costruiamo relazioni. Affianchiamo il cliente dalla consulenza iniziale alla crescita del business.", desc_en: "We don't sell machines: we build relationships. We support clients from initial consulting to business growth." },
        { _key: key(), icon: "⚡", title: "Innovazione", title_en: "Innovation", desc: "Siamo sempre alla ricerca delle tecnologie più avanzate per offrire soluzioni all'avanguardia nel mercato della stampa digitale.", desc_en: "We are always looking for the most advanced technologies to offer cutting-edge solutions in the digital printing market." },
      ],
    },
    {
      _type: "demoRoom",
      _key: key(),
      eyebrow: "Il Nostro Spazio",
      eyebrow_en: "Our Space",
      heading: "Sala Demo",
      heading_en: "Demo Room",
      body: "La nostra sede a Sesto San Giovanni ospita una <strong>sala demo completamente attrezzata</strong> dove potrai vedere e testare dal vivo tutte le nostre soluzioni.\n\nPorta i tuoi materiali — cartone, etichette, shopper — e li stamperemo insieme. È il modo migliore per valutare qualità, velocità e resa prima dell'acquisto.\n\nLe demo sono su appuntamento e completamente gratuite.",
      body_en: "Our headquarters in Sesto San Giovanni houses a <strong>fully equipped demo room</strong> where you can see and test all our solutions first-hand.\n\nBring your materials — cardboard, labels, shoppers — and we will print them together. It is the best way to evaluate quality, speed and output before purchasing.\n\nDemos are by appointment and completely free of charge.",
      buttonText: "Consulenza gratuita",
      buttonText_en: "Free consultation",
      buttonUrl: "mailto:info@printsolution.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie",
    },
    {
      _type: "teamSection",
      _key: key(),
      heading: "Il Nostro Team",
      heading_en: "Our Team",
      description: "Un team compatto ma altamente specializzato: commerciale, tecnico e assistenza. Ogni membro ha formazione diretta dai produttori che distribuiamo.",
      description_en: "A compact but highly specialised team: sales, technical and support. Every member receives training directly from the manufacturers we distribute.",
      teamPhoto: "/images/team-photo.webp",
      roles: [
        { _key: key(), role: "Commerciale", role_en: "Sales", desc: "Consulenza, demo, analisi delle esigenze del cliente", desc_en: "Consulting, demos, client needs analysis" },
        { _key: key(), role: "Tecnico", role_en: "Technical", desc: "Installazione, formazione, configurazione macchine", desc_en: "Installation, training, machine configuration" },
        { _key: key(), role: "Assistenza", role_en: "Support", desc: "Supporto post-vendita, ricambi, Care Pack", desc_en: "After-sales support, spare parts, Care Pack" },
      ],
    },
    {
      _type: "ctaBanner",
      _key: key(),
      heading: "Lavoriamo Insieme",
      heading_en: "Let's Work Together",
      text: "Contattaci per una consulenza gratuita o prenota una visita nella nostra sala demo.",
      text_en: "Contact us for a free consultation or book a visit to our demo room.",
      buttonText: "Contattaci",
      buttonText_en: "Contact Us",
      buttonUrl: "mailto:info@printsolution.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie",
      bgClass: "bg-surface-50",
    },
  ],
};

const soluzioniListingPage = {
  _id: "page-soluzioni",
  _type: "page",
  title: "Le Nostre Soluzioni",
  title_en: "Our Solutions",
  slug: { _type: "slug", current: "soluzioni" },
  pageType: "soluzioni-listing",
  seo: {
    title: "Le Nostre Soluzioni di Stampa Digitale",
    description: "Tutte le soluzioni digitali Print Solution: packaging, etichette, labbratura libri, shopper e packaging di lusso, consumabili.",
    canonical: "/soluzioni",
  },
  sections: [
    {
      _type: "soluzioniHero",
      _key: key(),
      eyebrow: "Print Solution",
      eyebrow_en: "Print Solution",
      title: "Le Nostre Soluzioni",
      title_en: "Our Solutions",
      subtitle: "Tecnologie digitali per stampa e personalizzazione: dal packaging industriale alle etichette, dalla labbratura libri allo shopper di lusso.",
      subtitle_en: "Digital technologies for printing and customization: from industrial packaging to labels, from book edge printing to luxury shoppers.",
    },
    {
      _type: "solutionCategoryList",
      _key: key(),
      categories: [
        { _key: key(), name: "Packaging", name_en: "Packaging", desc: "Stampa digitale su cartone ondulato, box maker automatici e stampa UV diretta su packaging rigido.", desc_en: "Digital printing on corrugated cardboard, automatic box makers and direct UV printing on rigid packaging.", href: "/soluzioni/packaging", image: "/images/products/edm-650x-photo.avif", color: "from-cyan-500 to-cyan-600", icon: "📦" },
        { _key: key(), name: "Etichette", name_en: "Labels", desc: "Stampanti professionali per etichette in bobina e a foglio: dalla piccola tiratura alla produzione industriale.", desc_en: "Professional printers for roll and sheet labels: from short runs to industrial production.", href: "/soluzioni/etichette", image: "/images/products/afinia-l901.png", color: "from-emerald-500 to-emerald-600", icon: "🏷️" },
        { _key: key(), name: "Shopper & Packaging di Lusso", name_en: "Shoppers & Luxury Packaging", desc: "Stampa hot foil e stampa digitale per shopper, buste e packaging premium con finiture metalliche e personalizzazione.", desc_en: "Hot foil and digital printing for shoppers, bags and premium packaging with metallic finishes and customization.", href: "/soluzioni/shopper", image: "/images/products/aurumpress-nobg.png", color: "from-amber-500 to-amber-600", icon: "🛍️" },
        { _key: key(), name: "Labbratura Libri", name_en: "Book Edge Printing", desc: "Stampa digitale sui bordi di libri, quaderni e block notes per personalizzazioni uniche e di alta qualità.", desc_en: "Digital printing on book edges of books, notebooks and notepads for unique, high-quality customizations.", href: "/soluzioni/labbratura", image: "/images/products/book-edge-printer.png", color: "from-violet-500 to-violet-600", icon: "📚" },
        { _key: key(), name: "Consumabili", name_en: "Consumables", desc: "Inchiostri, testine di stampa, cartucce e materiali di consumo per tutte le nostre soluzioni.", desc_en: "Inks, printheads, cartridges and consumable materials for all our solutions.", href: "/soluzioni/consumabili", image: "/images/products/afinia-x350-site.webp", color: "from-rose-500 to-rose-600", icon: "🖨️" },
      ],
    },
    {
      _type: "simpleCta",
      _key: key(),
      heading: "Non sai quale soluzione fa per te?",
      heading_en: "Not sure which solution is right for you?",
      text: "Il nostro team ti aiuta a scegliere la tecnologia più adatta alle tue esigenze. Contattaci per una consulenza gratuita.",
      text_en: "Our team helps you choose the most suitable technology for your needs. Contact us for a free consultation.",
      buttonText: "Contattaci →",
      buttonText_en: "Contact Us →",
      buttonUrl: "mailto:info@printsolution.it?subject=Richiesta%20Informazioni&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sulle%20vostre%20soluzioni.%0A%0AGrazie",
      bgClass: "bg-surface-50",
    },
  ],
};

// ════════════════════════════════════════════════════════════
// AB2500 Product Page (as example — others follow same pattern)
// ════════════════════════════════════════════════════════════

const ab2500Page = {
  _id: "page-ab2500",
  _type: "page",
  title: "Anypack AB2500",
  slug: { _type: "slug", current: "ab2500" },
  pageType: "prodotto",
  seo: {
    title: "Anypack AB2500 - Box Maker Automatico",
    description: "Anypack AB2500: box maker automatico per scatole in cartone ondulato. 500-600 pezzi/ora, cambio formato in 10 sec. Print Solution",
    keywords: ["box maker automatico","macchina produzione scatole","Anypack AB2500","scatole cartone ondulato","box maker on-demand"],
    image: "/images/products/ab2500.png",
    canonical: "/prodotti/ab2500",
  },
  seo_en: {
    title: "Anypack AB2500 - Automatic Box Maker",
    description: "Anypack AB2500: automatic box maker for corrugated cardboard. 500-600 boxes/hour, format change in 10 sec. Print Solution",
  },
  sections: [
    {
      _type: "productHero",
      _key: key(),
      breadcrumb: "Prodotti",
      breadcrumb_en: "Products",
      productName: "Anypack AB2500",
      description: "Box maker automatico all-in-one. Taglio, scanalatura, cordonatura e incollaggio in un'unica macchina. 500-600 scatole/ora con cambio formato in 10 secondi.",
      description_en: "All-in-one automatic box maker. Cutting, creasing, scoring and gluing in a single machine. 500–600 boxes/hour with format change in 10 seconds.",
      videoSrc: "/videos/ab2500-hero.mp4",
      ctaText: "Consulenza gratuita→",
      ctaText_en: "Free consultation→",
      ctaUrl: "mailto:info@printsolution.it?subject=Richiesta%20Consulenza%20Anypack%20AB2500&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20Anypack%20AB2500.%0A%0AGrazie",
    },
    {
      _type: "productPhoto",
      _key: key(),
      imageSrc: "/images/products/ab2500-hero-nobg.png",
      alt: "Anypack AB2500",
    },
    {
      _type: "productDescription",
      _key: key(),
      heading: "Produzione Automatica di Scatole",
      heading_en: "Automatic Box Production",
      body: "L'Anypack AB2500 è un box maker completamente automatico che esegue taglio, scanalatura, cordonatura e incollaggio in un'unica operazione. Progettato per la produzione industriale di scatole in cartone ondulato, garantisce una produttività di 500-600 scatole all'ora.\n\nIl cambio formato avviene in soli 10 secondi, eliminando i tempi morti e massimizzando l'efficienza produttiva. La macchina lavora con cartone da 1 a 7mm di spessore, adattandosi sia a imballi leggeri che a scatole per spedizioni pesanti.\n\nIl sistema di incollaggio a caldo e a freddo consente di lavorare con ogni tipo di cartone e applicazione. L'AB2500 è la soluzione ideale per scatolifici, centri di logistica e aziende che necessitano di produzione on-demand di imballaggi personalizzati.",
      body_en: "The Anypack AB2500 is a fully automatic box maker that performs cutting, creasing, scoring and gluing in a single operation. Designed for industrial production of corrugated cardboard boxes, it delivers a throughput of 500–600 boxes per hour.\n\nFormat changeover takes just 10 seconds, eliminating downtime and maximising production efficiency. The machine handles cardboard from 1 to 7 mm thick, suiting both lightweight packaging and heavy-duty shipping boxes.\n\nThe hot and cold gluing system works with every type of cardboard and application. The AB2500 is the ideal solution for box manufacturers, logistics centres and companies requiring on-demand production of custom packaging.",
    },
    {
      _type: "productVideo",
      _key: key(),
      eyebrow: "Video",
      eyebrow_en: "Video",
      heading: "AB2500 in Azione",
      heading_en: "AB2500 in Action",
      videoSrc: "/videos/ab2500-2.mp4",
      posterSrc: "/images/posters/ab2500-2.jpg",
    },
    {
      _type: "featuresGrid",
      _key: key(),
      heading: "Vantaggi Principali",
      heading_en: "Key Advantages",
      gradientFrom: "from-cyan-500",
      gradientTo: "to-yellow-500",
      features: [
        { _key: key(), title: "Alta Produttività", title_en: "High Throughput", desc: "500-600 scatole all'ora: produzione industriale con un'unica macchina compatta e versatile.", desc_en: "500–600 boxes per hour: industrial production with a single compact and versatile machine.", iconSvg: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
        { _key: key(), title: "Cambio Formato in 10 secondi", title_en: "Format Change in 10 Seconds", desc: "Passaggio istantaneo tra formati diversi senza fermo macchina. Massima flessibilità produttiva.", desc_en: "Instant switchover between different formats without downtime. Maximum production flexibility.", iconSvg: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
        { _key: key(), title: "All-in-One", title_en: "All-in-One", desc: "Taglio, scanalatura, cordonatura e incollaggio in un'unica operazione automatica. Zero passaggi manuali.", desc_en: "Cutting, creasing, scoring and gluing in a single automatic operation. Zero manual steps.", iconSvg: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" },
        { _key: key(), title: "Cartone da 1 a 7mm", title_en: "Cardboard 1 to 7mm", desc: "Lavora con un ampio range di spessori, dal cartone leggero fino a 7mm per imballi pesanti.", desc_en: "Works with a wide range of thicknesses, from lightweight cardboard up to 7mm for heavy-duty packaging.", iconSvg: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
        { _key: key(), title: "Doppio Incollaggio", title_en: "Dual Gluing", desc: "Sistema di incollaggio a caldo e a freddo per adattarsi a ogni tipo di cartone e applicazione.", desc_en: "Hot and cold gluing system to adapt to any type of cardboard and application.", iconSvg: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
        { _key: key(), title: "ROI Rapido", title_en: "Quick ROI", desc: "L'automazione completa riduce i costi di manodopera e aumenta la produttività. Ritorno sull'investimento in tempi brevi.", desc_en: "Full automation reduces labor costs and increases productivity. Quick return on investment.", iconSvg: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" },
      ],
    },
    {
      _type: "specsTable",
      _key: key(),
      heading: "Specifiche Tecniche",
      heading_en: "Technical Specifications",
      specs: [
        { _key: key(), label: "Tipo macchina", value: "Box maker automatico all-in-one" },
        { _key: key(), label: "Operazioni", value: "Taglio, scanalatura, cordonatura, incollaggio" },
        { _key: key(), label: "Produttività", value: "500-600 scatole/ora" },
        { _key: key(), label: "Cambio formato", value: "10 secondi" },
        { _key: key(), label: "Spessore cartone", value: "Da 1 a 7 mm" },
        { _key: key(), label: "Incollaggio", value: "A caldo e a freddo" },
        { _key: key(), label: "Automazione", value: "Completamente automatico" },
      ],
      specs_en: [
        { _key: key(), label: "Machine type", value: "All-in-one automatic box maker" },
        { _key: key(), label: "Operations", value: "Cutting, creasing, scoring, gluing" },
        { _key: key(), label: "Throughput", value: "500-600 boxes/hour" },
        { _key: key(), label: "Format changeover", value: "10 seconds" },
        { _key: key(), label: "Cardboard thickness", value: "From 1 to 7 mm" },
        { _key: key(), label: "Gluing", value: "Hot and cold" },
        { _key: key(), label: "Automation", value: "Fully automatic" },
      ],
    },
    {
      _type: "simpleCta",
      _key: key(),
      heading: "Automatizza la Produzione di Scatole",
      heading_en: "Automate Your Box Production",
      text: "Scopri come l'AB2500 può rivoluzionare la tua linea di produzione. Vieni a vederla nella nostra sala demo.",
      text_en: "Discover how the AB2500 can revolutionise your production line. Come see it in our demo room.",
      buttonText: "Consulenza gratuita→",
      buttonText_en: "Free consultation→",
      buttonUrl: "mailto:info@printsolution.it?subject=Richiesta%20Consulenza%20Anypack%20AB2500&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20Anypack%20AB2500.%0A%0AGrazie",
      bgClass: "bg-surface-50",
    },
    {
      _type: "relatedProducts",
      _key: key(),
      heading: "Prodotti Correlati",
      heading_en: "Related Products",
      products: [
        { _key: key(), name: "GreenBox EVO", desc: "Stampante single-pass per packaging", desc_en: "Single-pass printer for packaging", href: "/prodotti/greenbox-evo", image: "/images/products/greenbox-evo-site-nobg.png" },
        { _key: key(), name: "EDM-650X", desc: "Stampante single-pass grande formato", desc_en: "Large format single-pass printer", href: "/prodotti/edm-650x", image: "/images/products/edm-650x-2hd-nobg-v4.png" },
        { _key: key(), name: "AurumPress", desc: "Stampatrice termica per foil", desc_en: "Thermal foil printer", href: "/prodotti/aurumpress", image: "/images/products/aurumpress-nobg.png" },
      ],
    },
  ],
};

// ════════════════════════════════════════════════════════════
// Migrate all pages
// ════════════════════════════════════════════════════════════

const allPages = [
  etichettePage,
  packagingPage,
  shopperPage,
  chiSiamoPage,
  soluzioniListingPage,
  ab2500Page,
];

async function migrate() {
  console.log(`Migrating ${allPages.length} pages to Sanity...`);
  
  for (const page of allPages) {
    try {
      console.log(`  Creating/updating: ${page.title} (${page._id})`);
      await client.createOrReplace(page);
      console.log(`  ✅ ${page.title}`);
    } catch (err) {
      console.error(`  ❌ Failed: ${page.title}`, err);
    }
  }
  
  console.log("\nDone! Migrated pages:");
  allPages.forEach(p => console.log(`  - ${p.title} → /${p.pageType === 'prodotto' ? 'prodotti' : p.pageType === 'chi-siamo' ? 'chi-siamo' : 'soluzioni'}/${p.slug._type === 'slug' ? p.slug.current : p.slug}`));
}

migrate().catch(console.error);
