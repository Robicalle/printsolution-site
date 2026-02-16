"use client";
import { useState, useMemo } from "react";
import { Link } from "@/i18n/navigation";
import { Product, Category, categories } from "@/lib/shop-data";
import ProductGrid from "./ProductGrid";
import QuickViewModal from "./QuickViewModal";
import StickyCartBar from "./StickyCartBar";

const COLOR_FILTERS = [
  { key: "cyan", label: "Ciano", keywords: ["cyan", "ciano", "cyano"] },
  { key: "magenta", label: "Magenta", keywords: ["magenta"] },
  { key: "yellow", label: "Giallo", keywords: ["yellow", "giallo"] },
  { key: "black", label: "Nero", keywords: ["black", "nero"] },
  { key: "white", label: "Bianco", keywords: ["white", "bianco"] },
];

const TYPE_FILTERS = [
  { key: "cartuccia", label: "Cartuccia", keywords: ["cartuccia", "cartridge"] },
  { key: "toner", label: "Toner", keywords: ["toner"] },
  { key: "testina", label: "Testina", keywords: ["testina"] },
  { key: "fusore", label: "Fusore", keywords: ["fusore", "fuser"] },
  { key: "nastro", label: "Nastro", keywords: ["nastro", "ribbon"] },
  { key: "cinghia", label: "Cinghia/Belt", keywords: ["cinghia", "belt", "itu"] },
];

function matchesFilter(product: Product, keywords: string[]): boolean {
  const t = (product.name + " " + product.sku).toLowerCase();
  return keywords.some((kw) => t.includes(kw));
}

export default function CategoryPageClient({ category }: { category: Category }) {
  const [search, setSearch] = useState("");
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [typeFilters, setTypeFilters] = useState<string[]>([]);
  const [quickView, setQuickView] = useState<Product | null>(null);

  const toggleFilter = (arr: string[], set: (v: string[]) => void, key: string) => {
    set(arr.includes(key) ? arr.filter((k) => k !== key) : [...arr, key]);
  };

  const filtered = useMemo(() => {
    let results = category.products;
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q));
    }
    if (colorFilters.length > 0) {
      const kws = COLOR_FILTERS.filter((f) => colorFilters.includes(f.key)).flatMap((f) => f.keywords);
      results = results.filter((p) => matchesFilter(p, kws));
    }
    if (typeFilters.length > 0) {
      const kws = TYPE_FILTERS.filter((f) => typeFilters.includes(f.key)).flatMap((f) => f.keywords);
      results = results.filter((p) => matchesFilter(p, kws));
    }
    return results;
  }, [category.products, search, colorFilters, typeFilters]);

  return (
    <>
      <StickyCartBar />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumb + header */}
        <section className="pt-28 pb-8 px-4">
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-cyan-500 transition-colors">Home</Link>
              <span>›</span>
              <Link href="/shop" className="hover:text-cyan-500 transition-colors">Shop</Link>
              <span>›</span>
              <span className="text-gray-900 font-medium">{category.name}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Consumabili <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">{category.name}</span>
            </h1>
            <p className="text-lg text-gray-600">{category.description}</p>
          </div>
        </section>

        {/* Main content with sidebar */}
        <section className="pb-20 px-4">
          <div className="container-custom flex gap-8">
            {/* Sidebar - desktop */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-32 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-3">Categorie</h3>
                <nav className="space-y-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/shop/${cat.slug}`}
                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                        cat.slug === category.slug
                          ? "bg-cyan-50 text-cyan-700 font-semibold"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {cat.name}
                      <span className="text-xs text-gray-400 ml-1">({cat.products.length})</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main column */}
            <div className="flex-1 min-w-0">
              {/* Mobile category nav */}
              <div className="lg:hidden mb-6 overflow-x-auto pb-2 -mx-1">
                <div className="flex gap-2 px-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/shop/${cat.slug}`}
                      className={`whitespace-nowrap px-3 py-1.5 text-xs rounded-full border transition-colors ${
                        cat.slug === category.slug
                          ? "bg-cyan-500 text-white border-cyan-500"
                          : "bg-white text-gray-600 border-gray-200 hover:border-cyan-300"
                      }`}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Search + Filters */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-6">
                <input
                  type="text"
                  placeholder="Cerca per nome o SKU..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 mb-3"
                />
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-gray-400 font-medium self-center mr-1">Colore:</span>
                  {COLOR_FILTERS.map((f) => (
                    <button
                      key={f.key}
                      onClick={() => toggleFilter(colorFilters, setColorFilters, f.key)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors cursor-pointer ${
                        colorFilters.includes(f.key)
                          ? "bg-cyan-500 text-white border-cyan-500"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:border-cyan-300"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                  <span className="text-xs text-gray-400 font-medium self-center ml-2 mr-1">Tipo:</span>
                  {TYPE_FILTERS.map((f) => (
                    <button
                      key={f.key}
                      onClick={() => toggleFilter(typeFilters, setTypeFilters, f.key)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors cursor-pointer ${
                        typeFilters.includes(f.key)
                          ? "bg-cyan-500 text-white border-cyan-500"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:border-cyan-300"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                  {(colorFilters.length > 0 || typeFilters.length > 0 || search) && (
                    <button
                      onClick={() => { setColorFilters([]); setTypeFilters([]); setSearch(""); }}
                      className="px-3 py-1 text-xs text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      ✕ Reset
                    </button>
                  )}
                </div>
              </div>

              {/* Results count */}
              {(search || colorFilters.length > 0 || typeFilters.length > 0) && (
                <p className="text-sm text-gray-500 mb-4">{filtered.length} prodott{filtered.length === 1 ? "o" : "i"} trovati</p>
              )}

              {/* Product grid */}
              {filtered.length > 0 ? (
                <ProductGridWithQuickView products={filtered} categoryName={category.name} onQuickView={setQuickView} />
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-lg text-gray-600 font-medium">Nessun prodotto trovato</p>
                  <p className="text-gray-400 mt-1 text-sm">Prova a modificare i filtri di ricerca</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {quickView && (
        <QuickViewModal product={quickView} categoryName={category.name} onClose={() => setQuickView(null)} />
      )}
    </>
  );
}

// Wrapper that adds quick-view click handler to product cards
import { useCart } from "@/lib/cart-context";
import Image from "next/image";

function getProductGradient(name: string, sku: string): string {
  const t = (name + " " + sku).toLowerCase();
  if (t.includes("yellow") || t.includes("giallo")) return "linear-gradient(135deg, #f9a825 0%, #fdd835 100%)";
  if (t.includes("cyan") || t.includes("ciano") || t.includes("cyano")) return "linear-gradient(135deg, #00838f 0%, #00bcd4 100%)";
  if (t.includes("magenta")) return "linear-gradient(135deg, #ad1457 0%, #e91e63 100%)";
  if (t.includes("black") || t.includes("nero")) return "linear-gradient(135deg, #212121 0%, #424242 100%)";
  if (t.includes("white") || t.includes("bianco")) return "linear-gradient(135deg, #90a4ae 0%, #cfd8dc 100%)";
  return "linear-gradient(135deg, #2e7d32 0%, #43a047 100%)";
}

function ProductGridWithQuickView({ products, categoryName, onQuickView }: { products: Product[]; categoryName: string; onQuickView: (p: Product) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCardWithQuickView key={product.id} product={product} categoryName={categoryName} onQuickView={() => onQuickView(product)} />
      ))}
    </div>
  );
}

function ProductCardWithQuickView({ product, categoryName, onQuickView }: { product: Product; categoryName: string; onQuickView: () => void }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, sku: product.sku, category: categoryName });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const hasImage = product.image && !product.image.includes("placeholder");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 group flex flex-col cursor-pointer" onClick={onQuickView}>
      <div className="aspect-square bg-white flex items-center justify-center p-6 relative border-b border-gray-50">
        {hasImage ? (
          <Image src={product.image} alt={product.name} width={240} height={240} className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center rounded-xl overflow-hidden" style={{ background: getProductGradient(product.name, product.sku) }}>
            <span className="text-white font-bold text-2xl tracking-wide text-center px-4 leading-tight drop-shadow-sm">{product.sku}</span>
            <span className="text-white/70 text-xs mt-2 tracking-widest uppercase">Consumabili</span>
          </div>
        )}
        {product.inStock && (
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full border border-green-100">● Disponibile</span>
        )}
        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-gray-900 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
            👁 Vista rapida
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-cyan-500 font-semibold tracking-wide mb-1.5">{product.sku}</p>
        <h3 className="font-semibold text-gray-900 mb-3 leading-snug flex-1 text-sm">{product.name}</h3>
        <div className="mt-auto">
          <p className="text-2xl font-bold text-gray-900 mb-4">€{product.price.toFixed(2)}<span className="text-xs text-gray-400 font-normal ml-1.5">+ IVA</span></p>
          <button
            onClick={handleAdd}
            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${added ? "bg-green-500 text-white scale-95" : "bg-gray-900 text-white hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20"}`}
          >
            {added ? "✓ Aggiunto!" : "Aggiungi al carrello"}
          </button>
        </div>
      </div>
    </div>
  );
}
