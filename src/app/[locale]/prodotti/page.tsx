import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { getAllProducts } from "@/sanity/lib/fetchers";
import { urlForImage } from "@/sanity/lib/image";
import ProductFaqSection from "@/components/ProductFaqSection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const it = locale === "it";
  return {
    title: it
      ? "Stampanti per Packaging ed Etichette"
      : "Packaging & Label Printers",
    description: it
      ? "Tutta la gamma di stampanti digitali Print Solution: box maker automatici, stampanti per cartone ondulato, etichettatrici inkjet e laser. Demo gratuita a Milano."
      : "Full range of Print Solution digital printers: automatic box makers, corrugated cardboard printers, inkjet and laser label printers. Free demo near Milan.",
    alternates: {
      canonical: locale === 'it' ? `https://www.printsolutionsrl.it/prodotti` : `https://www.printsolutionsrl.it/en/prodotti`,
      languages: {
        'it': 'https://www.printsolutionsrl.it/prodotti',
        'en': 'https://www.printsolutionsrl.it/en/prodotti',
        'x-default': 'https://www.printsolutionsrl.it/prodotti',
      },
    },
  };
}

const categoryInfo: Record<string, { it: string; en: string; descIt: string; descEn: string; icon: string; color: string }> = {
  "stampanti-packaging": {
    it: "Stampanti Packaging",
    en: "Packaging Printers",
    icon: "📦",
    color: "from-cyan-500 to-cyan-600",
    descIt: "Stampanti digitali single-pass per stampare direttamente su cartone ondulato, scatole, shopper e packaging di grande formato — senza clichè e senza minimi d'ordine. Ideali per scatolifici, e-commerce e print shop che producono packaging personalizzato on-demand.",
    descEn: "Single-pass digital printers for printing directly on corrugated cardboard, boxes, shoppers and large-format packaging — with no plates and no minimum order. Ideal for box makers, e-commerce and print shops producing custom packaging on demand.",
  },
  "stampanti-etichette": {
    it: "Stampanti Etichette",
    en: "Label Printers",
    icon: "🏷️",
    color: "from-emerald-500 to-emerald-600",
    descIt: "Etichettatrici digitali inkjet e laser a colori per etichette adesive in bobina, con o senza bianco. Adatte a food & beverage, cosmetica, chimica e vino, per tirature medie e piccole senza costi di setup.",
    descEn: "Inkjet and laser colour label printers for roll adhesive labels, with or without white. Suited to food & beverage, cosmetics, chemicals and wine, for medium and short runs with no setup costs.",
  },
  finishing: {
    it: "Finishing & Accessori",
    en: "Finishing & Accessories",
    icon: "✂️",
    color: "from-amber-500 to-amber-600",
    descIt: "Sistemi di finitura per completare la produzione di etichette e packaging: laminazione, fustellatura semi-rotativa e digitale, taglio, ribobinatura e nobilitazione a caldo.",
    descEn: "Finishing systems to complete label and packaging production: lamination, semi-rotary and digital die-cutting, slitting, rewinding and hot foil embellishment.",
  },
  labbratura: {
    it: "Labbratura Libri",
    en: "Book Edge Printing",
    icon: "📚",
    color: "from-violet-500 to-violet-600",
    descIt: "Stampanti dedicate alla labbratura, la decorazione a colori del taglio di libri, quaderni e agende. Soluzioni da tavolo e industriali per legatorie, tipografie ed editori.",
    descEn: "Printers dedicated to book edge printing, the colour decoration of the edges of books, notebooks and diaries. Desktop and industrial solutions for binderies, print shops and publishers.",
  },
};

const heroStats = [
  { value: "20+", labelIt: "macchine in catalogo", labelEn: "machines in catalogue" },
  { value: "4", labelIt: "categorie di stampa", labelEn: "printing categories" },
  { value: "1", labelIt: "sala demo a Milano", labelEn: "demo room near Milan" },
  { value: "100%", labelIt: "assistenza in Italia", labelEn: "support in Italy" },
];

export default async function ProdottiPage() {
  const locale = await getLocale();
  const it = locale === "it";
  const products = (await getAllProducts()) || [];

  // Group by category
  const grouped: Record<string, any[]> = {};
  for (const p of products) {
    const cat = p.category || "altro";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(p);
  }

  const baseUrl = it ? "https://www.printsolutionsrl.it" : "https://www.printsolutionsrl.it/en";

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: it ? "Stampanti per Packaging ed Etichette" : "Packaging & Label Printers",
    url: `${baseUrl}/prodotti`,
    numberOfItems: products.length,
    itemListElement: products.map((p: any, i: number) => {
      const slug = p.slug?.current || p.slug;
      const img = p.images?.[0] ? urlForImage(p.images[0]).width(600).url() : undefined;
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          url: `${baseUrl}/prodotti/${slug}`,
          ...(img && { image: img }),
          ...(p.seoDescription && { description: p.seoDescription }),
          brand: { "@type": "Brand", name: "Print Solution" },
        },
      };
    }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: it ? "Prodotti" : "Products", item: `${baseUrl}/prodotti` },
    ],
  };

  const faqItems = it ? [
    { question: "Quale stampante scegliere per stampare scatole di cartone?", answer: "Per stampare direttamente su cartone ondulato servono stampanti single-pass come EDM-650X, GreenBox EVO o ThunderBox; per produrre le scatole da zero c'è il box maker automatico Anypack AB2500. La scelta dipende da formato, volume e budget." },
    { question: "Che differenza c'è tra stampante inkjet e laser per etichette?", answer: "Le stampanti inkjet (es. Afinia L901, X350) offrono alta velocità e costi contenuti sui grandi volumi; quelle a toner LED/laser (es. Afinia LT5C, Anytron ANY-002) garantiscono resistenza immediata ad acqua e abrasione e la stampa del bianco. La scelta dipende dai materiali e dall'uso finale." },
    { question: "È necessaria una tiratura minima?", answer: "No. Tutte le nostre stampanti digitali stampano dal primo pezzo, senza clichè né costi di setup: ideali per personalizzazioni e piccole tirature on-demand." },
    { question: "Posso provare le macchine prima di acquistare?", answer: "Sì. Nella sala demo di Sesto San Giovanni (MI) puoi vedere le stampanti in funzione e portare i tuoi materiali per un test reale. La consulenza è gratuita." },
    { question: "Offrite installazione e assistenza?", answer: "Sì, forniamo installazione, formazione e assistenza tecnica dedicata su tutte le macchine, oltre a consumabili e ricambi originali." },
  ] : [
    { question: "Which printer should I choose to print cardboard boxes?", answer: "To print directly on corrugated cardboard you need single-pass printers such as the EDM-650X, GreenBox EVO or ThunderBox; to produce boxes from scratch there is the Anypack AB2500 automatic box maker. The right choice depends on format, volume and budget." },
    { question: "What is the difference between inkjet and laser label printers?", answer: "Inkjet printers (e.g. Afinia L901, X350) offer high speed and low cost on large volumes; LED/laser toner printers (e.g. Afinia LT5C, Anytron ANY-002) provide instant water and abrasion resistance and white printing. The choice depends on materials and end use." },
    { question: "Is a minimum print run required?", answer: "No. All our digital printers print from the very first piece, with no plates or setup costs: ideal for personalisation and short on-demand runs." },
    { question: "Can I test the machines before buying?", answer: "Yes. In our demo room in Sesto San Giovanni (Milan) you can see the printers in action and bring your own materials for a real test. Consultation is free." },
    { question: "Do you provide installation and support?", answer: "Yes, we provide installation, training and dedicated technical support on all machines, plus original consumables and spare parts." },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero with background image + stats */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <Image
          src="/images/hero-machine2.webp"
          alt={it ? "Stampanti digitali Print Solution" : "Print Solution digital printers"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/75 to-dark-900/45" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Print Solution</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {it ? "Stampanti Digitali per Packaging ed Etichette" : "Digital Printers for Packaging & Labels"}
          </h1>
          <p className="mt-6 text-lg text-gray-300/90 max-w-2xl leading-relaxed">
            {it
              ? "Box maker, stampanti per cartone ondulato, etichettatrici inkjet e laser, finitura e labbratura. Soluzioni complete per ogni esigenza."
              : "Box makers, corrugated cardboard printers, inkjet and laser label printers, finishing and book edge printing. Complete solutions for every need."}
          </p>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {heroStats.map((s) => (
              <div key={s.value + s.labelIt} className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/10">
                <p className="text-2xl font-bold text-cyan-300">{s.value}</p>
                <p className="text-xs text-white/70 mt-1 leading-snug">{it ? s.labelIt : s.labelEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro descrittiva */}
      <section className="bg-white pt-12 lg:pt-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-gray-600 leading-relaxed text-lg">
            {it
              ? "Print Solution è il distributore italiano di stampanti digitali per produrre packaging ed etichette direttamente in azienda. La gamma comprende box maker automatici, stampanti single-pass per cartone ondulato, etichettatrici inkjet e laser a colori, sistemi di finitura e soluzioni per la labbratura dei libri. Tutte le macchine sono provabili dal vivo nella sala demo di Sesto San Giovanni (MI), con consulenza gratuita per scegliere in base al tuo volume di produzione."
              : "Print Solution is the Italian distributor of digital printers for producing packaging and labels directly in-house. The range includes automatic box makers, single-pass corrugated printers, inkjet and laser colour label printers, finishing systems and book edge printing solutions. Every machine can be tested live in our demo room in Sesto San Giovanni (Milan), with free consultation to choose based on your production volume."}
          </p>
        </div>
      </section>

      {/* Products by category */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-16">
          {Object.entries(grouped).map(([cat, items]) => {
            const info = categoryInfo[cat];
            const color = info?.color || "from-cyan-500 to-cyan-600";
            return (
              <div key={cat}>
                {/* Category header */}
                <div className="flex items-center gap-4 mb-3">
                  {info?.icon && (
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl flex-shrink-0 shadow-md`}>
                      {info.icon}
                    </div>
                  )}
                  <h2 className="text-2xl lg:text-3xl font-bold text-dark-800">
                    {info?.[it ? "it" : "en"] || cat}
                  </h2>
                </div>
                {info && (
                  <p className="text-gray-500 leading-relaxed max-w-3xl mb-8">
                    {it ? info.descIt : info.descEn}
                  </p>
                )}

                {/* Product cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((p: any) => {
                    const imgUrl = p.images?.[0]
                      ? urlForImage(p.images[0]).width(500).url()
                      : "/images/hero-boxes.webp";
                    const slug = p.slug?.current || p.slug;
                    return (
                      <Link
                        key={p._id}
                        href={`/prodotti/${slug}`}
                        className="group relative rounded-3xl overflow-hidden border border-gray-100 bg-surface-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
                      >
                        {/* Colored top accent strip */}
                        <div className={`h-1.5 bg-gradient-to-r ${color} flex-shrink-0`} />

                        <div className="p-6 flex flex-col flex-1">
                          {/* Product image */}
                          <div className="relative h-44 mb-5 rounded-2xl overflow-hidden bg-white border border-gray-50">
                            <Image
                              src={imgUrl}
                              alt={p.name}
                              fill
                              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          <h3 className="text-lg font-bold text-dark-800 mb-2 group-hover:text-cyan-500 transition-colors">
                            {p.name}
                          </h3>
                          {p.seoDescription && (
                            <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                              {p.seoDescription}
                            </p>
                          )}

                          <span className={`self-start inline-flex items-center px-5 py-2.5 bg-gradient-to-r ${color} text-white text-sm font-semibold rounded-full group-hover:shadow-md group-hover:opacity-90 transition-all mt-auto`}>
                            {it ? "Scopri" : "Discover"} →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Come scegliere + link interni */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-4">
              {it ? "Come scegliere la stampante giusta" : "How to choose the right printer"}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {it
                ? <>La scelta dipende da cosa stampi (scatole, etichette, shopper), dai volumi e dai materiali. Abbiamo preparato delle guide pratiche per orientarti: consulta <Link href="/blog/stampante-per-scatole-quale-scegliere-2026" className="text-cyan-600 underline hover:text-cyan-800">quale stampante scegliere per le scatole</Link> e la <Link href="/blog/stampante-etichette-colori-bobina-guida" className="text-cyan-600 underline hover:text-cyan-800">guida alle stampanti per etichette a colori</Link>. Per soluzioni complete per settore, visita la sezione <Link href="/soluzioni" className="text-cyan-600 underline hover:text-cyan-800">Soluzioni</Link>.</>
                : <>The right choice depends on what you print (boxes, labels, shoppers), your volumes and materials. We have prepared practical guides to help you: read <Link href="/blog/stampante-per-scatole-quale-scegliere-2026" className="text-cyan-600 underline hover:text-cyan-800">which printer to choose for boxes</Link> and the <Link href="/blog/stampante-etichette-colori-bobina-guida" className="text-cyan-600 underline hover:text-cyan-800">colour label printers guide</Link>. For complete solutions by sector, visit the <Link href="/soluzioni" className="text-cyan-600 underline hover:text-cyan-800">Solutions</Link> section.</>}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ProductFaqSection items={faqItems} locale={locale} />
    </>
  );
}
