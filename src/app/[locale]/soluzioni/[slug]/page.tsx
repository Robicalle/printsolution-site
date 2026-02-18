import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { draftMode } from "next/headers";
import { getLocale } from "next-intl/server";
import { getSolutionBySlug, getAllSolutions } from "@/sanity/lib/fetchers";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/PortableTextComponents";
import PreviewBanner from "@/components/PreviewBanner";

export async function generateStaticParams() {
  try {
    const solutions = await getAllSolutions();
    return (solutions || []).map((s: any) => ({
      slug: s.slug?.current || s.slug,
    }));
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
  try {
    const solution = await getSolutionBySlug(slug);
    if (!solution) return {};
    const title = solution.seo?.title || solution.title;
    const description = solution.seo?.description || `${solution.title} — Print Solution`;
    const image = solution.image ? urlForImage(solution.image).width(1200).url() : "/images/hero-boxes.webp";
    return {
      title,
      description,
      openGraph: {
        title: `${title} | Print Solution`,
        description,
        images: [image],
        type: "website",
        locale: locale === "it" ? "it_IT" : "en_US",
      },
      twitter: { card: "summary_large_image" },
      alternates: { canonical: `/soluzioni/${slug}` },
    };
  } catch {
    return {};
  }
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const it = locale === "it";
  const { isEnabled: isPreview } = await draftMode();
  const solution = await getSolutionBySlug(slug, isPreview);

  if (!solution) notFound();

  const heroImage = solution.image
    ? urlForImage(solution.image).width(1200).url()
    : null;

  return (
    <>
      {isPreview && <PreviewBanner />}
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">
            {it ? "Soluzioni" : "Solutions"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {solution.title}
          </h1>
          {solution.description && (
            <div className="mt-6 text-lg text-gray-300/90 max-w-2xl leading-relaxed">
              {Array.isArray(solution.description) && solution.description[0]?.children?.[0]?.text ? (
                <p>{solution.description[0].children[0].text}</p>
              ) : typeof solution.description === "string" ? (
                <p>{solution.description}</p>
              ) : null}
            </div>
          )}
        </div>
      </section>

      {/* Image + Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {heroImage && (
              <div className="relative h-64 lg:h-96 rounded-3xl overflow-hidden bg-surface-50">
                <Image src={heroImage} alt={solution.title} fill className="object-contain p-8" />
              </div>
            )}
            <div>
              {Array.isArray(solution.description) ? (
                <PortableText value={solution.description} components={portableTextComponents} />
              ) : solution.description ? (
                <p className="text-gray-500 leading-relaxed">{solution.description}</p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {solution.products && solution.products.length > 0 && (
        <section className="section-padding bg-surface-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">
              {it ? "Prodotti per Questa Soluzione" : "Products for This Solution"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {solution.products.map((p: any) => {
                const imgUrl = p.images?.[0]
                  ? urlForImage(p.images[0]).width(400).url()
                  : "/images/hero-boxes.webp";
                const pSlug = p.slug?.current || p.slug;
                return (
                  <Link
                    key={p._id}
                    href={`/prodotti/${pSlug}`}
                    className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="h-48 relative overflow-hidden bg-white">
                      <Image
                        src={imgUrl}
                        alt={p.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-dark-800 group-hover:text-cyan-500 transition-colors">
                        {p.name}
                      </h3>
                      {p.description && Array.isArray(p.description) && p.description[0]?.children?.[0]?.text && (
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {p.description[0].children[0].text}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="relative rounded-3xl bg-cta-gradient p-12 sm:p-16 text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                {it ? "Vieni a Vedere le Macchine in Azione" : "Come See the Machines in Action"}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                {it
                  ? "La nostra sala demo a Sesto San Giovanni è attrezzata con tutti i prodotti in funzione."
                  : "Our demo room in Sesto San Giovanni is equipped with all products up and running."}
              </p>
              <a
                href="mailto:info@printsolution.it?subject=Richiesta%20Informazioni&body=Buongiorno%2C%0A%0AVorrei%20informazioni.%0A%0AGrazie"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg text-lg"
              >
                {it ? "Contattaci" : "Contact Us"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
