import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Afinia AF200 — Applicatore Etichette Semiautomatico",
  description:
    "Afinia AF200: applicatore etichette semiautomatico per superfici piane. Sensore ultrasonico, pedale hands-free, vassoi 3D custom opzionali.",
  keywords: [
    "Afinia AF200",
    "applicatore etichette",
    "etichettatura semiautomatica",
    "applicatore superfici piane",
  ],
  openGraph: {
    title: "Afinia AF200 — Applicatore Etichette | Print Solution",
    description:
      "Applicatore etichette semiautomatico per superfici piane con sensore ultrasonico e pedale hands-free.",
    images: ["/images/products/afinia-af200-nobg.png"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/afinia-af200" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Afinia AF200",
  brand: { "@type": "Brand", name: "Afinia Label" },
  description:
    "Applicatore etichette semiautomatico per superfici piane. Sensore ultrasonico di precisione, pedale hands-free.",
  image: "https://www.printsolutionsrl.it/images/products/afinia-af200-nobg.png",
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
    { "@type": "ListItem", position: 2, name: "Etichette", item: "https://www.printsolutionsrl.it/soluzioni/etichette" },
    { "@type": "ListItem", position: 3, name: "Afinia AF200", item: "https://www.printsolutionsrl.it/prodotti/afinia-af200" },
  ],
};

const specs = [
  ["Tipo", "Applicatore etichette semiautomatico"],
  ["Superficie", "Piana (flat surface)"],
  ["Campo etichettatura", "100 × 190 mm"],
  ["Lunghezza etichette", "35–210 mm"],
  ["Altezza contenitore", "25–200 mm"],
  ["Sensore", "Ultrasonico di precisione"],
  ["Attivazione", "Pulsante o pedale hands-free"],
  ["Vassoi", "3D-printed custom opzionali"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Applicazione Precisa",
    desc: "Sensore ultrasonico per rilevamento preciso anche su materiali sottili e trasparenti. Etichette sempre perfettamente allineate.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
    title: "Operazione Hands-Free",
    desc: "Pedale incluso per attivazione a mani libere. L'operatore tiene il prodotto con entrambe le mani per un posizionamento perfetto.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Vassoi 3D Custom",
    desc: "Vassoi stampati in 3D su misura per i tuoi contenitori. Posizionamento ripetibile e veloce per ogni formato di prodotto.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Setup Rapido",
    desc: "Configurazione semplice e cambio formato veloce. Nessuna competenza tecnica richiesta per l'utilizzo quotidiano.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Versatile",
    desc: "Compatibile con etichette da 35 a 210 mm di lunghezza e contenitori da 25 a 200 mm di altezza. Ampio range di applicazioni.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Investimento Contenuto",
    desc: "Soluzione economica per chi inizia con l'etichettatura semiautomatica. Produttività superiore rispetto all'applicazione manuale.",
  },
];

export default function AfiniaAF200Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Applicatori</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Afinia AF200</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Applicatore etichette semiautomatico per superfici piane. Sensore ultrasonico 
                per precisione anche su materiali sottili, pedale hands-free incluso e vassoi 
                3D-printed custom disponibili per ogni formato di contenitore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20AF200&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20AF200.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">Richiedi Demo →</a>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
              <Image src="/images/products/afinia-af200-nobg.png" alt="Afinia AF200" fill className="object-contain p-4" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Applicazione Etichette Precisa e Semiautomatica</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            La Afinia AF200 è un applicatore etichette semiautomatico progettato per superfici piane, ideale per chi desidera velocizzare e standardizzare il processo di etichettatura senza investire in una linea completamente automatica. Dotata di un sensore ultrasonico di precisione, rileva con accuratezza anche materiali sottili e trasparenti, garantendo un posizionamento perfetto dell&apos;etichetta su ogni prodotto.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            L&apos;attivazione tramite pedale hands-free consente all&apos;operatore di tenere il prodotto con entrambe le mani durante l&apos;applicazione, assicurando un allineamento ripetibile e preciso. Il campo di etichettatura di 100 × 190 mm e la compatibilità con etichette da 35 a 210 mm di lunghezza coprono un&apos;ampia gamma di formati, mentre i vassoi stampati in 3D su misura garantiscono un posizionamento rapido e costante per ogni tipo di contenitore.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Con un setup rapido e un utilizzo che non richiede competenze tecniche particolari, l&apos;AF200 è la soluzione perfetta per piccole e medie produzioni, laboratori artigianali e aziende che desiderano migliorare la qualità e la velocità dell&apos;etichettatura rispetto all&apos;applicazione manuale. Supporta contenitori con altezza da 25 a 200 mm, adattandosi a barattoli, flaconi, scatole e packaging di ogni dimensione.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">AF200 in Azione</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" className="w-full h-full object-cover"><source src="/videos/afinia-af200.mp4" type="video/mp4" /></video>
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-12 text-center">Vantaggi Principali</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center text-white mb-5">
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
                <span className="text-sm font-bold text-dark-800">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Automatizza l&apos;Etichettatura dei Tuoi Prodotti</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Scopri come l&apos;AF200 può velocizzare e rendere più precisa l&apos;applicazione delle etichette. Contattaci per una demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20AF200&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20AF200.%0A%0AGrazie" className="btn-primary text-lg">Richiedi Demo →</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">Prodotti Correlati</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Afinia L701", desc: "Stampante etichette entry level Memjet", href: "/prodotti/afinia-l701", image: "/images/products/afinia-l701.avif" },
              { name: "Afinia L901", desc: "Stampante etichette professionale Memjet", href: "/prodotti/afinia-l901", image: "/images/products/afinia-l901.png" },
              { name: "Afinia DLP-2200", desc: "Digital Label Press completa", href: "/prodotti/afinia-dlp2200", image: "/images/products/afinia-dlp2200.avif" },
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
