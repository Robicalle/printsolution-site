import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { getPageBuilderBySlug } from "@/sanity/lib/fetchers";
import PageRenderer from "@/components/page-builder/PageRenderer";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const it = locale === "it";
  try {
    const page = await getPageBuilderBySlug("chi-siamo");
    if (!page) return { title: "Chi Siamo" };
    const seo = it ? page.seo : (page.seo_en || page.seo);
    return {
      title: seo?.title || page.title,
      description: seo?.description || "",
      openGraph: {
        title: `${seo?.title || page.title} | Print Solution`,
        description: seo?.description || "",
        images: ["/images/hero-boxes.webp"],
        type: "website",
        locale: it ? "it_IT" : "en_US",
      },
      twitter: { card: "summary_large_image" },
      alternates: { canonical: "/chi-siamo" },
    };
  } catch {
    return { title: "Chi Siamo" };
  }
}

export default async function ChiSiamoPage() {
  const locale = await getLocale();
  const page = await getPageBuilderBySlug("chi-siamo");

  if (!page || !page.sections) notFound();

  return <PageRenderer sections={page.sections} locale={locale} />;
}
