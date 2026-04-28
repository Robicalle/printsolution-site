import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const BASE = "https://www.printsolutionsrl.it";

function it(path: string) { return `${BASE}${path}`; }
function en(path: string) { return `${BASE}/en${path}`; }

function entry(
  path: string,
  opts: { priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"]; lastMod?: Date }
): MetadataRoute.Sitemap[number] {
  return {
    url: it(path),
    lastModified: opts.lastMod ?? new Date(),
    changeFrequency: opts.freq,
    priority: opts.priority,
    alternates: {
      languages: {
        it: it(path),
        en: en(path),
        "x-default": it(path),
      },
    },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, posts, solutions, shopProducts] = await Promise.all([
    client.fetch(groq`*[_type == "product"]{ "slug": slug.current, _updatedAt }`).catch(() => []),
    client.fetch(groq`*[_type == "post" && publishedAt <= now()]{ "slug": slug.current, _updatedAt, publishedAt }`).catch(() => []),
    client.fetch(groq`*[_type == "solution"]{ "slug": slug.current, _updatedAt }`).catch(() => []),
    client.fetch(groq`*[_type == "shopProduct"]{ category, _updatedAt }`).catch(() => []),
  ]);

  const entries: MetadataRoute.Sitemap = [];

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "",                        priority: 1.0, freq: "weekly"  },
    { path: "/prodotti",               priority: 0.9, freq: "weekly"  },
    { path: "/soluzioni",              priority: 0.8, freq: "weekly"  },
    { path: "/shop",                   priority: 0.9, freq: "weekly"  },
    { path: "/blog",                   priority: 0.8, freq: "weekly"  },
    { path: "/chi-siamo",              priority: 0.7, freq: "monthly" },
    { path: "/contatti",               priority: 0.7, freq: "monthly" },
    { path: "/usato",                  priority: 0.6, freq: "weekly"  },
    { path: "/promozioni",             priority: 0.6, freq: "weekly"  },
    { path: "/condizioni-di-vendita",  priority: 0.3, freq: "yearly"  },
    { path: "/privacy",                priority: 0.3, freq: "yearly"  },
    { path: "/cookie",                 priority: 0.3, freq: "yearly"  },
  ];

  for (const p of staticPages) {
    entries.push(entry(p.path, { priority: p.priority, freq: p.freq }));
  }

  // ── Products ──────────────────────────────────────────────────────────────
  for (const p of products || []) {
    if (!p.slug) continue;
    entries.push(entry(`/prodotti/${p.slug}`, {
      priority: 0.85,
      freq: "monthly",
      lastMod: p._updatedAt ? new Date(p._updatedAt) : undefined,
    }));
  }

  // ── Blog posts ────────────────────────────────────────────────────────────
  for (const p of posts || []) {
    if (!p.slug) continue;
    entries.push(entry(`/blog/${p.slug}`, {
      priority: 0.7,
      freq: "monthly",
      lastMod: p._updatedAt ? new Date(p._updatedAt) : undefined,
    }));
  }

  // ── Solutions ─────────────────────────────────────────────────────────────
  for (const s of solutions || []) {
    if (!s.slug) continue;
    entries.push(entry(`/soluzioni/${s.slug}`, {
      priority: 0.75,
      freq: "monthly",
      lastMod: s._updatedAt ? new Date(s._updatedAt) : undefined,
    }));
  }

  // ── Shop categories ───────────────────────────────────────────────────────
  const shopCats = new Set<string>();
  for (const sp of shopProducts || []) {
    if (sp.category) shopCats.add(sp.category);
  }
  for (const cat of shopCats) {
    entries.push(entry(`/shop/${cat}`, { priority: 0.8, freq: "weekly" }));
  }

  return entries;
}
