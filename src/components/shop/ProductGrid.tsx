"use client";
import { Product } from "@/lib/shop-data";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

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

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
      {/* Image */}
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 relative">
        <div className="text-6xl group-hover:scale-110 transition-transform">🖋️</div>
        {product.inStock && (
          <span className="absolute top-3 right-3 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            Disponibile
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-gray-400 font-medium mb-1">{product.sku}</p>
        <h3 className="font-semibold text-gray-900 mb-2 leading-tight flex-1">{product.name}</h3>
        
        <div className="mt-auto">
          <p className="text-2xl font-bold text-gray-900 mb-4">
            €{product.price.toFixed(2)}
            <span className="text-xs text-gray-400 font-normal ml-1">+ IVA</span>
          </p>
          
          <button
            onClick={handleAdd}
            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
              added
                ? "bg-green-500 text-white scale-95"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]"
            }`}
          >
            {added ? "✓ Aggiunto!" : "🛒 Aggiungi al carrello"}
          </button>
        </div>
      </div>
    </div>
  );
}
