import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === 'it' ? "Confronto Prodotti — Print Solution" : "Product Comparison — Print Solution",
    description: locale === 'it'
      ? "Confronta tutte le stampanti e macchine Print Solution: tecnologia, velocità, formato, risoluzione e prezzo."
      : "Compare all Print Solution printers and machines: technology, speed, format, resolution and price.",
    alternates: { canonical: "/confronto-prodotti" },
  };
}

interface Product {
  name: string;
  href: string;
  image: string;
  tecnologia: string;
  velocita: string;
  formatoMax: string;
  risoluzione: string;
  prezzo: string;
}

interface Category {
  title: string;
  icon: string;
  description: string;
  color: string;
  products: Product[];
}

function getCategories(locale: string): Category[] {
  const p = locale === 'it' ? 'Su richiesta' : 'On request';
  return [
    {
      title: "Packaging & Box Making",
      icon: "📦",
      description: locale === 'it' ? "Macchine per la produzione di scatole e stampa su cartone ondulato" : "Machines for box production and corrugated cardboard printing",
      color: "from-amber-500 to-orange-600",
      products: [
        { name: "EDM-650X", href: "/prodotti/edm-650x", image: "/images/products/edm-650x-2hd-nobg.png", tecnologia: "Inkjet single-pass CMYK", velocita: locale === 'it' ? "Fino a 30 m/min" : "Up to 30 m/min", formatoMax: locale === 'it' ? "Fino a 180 cm" : "Up to 180 cm", risoluzione: "1200 × 1200 dpi", prezzo: p },
        { name: "GreenBox EVO", href: "/prodotti/greenbox-evo", image: "/images/products/greenbox-evo-front-nobg.png", tecnologia: "Inkjet single-pass CMYK", velocita: locale === 'it' ? "Fino a 30 m/min" : "Up to 30 m/min", formatoMax: locale === 'it' ? "Fino a 30 cm stampa / 80 cm supporto" : "Up to 30 cm print / 80 cm media", risoluzione: "1200 × 1200 dpi", prezzo: p },
        { name: "PackPrinter UV", href: "/prodotti/packprinter-uv", image: "/images/products/packprinter-uv-front-nobg.png", tecnologia: "UV single-pass CMYKW", velocita: locale === 'it' ? "Fino a 50 m/min" : "Up to 50 m/min", formatoMax: locale === 'it' ? "Da 12 a 118 cm" : "From 12 to 118 cm", risoluzione: "600 × 1200 dpi", prezzo: p },
        { name: "AB2500", href: "/prodotti/ab2500", image: "/images/products/ab2500-new-nobg.png", tecnologia: locale === 'it' ? "Box maker automatico" : "Automatic box maker", velocita: locale === 'it' ? "500-600 scatole/ora" : "500-600 boxes/hour", formatoMax: locale === 'it' ? "Cartone 1-7 mm" : "Board 1-7 mm", risoluzione: "N/A", prezzo: p },
      ],
    },
    {
      title: locale === 'it' ? "Etichette" : "Labels",
      icon: "🏷️",
      description: locale === 'it' ? "Stampanti per etichette in bobina e foglio, da desktop a industriale" : "Roll and sheet label printers, from desktop to industrial",
      color: "from-cyan-500 to-blue-600",
      products: [
        { name: "Afinia X350", href: "/prodotti/afinia-x350", image: "/images/products/afinia-x350.webp", tecnologia: "Inkjet pigmentato (Memjet)", velocita: locale === 'it' ? "Fino a 45 m/min" : "Up to 45 m/min", formatoMax: locale === 'it' ? "350 mm bobina" : "350 mm roll", risoluzione: "1600 × 1600 dpi", prezzo: p },
        { name: "Afinia L901", href: "/prodotti/afinia-l901", image: "/images/products/afinia-l901.png", tecnologia: "Memjet Waterfall Inkjet", velocita: "—", formatoMax: "216 mm", risoluzione: "1600 dpi", prezzo: p },
        { name: "Afinia LT5C", href: "/prodotti/afinia-lt5c", image: "/images/products/afinia-lt5c.avif", tecnologia: "Toner LED CMYK", velocita: "—", formatoMax: "—", risoluzione: "1200 × 1200 dpi", prezzo: p },
        { name: "Anytron ANY-002", href: "/prodotti/any-002", image: "/images/products/any-002.avif", tecnologia: locale === 'it' ? "Laser LED + fustella" : "LED Laser + die-cutter", velocita: locale === 'it' ? "Fino a 9 m/min" : "Up to 9 m/min", formatoMax: locale === 'it' ? "1,2 m per etichetta" : "1.2 m per label", risoluzione: "1200 dpi", prezzo: p },
        { name: "Any-Press", href: "/prodotti/any-press", image: "/images/products/any-press.avif", tecnologia: "Laser LED CMYKW", velocita: "5 m/min", formatoMax: "324 mm", risoluzione: "1200 × 1200 dpi", prezzo: p },
        { name: "Afinia DLP-2200", href: "/prodotti/afinia-dlp2200", image: "/images/products/afinia-dlp2200.avif", tecnologia: "Digital Label Press (Memjet)", velocita: "9-18 m/min", formatoMax: "229 mm", risoluzione: "1600 dpi CMYKK", prezzo: p },
      ],
    },
    {
      title: locale === 'it' ? "Finitura & Post-Stampa" : "Finishing & Post-Press",
      icon: "✂️",
      description: locale === 'it' ? "Fustellatrici, plotter e macchine per la finitura delle etichette" : "Die-cutters, plotters and label finishing machines",
      color: "from-purple-500 to-indigo-600",
      products: [
        { name: "Afinia DC350", href: "/prodotti/afinia-dc350", image: "/images/products/afinia-dc350.png", tecnologia: locale === 'it' ? "Fustellatore semi-rotativo" : "Semi-rotary die-cutter", velocita: locale === 'it' ? "Fino a 30 m/min" : "Up to 30 m/min", formatoMax: "350 mm", risoluzione: "N/A", prezzo: p },
        { name: "Afinia DLF", href: "/prodotti/afinia-dlf", image: "/images/products/afinia-dlf-220l.png", tecnologia: locale === 'it' ? "Plotter digitale (senza fustelle)" : "Digital plotter (die-free)", velocita: "—", formatoMax: "350 mm", risoluzione: "N/A", prezzo: p },
        { name: "AurumPress", href: "/prodotti/aurumpress", image: "/images/products/aurumpress-nobg.png", tecnologia: "Hot foil stamping", velocita: "—", formatoMax: "—", risoluzione: "—", prezzo: p },
      ],
    },
    {
      title: locale === 'it' ? "Labbratura & Specialità" : "Edge Printing & Specialities",
      icon: "📚",
      description: locale === 'it' ? "Soluzioni per stampa bordi libri e applicazioni speciali" : "Solutions for book edge printing and special applications",
      color: "from-emerald-500 to-teal-600",
      products: [
        { name: "Robotjet", href: "/prodotti/robotjet", image: "/images/posters/robotjet-1.jpg", tecnologia: "Inkjet CMYK (HP A3)", velocita: "0-15 m/min", formatoMax: locale === 'it' ? "218 mm stampa / 350 mm altezza" : "218 mm print / 350 mm height", risoluzione: "1200 dpi", prezzo: p },
        { name: "GreenBox Print Book", href: "/prodotti/greenbox-print-book", image: "/images/products/greenbox-printbook.jpg", tecnologia: "Inkjet HP PageWide", velocita: locale === 'it' ? "Fino a 30 m/min" : "Up to 30 m/min", formatoMax: locale === 'it' ? "297 mm (passaggio singolo)" : "297 mm (single pass)", risoluzione: "1200 × 1200 dpi", prezzo: p },
      ],
    },
  ];
}

export default async function ConfrontoProdottiPage() {
  const locale = await getLocale();
  const categories = getCategories(locale);

  const columns = locale === 'it' ? [
    { key: "tecnologia" as const, label: "Tecnologia" },
    { key: "velocita" as const, label: "Velocità" },
    { key: "formatoMax" as const, label: "Formato Max" },
    { key: "risoluzione" as const, label: "Risoluzione" },
    { key: "prezzo" as const, label: "Prezzo" },
  ] : [
    { key: "tecnologia" as const, label: "Technology" },
    { key: "velocita" as const, label: "Speed" },
    { key: "formatoMax" as const, label: "Max Format" },
    { key: "risoluzione" as const, label: "Resolution" },
    { key: "prezzo" as const, label: "Price" },
  ];

  return (
    <main className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {locale === 'it' ? 'Confronto Prodotti' : 'Product Comparison'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {locale === 'it'
              ? 'Tutte le nostre stampanti e macchine a confronto, divise per categoria. Trova la soluzione perfetta per le tue esigenze.'
              : 'All our printers and machines compared, divided by category. Find the perfect solution for your needs.'}
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <section key={cat.title}>
              <div className={`bg-gradient-to-r ${cat.color} rounded-t-2xl px-6 py-5 flex items-center gap-3`}>
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-white">{cat.title}</h2>
                  <p className="text-white/80 text-sm">{cat.description}</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-b-2xl shadow-lg border border-gray-200 border-t-0 bg-white">
                <table className="w-full min-w-[800px] text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-5 py-3 font-semibold text-gray-700 sticky left-0 bg-gray-50 z-10 min-w-[200px]">
                        {locale === 'it' ? 'Prodotto' : 'Product'}
                      </th>
                      {columns.map((col) => (
                        <th key={col.key} className="text-left px-5 py-3 font-semibold text-gray-700">
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cat.products.map((product, i) => (
                      <tr
                        key={product.name}
                        className={`border-t border-gray-100 hover:bg-cyan-50/50 transition-colors ${
                          i % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                        }`}
                      >
                        <td className="px-5 py-4 sticky left-0 z-10 bg-inherit">
                          <Link href={product.href} className="flex items-center gap-3 group">
                            <div className="w-14 h-14 flex-shrink-0 relative bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-1"
                                sizes="56px"
                              />
                            </div>
                            <span className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                              {product.name}
                            </span>
                          </Link>
                        </td>
                        {columns.map((col) => (
                          <td key={col.key} className="px-5 py-4 text-gray-600">
                            {product[col.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-gray-500 mb-6">
            {locale === 'it'
              ? 'Hai bisogno di aiuto nella scelta? Contattaci per una consulenza gratuita.'
              : 'Need help choosing? Contact us for a free consultation.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contatti"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              {locale === 'it' ? 'Richiedi Consulenza' : 'Request a Consultation'}
            </Link>
            <Link
              href="/shop"
              className="px-8 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-cyan-500 hover:text-cyan-600 transition-all"
            >
              {locale === 'it' ? '🛒 E-Shop Consumabili' : '🛒 Consumables E-Shop'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
