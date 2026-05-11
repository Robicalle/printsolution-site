import { getLocale } from 'next-intl/server';
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import SpecsAccordion from "@/components/SpecsAccordion";
import ProductFaqSection from "@/components/ProductFaqSection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isIt = locale === 'it';
  return {
    title: isIt
      ? "GreenBox 3 — Stampante per Scatole Single-Pass CMYK | Print Solution"
      : "GreenBox 3 — Single-Pass CMYK Box Printer | Print Solution",
    description: isIt
      ? "GreenBox 3: stampante per scatole inkjet single-pass CMYK entry level, novità 2026. 28 m/min, 1200 dpi, foglio fino a 100 cm, spessore 15 cm, costi stampa -40%. 4.0 Ready."
      : "GreenBox 3: entry-level single-pass CMYK inkjet box printer, new 2026. 28 m/min, 1200 dpi, sheet up to 100 cm, 15 cm thickness, -40% print costs. 4.0 Ready.",
    keywords: [
      "GreenBox 3",
      "greenbox 3 prezzo",
      "stampante per scatole",
      "stampante per scatole personalizzate",
      "stampante cartone ondulato",
      "stampante inkjet scatole 2026",
      "stampante single-pass scatole",
      "stampa digitale packaging 2026",
      "stampa cartone ondulato in-house",
      "stampante shopper carta",
      "stampante packaging inkjet grande formato",
      "stampa diretta scatole personalizzate",
      "industria 4.0 stampante packaging",
      "stampante packaging prezzo",
      "inkjet single pass corrugated italia",
    ],
    openGraph: {
      title: isIt
        ? "GreenBox 3 | Stampante Digitale Single-Pass per Scatole — Novità 2026"
        : "GreenBox 3 | Digital Single-Pass Printer for Boxes — New 2026",
      description: isIt
        ? "GreenBox 3: stampa diretta su scatole, cartoni e shopper. Entry level single-pass CMYK, 28 m/min, foglio fino a 100 cm, costi -40%."
        : "GreenBox 3: direct printing on boxes, cardboard and shoppers. Entry-level single-pass CMYK, 28 m/min, sheet up to 100 cm, -40% costs.",
      images: ["/images/products/greenbox-3.jpg"],
      type: "website",
      locale: isIt ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: locale === 'it'
        ? `https://www.printsolutionsrl.it/prodotti/greenbox-3`
        : `https://www.printsolutionsrl.it/en/prodotti/greenbox-3`,
      languages: {
        'it': `https://www.printsolutionsrl.it/prodotti/greenbox-3`,
        'en': `https://www.printsolutionsrl.it/en/prodotti/greenbox-3`,
        'x-default': `https://www.printsolutionsrl.it/prodotti/greenbox-3`,
      },
    },
  };
}

const greenbox3JsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "GreenBox 3",
  brand: { "@type": "Brand", name: "GreenBox" },
  description: "Stampante digitale inkjet single-pass CMYK per scatole in cartone ondulato e shopper in carta. 28 m/min, 1200×1200 dpi, foglio fino a 100 cm di larghezza, spessore fino a 15 cm. Costi stampa -40%. 4.0 Ready.",
  image: "https://www.printsolutionsrl.it/images/products/greenbox-3.jpg",
  manufacturer: { "@type": "Organization", name: "Print Solution S.r.l." },
  offers: {
    "@type": "Offer",
    url: "https://www.printsolutionsrl.it/prodotti/greenbox-3",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Print Solution S.r.l." },
  },
};

function getSpecs(l: string) {
  return l === 'it' ? [
    ["Sistema di stampa", "Testina HP inkjet single-pass"],
    ["Tecnologia", "Inkjet single-pass CMYK"],
    ["Tipo inchiostri", "Pigmentati a base acqua CMYK"],
    ["Capacità cartucce", "C 237 ml | M 233 ml | Y 225 ml | K 498 ml"],
    ["Risoluzione", "Fino a 1200 × 1200 dpi"],
    ["Velocità di stampa", "Fino a 28 m/min"],
    ["Larghezza di stampa", "297 mm (single-pass)"],
    ["Lunghezza di stampa", "Fino a 150 cm"],
    ["Spessore max supporto", "Fino a 15 cm"],
    ["Larghezza foglio max", "Fino a 100 cm"],
    ["Sensore supporto", "Ottico"],
    ["Piano di stampa", "Nastro trasportatore dedicato per massima aderenza"],
    ["Dimensioni macchina", "170 (L) × 120 (P) × 160 (A) cm"],
    ["Peso", "200 kg"],
    ["Software gestione", "RIP Flexiprint (opzionale)"],
    ["Sistema operativo", "Windows 10 / 11"],
    ["Incentivi fiscali", "Compatibile 4.0 Ready — incentivi 2026"],
  ] : [
    ["Print system", "HP single-pass inkjet printhead"],
    ["Technology", "Single-pass CMYK inkjet"],
    ["Ink type", "Pigmented water-based CMYK"],
    ["Cartridge capacity", "C 237 ml | M 233 ml | Y 225 ml | K 498 ml"],
    ["Resolution", "Up to 1200 × 1200 dpi"],
    ["Print speed", "Up to 28 m/min"],
    ["Print width", "297 mm (single-pass)"],
    ["Print length", "Up to 150 cm"],
    ["Max media thickness", "Up to 15 cm"],
    ["Max sheet width", "Up to 100 cm"],
    ["Media sensor", "Optical"],
    ["Print table", "Dedicated conveyor belt for maximum substrate adhesion"],
    ["Machine dimensions", "170 (W) × 120 (D) × 160 (H) cm"],
    ["Weight", "200 kg"],
    ["Management software", "Flexiprint RIP (optional)"],
    ["Operating system", "Windows 10 / 11"],
    ["Tax incentives", "4.0 Ready — eligible for 2026 fiscal incentives"],
  ];
}

function getFeatures(l: string) {
  const it = l === 'it';
  return [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: it ? "28 m/min Single-Pass" : "28 m/min Single-Pass",
      desc: it
        ? "Velocità industriale fino a 28 metri al minuto con tecnologia single-pass HP. Produttività elevata senza compromessi sulla qualità."
        : "Industrial speed up to 28 metres per minute with HP single-pass technology. High productivity with no compromise on quality.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
        </svg>
      ),
      title: it ? "Formato Foglio Fino a 100 cm" : "Sheet Width Up to 100 cm",
      desc: it
        ? "La larghezza di alimentazione foglio fino a 100 cm permette di lavorare su scatole e packaging di grandi dimensioni in un unico passaggio."
        : "Sheet feed width up to 100 cm allows processing large boxes and packaging in a single pass — no repositioning required.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      title: it ? "Costi Stampa -40%" : "-40% Print Costs",
      desc: it
        ? "La GreenBox 3 riduce i costi di stampa fino al 40% rispetto alla stampa esterna in outsourcing, rendendo la personalizzazione del packaging conveniente dal primo pezzo."
        : "GreenBox 3 reduces print costs by up to 40% compared to outsourced printing, making packaging personalisation cost-effective from the very first piece.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
        </svg>
      ),
      title: it ? "Multi-Settore" : "Multi-Sector",
      desc: it
        ? "Perfetta per vino, calzature, beverage, cosmetica, e-commerce e retail packaging. Qualità costante su ogni tipo di cartone ondulato."
        : "Perfect for wine, footwear, beverages, cosmetics, e-commerce and retail packaging. Consistent quality on every type of corrugated board.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47" />
        </svg>
      ),
      title: it ? "Inchiostri a Base Acqua" : "Water-Based Inks",
      desc: it
        ? "Inchiostri pigmentati CMYK a base acqua, resistenti e senza solventi. Adatti al packaging alimentare e alla cosmetica. Colori brillanti e duraturi."
        : "Pigmented CMYK water-based inks, resistant and solvent-free. Suitable for food and cosmetics packaging. Bright, long-lasting colours.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: it ? "4.0 Ready — Incentivi 2026" : "4.0 Ready — 2026 Incentives",
      desc: it
        ? "Certificata Industria 4.0 e compatibile con gli incentivi fiscali 2026. Il costo reale si riduce fino al 43% grazie alla deduzione fiscale."
        : "Industry 4.0 certified and eligible for 2026 fiscal incentives. The real cost is reduced by up to 43% thanks to the tax deduction.",
    },
  ];
}

export default async function GreenBox3Page() {
  const locale = await getLocale();
  const it = locale === 'it';
  const features = getFeatures(locale);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
      { "@type": "ListItem", position: 2, name: it ? "Prodotti" : "Products", item: it ? "https://www.printsolutionsrl.it/prodotti" : "https://www.printsolutionsrl.it/en/prodotti" },
      { "@type": "ListItem", position: 3, name: "GreenBox 3", item: it ? "https://www.printsolutionsrl.it/prodotti/greenbox-3" : "https://www.printsolutionsrl.it/en/prodotti/greenbox-3" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: it ? [
      {
        "@type": "Question",
        name: "Cos'è la GreenBox 3?",
        acceptedAnswer: { "@type": "Answer", text: "La GreenBox 3 è la nuova stampante digitale inkjet single-pass CMYK per scatole in cartone ondulato e shopper in carta. Novità 2026, raggiunge 28 m/min con risoluzione 1200×1200 dpi e supporta fogli fino a 100 cm di larghezza e 15 cm di spessore." },
      },
      {
        "@type": "Question",
        name: "Quanto costa la GreenBox 3?",
        acceptedAnswer: { "@type": "Answer", text: "Per informazioni sul prezzo della GreenBox 3 contatta il nostro team: info@printsolutionsrl.it oppure chiama il +39 02 49 43 9417. Grazie agli incentivi Industria 4.0 del 2026, il costo reale può ridursi sensibilmente tramite la deduzione fiscale." },
      },
      {
        "@type": "Question",
        name: "Che differenza c'è tra GreenBox 3 e GreenBox EVO?",
        acceptedAnswer: { "@type": "Answer", text: "La GreenBox 3 è il modello entry level: la scelta ideale per le PMI che iniziano a stampare il packaging in-house, con ottima qualità, costi accessibili e rientro dell'investimento rapido. La GreenBox EVO è il modello avanzato, pensato per chi ha volumi più elevati e cerca la massima produttività e versatilità. Entrambe stampano su scatole in cartone ondulato e shopper in carta." },
      },
      {
        "@type": "Question",
        name: "La GreenBox 3 è compatibile con gli incentivi fiscali 2026?",
        acceptedAnswer: { "@type": "Answer", text: "Sì. La GreenBox 3 è certificata Industria 4.0 Ready ed è compatibile con gli incentivi fiscali 2026. Con una maggiorazione del 180% sull'ammortamento e aliquota IRES al 24%, il risparmio fiscale può arrivare al 43,2% del valore del bene." },
      },
      {
        "@type": "Question",
        name: "Per quali settori è adatta la GreenBox 3?",
        acceptedAnswer: { "@type": "Answer", text: "La GreenBox 3 è ideale per la stampa di packaging in cartone ondulato per vino, calzature, beverage, cosmetica, e-commerce e retail. Stampa anche shopper in carta personalizzati con qualità professionale." },
      },
    ] : [
      {
        "@type": "Question",
        name: "What is the GreenBox 3?",
        acceptedAnswer: { "@type": "Answer", text: "The GreenBox 3 is the new single-pass CMYK inkjet digital printer for corrugated boxes and paper shoppers. New in 2026, it reaches 28 m/min at 1200×1200 dpi resolution and handles sheets up to 100 cm wide and 15 cm thick." },
      },
      {
        "@type": "Question",
        name: "How much does the GreenBox 3 cost?",
        acceptedAnswer: { "@type": "Answer", text: "For GreenBox 3 pricing, contact our team: info@printsolutionsrl.it or call +39 02 49 43 9417. Thanks to 2026 Industry 4.0 incentives, the real cost can be significantly reduced through the tax deduction." },
      },
      {
        "@type": "Question",
        name: "What sectors is the GreenBox 3 suitable for?",
        acceptedAnswer: { "@type": "Answer", text: "The GreenBox 3 is ideal for printing corrugated packaging for wine, footwear, beverages, cosmetics, e-commerce and retail. It also prints custom paper shoppers to professional quality standards." },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(greenbox3JsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/greenbox-3-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">{it ? 'Prodotti' : 'Products'}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">GreenBox 3</h1>
            <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
              {it
                ? 'Stampante inkjet single-pass CMYK per scatole in cartone ondulato e shopper in carta. Stampa diretta su packaging in-house — senza clichè, senza setup.'
                : 'Single-pass CMYK inkjet printer for corrugated boxes and paper shoppers. Direct in-house packaging printing — no plates, no setup.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20GreenBox%203&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20sulla%20GreenBox%203.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">
                {it ? 'Consulenza gratuita→' : 'Free consultation→'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Foto prodotto */}
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
            <Image src="/images/products/greenbox-3-nobg.png" alt="GreenBox 3" fill className="object-contain p-2" priority />
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">
            {it ? 'Stampante Digitale per Scatole e Packaging In-House' : 'Digital Printer for In-House Box & Packaging'}
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            {it
              ? 'La GreenBox 3 è la stampante per scatole entry level di Print Solution: la soluzione ideale per le PMI che vogliono portare la stampa del packaging in-house per la prima volta, con un investimento accessibile e ritorni rapidi. Con tecnologia inkjet single-pass e testina HP, raggiunge velocità fino a 28 m/min con risoluzione 1200×1200 dpi e qualità fotografica su ogni supporto.'
              : 'GreenBox 3 is Print Solution\'s entry-level box printer: the ideal solution for SMEs bringing packaging printing in-house for the first time, with an accessible investment and fast returns. With HP single-pass inkjet technology, it reaches speeds up to 28 m/min at 1200×1200 dpi with photographic quality on every substrate.'}
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            {it
              ? 'Il sistema di gestione del nastro trasportatore dedicato garantisce la massima aderenza del supporto durante la stampa, anche su cartoni ondulati di grande formato fino a 100 cm di larghezza e 15 cm di spessore. Ideale per scatole da vino, packaging calzature, beverage, cosmetica, e-commerce e retail.'
              : 'The dedicated conveyor belt management system ensures maximum substrate adhesion during printing, even on large-format corrugated boards up to 100 cm wide and 15 cm thick. Ideal for wine boxes, footwear packaging, beverages, cosmetics, e-commerce and retail.'}
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            {it
              ? 'Gli inchiostri pigmentati CMYK a base acqua garantiscono colori brillanti e resistenti, senza solventi e senza odori. Il sistema di erogazione riduce i costi di stampa fino al 40% rispetto alla stampa esterna in outsourcing, con cartucce da 237–498 ml per colore per minimizzare i tempi di sostituzione.'
              : 'CMYK water-based pigment inks deliver bright, resistant colours — solvent-free and odourless. The dispensing system reduces print costs by up to 40% compared to outsourced printing, with 237–498 ml cartridges per colour to minimise replacement time.'}
          </p>
          <p className="text-gray-500 leading-relaxed">
            {it
              ? 'Certificata Industria 4.0 Ready e compatibile con gli incentivi fiscali 2026, la GreenBox 3 è pensata per chi vuole avviare la stampa in-house con un investimento accessibile. Con la maggiorazione fiscale al 180% prevista per i beni strumentali 4.0, il rientro dell\'investimento è rapido già dai primi mesi di utilizzo.'
              : 'Industry 4.0 Ready certified and eligible for 2026 fiscal incentives, GreenBox 3 is designed for businesses starting in-house printing with an accessible investment. With the 180% fiscal enhancement for 4.0 capital goods, the return on investment is fast from the first months of use.'}
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">{it ? 'GreenBox 3 in Azione' : 'GreenBox 3 in Action'}</h2>
          </div>
          <div className="swipe-gallery md:grid-cols-2 gap-8 max-w-5xl mx-auto scrollbar-hide">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="none" poster="/images/posters/greenbox-evo-1.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/greenbox-evo-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="none" poster="/images/posters/greenbox-evo-2.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/greenbox-evo-2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-8 text-center">{it ? 'Vantaggi Principali' : 'Key Benefits'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-white mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifiche Tecniche */}
      <SpecsAccordion specs={getSpecs(locale)} locale={locale} />

      {/* FAQ */}
      <ProductFaqSection items={(faqJsonLd.mainEntity as any[]).map((q: any) => ({ question: q.name, answer: q.acceptedAnswer.text }))} locale={locale} />

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{it ? 'Stampa Scatole e Packaging con la GreenBox 3' : 'Print Boxes & Packaging with GreenBox 3'}</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {it
              ? 'Porta i tuoi materiali — scatole in cartone o shopper — e testa la GreenBox 3 nella nostra sala demo a Sesto San Giovanni.'
              : 'Bring your materials — cardboard boxes or shoppers — and test GreenBox 3 in our demo room in Sesto San Giovanni.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20GreenBox%203&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20sulla%20GreenBox%203.%0A%0AGrazie" className="btn-primary text-lg">
              {it ? 'Consulenza gratuita→' : 'Free consultation→'}
            </a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">{it ? 'Prodotti Correlati' : 'Related Products'}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "GreenBox EVO", desc: it ? "Modello avanzato per volumi e produttività superiori" : "Advanced model for higher volumes and productivity", href: "/prodotti/greenbox-evo", image: "/images/products/greenbox-evo-front-nobg.png" },
              { name: "EDM-650X", desc: it ? "Stampante single-pass grande formato ad alta produttività" : "High-productivity large-format single-pass printer", href: "/prodotti/edm-650x", image: "/images/products/edm-650x-2hd-nobg-v4.png" },
              { name: "Anypack AB2500", desc: it ? "Box maker automatico — abbinabile alla GreenBox 3" : "Automatic box maker — combinable with GreenBox 3", href: "/prodotti/ab2500", image: "/images/products/ab2500-hero-nobg.png" },
            ].map((p) => (
              <Link key={p.name} href={p.href} className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 relative overflow-hidden">
                  <Image src={p.image} alt={`${p.name} — ${p.desc}`} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-dark-800 group-hover:text-cyan-500 transition-colors">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
