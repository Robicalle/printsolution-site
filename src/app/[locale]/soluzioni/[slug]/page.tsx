import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { getSolutionBySlug, getAllSolutions } from "@/sanity/lib/fetchers";
import { urlForImage } from "@/sanity/lib/image";
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
    const keywords = solution.seo?.keywords || [];
    return {
      title,
      description,
      keywords,
      openGraph: {
        title: `${title} | Print Solution`,
        description,
        images: [
          solution.image
            ? urlForImage(solution.image)?.width(1200).height(630).url() || "/images/hero-boxes.webp"
            : "/images/hero-boxes.webp"
        ],
        type: "website",
        locale: it ? "it_IT" : "en_US",
      },
      twitter: { card: "summary_large_image" },
      alternates: {
        canonical: locale === 'it' ? `https://www.printsolutionsrl.it/soluzioni/${slug}` : `https://www.printsolutionsrl.it/en/soluzioni/${slug}`,
        languages: {
          'it': `https://www.printsolutionsrl.it/soluzioni/${slug}`,
          'en': `https://www.printsolutionsrl.it/en/soluzioni/${slug}`,
          'x-default': `https://www.printsolutionsrl.it/soluzioni/${slug}`,
        },
      },
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

  const it = locale === "it";
  const faqSource = (!it && solution.faq_en?.length) ? solution.faq_en : solution.faq;
  const faqJsonLd = faqSource?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSource.map((f: any) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <>
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <PageRenderer sections={solution.sezioniPagina} locale={locale} />
      {faqSource?.length ? (
        <section className="section-padding bg-surface-50">
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-8 text-center">
              {it ? "Domande Frequenti" : "Frequently Asked Questions"}
            </h2>
            <div className="space-y-4">
              {faqSource.map((f: any, i: number) => (
                <details key={i} className="group bg-white rounded-2xl overflow-hidden border border-gray-100">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-dark-800 hover:text-cyan-500 transition-colors">
                    <span>{f.question}</span>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">{f.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
