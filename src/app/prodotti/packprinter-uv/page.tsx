import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PackPrinter UV — Stampante UV Single-Pass per Packaging",
  description:
    "PackPrinter UV: stampante digitale UV single-pass CMYK+W fino a 50 m/min. Stampa su PVC, vetro, cartone, legno, ceramica e materiali sintetici. 9 configurazioni disponibili.",
  keywords: [
    "stampante UV single-pass",
    "stampa UV packaging",
    "PackPrinter UV",
    "stampa digitale UV",
    "stampante materiali sintetici",
  ],
  openGraph: {
    title: "PackPrinter UV — Stampante UV Single-Pass per Packaging | Print Solution",
    description:
      "Stampante digitale UV single-pass CMYK+W fino a 50 m/min. Stampa su qualsiasi materiale.",
    images: ["/images/products/packprinter-uv.avif"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/packprinter-uv" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PackPrinter UV",
  brand: { "@type": "Brand", name: "Print Solution" },
  description:
    "Stampante digitale UV single-pass CMYK+Bianco fino a 50 m/min. Stampa su PVC, vetro, cartone, legno, ceramica e materiali sintetici. 9 configurazioni disponibili.",
  image: "https://www.printsolutionsrl.it/images/products/packprinter-uv.avif",
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
    { "@type": "ListItem", position: 3, name: "PackPrinter UV", item: "https://www.printsolutionsrl.it/prodotti/packprinter-uv" },
  ],
};

const specs = [
  ["Modelli", "9 modelli con luce di stampa variabile"],
  ["Luce di stampa", "Da 12 cm a 118 cm"],
  ["Risoluzione", "600 × 1200 dpi"],
  ["Velocità di stampa", "Fino a 50 metri al minuto"],
  ["Modalità di stampa", "4 colori + Bianco (CMYKW)"],
  ["Tipo di inchiostri", "UV ad alte prestazioni"],
  ["Testine", "S3200 U3 — 3200 ugelli"],
  ["Dimensione testina", "150,4 mm × 30 mm × 52 mm"],
  ["Supporti stampabili", "PVC, ABS, acrilico, cartone, legno, vetro, ceramica, metallo, gommapiuma, similpelle"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "50 Metri al Minuto",
    desc: "Velocità single-pass eccezionale per produzioni industriali. Grandi tirature completate in tempi record senza sacrificare la qualità.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Stampa su Qualsiasi Materiale",
    desc: "PVC, vetro, ceramica, legno, cartone, metallo, acrilico, similpelle e materiali sintetici. Nessun limite ai tuoi progetti.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "CMYK + Bianco",
    desc: "Stampa a 5 colori con bianco coprente per materiali trasparenti e scuri. Risultati vivaci su qualsiasi superficie.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "9 Configurazioni",
    desc: "Luce di stampa da 12 a 118 cm. Scegli la configurazione ideale per il tuo volume e formato di produzione.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Inchiostri UV",
    desc: "Resistenti agli agenti atmosferici, all&apos;acqua e allo sfregamento. Stampe brillanti e durature nel tempo.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "ROI Rapido",
    desc: "Alta velocità e versatilità dei materiali permettono di servire più mercati. Ritorno sull&apos;investimento in tempi brevi.",
  },
];

export default function PackPrinterUVPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-300 text-sm mb-3 uppercase tracking-widest font-medium">Prodotti</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">PackPrinter UV</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Stampante digitale UV single-pass CMYK + Bianco. Stampa ad alta velocità fino a 50 m/min 
                su packaging, vetro, PVC, legno, ceramica e materiali sintetici. 9 configurazioni disponibili.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20PackPrinter%20UV&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20PackPrinter%20UV.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">Richiedi Demo ?</a>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
              <Image src="/images/products/packprinter-uv.avif" alt="PackPrinter UV" fill className="object-contain p-4" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Stampa UV su Qualsiasi Materiale</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            PackPrinter UV è la stampante digitale single-pass che rivoluziona la stampa su packaging e materiali 
            sintetici. Grazie alla testina all&apos;avanguardia con inchiostri UV, stampa a 5 colori (CMYK + Bianco) 
            su materiali porosi e non porosi con prestazioni eccezionali.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            La versatilità è il suo punto di forza: PVC, ABS, acrilico, cartone patinato, Forex, shopper in 
            materiali sintetici, vinile, similpelle, vetro, ceramica, legno e lastre metalliche. Con una velocità 
            fino a 50 metri al minuto e risoluzione 600×1200 dpi, PackPrinter UV è la soluzione ideale per 
            produzioni industriali e personalizzazioni di alta qualità.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Disponibile in 9 configurazioni con luce di stampa da 12 a 118 cm, si adatta perfettamente alle 
            esigenze di ogni azienda. Gli inchiostri UV garantiscono resistenza agli agenti atmosferici, 
            all&apos;acqua e allo sfregamento per risultati brillanti e duraturi nel tempo.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">PackPrinter UV in Azione</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" className="w-full h-full object-cover"><source src="/videos/packprinter-00001.mp4" type="video/mp4" /></video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" className="w-full h-full object-cover"><source src="/videos/packprinter-00002.mp4" type="video/mp4" /></video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg md:col-span-2 max-w-lg mx-auto w-full">
              <video controls preload="metadata" className="w-full h-full object-cover"><source src="/videos/packprinter-00003.mp4" type="video/mp4" /></video>
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
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white mb-5">
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
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Scopri PackPrinter UV dal Vivo</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Porta i tuoi materiali nella nostra sala demo a Sesto San Giovanni e scopri la versatilità della stampa UV single-pass.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              { name: "GreenBox EVO", desc: "Stampante single-pass per packaging", href: "/prodotti/greenbox-evo", image: "/images/products/greenbox-evo.jpeg" },
              { name: "EDM-650X", desc: "Stampante single-pass grande formato", href: "/prodotti/edm-650x", image: "/images/products/edm-650x-nobg.png" },
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
