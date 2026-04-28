import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { getSolutionBySlug, getAllSolutions } from "@/sanity/lib/fetchers";
import PageRenderer from "@/components/page-builder/PageRenderer";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const solutions = await getAllSolutions();
    return (solutions || [])
      .filter((s: any) => s.slug?.current && s.sezioniPagina?.length)
      .map((s: any) => ({ slug: s.slug.current }));
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
    const solution = await getSolutionBySlug(slug);
    if (!solution) return {};
    const seo = it ? solution.seo : (solution.seo_en || solution.seo);
    const title = seo?.title || (it ? solution.title : (solution.title_en || solution.title));
    const description = seo?.description || `${solution.title} — Print Solution`;
    return {
      title,
      description,
      openGraph: {
        title: `${title} | Print Solution`,
        description,
        images: ["/images/hero-boxes.webp"],
        type: "website",
        locale: it ? "it_IT" : "en_US",
      },
      twitter: { card: "summary_large_image" },
      alternates: { canonical: `https://www.printsolutionsrl.it/${locale}/soluzioni/${slug}` },
    };
  } catch {
    return {};
  }
}

export default async function SolutionDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const solution = await getSolutionBySlug(slug);

  if (!solution || !solution.sezioniPagina?.length) notFound();

  return <PageRenderer sections={solution.sezioniPagina} locale={locale} />;
}
