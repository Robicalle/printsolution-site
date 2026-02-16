import { getLocale } from 'next-intl/server';
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Afinia DLF-220L / DLF-350L — Fustellatori Digitali per Etichette",
  description:
    "Afinia DLF-220L e DLF-350L: fustellatori digitali plotter per etichette. Taglio a plotter di qualsiasi forma senza fustelle fisiche, laminazione in linea, rimozione sfrido e slitting.",
  keywords: [
    "Afinia DLF-220L",
    "Afinia DLF-350L",
    "fustellatore digitale etichette",
    "taglio plotter etichette",
    "finitura etichette digitale",
    "digital label finisher",
  ],
  openGraph: {
    title: "Afinia DLF-220L / DLF-350L — Fustellatori Digitali | Print Solution",
    description:
      "Fustellatori digitali plotter per etichette: taglio di qualsiasi forma senza fustelle fisiche, laminazione, slitting e riavvolgimento.",
    images: ["/images/products/afinia-dlf-220l.png"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/afinia-dlf" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Afinia DLF-220L / DLF-350L",
  brand: { "@type": "Brand", name: "Afinia Label" },
  description:
    "Fustellatori digitali plotter per etichette: taglio di qualsiasi forma da file digitale, laminazione in linea, rimozione sfrido e slitting.",
  image: "https://www.printsolutionsrl.it/images/products/afinia-dlf-220l.png",
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
    { "@type": "ListItem", position: 3, name: "DLF-220L / DLF-350L", item: "https://www.printsolutionsrl.it/prodotti/afinia-dlf" },
  ],
};

const specs = [
  ["Tecnologia di taglio", "Plotter digitale (senza fustelle fisiche)"],
  ["Larghezza nastro (DLF-220L)", "220 mm (8.6\")"],
  ["Larghezza nastro (DLF-350L)", "350 mm (13.75\")"],
  ["Laminazione in linea", "Sì (modelli L)"],
  ["Taglio forme", "Qualsiasi forma da file digitale"],
  ["Rimozione sfrido", "Automatica integrata"],
  ["Slitting", "Integrato"],
  ["Riavvolgimento", "Bobine finite pronte per applicazione"],
  ["Ideale per", "Tirature brevi, prototipi, on-demand"],
];

const features = [
  {
    title: "Taglio Senza Fustelle", titleEn: "Die-Free Cutting",
    desc: "Tecnologia plotter che taglia qualsiasi forma direttamente da file digitale. Nessuna fustella fisica da acquistare, nessun tempo di attesa per la produzione degli utensili.", descEn: "Plotter technology that cuts any shape directly from digital file. No physical dies to purchase, no waiting time for tooling production.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
      </svg>
    ),
  },
  {
    title: "Laminazione Integrata", titleEn: "Integrated Lamination",
    desc: "I modelli \"L\" includono laminazione in linea per proteggere le etichette e garantire una finitura professionale resistente a graffi e umidità.", descEn: "The 'L' models include inline lamination to protect labels and ensure a professional finish resistant to scratches and moisture.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Processo Completo in Uno", titleEn: "Complete Process in One",
    desc: "Svolgi, lamina, taglia, rimuovi sfrido, slitting e riavvolgimento è tutto in un unico passaggio. Etichette pronte per l'applicazione in uscita.", descEn: "Unwind, laminate, cut, waste removal, slitting and rewinding — all in a single pass. Labels ready for application at the output.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Ideale per Tirature Brevi", titleEn: "Ideal for Short Runs",
    desc: "Perfetto per piccole tirature, prototipi e stampa on-demand. Permette ai tipografi di gestire internamente lavori brevi con tempi di consegna rapidi e qualità elevata.", descEn: "Perfect for short runs, prototypes and on-demand printing. Allows printers to handle short jobs in-house with quick turnaround and high quality.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Nessun Costo Utensili", titleEn: "No Tooling Costs",
    desc: "Elimina completamente i costi delle fustelle tradizionali. Ogni forma diversa è solo un file: cambi design in pochi click senza attendere la produzione di nuovi utensili.", descEn: "Completely eliminates the cost of traditional dies. Every different shape is just a file: change designs in a few clicks without waiting for new tooling.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Cambio Lavoro Istantaneo", titleEn: "Instant Job Changeover",
    desc: "Passa da un design all'altro in secondi: basta caricare il nuovo file di taglio. Zero setup meccanico, zero tempi morti tra una commessa e l'altra.", descEn: "Switch between designs in seconds: just load the new cutting file. Zero mechanical setup, zero downtime between jobs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default async function () {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <Image src="/images/hero-labels.webp" alt="Afinia DLF-220L / DLF-350L" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-green-500 to-green-600 text-white mb-6">
                Fustellatura Digitale
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Afinia<br />
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">DLF-220L / DLF-350L</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Fustellatori digitali a plotter: tagliano <strong className="text-white">qualsiasi forma</strong> da file digitale, senza fustelle fisiche. Laminazione, rimozione sfrido, slitting e riavvolgimento in un unico passaggio.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Info%20Afinia%20DLF-220L%20DLF-350L&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni%20sui%20fustellatori%20digitali%20DLF-220L%2FDLF-350L.%0A%0AGrazie"
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
            <Image src="/images/products/afinia-dlf-220l.png" alt="Afinia DLF-220L / DLF-350L" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">DLF in Azione</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" aria-label="Video dimostrativo del prodotto" className="w-full h-full object-cover"><source src="/videos/dlf-1.mp4" type="video/mp4" /></video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" aria-label="Video dimostrativo del prodotto" className="w-full h-full object-cover"><source src="/videos/dlf-2.mp4" type="video/mp4" /></video>
            </div>
          </div>
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
                <h3 className="text-lg font-bold text-dark-800 mb-2">{locale === 'it' ? f.title : (f.titleEn || f.title)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{locale === 'it' ? f.desc : (f.descEn || f.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-green-500 font-semibold text-sm uppercase tracking-widest mb-4">Dettagli</p>
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
              { name: "Afinia DC250 / DC350", desc: "{locale === 'it' ? 'Fustellatori semi-rotativi per alti volumi' : 'Semi-rotary die-cutters for high volumes'}", href: "/prodotti/afinia-dc350", image: "/images/products/afinia-dc350.png" },
              { name: "Afinia L901", desc: "{locale === 'it' ? 'Stampante etichette professionale Memjet' : 'Professional Memjet label printer'}", href: "/prodotti/afinia-l901", image: "/images/products/afinia-l901.png" },
              { name: "Afinia X350", desc: "Stampante roll-to-roll alta Velocità", href: "/prodotti/afinia-x350", image: "/images/products/afinia-x350-site.webp" },
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
                Vuoi Vedere la DLF in Azione?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                Contattaci per una demo o per ricevere campioni di etichette fustellate con i tuoi file.
              </p>
              <a
                href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20DLF&body=Buongiorno%2C%0A%0AVorrei%20prenotare%20una%20demo%20dei%20fustellatori%20digitali%20DLF.%0A%0AGrazie"
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
