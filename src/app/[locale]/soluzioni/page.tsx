import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { getAllSolutions } from "@/sanity/lib/fetchers";
import { urlForImage } from "@/sanity/lib/image";

// Static fallback data for solutions (icons, gradients) since Sanity doesn't store these
const solutionMeta: Record<string, { icon: string; color: string }> = {
  packaging: { icon: "📦", color: "from-cyan-500 to-cyan-600" },
  etichette: { icon: "🏷️", color: "from-emerald-500 to-emerald-600" },
  shopper: { icon: "🛍️", color: "from-amber-500 to-amber-600" },
  labbratura: { icon: "📚", color: "from-violet-500 to-violet-600" },
  consumabili: { icon: "🖨️", color: "from-rose-500 to-rose-600" },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const it = locale === "it";
  return {
    title: it ? "Le Nostre Soluzioni di Stampa Digitale" : "Our Digital Printing Solutions",
    description: it
      ? "Tutte le soluzioni digitali Print Solution: packaging, etichette, labbratura libri, shopper e packaging di lusso, consumabili."
      : "All Print Solution digital solutions: packaging, labels, book edge printing, shoppers and luxury packaging, consumables.",
    openGraph: {
      title: it
        ? "Le Nostre Soluzioni di Stampa Digitale | Print Solution"
        : "Our Digital Printing Solutions | Print Solution",
      description: it
        ? "Scopri tutte le soluzioni digitali per stampa e packaging di Print Solution."
        : "Discover all Print Solution digital printing and packaging solutions.",
      images: ["/images/hero-boxes.webp"],
      type: "website",
      locale: it ? "it_IT" : "en_US",
    },
    alternates: {
      canonical: `https://website-theta-one-59.vercel.app/${locale}/soluzioni`,
      languages: {
        'it': 'https://website-theta-one-59.vercel.app/it/soluzioni',
        'en': 'https://website-theta-one-59.vercel.app/en/soluzioni',
      },
    },
  };
}

export default async function SoluzioniPage() {
  const locale = await getLocale();
  const it = locale === "it";
  const solutions = (await getAllSolutions()) || [];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Print Solution</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {it ? "Le Nostre Soluzioni" : "Our Solutions"}
          </h1>
          <p className="mt-6 text-lg text-gray-300/90 max-w-2xl leading-relaxed">
            {it
              ? "Tecnologie digitali per stampa e personalizzazione: dal packaging industriale alle etichette, dalla labbratura libri allo shopper di lusso."
              : "Digital technologies for printing and customization: from industrial packaging to labels, from book edge printing to luxury shoppers."}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {solutions.map((sol: any, i: number) => {
              const slug = sol.slug?.current || sol.slug;
              const meta = solutionMeta[slug] || { icon: "🔧", color: "from-gray-500 to-gray-600" };
              const imgUrl = sol.image ? urlForImage(sol.image).width(800).url() : null;
              const descText = sol.description && Array.isArray(sol.description) && sol.description[0]?.children?.[0]?.text
                ? sol.description[0].children[0].text
                : typeof sol.description === "string"
                  ? sol.description
                  : "";

              return (
                <div
                  key={sol._id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""} scroll-mt-32`}
                >
                  {/* Image side */}
                  <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden bg-surface-50">
                      <div className={`absolute inset-0 bg-gradient-to-br ${meta.color} opacity-5`} />
                      {imgUrl ? (
                        <Image src={imgUrl} alt={sol.title} fill className="object-contain p-8" />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="text-8xl opacity-30">{meta.icon}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Text side */}
                  <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{meta.icon}</span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-dark-800">{sol.title}</h2>
                    </div>
                    {descText && <p className="text-gray-500 leading-relaxed mb-6">{descText}</p>}
                    {sol.products && sol.products.length > 0 && (
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-600 mb-2">
                          {it ? "Prodotti:" : "Products:"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {sol.products.map((p: any) => (
                            <Link
                              key={p._id}
                              href={`/prodotti/${p.slug?.current || p.slug}`}
                              className="text-xs bg-surface-50 text-gray-600 hover:text-cyan-500 px-3 py-1.5 rounded-full transition-colors"
                            >
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    <Link
                      href={`/soluzioni/${slug}`}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${meta.color} text-white font-semibold rounded-full hover:shadow-lg transition-all`}
                    >
                      {it ? "Scopri" : "Discover"} {sol.title} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">
            {it ? "Non sai quale soluzione fa per te?" : "Not sure which solution is right for you?"}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {it
              ? "Il nostro team ti aiuta a scegliere la tecnologia più adatta alle tue esigenze. Contattaci per una consulenza gratuita."
              : "Our team helps you choose the most suitable technology for your needs. Contact us for a free consultation."}
          </p>
          <a
            href="mailto:info@printsolution.it?subject=Richiesta%20Informazioni&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sulle%20vostre%20soluzioni.%0A%0AGrazie"
            className="btn-primary text-lg"
          >
            {it ? "Contattaci →" : "Contact Us →"}
          </a>
        </div>
      </section>
    </>
  );
}
