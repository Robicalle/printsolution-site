"use client";
import Image from "next/image";
import { Product } from "@/lib/shop-data";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

function getProductGradient(name: string, sku: string): string {
  const t = (name + ' ' + sku).toLowerCase();
  // Yellow / Giallo
  if (t.includes('yellow') || t.includes('giallo') || /-y\b/.test(t) || t.endsWith('-y'))
    return 'linear-gradient(135deg, #f9a825 0%, #fdd835 100%)';
  // Cyan / Cyano / Ciano
  if (t.includes('cyan') || t.includes('ciano') || /-c\b/.test(t) || t.endsWith('-c'))
    return 'linear-gradient(135deg, #00838f 0%, #00bcd4 100%)';
  // Magenta
  if (t.includes('magenta') || /-m\b/.test(t) || t.endsWith('-m'))
    return 'linear-gradient(135deg, #ad1457 0%, #e91e63 100%)';
  // Black / Nero
  if (t.includes('black') || t.includes('nero') || /-k\b/.test(t) || t.endsWith('-k'))
    return 'linear-gradient(135deg, #212121 0%, #424242 100%)';
  // White / Bianco
  if (t.includes('white') || t.includes('bianco') || /-w\b/.test(t) || t.endsWith('-w'))
    return 'linear-gradient(135deg, #90a4ae 0%, #cfd8dc 100%)';
  // Default verde per consumabili non-colore (fusori, belt, testine, waste, ecc.)
  return 'linear-gradient(135deg, #2e7d32 0%, #43a047 100%)';
}

export default function ProductGrid({ products, categoryName }: { products: Product[]; categoryName: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} categoryName={categoryName} />
      ))}
    </div>
  );
}

function ProductCard({ product, categoryName }: { product: Product; categoryName: string }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      sku: product.sku,
      category: categoryName,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const hasImage = product.image && !product.image.includes("placeholder");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 group flex flex-col">
      {/* Image */}
      <div className="aspect-square bg-white flex items-center justify-center p-6 relative border-b border-gray-50">
        {hasImage ? (
          <Image
            src={product.image}
            alt={product.name}
            width={240}
            height={240}
            className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center rounded-xl overflow-hidden" style={{ background: getProductGradient(product.name, product.sku) }}>
            <span className="text-white font-bold text-2xl tracking-wide text-center px-4 leading-tight drop-shadow-sm">{product.sku}</span>
            <span className="text-white/70 text-xs mt-2 tracking-widest uppercase">Consumabili</span>
          </div>
        )}
        {product.inStock && (
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full border border-green-100">
            ● Disponibile
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-cyan-500 font-semibold tracking-wide mb-1.5">{product.sku}</p>
        <h3 className="font-semibold text-gray-900 mb-3 leading-snug flex-1 text-sm">{product.name}</h3>
        
        <div className="mt-auto">
          <p className="text-2xl font-bold text-gray-900 mb-4">
            €{product.price.toFixed(2)}
            <span className="text-xs text-gray-400 font-normal ml-1.5">+ IVA</span>
          </p>
          
          <button
            onClick={handleAdd}
            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
              added
                ? "bg-green-500 text-white scale-95"
                : "bg-gray-900 text-white hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20"
            }`}
          >
            {added ? "✓ Aggiunto!" : "Aggiungi al carrello"}
          </button>
        </div>
      </div>
    </div>
  );
}
