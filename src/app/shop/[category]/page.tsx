import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryBySlug } from "@/lib/shop-data";
import ProductGrid from "@/components/shop/ProductGrid";

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Categoria non trovata" };
  return {
    title: `Consumabili ${cat.name}`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb + header */}
      <section className="pt-28 pb-8 px-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/shop" className="hover:text-cyan-500 transition-colors">E-Shop</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{cat.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Consumabili <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">{cat.name}</span>
          </h1>
          <p className="text-lg text-gray-600">{cat.description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          {cat.products.length > 0 ? (
            <ProductGrid products={cat.products} categoryName={cat.name} />
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-xl text-gray-600 font-medium">Prodotti in arrivo</p>
              <p className="text-gray-400 mt-2">Il catalogo per {cat.name} sarà disponibile a breve.</p>
              <Link href="/shop" className="inline-block mt-6 px-6 py-3 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors">
                ← Torna allo shop
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
