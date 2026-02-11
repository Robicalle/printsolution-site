import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articoli e guide sulla stampa digitale per packaging, etichette a colori e cartone ondulato. Approfondimenti tecnici da Print Solution.",
  keywords: [
    "blog stampa digitale",
    "guida packaging digitale",
    "stampa etichette guida",
    "cartone ondulato stampa",
  ],
  openGraph: {
    title: "Blog | Print Solution",
    description:
      "Articoli e guide sulla stampa digitale per packaging, etichette e cartone ondulato.",
    images: ["/images/hero-boxes.webp"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog" },
};

const articles = [
  {
    slug: "box-maker-produzione-automatica-scatole",
    title: "Box Maker: Cos'è e Come Funziona la Produzione Automatica di Scatole",
    excerpt: "Scopri come un box maker automatico come l'Anypack AB2500 rivoluziona la produzione di scatole in cartone ondulato: dal taglio all'incollaggio in un'unica operazione.",
    date: "5 Febbraio 2026",
    category: "Packaging",
    readTime: "8 min",
    gradient: "from-cyan-500 to-cyan-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  {
    slug: "stampante-etichette-colori-bobina-guida",
    title: "Stampante Etichette a Colori in Bobina: Guida alla Scelta",
    excerpt: "Come scegliere la stampante per etichette giusta tra Memjet, pigmento e toner? Confronto tra Afinia L701, L901, X350 e LT5C con criteri pratici.",
    date: "3 Febbraio 2026",
    category: "Etichette",
    readTime: "10 min",
    gradient: "from-magenta-500 to-magenta-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
  },
  {
    slug: "stampa-digitale-cartone-ondulato-vs-flessografia",
    title: "Stampa Digitale su Cartone Ondulato: Vantaggi vs Flessografia",
    excerpt: "Perché sempre più aziende scelgono la stampa digitale single-pass per il packaging in cartone ondulato? Analisi dei vantaggi rispetto alla flessografia tradizionale.",
    date: "1 Febbraio 2026",
    category: "Packaging",
    readTime: "7 min",
    gradient: "from-yellow-500 to-yellow-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
      </svg>
    ),
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Articoli, guide e approfondimenti sulla stampa digitale per packaging ed etichette."
        breadcrumb="Print Solution"
      />

      {/* Articles listing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {articles.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className={`h-48 bg-gradient-to-br ${a.gradient} flex items-center justify-center`}>
                  <div className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    {a.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${a.gradient}`}>
                      {a.category}
                    </span>
                    <span className="text-gray-400 text-sm">{a.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-dark-800 mb-2 group-hover:text-cyan-500 transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{a.date}</span>
                    <span className="text-cyan-500 text-sm font-semibold group-hover:underline">Leggi →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-800 mb-4">Resta Aggiornato</h2>
          <p className="text-gray-500 mb-8">
            Contattaci per ricevere aggiornamenti sulle novità del settore e le nostre soluzioni.
          </p>
          <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie" className="btn-primary">Contattaci</a>
        </div>
      </section>
    </>
  );
}
