import { getLocale } from 'next-intl/server';
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isIt = locale === 'it';
  return {
    title: isIt ? "GreenBox EVO - Stampante Single-Pass" : "GreenBox EVO - Single-Pass Packaging Printer",
    description: isIt
      ? "GreenBox EVO: stampante single-pass per packaging. Stampa CMYK diretta su cartone e carta, 30 m/min, inchiostri eco. Print Solution"
      : "GreenBox EVO: single-pass packaging printer. Direct CMYK on cardboard and paper, 30 m/min, eco-friendly inks. Print Solution",
    keywords: [
    "stampante etichette colori",
    "stampa etichette bobina",
    "stampante etichette industriale",
    "GreenBox EVO",
    "stampante single-pass packaging",
  ],
    openGraph: {
      title: isIt ? "GreenBox EVO - Stampante Single-Pass | Print Solution" : "GreenBox EVO - Single-Pass Packaging Printer | Print Solution",
      description: isIt
        ? "GreenBox EVO: stampante single-pass per packaging. Stampa CMYK diretta su cartone e carta, 30 m/min, inchiostri eco. Print Solution"
        : "GreenBox EVO: single-pass packaging printer. Direct CMYK on cardboard and paper, 30 m/min, eco-friendly inks. Print Solution",
      images: ["/images/products/greenbox-evo-site-nobg.png"],
      type: "website",
      locale: isIt ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: "/prodotti/greenbox-evo" },
  };
}

const greenboxJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "GreenBox EVO",
  brand: { "@type": "Brand", name: "Print Solution" },
  description:
    "Stampante digitale inkjet single-pass CMYK per packaging, shopper e scatole. Testina HP Pagewide, 30m/min, 1200x1200 dpi. Inchiostri pigmentati a base acqua.",
  image: "https://www.printsolutionsrl.it/images/products/greenbox-evo-site-nobg.png",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
    { "@type": "ListItem", position: 2, name: "Prodotti", item: "https://www.printsolutionsrl.it/soluzioni/packaging" },
    { "@type": "ListItem", position: 3, name: "GreenBox EVO", item: "https://www.printsolutionsrl.it/prodotti/greenbox-evo" },
  ],
};

function getSpecs(l: string) { return l === 'it' ? [
  ["Tecnologia", "Inkjet single-pass CMYK"],
  ["Testina di stampa", "HP Pagewide, 30 cm"],
  ["Risoluzione", "1200 × 1200 dpi"],
  ["Velocità di stampa", "Fino a 30 m/min"],
  ["Larghezza stampa", "Fino a 30 cm"],
  ["Larghezza supporto", "Fino a 80 cm"],
  ["Spessore max supporto", "Fino a 15 cm"],
  ["Inchiostri", "Pigmentati a base acqua, taniche 3L/colore"],
  ["Piano", "Aspirato con pompa a vuoto"],
  ["Software RIP", "Flexprint incluso"],
  ["Display", "Digitale integrato"],
  ["Alimentatore", "Automatico opzionale con pompa a vuoto"],
  ["Alimentazione", "230V AC monofase"],
] : [
  ["Technology", "HP Pagewide single-pass inkjet"],
  ["Resolution", "1200 × 1200 dpi"],
  ["Colors", "CMYK"],
  ["Max print width", "310 mm"],
  ["Max speed", "Up to 30 m/min"],
  ["Inks", "Pigmented water-based"],
  ["Compatible media", "Cardboard, paper, kraft, jute"],
  ["Head maintenance", "Automatic"],
]; }

function getFeatures(l: string) {
  const it = l === 'it';
  return [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: it ? "Velocità Industriale" : "Industrial Speed",
      desc: it
        ? "Fino a 30 metri al minuto con tecnologia single-pass: stampa senza rallentamenti, anche su tirature elevate."
        : "Up to 30 metres per minute with single-pass technology: uninterrupted printing, even on high-volume runs.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47" />
        </svg>
      ),
      title: it ? "Inchiostri a Base Acqua" : "Water-Based Inks",
      desc: it
        ? "Pigmentati, senza solventi, inodori. Resistenti a sfregamento, acqua e agenti atmosferici. Ideali per il packaging."
        : "Pigmented, solvent-free, odourless. Resistant to rubbing, water, and weathering. Ideal for packaging applications.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
        </svg>
      ),
      title: it ? "Materiali Versatili" : "Versatile Materials",
      desc: it
        ? "Stampa su cartone, carta kraft, juta, shopper, buste e sacchetti. Spessore supporto fino a 15 cm."
        : "Print on cardboard, kraft paper, jute, shoppers, envelopes and bags. Wide range of printable substrates.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
      title: it ? "RIP Flexprint Incluso" : "RIP Flexprint Included",
      desc: it
        ? "Software RIP professionale incluso con display digitale integrato. Gestione colore avanzata e profili ICC."
        : "Professional RIP software included with integrated digital display for advanced colour management and print optimisation.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      title: it ? "Entry-Level Accessibile" : "Accessible Entry-Level",
      desc: it
        ? "Investimento contenuto per entrare nel mondo della stampa digitale su packaging con qualità professionale."
        : "Affordable investment to enter the world of direct digital printing on corrugated. High performance at a competitive price.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21h18" />
        </svg>
      ),
      title: it ? "Piano Aspirato" : "Vacuum Table",
      desc: it
        ? "Il piano aspirato con pompa a vuoto garantisce il perfetto ancoraggio del supporto durante la stampa."
        : "The vacuum table with suction pump ensures perfect sheet adhesion during printing for consistently sharp results.",
    },
  ];
}

export default async function () {
  const locale = await getLocale();
  const it = locale === 'it';
  const features = getFeatures(locale);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(greenboxJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/shopper-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">{it ? 'Prodotti' : 'Products'}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">GreenBox EVO</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                {it
                  ? <>Stampante digitale inkjet single-pass CMYK per cartone, carta e juta. L&apos;entry point ideale nel mondo della stampa digitale su packaging.</>
                  : 'CMYK single-pass inkjet digital printer for cardboard, paper and jute. The ideal entry point into the world of digital packaging printing.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20GreenBox%20EVO&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20GreenBox%20EVO.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">{it ? 'Consulenza gratuita→' : 'Free consultation→'}</a>
              </div>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image src="/images/products/greenbox-evo-site-nobg.png" alt="GreenBox EVO" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{it ? 'Stampa Digitale su Packaging, Senza Compromessi' : 'Digital Printing on Packaging, No Compromises'}</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            {it
              ? <>La GreenBox EVO è una stampante inkjet single-pass progettata per chi vuole entrare nel mercato della stampa digitale su packaging con un investimento accessibile ma senza rinunciare alla qualità. Dotata di testina HP Pagewide da 30 cm, raggiunge velocità fino a 30 metri al minuto con risoluzione 1200×1200 dpi.</>
              : 'The GreenBox EVO is a single-pass inkjet printer designed for companies looking to enter the digital packaging printing market with an affordable investment and no compromise on quality. Equipped with a 30 cm HP Pagewide printhead, it reaches speeds of up to 30 metres per minute at 1200×1200 dpi resolution.'}
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            {it
              ? <>Gli inchiostri pigmentati a base acqua sono privi di solventi, inodori e garantiscono un&apos;eccellente resistenza a sfregamento, acqua e agenti atmosferici. Sono disponibili in taniche da 3 litri per colore, riducendo i costi operativi e semplificando la manutenzione.</>
              : 'The pigmented water-based inks are solvent-free, odourless, and deliver excellent resistance to rubbing, water, and weathering. Available in 3-litre tanks per colour, they reduce operating costs and simplify maintenance.'}
          </p>
          <p className="text-gray-500 leading-relaxed">
            {it
              ? <>Il piano aspirato con pompa a vuoto assicura il perfetto ancoraggio del supporto durante la stampa. L&apos;alimentatore automatico opzionale velocizza ulteriormente la produzione. Il software RIP Flexprint è incluso, con display digitale integrato per il controllo diretto della macchina.</>
              : 'The vacuum table with suction pump ensures perfect substrate adhesion during printing. The optional automatic feeder further speeds up production. Flexprint RIP software is included, with an integrated digital display for direct machine control.'}
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">{it ? 'GreenBox EVO in Azione' : 'GreenBox EVO in Action'}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/greenbox-evo-1.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/greenbox-evo-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/greenbox-evo-2.jpg" className="w-full h-full rounded-2xl">
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
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">{it ? 'Specifiche Tecniche' : 'Technical Specifications'}</h2>
          <div className="space-y-3">
            {getSpecs(locale).map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 bg-white rounded-xl px-5 py-4 shadow-sm">
                <span className="text-sm font-medium text-gray-600">{label}</span>
                <span className="text-sm font-bold text-dark-800">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{it ? 'Inizia a Stampare il Tuo Packaging' : 'Start Printing Your Packaging'}</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {it
              ? 'Porta i tuoi materiali e testa la GreenBox EVO nella nostra sala demo a Sesto San Giovanni.'
              : 'Bring your materials and test the GreenBox EVO in our demo room in Sesto San Giovanni.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20GreenBox%20EVO&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20GreenBox%20EVO.%0A%0AGrazie" className="btn-primary text-lg">{it ? 'Consulenza gratuita→' : 'Free consultation→'}</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">{it ? 'Prodotti Correlati' : 'Related Products'}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "EDM-650X", desc: it ? "Stampante single-pass grande formato" : "Large format single-pass printer", href: "/prodotti/edm-650x", image: "/images/products/edm-650x-2hd-nobg-v4.png" },
              { name: "AurumPress", desc: it ? "Stampatrice termica per foil" : "Thermal foil printer", href: "/prodotti/aurumpress", image: "/images/products/aurumpress-nobg.png" },
              { name: "Anypack AB2500", desc: it ? "Box maker automatico" : "Automatic box maker", href: "/prodotti/ab2500", image: "/images/products/ab2500-hero-nobg.png" },
            ].map((p) => (
              <Link key={p.name} href={p.href} className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 relative overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
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
