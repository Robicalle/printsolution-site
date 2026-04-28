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
      description: seo?.description || (it
        ? "Chi siamo: Print Solution S.r.l., distributore italiano di soluzioni digitali per la stampa di packaging, etichette e consumabili. Dal 2010."
        : "About us: Print Solution S.r.l., Italian distributor of digital solutions for packaging printing, labels and consumables. Since 2010."),
      openGraph: {
        title: `${seo?.title || page.title} | Print Solution`,
        description: seo?.description || (it
          ? "Chi siamo: Print Solution S.r.l., distributore italiano di soluzioni digitali per la stampa di packaging, etichette e consumabili. Dal 2010."
          : "About us: Print Solution S.r.l., Italian distributor of digital solutions for packaging printing, labels and consumables. Since 2010."),
        images: [seo?.image || "/images/hero-boxes.webp"],
        type: "website",
        locale: it ? "it_IT" : "en_US",
      },
      twitter: { card: "summary_large_image" },
      alternates: {
        canonical: `https://www.printsolutionsrl.it${it ? "" : "/en"}/chi-siamo`,
        languages: {
          'it': 'https://www.printsolutionsrl.it/chi-siamo',
          'en': 'https://www.printsolutionsrl.it/en/chi-siamo',
        },
      },
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
