"use client";
import Image from "next/image";
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
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-xl">
            <svg className="w-16 h-16 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
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
