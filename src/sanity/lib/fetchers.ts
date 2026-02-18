import { client } from "./client";
import {
  productsQuery,
  productBySlugQuery,
  postsQuery,
  postBySlugQuery,
  pageBySlugQuery,
  solutionsQuery,
  solutionBySlugQuery,
  shopProductsQuery,
  shopProductBySlugQuery,
  faqsQuery,
  siteSettingsQuery,
} from "./queries";

const REVALIDATE = 60;

// ── Products ──────────────────────────────────────────────
export async function getAllProducts() {
  return client.fetch(productsQuery, {}, { next: { revalidate: REVALIDATE } });
}

export async function getProductBySlug(slug: string) {
  return client.fetch(productBySlugQuery, { slug }, { next: { revalidate: REVALIDATE } });
}

// ── Blog Posts ────────────────────────────────────────────
export async function getAllPosts() {
  return client.fetch(postsQuery, {}, { next: { revalidate: REVALIDATE } });
}

export async function getPostBySlug(slug: string) {
  return client.fetch(postBySlugQuery, { slug }, { next: { revalidate: REVALIDATE } });
}

// ── Solutions ─────────────────────────────────────────────
export async function getAllSolutions() {
  return client.fetch(solutionsQuery, {}, { next: { revalidate: REVALIDATE } });
}

export async function getSolutionBySlug(slug: string) {
  return client.fetch(solutionBySlugQuery, { slug }, { next: { revalidate: REVALIDATE } });
}

// ── Shop Products ─────────────────────────────────────────
export async function getAllShopProducts() {
  return client.fetch(shopProductsQuery, {}, { next: { revalidate: REVALIDATE } });
}

export async function getShopProductsByCategory(category: string) {
  const query = `*[_type == "shopProduct" && category == $category] | order(name asc)`;
  return client.fetch(query, { category }, { next: { revalidate: REVALIDATE } });
}

// ── FAQ ───────────────────────────────────────────────────
export async function getFaqs() {
  return client.fetch(faqsQuery, {}, { next: { revalidate: REVALIDATE } });
}

// ── Pages ─────────────────────────────────────────────────
export async function getPageBySlug(slug: string) {
  return client.fetch(pageBySlugQuery, { slug }, { next: { revalidate: REVALIDATE } });
}

// ── Shop Product By Slug ──────────────────────────────────
export async function getShopProductBySlug(slug: string) {
  return client.fetch(shopProductBySlugQuery, { slug }, { next: { revalidate: REVALIDATE } });
}

// ── Site Settings ─────────────────────────────────────────
export async function getSiteSettings() {
  return client.fetch(siteSettingsQuery, {}, { next: { revalidate: REVALIDATE } });
}
