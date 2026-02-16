import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "AurumPress � Stampa a Caldo Digitale per Packaging",
  description:
    "AurumPress: stampa a caldo digitale con foil metallizzati, argentati e colori pastello. Hot foil digitale per nobilitazione packaging e etichette.",
  keywords: [
    "stampa a caldo digitale",
    "hot foil digitale",
    "nobilitazione digitale",
    "AurumPress",
    "stampa foil packaging",
  ],
  openGraph: {
    title: "AurumPress � Stampa a Caldo Digitale | Print Solution",
    description:
      "Stampa a caldo digitale con foil metallizzati per nobilitazione packaging. Hot foil digitale professionale.",
    images: ["/images/products/aurumpress.jpg"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/aurumpress" },
};

const aurumpressJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AurumPress",
  brand: { "@type": "Brand", name: "Print Solution" },
  description:
    "Stampatrice termica per foil metallizzati, argentati, colori pastello e trasparente lucido. Stampa a caldo digitale per nobilitazione packaging.",
  image: "https://www.printsolutionsrl.it/images/products/aurumpress.jpg",
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
    { "@type": "ListItem", position: 2, name: "Prodotti", item: "https://www.printsolutionsrl.it/soluzioni/packaging" },
    { "@type": "ListItem", position: 3, name: "AurumPress", item: "https://www.printsolutionsrl.it/prodotti/aurumpress" },
  ],
};

const specs = [
  ["Tecnologia", "Stampa termica ad impressione idraulica"],
  ["Tipo stampa", "Hot foil stamping"],
  ["Materiali foil", "Argentati, metallizzati, colori pastello, trasparente lucido"],
  ["Applicazioni", "Loghi, scritte, decorazioni su packaging"],
  ["Supporti", "Cartone, carta, packaging rigido"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Finiture Premium",
    desc: "Foil argentati, oro, metallizzati, colori pastello e trasparente lucido per un packaging d'impatto.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Impressione Idraulica",
    desc: "Sistema ad impressione idraulica per una pressione uniforme e risultati costanti su ogni tipo di supporto.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Packaging di Lusso",
    desc: "Perfetta per valorizzare scatole, confezioni regalo, etichette e packaging premium con finiture esclusive.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
    title: "Personalizzazione Totale",
    desc: "Stampa loghi, scritte e grafiche personalizzate direttamente sul packaging per un branding unico.",
  },
];

export default async function AurumPressPage() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aurumpressJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/aurumpress-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">{locale === 'it' ? 'Prodotti' : 'Products'}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">AurumPress</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Stampatrice termica ad impressione idraulica per foil metallizzati, argentati, 
                colori pastello e trasparente lucido. Il tocco premium per il tuo packaging.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20AurumPress&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20AurumPress.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">{locale === 'it' ? 'Richiedi Demo →' : 'Request Demo →'}</a>
              </div>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image src="/images/products/aurumpress-nobg.png" alt="Product photo" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Finiture di Lusso per il Tuo Packaging</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            L&apos;AurumPress � una stampatrice termica ad impressione idraulica progettata per aggiungere finiture 
            premium al packaging. Grazie alla tecnologia hot foil stamping, � possibile applicare loghi, scritte 
            e decorazioni con foil argentati, metallizzati, colori pastello e trasparente lucido.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Il sistema ad impressione idraulica garantisce una pressione uniforme e costante, assicurando risultati 
            impeccabili su cartone, carta e packaging rigido. L&apos;AurumPress � la scelta ideale per chi vuole 
            differenziare il proprio prodotto con un packaging d&apos;impatto visivo e tattile.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Perfetta per scatole di lusso, confezioni regalo, packaging cosmetico, alimentare e per il settore 
            della moda. Una macchina che trasforma ogni confezione in un&apos;esperienza sensoriale.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">{locale === 'it' ? 'AurumPress in Azione' : 'AurumPress in Action'}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/aurumpress-1.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/aurumpress-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/aurumpress-2.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/aurumpress-2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-8 text-center">{locale === 'it' ? 'Vantaggi Principali' : 'Key Benefits'}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center text-white mb-5">
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
          <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">{locale === 'it' ? 'Specifiche Tecniche' : 'Technical Specifications'}</h2>
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
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Aggiungi il Tocco Premium al Tuo Packaging</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Scopri come l&apos;AurumPress pu� trasformare il tuo packaging. Vieni a vederla in azione nella nostra sala demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20AurumPress&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20AurumPress.%0A%0AGrazie" className="btn-primary text-lg">{locale === 'it' ? 'Richiedi Demo →' : 'Request Demo →'}</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">{locale === 'it' ? 'Prodotti Correlati' : 'Related Products'}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "GreenBox EVO", desc: locale === 'it' ? "Stampante single-pass per packaging" : "Single-pass printer for packaging", href: "/prodotti/greenbox-evo", image: "/images/products/greenbox-evo-site-nobg.png" },
              { name: "EDM-650X", desc: locale === 'it' ? "Stampante single-pass grande formato" : "Large format single-pass printer", href: "/prodotti/edm-650x", image: "/images/products/edm-650x-2hd-nobg-v4.png" },
              { name: "Anypack AB2500", desc: locale === 'it' ? "Box maker automatico" : "Automatic box maker", href: "/prodotti/ab2500", image: "/images/products/ab2500-hero-nobg.png" },
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
