import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getShopCategories, getShopCategoryBySlug } from "@/lib/shop-sanity";
import CategoryPageClient from "@/components/shop/CategoryPageClient";
import { getLocale } from "next-intl/server";

export const revalidate = 60;

export async function generateStaticParams() {
  const categories = await getShopCategories();
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = await getShopCategoryBySlug(category);
  const locale = await getLocale();
  if (!cat) return { title: locale === 'it' ? "Categoria non trovata" : "Category not found" };
  return {
    title: locale === 'it' ? `Consumabili ${cat.name}` : `${cat.name} Consumables`,
    description: cat.description,
  };
}

function buildProductsJsonLd(cat: NonNullable<Awaited<ReturnType<typeof getShopCategoryBySlug>>>) {
  return cat.products.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    sku: p.sku,
    image: p.image?.startsWith("http") ? p.image : `https://www.printsolutionsrl.it${p.image}`,
    brand: { "@type": "Brand", name: "Print Solution" },
    offers: {
      "@type": "Offer",
      url: `https://www.printsolutionsrl.it/shop/${cat.slug}`,
      priceCurrency: "EUR",
      price: p.price.toFixed(2),
      priceValidUntil: "2026-12-31",
      availability: p.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: "Print Solution S.r.l." },
    },
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = await getShopCategoryBySlug(category);
  if (!cat) notFound();

  const allCategories = await getShopCategories();
  const productsJsonLd = buildProductsJsonLd(cat);

  return (
    <>
      {productsJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CategoryPageClient category={cat} allCategories={allCategories} />
    </>
  );
}
