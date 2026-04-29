import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { draftMode } from "next/headers";
import { getLocale } from "next-intl/server";
import { getPostBySlug, getAllPosts } from "@/sanity/lib/fetchers";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import PreviewBanner from "@/components/PreviewBanner";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return (posts || []).map((p: any) => ({
      slug: p.slug?.current || p.slug,
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
  const en = locale === 'en';
  try {
    const post = await getPostBySlug(slug);
    if (!post) return {};
    const title = (en && post.seo_en?.title) ? post.seo_en.title : (post.seo?.title || (en && post.title_en ? post.title_en : post.title));
    const description = (en && post.seo_en?.description) ? post.seo_en.description : (post.seo?.description || (en && post.excerpt_en ? post.excerpt_en : post.excerpt));
    const coverImgUrl = post.coverImage ? urlForImage(post.coverImage)?.width(1200).height(630).url() || "" : "";
    return {
      title,
      description,
      keywords: post.seo?.keywords || [],
      openGraph: {
        title,
        description,
        type: "article",
        ...(coverImgUrl && { images: [coverImgUrl] }),
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        ...(coverImgUrl && { images: [coverImgUrl] }),
      },
      alternates: {
        canonical: `https://www.printsolutionsrl.it/blog/${slug}`,
        languages: {
          'it': `https://www.printsolutionsrl.it/blog/${slug}`,
          'en': `https://www.printsolutionsrl.it/en/blog/${slug}`,
          'x-default': `https://www.printsolutionsrl.it/blog/${slug}`,
        },
      },
    };
  } catch {
    return {};
  }
}

function makePortableTextComponents(locale: string) {
  const it = locale === 'it';
  return {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset) return null;
        const url = urlForImage(value)?.width(800).url();
        return (
          <figure className="my-8">
            <img
              src={url || ""}
              alt={value.alt || ""}
              className="rounded-xl w-full"
              loading="lazy"
            />
            {value.caption && (
              <figcaption className="text-center text-sm text-gray-400 mt-2">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
      videoEmbed: ({ value }: any) => {
        if (!value?.url) return null;
        const url: string = value.url;
        const isYoutube = url.includes("youtube.com") || url.includes("youtu.be");
        const isVimeo = url.includes("vimeo.com");
        if (isYoutube || isVimeo) {
          let embedUrl = url;
          if (isYoutube) {
            const id = url.match(/(?:v=|youtu\.be\/)([^&?]+)/)?.[1];
            embedUrl = `https://www.youtube.com/embed/${id}`;
          } else if (isVimeo) {
            const id = url.match(/vimeo\.com\/(\d+)/)?.[1];
            embedUrl = `https://player.vimeo.com/video/${id}`;
          }
          return (
            <figure className="my-8">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={embedUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {value.caption && (
                <figcaption className="text-center text-sm text-gray-400 mt-2">
                  {value.caption}
                </figcaption>
              )}
            </figure>
          );
        }
        return (
          <figure className="my-8 flex flex-col items-center">
            <video
              controls
              className="rounded-xl shadow-lg w-full max-w-sm aspect-[9/16] object-cover"
              preload="metadata"
            >
              <source src={url} type="video/mp4" />
            </video>
            {value.caption && (
              <figcaption className="text-center text-sm text-gray-400 mt-2">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
      // Inline product mention callout card
      productMention: ({ value }: any) => {
        if (!value?.name) return null;
        const desc = it ? value.desc : (value.desc_en || value.desc);
        return (
          <div className="not-prose my-6 rounded-xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
            {value.image && (
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 relative">
                <img
                  src={value.image}
                  alt={value.name}
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-cyan-600 font-semibold uppercase tracking-widest mb-0.5">
                {it ? "Prodotto menzionato" : "Featured product"}
              </p>
              <h4 className="font-bold text-gray-800 text-base mb-1 leading-tight">{value.name}</h4>
              {desc && (
                <p className="text-sm text-gray-500 line-clamp-2 leading-snug">{desc}</p>
              )}
            </div>
            {value.href && (
              <Link
                href={value.href}
                className="btn-primary text-sm flex-shrink-0 whitespace-nowrap"
              >
                {it ? "Scopri →" : "Discover →"}
              </Link>
            )}
          </div>
        );
      },
      callout: ({ value }: any) => {
        const styles: Record<string, string> = {
          info: "bg-blue-50 border-blue-300 text-blue-800",
          warning: "bg-yellow-50 border-yellow-300 text-yellow-800",
          success: "bg-green-50 border-green-300 text-green-800",
        };
        const icons: Record<string, string> = { info: "ℹ️", warning: "⚠️", success: "✅" };
        const tone = value.tone || "info";
        return (
          <div className={`not-prose my-6 rounded-xl border-l-4 px-5 py-4 ${styles[tone] || styles.info}`}>
            <span className="mr-2">{icons[tone] || "📝"}</span>
            {value.text}
          </div>
        );
      },
      cta: ({ value }: any) => {
        if (!value?.url) return null;
        const isPrimary = value.style !== "secondary";
        return (
          <div className="not-prose my-6 flex justify-center">
            <a
              href={value.url}
              className={isPrimary ? "btn-primary" : "btn-secondary"}
            >
              {value.text || "Scopri di più"}
            </a>
          </div>
        );
      },
      table: ({ value }: any) => {
        const rows: any[] = value?.rows || [];
        if (!rows.length) return null;
        const hasHeader = value.hasHeader !== false;
        const header = hasHeader ? rows[0] : null;
        const body = hasHeader ? rows.slice(1) : rows;
        return (
          <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              {header && (
                <thead className="bg-gray-50">
                  <tr>
                    {(header.cells || []).map((cell: string, i: number) => (
                      <th key={i} className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {body.map((row: any, ri: number) => (
                  <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    {(row.cells || []).map((cell: string, ci: number) => (
                      <td key={ci} className="px-4 py-3 text-gray-600 border-b border-gray-100 last:border-b-0">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      },
    },
    block: {
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-3 border-l-4 border-cyan-500 pl-4">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-2">
          {children}
        </h3>
      ),
      normal: ({ children }: any) => (
        <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-cyan-400 pl-5 my-6 italic text-gray-500 bg-cyan-50 py-3 pr-4 rounded-r-lg">
          {children}
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }: any) => (
        <a
          href={value?.href}
          target={value?.href?.startsWith("http") ? "_blank" : undefined}
          rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-cyan-600 underline hover:text-cyan-800"
        >
          {children}
        </a>
      ),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const it = locale === "it";
  const { isEnabled: isPreview } = await draftMode();

  let post: any = null;
  try {
    post = await getPostBySlug(slug, isPreview);
  } catch (e) {
    console.error("Failed to fetch post:", e);
  }

  if (!post) {
    notFound();
  }

  const coverUrl = post.coverImage
    ? urlForImage(post.coverImage)?.width(1200).url()
    : null;

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(
        locale === "it" ? "it-IT" : "en-US",
        { day: "numeric", month: "long", year: "numeric" }
      )
    : null;

  const displayTitle = (!it && post.title_en) ? post.title_en : post.title;
  const displayExcerpt = (!it && post.excerpt_en) ? post.excerpt_en : post.excerpt;

  const relatedProducts: any[] = post.relatedProducts || [];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: displayTitle,
    datePublished: post.publishedAt || undefined,
    dateModified: post._updatedAt || post.publishedAt || undefined,
    author: post.author
      ? { "@type": "Person", name: post.author }
      : { "@type": "Organization", name: "Print Solution S.r.l." },
    publisher: {
      "@type": "Organization",
      name: "Print Solution S.r.l.",
      logo: { "@type": "ImageObject", url: "https://www.printsolutionsrl.it/logo.png" },
    },
    image: coverUrl || "https://www.printsolutionsrl.it/images/hero-boxes.webp",
    description: displayExcerpt || post.seo?.description || "",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.printsolutionsrl.it/blog" },
      { "@type": "ListItem", position: 3, name: displayTitle, item: `https://www.printsolutionsrl.it/blog/${slug}` },
    ],
  };

  const faqSource = (!it && post.faq_en?.length) ? post.faq_en : post.faq;
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

  const portableTextComponents = makePortableTextComponents(locale);

  return (
    <>
      {isPreview && <PreviewBanner />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Blog</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            {displayTitle}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-300">
            {post.category && (
              <span className="px-3 py-1 rounded-full bg-white/10 capitalize">
                {post.category}
              </span>
            )}
            {publishedDate && <span>{publishedDate}</span>}
            {post.author && <span>· {post.author}</span>}
          </div>
        </div>
      </section>

      {/* Cover image */}
      {coverUrl && (
        <div className="container-custom -mt-10 mb-8 relative z-10">
          <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src={coverUrl}
              alt={displayTitle}
              width={1200}
              height={600}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          {displayExcerpt && (
            <p className="text-xl text-gray-500 mb-8 leading-relaxed italic">
              {displayExcerpt}
            </p>
          )}

          {post.body ? (
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <PortableText value={(locale === 'en' && post.body_en) ? post.body_en : post.body} components={portableTextComponents} />
            </div>
          ) : (
            <p className="text-gray-400">
              {it ? "Contenuto in arrivo..." : "Content coming soon..."}
            </p>
          )}

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link
              href="/blog"
              className="text-cyan-500 font-semibold text-sm hover:underline"
            >
              {it ? "← Torna al Blog" : "← Back to Blog"}
            </Link>
            <a
              href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni&body=Buongiorno%2C%0A%0AVorrei%20informazioni.%0A%0AGrazie"
              className="btn-primary text-sm"
            >
              {it ? "Contattaci" : "Contact Us"}
            </a>
          </div>
        </div>
      </article>

      {/* Related Products section */}
      {relatedProducts.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-gray-50 border-t border-gray-100">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl font-bold text-dark-800 mb-2 text-center">
              {it ? "Prodotti che potrebbero interessarti" : "Products you might like"}
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              {it
                ? "Soluzioni Print Solution correlate all'argomento di questo articolo"
                : "Print Solution products related to this article's topic"}
            </p>
            <div className={`grid gap-6 ${relatedProducts.length === 1 ? "max-w-sm mx-auto" : relatedProducts.length === 2 ? "sm:grid-cols-2 max-w-2xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
              {relatedProducts.map((p: any) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300 bg-white"
                >
                  {p.image && (
                    <div className="h-40 relative overflow-hidden bg-gray-50">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-dark-800 group-hover:text-cyan-500 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {it ? p.desc : (p.desc_en || p.desc)}
                    </p>
                    <span className="inline-block mt-3 text-cyan-500 text-sm font-semibold group-hover:underline">
                      {it ? "Scopri di più →" : "Learn more →"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
