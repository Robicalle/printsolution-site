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
      alternates: { canonical: locale === 'it' ? `https://www.printsolutionsrl.it/prodotti/${slug}` : `https://www.printsolutionsrl.it/en/prodotti/${slug}` },
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
  const product = await getProductBySlug(slug);

  if (!product || !product.sezioniPagina?.length) notFound();

  return <PageRenderer sections={product.sezioniPagina} locale={locale} />;
}
