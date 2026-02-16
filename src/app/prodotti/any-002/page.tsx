import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Anytron ANY-002 � Stampa + Fustella Etichette",
  description:
    "Anytron ANY-002: stampa laser + fustellatura etichette on-demand. Toner resistente, 1200 dpi, 9 m/min, fino a 5.000 etichette in 2 ore.",
  keywords: [
    "Anytron ANY-002",
    "stampante etichette laser",
    "fustellatrice etichette",
    "stampa etichette on-demand",
    "stampante toner etichette",
  ],
  openGraph: {
    title: "Anytron ANY-002 � Stampa + Fustella Etichette | Print Solution",
    description:
      "Sistema completo stampa laser + fustellatura per etichette on-demand. Fino a 5.000 etichette in 2 ore.",
    images: ["/images/products/any-002.avif"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/any-002" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Anytron ANY-002",
  brand: { "@type": "Brand", name: "Anytron" },
  description:
    "Sistema completo stampa laser digitale + fustellatura per etichette on-demand. Toner resistente, 1200 dpi, 9 m/min.",
  image: "https://www.printsolutionsrl.it/images/products/any-002.avif",
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
    { "@type": "ListItem", position: 3, name: "Anytron ANY-002", item: "https://www.printsolutionsrl.it/prodotti/any-002" },
  ],
};

const specs = [
  ["Motore di stampa", "Laser digitale LED"],
  ["Risoluzione", "1.200 dpi a toner"],
  ["Velocit� di stampa", "Fino a 9 m/min"],
  ["produttivit�", "Fino a 5.000 etichette in 2 ore"],
  ["Lunghezza stampa max", "Fino a 1,2 m per etichetta"],
  ["Autonomia bobina", "Fino a 200 m (rilanciabile)"],
  ["Diametro max bobina", "370 mm (~500 m)"],
  ["Diametro anima", "76 mm"],
  ["Materiali supportati", "Carta, PP certificato, PET"],
  ["Toner", "CMYK � K 11.000 pag / CMY 11.500 pag (5% copertura A4)"],
  ["Tamburi", "28.000 pagine"],
  ["Cinghia e fusore", "60.000 pagine"],
  ["Sensori", "Black mark + salto etichetta"],
  ["RAM / HDD", "256 MB RAM, 160 GB HDD"],
  ["Alimentazione", "220�240V, 50�60Hz, 4.5A (max 1.300W)"],
  ["Ambiente di lavoro", "10�32�C, umidit� 20�80%"],
  ["Dimensioni", "180 � 480 � 600 mm"],
  ["Peso", "95 kg"],
];

const features = [
  {
    title: "Resistenza Professionale",
    desc: "Stampe a toner resistenti all'acqua, alle temperature e alle abrasioni. qualit� duratura senza necessit� di laminazione aggiuntiva.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "On-Demand Senza Sprechi",
    desc: "Stampate qualsiasi quantit�, dalla singola etichetta a migliaia. Zero sprechi di materiale grazie al taglio intelligente (meno di 40 cm di scarto).",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Dato Variabile Integrato",
    desc: "Codici a barre, QR code e numeri seriali progressivi stampati direttamente in linea. RIP integrato per ottimizzazione colori.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
      </svg>
    ),
  },
];

export default function Any002Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/any-002-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-violet-500 to-violet-600 text-white mb-6">
                Stampa
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Anytron<br />
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">ANY-002</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Sistema completo stampa laser + fustellatura. Fino a <strong className="text-white">5.000 etichette in 2 ore</strong> con toner resistente ad acqua, calore e abrasioni.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Info%20Anytron%20ANY-002&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni%20sulla%20Anytron%20ANY-002.%0A%0AGrazie"
                  className="btn-primary text-lg"
                >
                  Richiedi Informazioni
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image src="/images/products/any-002.avif" alt="Anytron ANY-002" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <p className="text-violet-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">ANY-002 in Azione</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/any-002-1.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/any-002-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/any-002-2.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/any-002-2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/any-002-3.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/any-002-3.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/any-002-4.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/any-002-4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Stampa Laser Digitale per Etichette On-Demand</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            La Anytron ANY-002 � una stampante laser a colori progettata specificamente per la produzione di etichette 
            in piccoli e medi lotti. Con una risoluzione di 1200 dpi e una velocit� fino a 9 m/min, � in grado di 
            produrre fino a 5.000 etichette in sole 2 ore.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Il toner resistente ad acqua, calore e abrasioni garantisce etichette di qualit� professionale adatte a 
            qualsiasi applicazione, dal food &amp; beverage ai prodotti cosmetici e chimici. La bobina da 500 metri 
            assicura un&apos;autonomia produttiva elevata senza frequenti cambi materiale.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Ideale per aziende che necessitano di etichette personalizzate con dati variabili, lotti brevi e 
            prototipazione rapida, la ANY-002 elimina i costi fissi degli impianti di stampa tradizionali.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-8 text-center">Vantaggi Principali</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center text-white mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-violet-500 font-semibold text-sm uppercase tracking-widest mb-4">Dettagli</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
              Specifiche Tecniche
            </h2>
          </div>
          <div className="card-modern overflow-hidden">
            <table className="w-full">
              <tbody>
                {specs.map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-surface-50"}>
                    <td className="py-4 px-6 font-semibold text-dark-800 w-2/5">{label}</td>
                    <td className="py-4 px-6 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Correlati */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">Prodotti Correlati</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Any-Press", desc: "Stampante laser LED 5 colori CMYK+Bianco", href: "/prodotti/any-press", image: "/images/products/any-press.avif" },
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

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom">
          <div className="relative rounded-3xl bg-cta-gradient p-12 sm:p-16 text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                Vuoi Vedere ANY-002 in Azione?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                Contattaci per una demo dal vivo o per ricevere campioni stampati con i tuoi file.
              </p>
              <a
                href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Anytron%20ANY-002&body=Buongiorno%2C%0A%0AVorrei%20prenotare%20una%20demo%20della%20Anytron%20ANY-002.%0A%0AGrazie"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg text-lg"
              >
                Prenota una Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
