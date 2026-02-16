import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Afinia DC250 / DC350 — Fustellatori Semi-Rotativi per Etichette",
  description:
    "Afinia DC250 e DC350: fustellatori semi-rotativi con laminazione, fustellatura con fustelle flessibili in acciaio, rimozione sfrido, slitting e riavvolgimento. Fino a 30 m/min.",
  keywords: [
    "Afinia DC250",
    "Afinia DC350",
    "fustellatore etichette",
    "fustellatura semi-rotativa",
    "finitura etichette",
    "laminazione etichette",
  ],
  openGraph: {
    title: "Afinia DC250 / DC350 — Fustellatori Semi-Rotativi | Print Solution",
    description:
      "Fustellatori semi-rotativi per etichette con laminazione, fustellatura, rimozione sfrido e slitting. Fino a 30 m/min.",
    images: ["/images/products/afinia-dc350.png"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/afinia-dc350" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Afinia DC250 / DC350",
  brand: { "@type": "Brand", name: "Afinia Label" },
  description:
    "Fustellatori semi-rotativi per etichette con laminazione, fustellatura con fustelle flessibili, rimozione sfrido e slitting.",
  image: "https://www.printsolutionsrl.it/images/products/afinia-dc350.png",
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
    { "@type": "ListItem", position: 3, name: "Afinia DC250 / DC350", item: "https://www.printsolutionsrl.it/prodotti/afinia-dc350" },
  ],
};

const specsData = [
  { label: "Velocità semi-rotativa", dc250: "Fino a 30 m/min", dc350: "Fino a 30 m/min" },
  { label: "Larghezza max nastro", dc250: "250 mm (9.84\")", dc350: "350 mm (13.78\")" },
  { label: "Larghezza min nastro", dc250: "100 mm", dc350: "100 mm" },
  { label: "Larghezza max fustellatura", dc250: "230 mm", dc350: "330 mm" },
  { label: "Lunghezza max fustellatura", dc250: "360 mm", dc350: "360 mm" },
  { label: "Diametro bobina ingresso", dc250: "500 mm", dc350: "500 mm" },
  { label: "Portarullo", dc250: "Meccanico (3\")", dc350: "Pneumatico (3\")" },
  { label: "Laminazione", dc250: "Sì — self-wound e con liner", dc350: "Sì — self-wound e con liner" },
  { label: "Diametro max laminato", dc250: "250 mm", dc350: "250 mm" },
  { label: "Modulo vernice UV", dc250: "Sì", dc350: "Sì" },
  { label: "Fustelle", dc250: "Flessibili in acciaio, 130×360 mm", dc350: "Flessibili in acciaio, 130×360 mm" },
  { label: "Cilindro magnetico", dc250: "18\" - 2144 mod. 1/8", dc350: "18\" - 2144 mod. 1/8" },
  { label: "Sensore registro", dc250: "Laser, 4×4 mm", dc350: "Laser, 4×4 mm" },
  { label: "Riavvolgimento etichette", dc250: "Max 400 mm", dc350: "Max 400 mm" },
  { label: "Riavvolgimento sfrido", dc250: "Max 300 mm", dc350: "Max 300 mm" },
  { label: "Lame slitting", dc250: "Fino a 12", dc350: "Fino a 15" },
  { label: "Dimensioni", dc250: "283 × 72 × 165 cm", dc350: "283 × 100 × 165 cm" },
  { label: "Alimentazione", dc250: "100×240V, ~1kW, 50/60Hz", dc350: "100×240V, ~1kW, 50/60Hz" },
];

const features = [
  {
    title: "Laminazione Avanzata",
    desc: "Protegge le etichette da usura, graffi e condizioni ambientali. Supporta laminati self-wound e su liner per una finitura premium e duratura.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Fustellatura Semi-Rotativa",
    desc: "Cilindri magnetici con fustelle flessibili in acciaio: economiche, veloci da produrre e sostituire. Cambio lavoro rapidissimo per massima produttività.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
  {
    title: "Rimozione Sfrido Automatica",
    desc: "Il sistema integrato elimina automaticamente il materiale in eccesso dopo la fustellatura, lasciando etichette perfettamente sagomate.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Slitting e Riavvolgimento",
    desc: "Trasforma bobine larghe in bobine più strette pronte per l'applicazione. Fino a 15 lame di slitting per creare più formati da una singola tiratura.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Velocità fino a 30 m/min",
    desc: "Produzione ad alta velocità per gestire tirature medio-grandi con efficienza. Ideale per etichettifici che richiedono volumi costanti e tempi rapidi.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5m-3 1.5l-3-1.5m6 0l3 1.5m-3-1.5v-3m3 4.5V6m-6 4.5V6" />
      </svg>
    ),
  },
  {
    title: "Cambio Lavoro Rapido",
    desc: "Setup minimo tra un lavoro e l'altro grazie ai cilindri magnetici intercambiabili. Riduci i tempi morti e massimizza la produttività quotidiana.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default async function DC350Page() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <Image src="/images/hero-labels.webp" alt="Afinia DC250 / DC350" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 text-white mb-6">
                Fustellatura Semi-Rotativa
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Afinia<br />
                <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">DC250 / DC350</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Fustellatori semi-rotativi professionali con laminazione, fustellatura con fustelle flessibili in acciaio, rimozione sfrido, slitting e riavvolgimento. Fino a <strong className="text-white">30 m/min</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Info%20Afinia%20DC250%20DC350&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni%20sui%20fustellatori%20Afinia%20DC250%2FDC350.%0A%0AGrazie"
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
            <Image src="/images/products/afinia-dc350.png" alt="Afinia DC250 / DC350" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">DC350 in Azione</h2>
          </div>
          <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" aria-label="Video dimostrativo del prodotto" className="w-full h-full object-cover"><source src="/videos/dc350-1.mp4" type="video/mp4" /></video>
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

      {/* Comparison Table */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-4">Confronto</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
              DC250 vs DC350
            </h2>
          </div>
          <div className="card-modern overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-4 px-6 text-left text-sm font-bold text-dark-800">Specifica</th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-dark-800">DC250</th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-dark-800">DC350</th>
                </tr>
              </thead>
              <tbody>
                {specsData.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-surface-50"}>
                    <td className="py-3 px-6 font-semibold text-dark-800 text-sm">{row.label}</td>
                    <td className="py-3 px-6 text-gray-600 text-sm">{row.dc250}</td>
                    <td className="py-3 px-6 text-gray-600 text-sm">{row.dc350}</td>
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
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">{locale === 'it' ? 'Prodotti Correlati' : 'Related Products'}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "DLF-220L / DLF-350L", desc: "Fustellatori digitali plotter (senza fustelle)", href: "/prodotti/afinia-dlf", image: "/images/products/afinia-dlf-220l.png" },
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
                Vuoi Vedere DC250/DC350 in Azione?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                Contattaci per una demo dal vivo nella nostra sala demo a Sesto San Giovanni.
              </p>
              <a
                href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20DC250%20DC350&body=Buongiorno%2C%0A%0AVorrei%20prenotare%20una%20demo%20dei%20fustellatori%20DC250%2FDC350.%0A%0AGrazie"
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
