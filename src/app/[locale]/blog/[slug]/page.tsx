import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";
import { getPostBySlug, getAllPosts } from "@/sanity/lib/fetchers";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

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
  try {
    const post = await getPostBySlug(slug);
    if (!post) return {};
    return {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      openGraph: {
        title: post.seo?.title || post.title,
        description: post.seo?.description || post.excerpt,
        type: "article",
        ...(post.coverImage && {
          images: [urlForImage(post.coverImage)?.width(1200).height(630).url() || ""],
        }),
      },
      alternates: { canonical: `/blog/${slug}` },
    };
  } catch {
    return {};
  }
}

const portableTextComponents = {
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();

  let post: any = null;
  try {
    post = await getPostBySlug(slug);
  } catch (e) {
    console.error("Failed to fetch post:", e);
  }

  if (!post) {
    notFound();
  }

  const coverUrl = post.coverImage
    ? urlForImage(post.coverImage)?.width(1200).height(500).url()
    : null;

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(
        locale === "it" ? "it-IT" : "en-US",
        { day: "numeric", month: "long", year: "numeric" }
      )
    : null;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Blog</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            {post.title}
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
          <img
            src={coverUrl}
            alt={post.title}
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
      )}

      {/* Article body */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          {post.excerpt && (
            <p className="text-xl text-gray-500 mb-8 leading-relaxed italic">
              {post.excerpt}
            </p>
          )}

          {post.body ? (
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>
          ) : (
            <p className="text-gray-400">
              {locale === "it" ? "Contenuto in arrivo..." : "Content coming soon..."}
            </p>
          )}

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link
              href="/blog"
              className="text-cyan-500 font-semibold text-sm hover:underline"
            >
              {locale === "it" ? "← Torna al Blog" : "← Back to Blog"}
            </Link>
            <a
              href="mailto:info@printsolution.it?subject=Richiesta%20Informazioni&body=Buongiorno%2C%0A%0AVorrei%20informazioni.%0A%0AGrazie"
              className="btn-primary text-sm"
            >
              {locale === "it" ? "Contattaci" : "Contact Us"}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
