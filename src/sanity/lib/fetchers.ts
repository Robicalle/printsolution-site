import { client } from "./client";
import { previewClient } from "./preview-client";
import {
  productsQuery,
  productBySlugQuery,
  postsQuery,
  postBySlugQuery,
  pageBySlugQuery,
  pageBuilderBySlugQuery,
  solutionsQuery,
  solutionBySlugQuery,
  shopProductsQuery,
  shopProductBySlugQuery,
  faqsQuery,
  siteSettingsQuery,
} from "./queries";

const REVALIDATE = 60;

function getClient(preview = false) {
  return preview ? previewClient : client;
}

function fetchOpts(preview: boolean) {
  return preview ? {} : { next: { revalidate: REVALIDATE } };
}

// ── Products ──────────────────────────────────────────────
export async function getAllProducts(preview = false) {
  return getClient(preview).fetch(productsQuery, {}, fetchOpts(preview));
}

export async function getProductBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(productBySlugQuery, { slug }, fetchOpts(preview));
}

// ── Blog Posts ────────────────────────────────────────────
export async function getAllPosts(preview = false) {
  return getClient(preview).fetch(postsQuery, {}, fetchOpts(preview));
}

export async function getPostBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(postBySlugQuery, { slug }, fetchOpts(preview));
}

// ── Solutions ─────────────────────────────────────────────
export async function getAllSolutions(preview = false) {
  return getClient(preview).fetch(solutionsQuery, {}, fetchOpts(preview));
}

export async function getSolutionBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(solutionBySlugQuery, { slug }, fetchOpts(preview));
}

// ── Shop Products ─────────────────────────────────────────
export async function getAllShopProducts(preview = false) {
  return getClient(preview).fetch(shopProductsQuery, {}, fetchOpts(preview));
}

export async function getShopProductsByCategory(category: string, preview = false) {
  const query = `*[_type == "shopProduct" && category == $category] | order(name asc)`;
  return getClient(preview).fetch(query, { category }, fetchOpts(preview));
}

// ── FAQ ───────────────────────────────────────────────────
export async function getFaqs(preview = false) {
  return getClient(preview).fetch(faqsQuery, {}, fetchOpts(preview));
}

// ── Pages ─────────────────────────────────────────────────
export async function getPageBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(pageBySlugQuery, { slug }, fetchOpts(preview));
}

export async function getPageBuilderBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(pageBuilderBySlugQuery, { slug }, fetchOpts(preview));
}

export async function getAllPageBuilderSlugs(preview = false) {
  const query = `*[_type == "page" && defined(sections)] { "slug": slug.current, pageType }`;
  return getClient(preview).fetch(query, {}, fetchOpts(preview));
}

// ── Shop Product By Slug ──────────────────────────────────
export async function getShopProductBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(shopProductBySlugQuery, { slug }, fetchOpts(preview));
}

// ── Site Settings ─────────────────────────────────────────
export async function getSiteSettings(preview = false) {
  return getClient(preview).fetch(siteSettingsQuery, {}, fetchOpts(preview));
}

// ── Shop Categories (from Sanity) ─────────────────────────
export async function getShopCategories(preview = false) {
  const query = `*[_type == "shopProduct"] {
    category,
    "categorySlug": category
  } | order(category asc)`;
  const products = await getClient(preview).fetch(query, {}, fetchOpts(preview));
  // Get unique categories
  const seen = new Set<string>();
  const cats: string[] = [];
  for (const p of products || []) {
    if (p.category && !seen.has(p.category)) {
      seen.add(p.category);
      cats.push(p.category);
    }
  }
  return cats;
}
