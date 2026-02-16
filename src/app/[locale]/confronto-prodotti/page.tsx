import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Confronto Prodotti — Print Solution",
  description: "Confronta tutte le stampanti e macchine Print Solution: tecnologia, velocità, formato, risoluzione e prezzo.",
  alternates: { canonical: "/confronto-prodotti" },
};

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

const categories: Category[] = [
  {
    title: "Packaging & Box Making",
    icon: "📦",
    description: "Macchine per la produzione di scatole e stampa su cartone ondulato",
    color: "from-amber-500 to-orange-600",
    products: [
      {
        name: "EDM-650X",
        href: "/prodotti/edm-650x",
        image: "/images/products/edm-650x-2hd-nobg.png",
        tecnologia: "Inkjet single-pass CMYK",
        velocita: "Fino a 30 m/min",
        formatoMax: "Fino a 180 cm",
        risoluzione: "1200 × 1200 dpi",
        prezzo: "Su richiesta",
      },
      {
        name: "GreenBox EVO",
        href: "/prodotti/greenbox-evo",
        image: "/images/products/greenbox-evo-front-nobg.png",
        tecnologia: "Inkjet single-pass CMYK",
        velocita: "Fino a 30 m/min",
        formatoMax: "Fino a 30 cm stampa / 80 cm supporto",
        risoluzione: "1200 × 1200 dpi",
        prezzo: "Su richiesta",
      },
      {
        name: "PackPrinter UV",
        href: "/prodotti/packprinter-uv",
        image: "/images/products/packprinter-uv-front-nobg.png",
        tecnologia: "UV single-pass CMYKW",
        velocita: "Fino a 50 m/min",
        formatoMax: "Da 12 a 118 cm",
        risoluzione: "600 × 1200 dpi",
        prezzo: "Su richiesta",
      },
      {
        name: "AB2500",
        href: "/prodotti/ab2500",
        image: "/images/products/ab2500-new-nobg.png",
        tecnologia: "Box maker automatico",
        velocita: "500-600 scatole/ora",
        formatoMax: "Cartone 1-7 mm",
        risoluzione: "N/A",
        prezzo: "Su richiesta",
      },
    ],
  },
  {
    title: "Etichette",
    icon: "🏷️",
    description: "Stampanti per etichette in bobina e foglio, da desktop a industriale",
    color: "from-cyan-500 to-blue-600",
    products: [
      {
        name: "Afinia X350",
        href: "/prodotti/afinia-x350",
        image: "/images/products/afinia-x350.webp",
        tecnologia: "Inkjet pigmentato (Memjet)",
        velocita: "Fino a 45 m/min",
        formatoMax: "350 mm bobina",
        risoluzione: "1600 × 1600 dpi",
        prezzo: "Su richiesta",
      },
      {
        name: "Afinia L901",
        href: "/prodotti/afinia-l901",
        image: "/images/products/afinia-l901.png",
        tecnologia: "Memjet Waterfall Inkjet",
        velocita: "—",
        formatoMax: "216 mm",
        risoluzione: "1600 dpi",
        prezzo: "Su richiesta",
      },
      {
        name: "Afinia LT5C",
        href: "/prodotti/afinia-lt5c",
        image: "/images/products/afinia-lt5c.avif",
        tecnologia: "Toner LED CMYK",
        velocita: "—",
        formatoMax: "—",
        risoluzione: "1200 × 1200 dpi",
        prezzo: "Su richiesta",
      },
      {
        name: "Anytron ANY-002",
        href: "/prodotti/any-002",
        image: "/images/products/any-002.avif",
        tecnologia: "Laser LED + fustella",
        velocita: "Fino a 9 m/min",
        formatoMax: "1,2 m per etichetta",
        risoluzione: "1200 dpi",
        prezzo: "Su richiesta",
      },
      {
        name: "Any-Press",
        href: "/prodotti/any-press",
        image: "/images/products/any-press.avif",
        tecnologia: "Laser LED CMYKW",
        velocita: "5 m/min",
        formatoMax: "324 mm",
        risoluzione: "1200 × 1200 dpi",
        prezzo: "Su richiesta",
      },
      {
        name: "Afinia DLP-2200",
        href: "/prodotti/afinia-dlp2200",
        image: "/images/products/afinia-dlp2200.avif",
        tecnologia: "Digital Label Press (Memjet)",
        velocita: "9-18 m/min",
        formatoMax: "229 mm",
        risoluzione: "1600 dpi CMYKK",
        prezzo: "Su richiesta",
      },
    ],
  },
  {
    title: "Finitura & Post-Stampa",
    icon: "✂️",
    description: "Fustellatrici, plotter e macchine per la finitura delle etichette",
    color: "from-purple-500 to-indigo-600",
    products: [
      {
        name: "Afinia DC350",
        href: "/prodotti/afinia-dc350",
        image: "/images/products/afinia-dc350.png",
        tecnologia: "Fustellatore semi-rotativo",
        velocita: "Fino a 30 m/min",
        formatoMax: "350 mm",
        risoluzione: "N/A",
        prezzo: "Su richiesta",
      },
      {
        name: "Afinia DLF",
        href: "/prodotti/afinia-dlf",
        image: "/images/products/afinia-dlf-220l.png",
        tecnologia: "Plotter digitale (senza fustelle)",
        velocita: "—",
        formatoMax: "350 mm",
        risoluzione: "N/A",
        prezzo: "Su richiesta",
      },
      {
        name: "AurumPress",
        href: "/prodotti/aurumpress",
        image: "/images/products/aurumpress-nobg.png",
        tecnologia: "Hot foil stamping",
        velocita: "—",
        formatoMax: "—",
        risoluzione: "—",
        prezzo: "Su richiesta",
      },
    ],
  },
  {
    title: "Labbratura & Specialità",
    icon: "📚",
    description: "Soluzioni per stampa bordi libri e applicazioni speciali",
    color: "from-emerald-500 to-teal-600",
    products: [
      {
        name: "Robotjet",
        href: "/prodotti/robotjet",
        image: "/images/posters/robotjet-1.jpg",
        tecnologia: "Inkjet CMYK (HP A3)",
        velocita: "0-15 m/min",
        formatoMax: "218 mm stampa / 350 mm altezza",
        risoluzione: "1200 dpi",
        prezzo: "Su richiesta",
      },
      {
        name: "GreenBox Print Book",
        href: "/prodotti/greenbox-print-book",
        image: "/images/products/greenbox-printbook.jpg",
        tecnologia: "Inkjet HP PageWide",
        velocita: "Fino a 30 m/min",
        formatoMax: "297 mm (passaggio singolo)",
        risoluzione: "1200 × 1200 dpi",
        prezzo: "Su richiesta",
      },
    ],
  },
];

const columns = [
  { key: "tecnologia" as const, label: "Tecnologia" },
  { key: "velocita" as const, label: "Velocità" },
  { key: "formatoMax" as const, label: "Formato Max" },
  { key: "risoluzione" as const, label: "Risoluzione" },
  { key: "prezzo" as const, label: "Prezzo" },
];

export default async function ConfrontoProdottiPage() {
  const locale = await getLocale();
  return (
    <main className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Confronto Prodotti
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tutte le nostre stampanti e macchine a confronto, divise per categoria. Trova la soluzione perfetta per le tue esigenze.
          </p>
        </div>

        {/* Category boxes */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <section key={cat.title}>
              {/* Category header */}
              <div className={`bg-gradient-to-r ${cat.color} rounded-t-2xl px-6 py-5 flex items-center gap-3`}>
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-white">{cat.title}</h2>
                  <p className="text-white/80 text-sm">{cat.description}</p>
                </div>
              </div>

              {/* Products table */}
              <div className="overflow-x-auto rounded-b-2xl shadow-lg border border-gray-200 border-t-0 bg-white">
                <table className="w-full min-w-[800px] text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-5 py-3 font-semibold text-gray-700 sticky left-0 bg-gray-50 z-10 min-w-[200px]">
                        Prodotto
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
            Hai bisogno di aiuto nella scelta? Contattaci per una consulenza gratuita.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contatti"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Richiedi Consulenza
            </Link>
            <Link
              href="/shop"
              className="px-8 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-cyan-500 hover:text-cyan-600 transition-all"
            >
              🛒 E-Shop Consumabili
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
