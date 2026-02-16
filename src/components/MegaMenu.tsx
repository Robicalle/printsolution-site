"use client";
import Link from "next/link";
import Image from "next/image";

export interface MegaMenuProduct {
  name: string;
  href: string;
  image: string;
  category: string;
}

export const megaMenuProducts: MegaMenuProduct[] = [
  // Packaging & Box Making
  { name: "AB2500", href: "/prodotti/ab2500", image: "/images/products/ab2500-new-nobg.png", category: "Packaging" },
  { name: "EDM-650X", href: "/prodotti/edm-650x", image: "/images/products/edm-650x-2hd-nobg.png", category: "Packaging" },
  { name: "GreenBox EVO", href: "/prodotti/greenbox-evo", image: "/images/products/greenbox-evo-front-nobg.png", category: "Packaging" },
  { name: "PackPrinter UV", href: "/prodotti/packprinter-uv", image: "/images/products/packprinter-uv-front-nobg.png", category: "Packaging" },
  { name: "AurumPress", href: "/prodotti/aurumpress", image: "/images/products/aurumpress-nobg.png", category: "Packaging" },
  { name: "Any-Press", href: "/prodotti/any-press", image: "/images/products/any-press.avif", category: "Packaging" },
  // Etichette
  { name: "Afinia X350", href: "/prodotti/afinia-x350", image: "/images/products/afinia-x350.webp", category: "Etichette" },
  { name: "Afinia L901", href: "/prodotti/afinia-l901", image: "/images/products/afinia-l901.png", category: "Etichette" },
  { name: "Afinia LT5C", href: "/prodotti/afinia-lt5c", image: "/images/products/afinia-lt5c.avif", category: "Etichette" },
  { name: "Anytron ANY-002", href: "/prodotti/any-002", image: "/images/products/any-002.avif", category: "Etichette" },
  { name: "Afinia DLP-2200", href: "/prodotti/afinia-dlp2200", image: "/images/products/afinia-dlp2200.avif", category: "Etichette" },
  // Finitura
  { name: "Afinia DC350", href: "/prodotti/afinia-dc350", image: "/images/products/afinia-dc350.png", category: "Finitura" },
  { name: "Afinia DLF", href: "/prodotti/afinia-dlf", image: "/images/products/afinia-dlf-220l.png", category: "Finitura" },
  // Labbratura
  { name: "Robotjet", href: "/prodotti/robotjet", image: "/images/posters/robotjet-1.jpg", category: "Labbratura" },
  { name: "GreenBox Print Book", href: "/prodotti/greenbox-print-book", image: "/images/products/greenbox-printbook.jpg", category: "Labbratura" },
];

export default function MegaMenu({ open }: { open: boolean }) {
  const categories = ["Packaging", "Etichette", "Finitura", "Labbratura"];

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[min(90vw,900px)] transition-all duration-300 ${
        open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 mb-3 px-1">{cat}</h3>
              <div className="space-y-1">
                {megaMenuProducts
                  .filter((p) => p.category === cat)
                  .map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-cyan-50 transition-colors group"
                    >
                      <div className="w-14 h-14 flex-shrink-0 relative bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                          sizes="56px"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-600 transition-colors leading-tight">
                        {product.name}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            href="/confronto-prodotti"
            className="text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            📊 Confronta tutti i prodotti →
          </Link>
          <Link
            href="/shop"
            className="text-sm font-medium text-gray-500 hover:text-cyan-600 transition-colors"
          >
            🛒 E-Shop Consumabili →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* Mobile version */
export function MegaMenuMobile({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const categories = ["Packaging", "Etichette", "Finitura", "Labbratura"];

  if (!open) return null;

  return (
    <div className="pl-2 pb-2">
      {categories.map((cat) => (
        <div key={cat} className="mb-3">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 mb-1 px-1">{cat}</p>
          {megaMenuProducts
            .filter((p) => p.category === cat)
            .map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="flex items-center gap-3 py-2 px-1 text-gray-700 hover:text-cyan-500"
                onClick={onNavigate}
              >
                <div className="w-10 h-10 flex-shrink-0 relative bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-0.5"
                    sizes="40px"
                  />
                </div>
                <span className="text-base">{product.name}</span>
              </Link>
            ))}
        </div>
      ))}
      <Link
        href="/confronto-prodotti"
        className="block py-2 px-1 text-cyan-600 font-medium text-base"
        onClick={onNavigate}
      >
        📊 Confronta prodotti
      </Link>
    </div>
  );
}
