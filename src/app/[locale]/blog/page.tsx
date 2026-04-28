import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";
import { getAllPosts } from "@/sanity/lib/fetchers";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articoli e guide sulla stampa digitale per packaging, etichette a colori e cartone ondulato. Approfondimenti tecnici da Print Solution.",
  keywords: [
    "blog stampa digitale",
    "guida packaging digitale",
    "stampa etichette guida",
    "cartone ondulato stampa",
  ],
  openGraph: {
    title: "Blog | Print Solution",
    description:
      "Articoli e guide sulla stampa digitale per packaging, etichette e cartone ondulato.",
    images: ["/images/hero-boxes.webp"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: 'https://www.printsolutionsrl.it/it/blog',
    languages: {
      'it': 'https://www.printsolutionsrl.it/it/blog',
      'en': 'https://www.printsolutionsrl.it/en/blog',
    },
  },
};

const categoryGradients: Record<string, string> = {
  packaging: "from-cyan-500 to-cyan-600",
  etichette: "from-magenta-500 to-magenta-600",
  stampa: "from-yellow-500 to-yellow-600",
  finiture: "from-yellow-500 to-yellow-600",
  trend: "from-yellow-500 to-yellow-600",
  labels: "from-magenta-500 to-magenta-600",
  printing: "from-yellow-500 to-yellow-600",
  finishing: "from-yellow-500 to-yellow-600",
};

function getGradient(category?: string) {
  if (!category) return "from-cyan-500 to-cyan-600";
  return categoryGradients[category.toLowerCase()] || "from-cyan-500 to-cyan-600";
}

function formatDate(dateStr: string, locale: string) {
  try {
    return new Date(dateStr).toLocaleDateString(locale === "it" ? "it-IT" : "en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default async function BlogPage() {
  const locale = await getLocale();

  let posts: any[] = [];
  try {
    posts = (await getAllPosts()) || [];
  } catch (e) {
    console.error("Failed to fetch posts from Sanity:", e);
  }

  if (!posts || posts.length === 0) {
    return (
      <>
        <PageHero
          title="Blog"
          subtitle={locale === "it" ? "Articoli in arrivo..." : "Articles coming soon..."}
          breadcrumb="Print Solution"
          imageSrc="/images/hero-blog.jpg"
        />
        <section className="section-padding bg-white">
          <div className="container-custom text-center py-20">
            <p className="text-gray-500 text-lg">
              {locale === "it" ? "I contenuti del blog saranno disponibili a breve." : "Blog content will be available soon."}
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Blog"
        subtitle={
          locale === "it"
            ? "Articoli, guide e approfondimenti sulla stampa digitale per packaging ed etichette."
            : "Articles, guides and insights on digital printing for packaging and labels."
        }
        breadcrumb="Print Solution"
        imageSrc="/images/hero-blog.jpg"
      />

      {/* Articles listing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {posts.map((post: any) => {
              const slug = post.slug?.current || post.slug;
              const gradient = getGradient(post.category);
              const coverUrl = post.coverImage
                ? urlForImage(post.coverImage)?.width(800).height(400).url()
                : null;

              return (
                <Link
                  key={post._id}
                  href={`/blog/${slug}`}
                  className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div
                    className="aspect-[2/1] relative bg-gray-100 flex items-center justify-center overflow-hidden"
                  >
                    {coverUrl ? (
                      <Image
                        src={coverUrl}
                        alt={post.coverImage?.alt || post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <svg
                        className="w-16 h-16 text-white opacity-80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${gradient}`}
                      >
                        {post.category || "Blog"}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-dark-800 mb-2 group-hover:text-cyan-500 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">
                        {post.publishedAt ? formatDate(post.publishedAt, locale) : ""}
                      </span>
                      <span className="text-cyan-500 text-sm font-semibold group-hover:underline">
                        {locale === "it" ? "Leggi →" : "Read →"}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-800 mb-4">
            {locale === "it" ? "Resta Aggiornato" : "Stay Updated"}
          </h2>
          <p className="text-gray-500 mb-8">
            {locale === "it"
              ? "Contattaci per ricevere aggiornamenti sulle novità del settore e le nostre soluzioni."
              : "Contact us to receive updates on industry news and our solutions."}
          </p>
          <a
            href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie"
            className="btn-primary"
          >
            {locale === "it" ? "Contattaci" : "Contact Us"}
          </a>
        </div>
      </section>
    </>
  );
}
