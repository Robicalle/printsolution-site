import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { getPageBuilderBySlug, getAllPageBuilderSlugs } from "@/sanity/lib/fetchers";
import PageRenderer from "@/components/page-builder/PageRenderer";

export async function generateStaticParams() {
  try {
    const pages = await getAllPageBuilderSlugs();
    return (pages || [])
      .filter((p: any) => p.pageType === "prodotto")
      .map((p: any) => ({ slug: p.slug }));
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
    const page = await getPageBuilderBySlug(slug);
    if (!page) return {};
    const seo = it ? page.seo : (page.seo_en || page.seo);
    const title = seo?.title || page.title;
    const description = seo?.description || `${page.title} — Print Solution`;
    return {
      title,
      description,
      keywords: page.seo?.keywords,
      openGraph: {
        title: `${title} | Print Solution`,
        description,
        images: page.seo?.image ? [page.seo.image] : ["/images/hero-boxes.webp"],
        type: "website",
        locale: it ? "it_IT" : "en_US",
      },
      twitter: { card: "summary_large_image" },
      alternates: { canonical: page.seo?.canonical || `/prodotti/${slug}` },
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
  const page = await getPageBuilderBySlug(slug);

  if (!page || !page.sections) notFound();

  return <PageRenderer sections={page.sections} locale={locale} />;
}
