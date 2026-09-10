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
  // In inglese si usano SOLO le FAQ inglesi. Senza ripiego sull'italiano:
  // prima la pagina /en mostrava domande e risposte in italiano sotto
  // un'intestazione inglese, e serviva a Google un FAQPage in italiano su una
  // pagina dichiarata en. Se faq_en e' vuoto, il blocco non viene reso affatto.
  const faqSource = it ? solution.faq : (solution.faq_en?.length ? solution.faq_en : null);
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
        // Griglia, non accordion: le risposte sono il contenuto che convince
        // chi sta valutando l'acquisto, quindi devono leggersi senza un click.
        // Il JSON-LD nasce dallo stesso campo faq, quindi visibilita' e dati
        // strutturati vengono dalla stessa fonte.
        <section className="section-padding bg-surface-50">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-10 text-center">
              {it ? "Domande Frequenti" : "Frequently Asked Questions"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqSource.map((f: any, i: number) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-dark-800 mb-3 leading-snug">{f.question}</h3>
                  <p className="text-gray-500 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
