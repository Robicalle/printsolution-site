import Image from "next/image";
import { groq } from "next-sanity";
import { Link } from "@/i18n/navigation";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { categoryLabel } from "@/lib/blog-category";

// "Approfondimenti dal blog" in fondo a schede prodotto e pagine soluzione.
// Gli articoli si agganciano da soli tramite i loro "Prodotti Correlati" (href
// /prodotti/<slug>) o la categoria: nessun collegamento da mantenere a mano.
// Serve anche a Google: senza link dalle pagine principali molti articoli
// restavano "rilevati ma non indicizzati".
const relatedPostsQuery = groq`*[_type == "post" && publishedAt <= now() && (
    count(relatedProducts[href in $hrefs]) > 0 || category in $categories
  )] | order(count(relatedProducts[href in $hrefs]) desc, publishedAt desc) [0...$limit] {
  _id, title, title_en, "slug": slug.current, category, excerpt, excerpt_en,
  "coverImage": coverImage{asset, hotspot, crop, alt}
}`;

export default async function RelatedPosts({
  locale,
  hrefs = [],
  categories = [],
  limit = 3,
}: {
  locale: string;
  hrefs?: string[];
  categories?: string[];
  limit?: number;
}) {
  if (!hrefs.length && !categories.length) return null;
  const posts: any[] = await client
    .fetch(relatedPostsQuery, { hrefs, categories, limit }, { next: { revalidate: 3600 } })
    .catch(() => []);
  if (!posts?.length) return null;

  const it = locale === "it";
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">
          {it ? "Approfondimenti dal blog" : "From our blog"}
        </h2>
        <div className={`grid gap-6 ${posts.length === 1 ? "max-w-sm mx-auto" : posts.length === 2 ? "sm:grid-cols-2 max-w-3xl mx-auto" : "md:grid-cols-3"}`}>
          {posts.map((post) => {
            const coverUrl = post.coverImage ? urlForImage(post.coverImage)?.width(800).height(400).url() : null;
            const title = !it && post.title_en ? post.title_en : post.title;
            const excerpt = !it && post.excerpt_en ? post.excerpt_en : post.excerpt;
            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300 bg-white"
              >
                {coverUrl && (
                  <div className="aspect-[2/1] relative bg-white overflow-hidden">
                    <Image
                      src={coverUrl}
                      alt={post.coverImage?.alt || title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  {post.category && (
                    <p className="text-cyan-700 text-xs font-semibold uppercase tracking-widest mb-2">
                      {categoryLabel(post.category, locale)}
                    </p>
                  )}
                  <h3 className="font-bold text-dark-800 mb-2 group-hover:text-cyan-700 transition-colors leading-snug">{title}</h3>
                  {excerpt && <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{excerpt}</p>}
                  <span className="inline-block mt-4 text-cyan-700 text-sm font-semibold group-hover:underline">
                    {it ? "Leggi l'articolo →" : "Read the article →"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
