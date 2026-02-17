import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isIt = locale === 'it';
  return {
    title: isIt ? "GreenBox Print Book \u2014 Labbratura Digitale Libri" : "GreenBox Print Book - Digital Book Edge Printer",
    description: isIt
      ? "GreenBox Print Book: stampante per labbratura libri con tecnologia HP PageWide. Single-pass, 30 m/min, 1200 dpi. Print Solution"
      : "GreenBox Print Book: book edge printer with HP PageWide technology. Single-pass, 30 m/min, 1200 dpi. Print Solution",
    keywords: [
    "labbratura libri",
    "GreenBox Print Book",
    "stampa dorso libri",
    "labbratura digitale",
    "stampa packaging",
    "GreenBox 2",
  ],
    openGraph: {
      title: isIt ? "GreenBox Print Book \u2014 Labbratura Digitale Libri | Print Solution" : "GreenBox Print Book - Digital Book Edge Printer | Print Solution",
      description: isIt
        ? "GreenBox Print Book: stampante per labbratura libri con tecnologia HP PageWide. Single-pass, 30 m/min, 1200 dpi. Print Solution"
        : "GreenBox Print Book: book edge printer with HP PageWide technology. Single-pass, 30 m/min, 1200 dpi. Print Solution",
      images: ["/images/products/greenbox-evo-site-nobg.png"],
      type: "website",
      locale: isIt ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: "/prodotti/greenbox-print-book" },
  };
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "GreenBox Print Book",
  brand: { "@type": "Brand", name: "Print Solution" },
  description:
    "Soluzione digitale per la labbratura dei libri basata su GreenBox 2. Stampa inkjet HP PageWide single-pass, inchiostri a base acqua, 30 m/min, 1200x1200 dpi. Industria 4.0 ready.",
  image: "https://www.printsolution.it/images/products/greenbox-evo-site-nobg.png",
  manufacturer: { "@type": "Organization", name: "Print Solution S.r.l." },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "EUR",
    seller: { "@type": "Organization", name: "Print Solution S.r.l." },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolution.it" },
    { "@type": "ListItem", position: 2, name: "{locale === 'it' ? 'Labbratura Libri' : 'Book Edge Printing'}", item: "https://www.printsolution.it/soluzioni/labbratura" },
    { "@type": "ListItem", position: 3, name: "GreenBox Print Book", item: "https://www.printsolution.it/prodotti/greenbox-print-book" },
  ],
};

function getSpecsLocal(l: string): [string, string][] { return l === 'it' ? [
  ["Sistema di stampa", "Getto di inchiostro ultraveloce HP PageWide"],
  ["Tipo di inchiostro", "Base acqua pigmentato, 4 cartucce CMYK"],
  ["Testina di stampa", "HP single-pass di ultima generazione"],
  ["Capacità inchiostri", "C 250 ml, M 250 ml, Y 250 ml, K 500 ml"],
  ["Risoluzione di stampa", "Fino a 1200×1200 dpi"],
  ["Velocità di stampa", "Fino a 30 m/min"],
  ["Area di stampa", "297 mm (passaggio singolo), larghezza max 90 cm"],
  ["Passaggio carta/cartone", "Spessore max 11 cm, larghezza max 100 cm, lunghezza max 160 cm"],
  ["Escursione testa", "Microregolabile su larghezza piano di lavoro fino a 80 cm"],
  ["Altezza escursione verticale", "Fino a 30 cm di spessore"],
  ["Sensore supporto", "Ottico"],
  ["Lunghezza piano motorizzato", "180 cm"],
  ["Dimensioni (L×P×A)", "210 × 160 × 140 cm"],
  ["Peso", "120 kg"],
  ["Sistema operativo", "Windows XP, Vista, 7, 10"],
] : [
  ["Print system", "HP PageWide ultra-fast inkjet"],
  ["Ink type", "Pigmented water-based, 4 CMYK cartridges"],
  ["Printhead", "Latest generation HP single-pass"],
  ["Ink capacity", "C 250 ml, M 250 ml, Y 250 ml, K 500 ml"],
  ["Print resolution", "Up to 1200×1200 dpi"],
  ["Print speed", "Up to 30 m/min"],
  ["Print area", "297 mm (single pass), max width 90 cm"],
  ["Paper/cardboard passage", "Max thickness 11 cm, max width 100 cm, max length 160 cm"],
  ["Head travel", "Micro-adjustable across work surface up to 80 cm"],
  ["Vertical travel height", "Up to 30 cm thickness"],
  ["Media sensor", "Optical"],
  ["Motorised bed length", "180 cm"],
  ["Dimensions (L×W×H)", "210 × 160 × 140 cm"],
  ["Weight", "120 kg"],
  ["Operating system", "Windows XP, Vista, 7, 10"],
]; }

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "30 Metri al Minuto", titleEn: "30 Meters per Minute",
    desc: "Velocità di stampa eccezionale grazie alla testina HP single-pass. Produttività elevata per qualsiasi volume.", descEn: "Exceptional print speed thanks to the HP single-pass printhead. Full coverage in a single pass.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "1200×1200 DPI", titleEn: "1200×1200 DPI",
    desc: "Risoluzione massima per labbrature dettagliate con colori vividi e sfumature precise sul dorso dei libri.", descEn: "Maximum resolution for detailed edge printing with vivid colors and sharp text on every book.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Inchiostri a Base Acqua", titleEn: "Water-Based Inks",
    desc: "Senza solventi e totalmente inodore. Resistenti agli agenti atmosferici, allo sfregamento e all\u2019acqua.", descEn: "Solvent-free and completely odorless. Resistant to weathering, rubbing and water.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Testa Microregolabile", titleEn: "Micro-Adjustable Head",
    desc: "Regolazione micrometrica con display digitale. Escursione verticale fino a 30 cm per adattarsi a qualsiasi formato.", descEn: "Micrometric adjustment with digital display. Vertical travel from 5 to 50 cm for any book format.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Industria 4.0 Ready", titleEn: "Industry 4.0 Ready",
    desc: "Con il software opzionale GreenFlow risponde ai requisiti per i crediti d\u2019imposta del piano Industria 4.0 del MISE.", descEn: "With the optional GreenFlow software, it meets Industry 4.0 requirements for tax credits and interconnection.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Software GreenFlow", titleEn: "GreenFlow Software",
    desc: "Gestione colori, dato variabile, codici a barre/QR, nesting, calcolo costi e reportistica completa per Industria 4.0.", descEn: "Color management, variable data, barcodes/QR codes, nesting, print preview and advanced settings.",
  },
];

export default async function GreenBoxPrintBookPage() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: "center 33%"}}>
          <source src="/videos/greenbox-printbook-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-green-300 text-sm mb-3 uppercase tracking-widest font-medium">{locale === 'it' ? 'Labbratura Libri' : 'Book Edge Printing'}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                GreenBox<br />
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Print Book</span>
              </h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                {locale === 'it' ? 'La soluzione digitale per la labbratura dei libri. Stampa inkjet HP single-pass a base acqua, 30 m/min, 1200×1200 dpi. Industria 4.0 ready.' : 'The digital solution for book edge printing. HP single-pass inkjet with water-based inks, 30 m/min, 1200×1200 dpi. Industry 4.0 ready.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolution.it?subject=Richiesta%20Consulenza%20GreenBox%20Print%20Book&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20GreenBox%20Print%20Book.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">{locale === 'it' ? 'Consulenza gratuita→' : 'Free consultation→'}</a>
              </div>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image src="/images/products/greenbox-printbook.jpg" alt="GreenBox Print Book" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{locale === 'it' ? 'Labbratura Digitale dei Libri' : 'Digital Book Edge Printing'}</h2>
          {locale === 'it' ? (<><p className="text-gray-500 leading-relaxed mb-4">
            La GreenBox Print Book trasforma la versatile piattaforma GreenBox 2 in una soluzione dedicata 
            alla labbratura digitale dei libri. Grazie alla tecnologia HP PageWide single-pass con inchiostri 
            pigmentati a base acqua, stampa direttamente in quadricromia sul dorso dei libri, rendendoli unici.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            La testa di stampa da 297 mm, montata su un binario mobile con escursione di 80 cm, consente di 
            centrare l&apos;area di stampa con precisione. Il sistema micrometrico con display digitale 
            permette una regolazione accurata dell&apos;altezza, con escursione verticale fino a 30 cm.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Con una velocit&agrave; di 30 m/min e una risoluzione di 1200&times;1200 dpi, la GreenBox Print Book 
            offre qualit&agrave; di stampa eccezionale con colori vividi e resistenti. Gli inchiostri a base acqua 
            garantiscono resistenza agli agenti atmosferici, allo sfregamento e all&apos;acqua.
          </p></>) : (<><p className="text-gray-500 leading-relaxed mb-4">
            The GreenBox Print Book transforms the versatile GreenBox 2 platform into a dedicated solution for digital book edge printing. Using HP PageWide single-pass technology with pigmented water-based inks, it prints directly in full color on book edges, making each one unique.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            The 297 mm printhead, mounted on a sliding rail with 80 cm travel, allows precise centering of the print area. The micrometric system with digital display enables accurate height adjustment, with vertical travel up to 30 cm.
          </p>
          <p className="text-gray-500 leading-relaxed">
            With a speed of 30 m/min and 1200×1200 dpi resolution, the GreenBox Print Book delivers exceptional print quality with vivid and durable colors. Water-based inks ensure resistance to weathering, rubbing and water.
          </p></>)}
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">{locale === 'it' ? 'GreenBox Print Book in Azione' : 'GreenBox Print Book in Action'}</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="none" poster="/images/posters/greenbox-print-book-1.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/greenbox-print-book-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-8 text-center">{locale === 'it' ? 'Vantaggi Principali' : 'Key Benefits'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-white mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{locale === 'it' ? f.title : (f.titleEn || f.title)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{locale === 'it' ? f.desc : (f.descEn || f.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifiche Tecniche */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">{locale === 'it' ? 'Specifiche Tecniche' : 'Technical Specifications'}</h2>
          <div className="space-y-3">
            {getSpecsLocal(locale).map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 bg-white rounded-xl px-5 py-4 shadow-sm">
                <span className="text-sm font-medium text-gray-600">{label}</span>
                <span className="text-sm font-bold text-dark-800 text-right max-w-[60%]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{locale === 'it' ? 'Scopri GreenBox Print Book' : 'Discover GreenBox Print Book'}</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {locale === 'it' ? 'Vieni nella nostra sala demo a Sesto San Giovanni e scopri come la labbratura digitale può rendere unici i tuoi libri.' : 'Visit our demo room in Sesto San Giovanni and discover how digital edge printing can make your books unique.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolution.it?subject=Richiesta%20Consulenza%20GreenBox%20Print%20Book&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20GreenBox%20Print%20Book.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">{locale === 'it' ? 'Consulenza gratuita→' : 'Free consultation→'}</a>
            <a href="tel:+390249439417" className="btn-outline text-lg inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              {locale === 'it' ? 'Chiamaci Ora' : 'Call Us Now'}
            </a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">{locale === 'it' ? 'Prodotti Correlati' : 'Related Products'}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/prodotti/robotjet" className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 relative overflow-hidden">
                  <Image src="/images/products/book-edge-printer.png" alt="Robotjet" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-dark-800 group-hover:text-cyan-500 transition-colors">Robotjet</h3>
                  <p className="text-sm text-gray-500 mt-1">{locale === 'it' ? 'Stampante labbratura libri' : 'Book edge printer'}</p>
                </div>
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
