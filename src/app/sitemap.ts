import { MetadataRoute } from "next";
import { categories } from "@/lib/shop-data";

const BASE = "https://www.printsolutionsrl.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/chi-siamo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contatti`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/shop`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/condizioni-di-vendita`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/cookie`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/usato`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/promozioni`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  // Product pages
  const prodotti = [
    "ab2500", "afinia-dc350", "afinia-dlf", "afinia-dlp2200", "afinia-l901",
    "afinia-lt5c", "afinia-x350", "any-002", "any-press", "aurumpress",
    "edm-650x", "greenbox-evo", "greenbox-print-book", "packprinter-uv", "robotjet",
  ].map((slug) => ({
    url: `${BASE}/prodotti/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Solution pages
  const soluzioni = ["consumabili", "etichette", "labbratura", "packaging", "shopper"].map((slug) => ({
    url: `${BASE}/soluzioni/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Brand pages
  const brands = ["afinia-label", "anypack", "dtm-print", "greenbox"].map((slug) => ({
    url: `${BASE}/brand/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog posts
  const blogPosts = [
    "automatizzare-produzione-scatole", "box-maker-produzione-automatica-scatole",
    "come-ridurre-costi-packaging", "come-scegliere-stampante-etichette-colori",
    "etichette-adesive-materiali-finiture", "hot-foil-stamping-cose-quando-usarlo",
    "packaging-personalizzato-vantaggi-pmi", "stampa-cartone-ondulato-guida-completa",
    "stampa-digitale-cartone-ondulato-vs-flessografia", "stampa-digitale-vs-offset-piccoli-lotti",
    "stampante-etichette-colori-bobina-guida", "stampante-inkjet-industriale-come-scegliere",
    "tendenze-packaging-2026",
  ].map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Shop category pages
  const shopCategories = categories.map((cat) => ({
    url: `${BASE}/shop/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...prodotti, ...soluzioni, ...brands, ...blogPosts, ...shopCategories];
}
