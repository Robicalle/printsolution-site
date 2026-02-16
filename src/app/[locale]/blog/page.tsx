import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";

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
    slug: "come-scegliere-stampante-etichette-colori",
    title: "Come Scegliere una Stampante per Etichette a Colori",
    excerpt: "Guida pratica alle tecnologie, criteri di valutazione e modelli consigliati per ogni esigenza: inkjet, pigmento, toner e industriale.",
    date: "15 Febbraio 2026",
    category: "Etichette",
    readTime: "9 min",
    gradient: "from-magenta-500 to-magenta-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
  },
  {
    slug: "packaging-personalizzato-vantaggi-pmi",
    title: "Packaging Personalizzato: Vantaggi per le PMI",
    excerpt: "Perché il packaging personalizzato è un investimento strategico per le PMI: brand identity, fidelizzazione e produzione on-demand.",
    date: "15 Febbraio 2026",
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
    slug: "stampa-digitale-vs-offset-piccoli-lotti",
    title: "Stampa Digitale vs Offset per Piccoli Lotti",
    excerpt: "Confronto tra stampa digitale e offset: quando conviene il digitale, vantaggi economici e flessibilità per packaging ed etichette.",
    date: "15 Febbraio 2026",
    category: "Stampa",
    readTime: "8 min",
    gradient: "from-yellow-500 to-yellow-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
      </svg>
    ),
  },
  {
    slug: "automatizzare-produzione-scatole",
    title: "Come Automatizzare la Produzione di Scatole",
    excerpt: "Dalla produzione manuale all'automazione: tecnologie, vantaggi operativi e ROI per scatolifici e aziende e-commerce.",
    date: "15 Febbraio 2026",
    category: "Packaging",
    readTime: "9 min",
    gradient: "from-cyan-500 to-cyan-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    slug: "etichette-adesive-materiali-finiture",
    title: "Etichette Adesive: Materiali e Finiture",
    excerpt: "Guida completa ai materiali e finiture per etichette adesive: carta, polipropilene, poliestere, laminazione e verniciatura.",
    date: "15 Febbraio 2026",
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
    slug: "hot-foil-stamping-cose-quando-usarlo",
    title: "Hot Foil Stamping: Cos'è e Quando Usarlo",
    excerpt: "Scopri cos'è l'hot foil stamping, come funziona e quando conviene usarlo per etichette e packaging premium.",
    date: "15 Febbraio 2026",
    category: "Finiture",
    readTime: "8 min",
    gradient: "from-yellow-500 to-yellow-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    slug: "stampa-cartone-ondulato-guida-completa",
    title: "Stampa su Cartone Ondulato: Guida Completa",
    excerpt: "Tecnologie disponibili, confronto tra digitale e flessografia, consigli pratici per stampare su cartone ondulato.",
    date: "15 Febbraio 2026",
    category: "Packaging",
    readTime: "9 min",
    gradient: "from-cyan-500 to-cyan-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
      </svg>
    ),
  },
  {
    slug: "come-ridurre-costi-packaging",
    title: "Come Ridurre i Costi di Packaging",
    excerpt: "Strategie pratiche per ridurre i costi di packaging: ottimizzazione dimensioni, produzione on-demand e automazione.",
    date: "15 Febbraio 2026",
    category: "Packaging",
    readTime: "8 min",
    gradient: "from-cyan-500 to-cyan-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    slug: "tendenze-packaging-2026",
    title: "Tendenze Packaging 2026: Cosa Aspettarsi",
    excerpt: "Le principali tendenze del packaging nel 2026: sostenibilità, personalizzazione digitale, smart packaging e automazione.",
    date: "15 Febbraio 2026",
    category: "Trend",
    readTime: "9 min",
    gradient: "from-yellow-500 to-yellow-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    slug: "stampante-inkjet-industriale-come-scegliere",
    title: "Stampante Inkjet Industriale: Come Scegliere",
    excerpt: "Guida alla scelta della stampante inkjet industriale: single-pass vs multi-pass, inchiostri e applicazioni per packaging.",
    date: "15 Febbraio 2026",
    category: "Stampa",
    readTime: "9 min",
    gradient: "from-cyan-500 to-cyan-600",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
      </svg>
    ),
  },
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
        imageSrc="/images/hero-blog.jpg"
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
                    <span className="text-gray-500 text-sm">{a.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-dark-800 mb-2 group-hover:text-cyan-500 transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{a.date}</span>
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
