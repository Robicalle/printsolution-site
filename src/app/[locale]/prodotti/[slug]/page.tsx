import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { getProductBySlug, getAllProducts } from "@/sanity/lib/fetchers";
import PageRenderer from "@/components/page-builder/PageRenderer";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    return (products || [])
      .filter((p: any) => p.slug?.current && p.sezioniPagina?.length)
      .map((p: any) => ({ slug: p.slug.current }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const it = locale === "it";
  try {
    const product = await getProductBySlug(slug);
    if (!product) return {};
    const seo = it ? product.seo : (product.seo_en || product.seo);
    const title = seo?.title || (it ? product.name : (product.name_en || product.name));
    const description = seo?.description || `${product.name} — Print Solution`;
    const keywords = product.seo?.keywords || [];
    return {
      title,
      description,
      keywords,
      openGraph: {
        title: `${title} | Print Solution`,
        description,
        images: product.seo?.image ? [product.seo.image] : ["/images/hero-boxes.webp"],
        type: "website",
        locale: it ? "it_IT" : "en_US",
      },
      twitter: { card: "summary_large_image" },
      alternates: {
        canonical: locale === 'it' ? `https://www.printsolutionsrl.it/prodotti/${slug}` : `https://www.printsolutionsrl.it/en/prodotti/${slug}`,
        languages: {
          'it': `https://www.printsolutionsrl.it/prodotti/${slug}`,
          'en': `https://www.printsolutionsrl.it/en/prodotti/${slug}`,
          'x-default': `https://www.printsolutionsrl.it/prodotti/${slug}`,
        },
      },
    };
  } catch {
    return {};
  }
}

export default async function ProductDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const it = locale === "it";
  const product = await getProductBySlug(slug);

  if (!product || !product.sezioniPagina?.length) notFound();

  const base = it ? "https://www.printsolutionsrl.it" : "https://www.printsolutionsrl.it/en";
  const seo = it ? product.seo : (product.seo_en || product.seo);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: it ? product.name : (product.name_en || product.name),
    description: seo?.description || product.description || "",
    brand: { "@type": "Brand", name: "Print Solution" },
    manufacturer: { "@type": "Organization", name: "Print Solution S.r.l.", url: "https://www.printsolutionsrl.it" },
    offers: {
      "@type": "Offer",
      url: `${base}/prodotti/${slug}`,
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: { "@type": "Organization", name: "Print Solution S.r.l." },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: it ? "Prodotti" : "Products", item: `${base}/prodotti` },
      { "@type": "ListItem", position: 3, name: it ? product.name : (product.name_en || product.name), item: `${base}/prodotti/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageRenderer sections={product.sezioniPagina} locale={locale} />
    </>
  );
}
