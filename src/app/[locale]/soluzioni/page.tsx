import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { getPageBuilderBySlug } from "@/sanity/lib/fetchers";
import PageRenderer from "@/components/page-builder/PageRenderer";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const it = locale === "it";
  try {
    const page = await getPageBuilderBySlug("soluzioni");
    if (!page) return { title: "Soluzioni" };
    const seo = it ? page.seo : (page.seo_en || page.seo);
    return {
      title: seo?.title || page.title,
      description: seo?.description || "",
      openGraph: {
        title: `${seo?.title || page.title} | Print Solution`,
        description: seo?.description || "",
        type: "website",
        locale: it ? "it_IT" : "en_US",
      },
      alternates: { canonical: "/soluzioni" },
    };
  } catch {
    return { title: "Soluzioni" };
  }
}

export default async function SoluzioniPage() {
  const locale = await getLocale();
  const page = await getPageBuilderBySlug("soluzioni");

  if (!page || !page.sections) notFound();

  return <PageRenderer sections={page.sections} locale={locale} />;
}
