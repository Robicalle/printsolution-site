import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Consumabili e Ricambi Stampa Digitale",
  description:
    "Cartucce stampante etichette, inchiostri stampa digitale, testine e ricambi originali per GreenBox EVO, EDM-650X e Afinia Label. Spedizione rapida.",
  keywords: [
    "cartucce stampante etichette",
    "inchiostri stampa digitale",
    "consumabili stampante packaging",
    "testine stampa HP",
    "ricambi stampante etichette",
  ],
  openGraph: {
    title: "Consumabili e Ricambi Stampa Digitale | Print Solution",
    description:
      "Inchiostri, cartucce, testine e materiali di consumo originali per stampanti packaging ed etichette.",
    images: ["/images/hero-boxes.webp"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/soluzioni/consumabili" },
};

const categories = [
  {
    title: "Inchiostri Packaging — GreenBox EVO / EDM-650X", titleEn: "Packaging Inks — GreenBox EVO / EDM-650X",
    desc: "Inchiostri pigmentati a base acqua per stampanti single-pass. Senza solventi, inodori, eco-friendly. Resistenti ad agenti atmosferici, sfregamento e acqua.", descEn: "Pigmented water-based inks for single-pass printers. Solvent-free, odorless, eco-friendly. Resistant to weather, rubbing and water.",
    items: [
      { name: "Inchiostro Cyan (C)", detail: "Tanica 3L — pigmentato base acqua" },
      { name: "Inchiostro Magenta (M)", detail: "Tanica 3L — pigmentato base acqua" },
      { name: "Inchiostro Yellow (Y)", detail: "Tanica 3L — pigmentato base acqua" },
      { name: "Inchiostro Black (K)", detail: "Tanica 3L — pigmentato base acqua" },
    ],
    features: [
      "A base acqua, eco-friendly",
      "Senza solventi, inodori",
      "Resistenza acqua, sfregamento, UV",
      "Compatibili con testine HP Pagewide",
    ],
    gradient: "from-cyan-500 to-cyan-600",
    icon: "🎨",
  },
  {
    title: "Cartucce Afinia Label", titleEn: "Afinia Label Cartridges",
    desc: "Cartucce originali per stampanti etichette Afinia. Tecnologia dye-based e pigmentata per risultati professionali su ogni supporto.", descEn: "Original cartridges for Afinia label printers. Dye-based and pigmented technology for professional results on any media.",
    items: [
      { name: "Kit CMYKK per L901", detail: "5 cartucce alta capacità, doppio nero" },
      { name: "Kit CMYK per X350", detail: "Taniche 2L pigmentate, 8L totali" },
      { name: "Toner CMYK per LT5C", detail: "Cartucce toner ad alta resa" },
    ],
    features: [
      "Cartucce originali garantite",
      "Alta capacità per bassi costi/etichetta",
      "Colori calibrati per fedeltà cromatica",
      "Disponibili singole o in kit",
    ],
    gradient: "from-magenta-500 to-magenta-600",
    icon: "🖋️",
  },
  {
    title: "Testine di Stampa", titleEn: "Printheads",
    desc: "Testine di stampa originali e compatibili per le nostre stampanti. Sostituzione semplice, anche dall'utente.", descEn: "Original and compatible printheads for our printers. Simple replacement, even by the user.",
    items: [
      { name: "Testina HP Pagewide", detail: "Per EDM-650X e GreenBox EVO — single-pass" },
      { name: "Testina Memjet Waterfall", detail: "Per Afinia L901 — sostituibile senza fermo" },
      { name: "Testina Afinia X350", detail: "Ridondanza 2× ugelli, sostituibile" },
    ],
    features: [
      "Sostituzione rapida dall'utente",
      "Nessun fermo macchina",
      "Originali per massime prestazioni",
      "Assistenza tecnica inclusa",
    ],
    gradient: "from-yellow-500 to-yellow-600",
    icon: "⚡",
  },
  {
    title: "Finitura e Accessori", titleEn: "Finishing and Accessories",
    desc: "Materiali per laminazione, fustelle, foil metallizzati e accessori per completare la linea di produzione.", descEn: "Lamination materials, dies, metallic foils and accessories to complete the production line.",
    items: [
      { name: "Film laminazione", detail: "Per DLP-2200 e serie DLF con laminazione" },
      { name: "Fustelle acciaio flessibili", detail: "Per DLP-2200 — qualsiasi forma, 130–360 mm" },
      { name: "Foil metallizzati AurumPress", detail: "Oro, argento, rame, olografici, colori" },
      { name: "Bobine etichette bianche", detail: "Vari formati e materiali (carta, PP, PE, vinile)" },
    ],
    features: [
      "Fustelle su misura in tempi rapidi",
      "Foil in decine di colori e finiture",
      "Materiali per ogni applicazione",
      "Consulenza sulla scelta",
    ],
    gradient: "from-green-500 to-green-600",
    icon: "🔧",
  },
];

export default async function ConsumabiliPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        title={locale === 'it' ? "Consumabili e Ricambi" : "Consumables and Spare Parts"}
        subtitle={locale === 'it' ? "Inchiostri, cartucce, testine di stampa, foil e materiali di consumo originali per tutte le nostre stampanti." : "Inks, cartridges, printheads, foils and original consumables for all our printers."}
        breadcrumb="Soluzioni"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">{locale === 'it' ? 'Ricambi Originali' : 'Original Spare Parts'}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight mb-6">
              {locale === 'it' ? 'Materiali di Consumo per Ogni Macchina' : 'Consumables for Every Machine'}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {locale === 'it' ? 'Forniamo tutti i consumabili originali per le stampanti che distribuiamo. Spedizione rapida, assistenza tecnica e consulenza sulla scelta dei materiali più adatti alla tua applicazione.' : 'We supply all original consumables for the printers we distribute. Fast shipping, technical support and guidance on choosing the most suitable materials for your application.'}
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((cat) => (
              <div key={cat.title} className="card-modern p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-dark-800">{locale === 'it' ? cat.title : ((cat as any).titleEn || cat.title)}</h3>
                    <p className="text-gray-500 mt-1">{locale === 'it' ? cat.desc : ((cat as any).descEn || cat.desc)}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-dark-800 uppercase tracking-wider mb-4">{locale === 'it' ? 'Prodotti' : 'Products'}</h4>
                    <ul className="space-y-3">
                      {cat.items.map((item) => (
                        <li key={item.name} className="bg-surface-50 rounded-xl p-4">
                          <p className="font-semibold text-dark-800 text-sm">{item.name}</p>
                          <p className="text-gray-500 text-sm mt-1">{item.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-800 uppercase tracking-wider mb-4">{locale === 'it' ? 'Caratteristiche' : 'Features'}</h4>
                    <ul className="space-y-3">
                      {cat.features.map((f) => (
                        <li key={f} className="flex items-start text-sm text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Pack */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-magenta-500 font-semibold text-sm uppercase tracking-widest mb-4">{locale === 'it' ? 'Assistenza' : 'Support'}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">Care Pack</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              {locale === 'it' ? 'Pacchetti di assistenza dedicati per le stampanti packaging EDM-650X e GreenBox EVO.' : 'Dedicated support packages for EDM-650X and GreenBox EVO packaging printers.'}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Silver", hours: "15 ore", discount: "—", color: "from-gray-400 to-gray-500" },
              { name: "Golden", hours: "25 ore", discount: "10% ricambi", color: "from-yellow-400 to-yellow-500" },
              { name: "Platinum", hours: "50 ore", discount: "15% ricambi", color: "from-cyan-400 to-cyan-500" },
            ].map((pack) => (
              <div key={pack.name} className="card-modern p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${pack.color} mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg`}>
                  {pack.name[0]}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{pack.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{pack.hours} {locale === 'it' ? 'supporto remoto' : 'remote support'}</p>
                <p className="text-gray-500 text-sm">{locale === 'it' ? 'Sconto ricambi:' : 'Parts discount:'} {pack.discount}</p>
                <p className="text-gray-500 text-sm mt-1">{locale === 'it' ? '+ Aggiornamenti SW inclusi' : '+ SW updates included'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{locale === 'it' ? 'Hai Bisogno di Consumabili?' : 'Need Consumables?'}</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {locale === 'it' ? 'Contattaci per un preventivo rapido. Spedizione in tutta Italia, prezzi riservati per ordini ricorrenti.' : 'Contact us for a quick quote. Shipping across Italy, special prices for recurring orders.'}
          </p>
          <div className="flex justify-center">
            <a href="mailto:ordini@printsolutionsrl.it?subject=Ordine%20Consumabili&body=Buongiorno%2C%0A%0AVorrei%20ordinare%20i%20seguenti%20consumabili%3A%0A%0A%0AGrazie" className="btn-primary">{locale === 'it' ? 'Ordina Consumabili' : 'Order Consumables'}</a>
          </div>
        </div>
      </section>
    </>
  );
}
