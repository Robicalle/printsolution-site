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
      description: seo?.description || (it
        ? "Scopri le soluzioni Print Solution per la stampa digitale: stampanti per packaging, etichettatura industriale e sistemi inkjet. Consulenza e demo gratuita."
        : "Discover Print Solution's digital printing solutions: packaging printers, industrial labelling and inkjet systems. Free consultation and demo."),
      openGraph: {
        title: `${seo?.title || page.title} | Print Solution`,
        description: seo?.description || (it
          ? "Scopri le soluzioni Print Solution per la stampa digitale: stampanti per packaging, etichettatura industriale e sistemi inkjet."
          : "Discover Print Solution's digital printing solutions: packaging printers, industrial labelling and inkjet systems."),
        type: "website",
        locale: it ? "it_IT" : "en_US",
      },
      alternates: {
        canonical: `https://www.printsolutionsrl.it${it ? "" : "/en"}/soluzioni`,
        languages: {
          'it': 'https://www.printsolutionsrl.it/soluzioni',
          'en': 'https://www.printsolutionsrl.it/en/soluzioni',
        },
      },
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
