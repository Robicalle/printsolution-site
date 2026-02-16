import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Any-Press � Stampante Laser LED 5 Colori CMYK+Bianco",
  description:
    "Any-Press: stampante laser LED a 5 colori (CMYK+Bianco) per etichette e packaging flessibile. Toner bianco per kraft e trasparenti, laminazione integrata, 1200 dpi.",
  keywords: [
    "Any-Press",
    "stampante laser LED",
    "CMYK bianco",
    "etichette kraft",
    "packaging flessibile",
    "toner bianco",
  ],
  openGraph: {
    title: "Any-Press � Stampante Laser LED CMYK+Bianco | Print Solution",
    description:
      "Stampante laser LED a 5 colori per etichette e packaging flessibile. Toner bianco, laminazione integrata.",
    images: ["/images/products/any-press.avif"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/any-press" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Any-Press",
  brand: { "@type": "Brand", name: "Anytron" },
  description:
    "Stampante laser LED a 5 colori (CMYK+Bianco) per etichette e packaging flessibile. 1200 dpi, laminazione integrata.",
  image: "https://www.printsolutionsrl.it/images/products/any-press.avif",
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
    { "@type": "ListItem", position: 3, name: "Any-Press", item: "https://www.printsolutionsrl.it/prodotti/any-press" },
  ],
};

const specs = [
  ["Motore di stampa", "Laser digitale LED"],
  ["Colori", "5 colori � CMYKW (incluso bianco)"],
  ["Risoluzione", "1.200 � 1.200 dpi"],
  ["Velocit� di stampa", "5 m/min"],
  ["Larghezza stampa max", "324 mm"],
  ["Larghezza supporto max", "330 mm"],
  ["Diametro max rotolo", "350 mm"],
  ["Laminatore", "Opzionale � a freddo o a caldo"],
  ["Software", "ANY-FLOW"],
  ["Alimentazione", "Monofase 220�240V / 6A"],
  ["Dimensioni", "L 1350 � P 1090 � H 1615 mm"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Toner Bianco CMYKW",
    desc: "Stampa a 5 colori con toner bianco per creare immagini e testi nitidi su carte colorate, kraft e supporti trasparenti.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Etichette e Packaging Flessibile",
    desc: "Soluzione 2-in-1 per etichette e imballaggi flessibili: buste piatte, stand-up pouch e bustine fino a 13 pollici di larghezza.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Laminazione Integrata",
    desc: "Plastificatrice integrata opzionale (a freddo o a caldo) per completare stampa e laminazione in un unico passaggio.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Stampe Durevoli Senza Rivestimento",
    desc: "Il toner laser LED garantisce resistenza all'acqua, ai raggi UV, ai graffi e alle condizioni esterne senza necessit� di rivestimenti aggiuntivi.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Costi di Produzione Ridotti",
    desc: "Toner e tamburi ad alta capacit� con ampia scelta di supporti non patinati. I costi di produzione pi� competitivi della categoria.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Software ANY-FLOW",
    desc: "Sistema operativo dedicato per gestione colori, dati variabili (codici a barre, QR code), nesting e calcolo costi di produzione.",
  },
];

export default function AnyPressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/any-press-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Stampanti Etichette</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Any-Press</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Stampante laser LED a 5 colori (CMYK+Bianco) per etichette e packaging flessibile.
                Stampa su carte colorate, kraft e trasparenti grazie al toner bianco. Laminazione
                integrata opzionale e software ANY-FLOW per dati variabili.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Any-Press&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Any-Press.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">Richiedi Demo →</a>
              </div>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image src="/images/products/any-press.avif" alt="Product photo" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Stampa Laser LED a 5 Colori con Toner Bianco</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            La Any-Press di Anytron � una stampante laser LED a 5 colori (CMYK + Bianco) progettata per la produzione di etichette e packaging flessibile. Grazie al toner bianco, permette di stampare immagini e testi nitidi su carte colorate, kraft e supporti trasparenti, aprendo possibilit� creative impossibili con le stampanti CMYK tradizionali. La risoluzione di 1200 � 1200 dpi assicura dettagli precisi e colori vivaci su ogni supporto.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Soluzione 2-in-1 unica nel suo genere, la Any-Press stampa sia etichette in bobina che imballaggi flessibili come buste piatte, stand-up pouch e bustine fino a 13 pollici di larghezza. Il toner laser LED garantisce resistenza all&apos;acqua, ai raggi UV, ai graffi e alle condizioni esterne senza necessit� di rivestimenti aggiuntivi, mentre il laminatore integrato opzionale (a freddo o a caldo) completa il processo in un unico passaggio.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Il software dedicato ANY-FLOW gestisce la produzione con funzionalit� avanzate: gestione colori, dati variabili (codici a barre, QR code), nesting ottimizzato e calcolo dei costi di produzione. Con toner e tamburi ad alta capacit� e la possibilit� di utilizzare supporti non patinati a basso costo, la Any-Press offre i costi di produzione pi� competitivi della categoria, rendendola ideale per tirature medio-piccole e produzioni on-demand.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">Any-Press in Azione</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/any-press-1.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/any-press-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-8 text-center">Vantaggi Principali</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white mb-5">
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
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Stampa Etichette con il Bianco In-House</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Scopri come la Any-Press pu� trasformare la tua produzione di etichette e packaging flessibile. Contattaci per una consulenza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Any-Press&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Any-Press.%0A%0AGrazie" className="btn-primary text-lg">Richiedi Demo →</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">Prodotti Correlati</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Afinia LT5C", desc: "Stampante etichette toner LED industriale", href: "/prodotti/afinia-lt5c", image: "/images/products/afinia-lt5c.avif" },
              { name: "Afinia X350", desc: "Stampante roll-to-roll alta velocit�", href: "/prodotti/afinia-x350", image: "/images/products/afinia-x350-site.webp" },
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
