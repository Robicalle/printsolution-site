import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Robotjet Book Edge Printer — Stampante per Labbratura Libri",
  description:
    "Robotjet Book Edge Printer: stampante digitale per labbratura libri, quaderni e agende. 400 pezzi/ora, CMYK single-pass, risoluzione 1200 dpi. Teste HP A3.",
  keywords: [
    "labbratura libri",
    "stampante labbratura",
    "book edge printer",
    "Robotjet",
    "stampa bordo libri",
  ],
  openGraph: {
    title: "Robotjet Book Edge Printer — Stampante per Labbratura Libri | Print Solution",
    description:
      "Stampante digitale per labbratura libri. 400 pezzi/ora, CMYK single-pass, 1200 dpi.",
    images: ["/images/products/book-edge-printer.png"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/robotjet" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Robotjet Book Edge Printer",
  brand: { "@type": "Brand", name: "Print Solution" },
  description:
    "Stampante digitale per labbratura e personalizzazione del bordo delle pagine di libri, quaderni, agende e block notes. 400 pezzi/ora, CMYK single-pass, 1200 dpi.",
  image: "https://www.printsolutionsrl.it/images/products/book-edge-printer.png",
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
    { "@type": "ListItem", position: 3, name: "Robotjet Book Edge Printer", item: "https://www.printsolutionsrl.it/prodotti/robotjet" },
  ],
};

const specs = [
  ["Capacità produttiva", "Circa 400 pezzi/ora, 3200 pezzi/giorno"],
  ["Risoluzione di stampa", "1200 dpi"],
  ["Colori", "4 colori CMYK"],
  ["Tecnologia di stampa", "Inkjet a base acqua pigmentata"],
  ["Teste di stampa", "HP A3 / Epson I3200"],
  ["Altezza libri", "Da 90 a 350 mm"],
  ["Larghezza di stampa", "Da 5 a 218 mm"],
  ["Velocità di stampa", "0–15 m/min (regolabile)"],
  ["Taniche inchiostro", "1 litro per colore"],
  ["Formati immagine", "JPG, PDF"],
  ["Sistemi operativi", "Windows 7 / 10 / 11"],
  ["Temperatura operativa", "0°–45°C, umidità 20%–80%"],
  ["Assorbimento", "480 W, AC 110V/220V, 50/60 Hz"],
  ["Dimensioni (L×A×P)", "190 × 120 × 165 cm"],
  ["Peso", "450 kg"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "400 Pezzi all\u2019Ora",
    desc: "Produttività elevata con fino a 3200 libri personalizzati al giorno. Ideale per ordini piccoli e grandi.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "1200 DPI di Risoluzione",
    desc: "Fondi pieni, sovrastampe e sfumature con precisione assoluta. Qualità di stampa senza eguali nel settore.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Adattamento Intelligente",
    desc: "Si adatta automaticamente alla forma e allo spessore del libro. Angoli tondi e squadrati, con piastra guida per libri alti.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Teste di Stampa HP A3",
    desc: "Tecnologia inkjet a base acqua CMYK con stampa 4 colori in singolo passaggio per design complessi e vivaci.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Pulizia Automatica",
    desc: "Spazzola rotante e aspirapolvere integrati puliscono i libri prima della stampa. Manutenzione automatica della testina.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Costi Stampa Ridotti",
    desc: "Taniche da 1 litro per colore garantiscono altissime prestazioni e costi di produzione contenuti.",
  },
];

export default function RobotjetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-300 text-sm mb-3 uppercase tracking-widest font-medium">Prodotti</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Robotjet Book Edge Printer</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Stampante digitale rivoluzionaria per la labbratura di libri, quaderni, agende e block notes. 
                400 pezzi/ora, CMYK single-pass con teste HP A3, risoluzione fino a 1200 dpi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Robotjet&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Robotjet.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">Richiedi Demo ?</a>
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Robotjet&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Robotjet.%0A%0AGrazie" className="btn-secondary text-lg !px-8 !py-4">Prenota una Demo</a>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
              <Image src="/images/products/book-edge-printer.png" alt="Robotjet Book Edge Printer" fill className="object-contain p-4" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">La Rivoluzione nella Labbratura dei Libri</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Robotjet Book Edge Digital Printer è la stampante digitale che rende unici libri, quaderni, agende 
            e block notes attraverso la tecnica della labbratura. Sfruttando la tecnologia inkjet a base acqua 
            CMYK con teste di stampa HP A3, offre risultati di stampa mai visti prima.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            La sua particolarità risiede nella capacità di stampare fondi pieni, sovrastampe e sfumature con 
            precisione assoluta grazie alla risoluzione di 1200 dpi. Con 400 pezzi/ora e 3200 pezzi/giorno, 
            consente di evadere ordini sia piccoli che grandi con estrema facilità.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Dotata di un sistema intelligente di adattamento, si regola automaticamente alla forma (angoli tondi 
            o squadrati) e allo spessore del libro. La spazzola rotante e l&apos;aspirapolvere integrati puliscono 
            i libri prima della stampa, proteggendo la testina da danni accidentali e garantendo risultati 
            sempre perfetti.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-purple-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">Robotjet in Azione</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" className="w-full h-full object-cover"><source src="/videos/robotjet-00001.mp4" type="video/mp4" /></video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" className="w-full h-full object-cover"><source src="/videos/robotjet-00002.mp4" type="video/mp4" /></video>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-12 text-center">Vantaggi Principali</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mb-5">
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
      <section className="section-padding bg-surface-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">Specifiche Tecniche</h2>
          <div className="space-y-3">
            {specs.map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 bg-white rounded-xl px-5 py-4 shadow-sm">
                <span className="text-sm font-medium text-gray-600">{label}</span>
                <span className="text-sm font-bold text-dark-800 text-right max-w-[60%]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Scopri Robotjet dal Vivo</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Vieni nella nostra sala demo a Sesto San Giovanni e scopri come la labbratura digitale può aprire nuove opportunità per il tuo business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Robotjet&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Robotjet.%0A%0AGrazie" className="btn-primary text-lg">Prenota una Demo</a>
            <a href="tel:+390236527093" className="btn-outline text-lg inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              Chiamaci Ora
            </a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">Prodotti Correlati</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "PackPrinter UV", desc: "Stampante UV single-pass", href: "/prodotti/packprinter-uv", image: "/images/products/packprinter-uv.avif" },
              { name: "GreenBox EVO", desc: "Stampante single-pass per packaging", href: "/prodotti/greenbox-evo", image: "/images/products/greenbox-evo.jpeg" },
              { name: "AurumPress", desc: "Stampatrice termica per foil", href: "/prodotti/aurumpress", image: "/images/products/aurumpress-nobg.png" },
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
