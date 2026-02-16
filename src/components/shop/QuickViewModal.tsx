"use client";
import { Product } from "@/lib/shop-data";
import { useCart } from "@/lib/cart-context";
import { useEffect, useState } from "react";

function getColorLabel(name: string, sku: string): string | null {
  const t = (name + " " + sku).toLowerCase();
  if (t.includes("yellow") || t.includes("giallo")) return "🟡 Giallo";
  if (t.includes("cyan") || t.includes("ciano") || t.includes("cyano")) return "🔵 Ciano";
  if (t.includes("magenta")) return "🔴 Magenta";
  if (t.includes("black") || t.includes("nero")) return "⚫ Nero";
  if (t.includes("white") || t.includes("bianco")) return "⚪ Bianco";
  if (t.includes("cmy")) return "🎨 CMY";
  return null;
}

function getProductGradient(name: string, sku: string): string {
  const t = (name + " " + sku).toLowerCase();
  if (t.includes("yellow") || t.includes("giallo")) return "linear-gradient(135deg, #f9a825 0%, #fdd835 100%)";
  if (t.includes("cyan") || t.includes("ciano") || t.includes("cyano")) return "linear-gradient(135deg, #00838f 0%, #00bcd4 100%)";
  if (t.includes("magenta")) return "linear-gradient(135deg, #ad1457 0%, #e91e63 100%)";
  if (t.includes("black") || t.includes("nero")) return "linear-gradient(135deg, #212121 0%, #424242 100%)";
  if (t.includes("white") || t.includes("bianco")) return "linear-gradient(135deg, #90a4ae 0%, #cfd8dc 100%)";
  return "linear-gradient(135deg, #2e7d32 0%, #43a047 100%)";
}

export default function QuickViewModal({ product, categoryName, onClose }: { product: Product; categoryName: string; onClose: () => void }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, sku: product.sku, category: categoryName });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const color = getColorLabel(product.name, product.sku);
  const hasImage = product.image && !product.image.includes("placeholder");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors cursor-pointer">✕</button>
        
        <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-8">
          {hasImage ? (
            <img src={product.image} alt={product.name} className="object-contain max-h-full" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center rounded-xl" style={{ background: getProductGradient(product.name, product.sku) }}>
              <span className="text-white font-bold text-4xl tracking-wide drop-shadow-sm">{product.sku}</span>
              <span className="text-white/70 text-sm mt-2 tracking-widest uppercase">Consumabili</span>
            </div>
          )}
        </div>

        <div className="p-6">
          <p className="text-xs text-cyan-500 font-semibold tracking-wide mb-1">SKU: {product.sku}</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
          {color && <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-3">{color}</span>}
          <p className="text-3xl font-bold text-gray-900 mb-4">€{product.price.toFixed(2)} <span className="text-sm text-gray-400 font-normal">+ IVA</span></p>
          <button
            onClick={handleAdd}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${added ? "bg-green-500 text-white" : "bg-gray-900 text-white hover:bg-cyan-600"}`}
          >
            {added ? "✓ Aggiunto al carrello!" : "Aggiungi al carrello"}
          </button>
        </div>
      </div>
    </div>
  );
}
