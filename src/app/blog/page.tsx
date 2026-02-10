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
  },
  {
    slug: "stampante-etichette-colori-bobina-guida",
    title: "Stampante Etichette a Colori in Bobina: Guida alla Scelta",
    excerpt: "Come scegliere la stampante per etichette giusta tra Memjet, pigmento e toner? Confronto tra Afinia L701, L901, X350 e LT5C con criteri pratici.",
    date: "3 Febbraio 2026",
    category: "Etichette",
    readTime: "10 min",
    gradient: "from-magenta-500 to-magenta-600",
  },
  {
    slug: "stampa-digitale-cartone-ondulato-vs-flessografia",
    title: "Stampa Digitale su Cartone Ondulato: Vantaggi vs Flessografia",
    excerpt: "Perché sempre più aziende scelgono la stampa digitale single-pass per il packaging in cartone ondulato? Analisi dei vantaggi rispetto alla flessografia tradizionale.",
    date: "1 Febbraio 2026",
    category: "Packaging",
    readTime: "7 min",
    gradient: "from-yellow-500 to-yellow-600",
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
                  <span className="text-white/20 text-6xl font-bold">{a.category[0]}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${a.gradient}`}>
                      {a.category}
                    </span>
                    <span className="text-gray-400 text-xs">{a.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-dark-800 mb-2 group-hover:text-cyan-500 transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{a.date}</span>
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
          <Link href="/contatti" className="btn-primary">Contattaci</Link>
        </div>
      </section>
    </>
  );
}
