import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

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

function getArticles(locale: string) {
  return [
    {
      slug: "come-scegliere-stampante-etichette-colori",
      title: locale === 'it' ? "Come Scegliere una Stampante per Etichette a Colori" : "How to Choose a Color Label Printer",
      excerpt: locale === 'it' ? "Guida pratica alle tecnologie, criteri di valutazione e modelli consigliati per ogni esigenza: inkjet, pigmento, toner e industriale." : "Practical guide to technologies, evaluation criteria and recommended models for every need: inkjet, pigment, toner and industrial.",
      date: locale === 'it' ? "15 Febbraio 2026" : "February 15, 2026",
      category: locale === 'it' ? "Etichette" : "Labels",
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
      title: locale === 'it' ? "Packaging Personalizzato: Vantaggi per le PMI" : "Custom Packaging: Benefits for SMEs",
      excerpt: locale === 'it' ? "Perché il packaging personalizzato è un investimento strategico per le PMI: brand identity, fidelizzazione e produzione on-demand." : "Why custom packaging is a strategic investment for SMEs: brand identity, customer loyalty and on-demand production.",
      date: locale === 'it' ? "15 Febbraio 2026" : "February 15, 2026",
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
      title: locale === 'it' ? "Stampa Digitale vs Offset per Piccoli Lotti" : "Digital vs Offset Printing for Small Runs",
      excerpt: locale === 'it' ? "Confronto tra stampa digitale e offset: quando conviene il digitale, vantaggi economici e flessibilità per packaging ed etichette." : "Digital vs offset comparison: when digital pays off, cost advantages and flexibility for packaging and labels.",
      date: locale === 'it' ? "15 Febbraio 2026" : "February 15, 2026",
      category: locale === 'it' ? "Stampa" : "Printing",
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
      title: locale === 'it' ? "Come Automatizzare la Produzione di Scatole" : "How to Automate Box Production",
      excerpt: locale === 'it' ? "Dalla produzione manuale all'automazione: tecnologie, vantaggi operativi e ROI per scatolifici e aziende e-commerce." : "From manual to automated production: technologies, operational benefits and ROI for box manufacturers and e-commerce companies.",
      date: locale === 'it' ? "15 Febbraio 2026" : "February 15, 2026",
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
      title: locale === 'it' ? "Etichette Adesive: Materiali e Finiture" : "Adhesive Labels: Materials and Finishes",
      excerpt: locale === 'it' ? "Guida completa ai materiali e finiture per etichette adesive: carta, polipropilene, poliestere, laminazione e verniciatura." : "Complete guide to materials and finishes for adhesive labels: paper, polypropylene, polyester, lamination and varnishing.",
      date: locale === 'it' ? "15 Febbraio 2026" : "February 15, 2026",
      category: locale === 'it' ? "Etichette" : "Labels",
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
      title: locale === 'it' ? "Hot Foil Stamping: Cos'è e Quando Usarlo" : "Hot Foil Stamping: What It Is and When to Use It",
      excerpt: locale === 'it' ? "Scopri cos'è l'hot foil stamping, come funziona e quando conviene usarlo per etichette e packaging premium." : "Discover what hot foil stamping is, how it works and when to use it for premium labels and packaging.",
      date: locale === 'it' ? "15 Febbraio 2026" : "February 15, 2026",
      category: locale === 'it' ? "Finiture" : "Finishing",
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
      title: locale === 'it' ? "Stampa su Cartone Ondulato: Guida Completa" : "Printing on Corrugated Cardboard: Complete Guide",
      excerpt: locale === 'it' ? "Tecnologie disponibili, confronto tra digitale e flessografia, consigli pratici per stampare su cartone ondulato." : "Available technologies, digital vs flexography comparison, practical tips for printing on corrugated cardboard.",
      date: locale === 'it' ? "15 Febbraio 2026" : "February 15, 2026",
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
      title: locale === 'it' ? "Come Ridurre i Costi di Packaging" : "How to Reduce Packaging Costs",
      excerpt: locale === 'it' ? "Strategie pratiche per ridurre i costi di packaging: ottimizzazione dimensioni, produzione on-demand e automazione." : "Practical strategies to reduce packaging costs: size optimisation, on-demand production and automation.",
      date: locale === 'it' ? "15 Febbraio 2026" : "February 15, 2026",
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
      title: locale === 'it' ? "Tendenze Packaging 2026: Cosa Aspettarsi" : "Packaging Trends 2026: What to Expect",
      excerpt: locale === 'it' ? "Le principali tendenze del packaging nel 2026: sostenibilità, personalizzazione digitale, smart packaging e automazione." : "The main packaging trends in 2026: sustainability, digital personalisation, smart packaging and automation.",
      date: locale === 'it' ? "15 Febbraio 2026" : "February 15, 2026",
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
      title: locale === 'it' ? "Stampante Inkjet Industriale: Come Scegliere" : "Industrial Inkjet Printer: How to Choose",
      excerpt: locale === 'it' ? "Guida alla scelta della stampante inkjet industriale: single-pass vs multi-pass, inchiostri e applicazioni per packaging." : "Guide to choosing an industrial inkjet printer: single-pass vs multi-pass, inks and packaging applications.",
      date: locale === 'it' ? "15 Febbraio 2026" : "February 15, 2026",
      category: locale === 'it' ? "Stampa" : "Printing",
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
      title: locale === 'it' ? "Box Maker: Cos'è e Come Funziona la Produzione Automatica di Scatole" : "Box Maker: What It Is and How Automatic Box Production Works",
      excerpt: locale === 'it' ? "Scopri come un box maker automatico come l'Anypack AB2500 rivoluziona la produzione di scatole in cartone ondulato: dal taglio all'incollaggio in un'unica operazione." : "Discover how an automatic box maker like the Anypack AB2500 revolutionises corrugated box production: from cutting to gluing in a single operation.",
      date: locale === 'it' ? "5 Febbraio 2026" : "February 5, 2026",
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
      title: locale === 'it' ? "Stampante Etichette a Colori in Bobina: Guida alla Scelta" : "Roll-Fed Color Label Printer: Buying Guide",
      excerpt: locale === 'it' ? "Come scegliere la stampante per etichette giusta tra Memjet, pigmento e toner? Confronto tra Afinia L701, L901, X350 e LT5C con criteri pratici." : "How to choose the right label printer among Memjet, pigment and toner? Comparison of Afinia L701, L901, X350 and LT5C with practical criteria.",
      date: locale === 'it' ? "3 Febbraio 2026" : "February 3, 2026",
      category: locale === 'it' ? "Etichette" : "Labels",
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
      title: locale === 'it' ? "Stampa Digitale su Cartone Ondulato: Vantaggi vs Flessografia" : "Digital Printing on Corrugated Cardboard: Advantages vs Flexography",
      excerpt: locale === 'it' ? "Perché sempre più aziende scelgono la stampa digitale single-pass per il packaging in cartone ondulato? Analisi dei vantaggi rispetto alla flessografia tradizionale." : "Why are more and more companies choosing single-pass digital printing for corrugated packaging? Analysis of the advantages over traditional flexography.",
      date: locale === 'it' ? "1 Febbraio 2026" : "February 1, 2026",
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
}

export default async function BlogPage() {
  const locale = await getLocale();
  const articles = getArticles(locale);
  return (
    <>
      <PageHero
        title="Blog"
        subtitle={locale === 'it' ? "Articoli, guide e approfondimenti sulla stampa digitale per packaging ed etichette." : "Articles, guides and insights on digital printing for packaging and labels."}
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
                    <span className="text-cyan-500 text-sm font-semibold group-hover:underline">{locale === 'it' ? 'Leggi →' : 'Read →'}</span>
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
          <h2 className="text-2xl font-bold text-dark-800 mb-4">{locale === 'it' ? 'Resta Aggiornato' : 'Stay Updated'}</h2>
          <p className="text-gray-500 mb-8">
            {locale === 'it' ? 'Contattaci per ricevere aggiornamenti sulle novità del settore e le nostre soluzioni.' : 'Contact us to receive updates on industry news and our solutions.'}
          </p>
          <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie" className="btn-primary">{locale === 'it' ? 'Contattaci' : 'Contact Us'}</a>
        </div>
      </section>
    </>
  );
}
