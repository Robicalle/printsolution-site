import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const BASE = "https://www.printsolution.it";
const locales = ["it", "en"];

function localizedUrl(path: string, locale: string) {
  if (locale === "it") return `${BASE}${path}`;
  return `${BASE}/${locale}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, posts, solutions, shopProducts] = await Promise.all([
    client.fetch(groq`*[_type == "product"]{ "slug": slug.current, _updatedAt }`).catch(() => []),
    client.fetch(groq`*[_type == "post"]{ "slug": slug.current, _updatedAt }`).catch(() => []),
    client.fetch(groq`*[_type == "solution"]{ "slug": slug.current, _updatedAt }`).catch(() => []),
    client.fetch(groq`*[_type == "shopProduct"]{ category, _updatedAt }`).catch(() => []),
  ]);

  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  const staticPages = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/chi-siamo", priority: 0.7, freq: "monthly" as const },
    { path: "/contatti", priority: 0.7, freq: "monthly" as const },
    { path: "/prodotti", priority: 0.9, freq: "weekly" as const },
    { path: "/soluzioni", priority: 0.8, freq: "weekly" as const },
    { path: "/blog", priority: 0.7, freq: "weekly" as const },
    { path: "/shop", priority: 0.9, freq: "weekly" as const },
    { path: "/usato", priority: 0.6, freq: "weekly" as const },
    { path: "/promozioni", priority: 0.6, freq: "weekly" as const },
    { path: "/condizioni-di-vendita", priority: 0.3, freq: "yearly" as const },
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },
    { path: "/cookie", priority: 0.3, freq: "yearly" as const },
  ];

  for (const page of staticPages) {
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(page.path, locale),
        lastModified: new Date(),
        changeFrequency: page.freq,
        priority: page.priority,
      });
    }
  }

  // Products
  for (const p of products || []) {
    if (!p.slug) continue;
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(`/prodotti/${p.slug}`, locale),
        lastModified: p._updatedAt ? new Date(p._updatedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // Blog posts
  for (const p of posts || []) {
    if (!p.slug) continue;
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(`/blog/${p.slug}`, locale),
        lastModified: p._updatedAt ? new Date(p._updatedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  // Solutions
  for (const s of solutions || []) {
    if (!s.slug) continue;
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(`/soluzioni/${s.slug}`, locale),
        lastModified: s._updatedAt ? new Date(s._updatedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Shop categories (unique)
  const shopCats = new Set<string>();
  for (const sp of shopProducts || []) {
    if (sp.category) shopCats.add(sp.category);
  }
  for (const cat of shopCats) {
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(`/shop/${cat}`, locale),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // Brand pages (static list)
  for (const brand of ["afinia-label", "anypack", "dtm-print", "greenbox"]) {
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(`/brand/${brand}`, locale),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
