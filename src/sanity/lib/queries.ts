import { groq } from "next-sanity";

// Prodotti
export const productsQuery = groq`*[_type == "product"] | order(coalesce(order, 999) asc, name asc) {
  _id, _updatedAt, name, slug, description, specs, images, video, price, category, order,
  "seoTitle": seo.title, "seoDescription": seo.description
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0]`;

// Blog
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id, _updatedAt, title, slug, author, category, coverImage, excerpt, publishedAt,
  "seoTitle": seo.title, "seoDescription": seo.description
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

// Pagine
export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]`;

// Pagine con sezioni (page builder)
export const pageBuilderBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  _id, _updatedAt, title, title_en, slug, pageType, sections, seo, seo_en
}`;

// Soluzioni
export const solutionsQuery = groq`*[_type == "solution"] | order(coalesce(order, 999) asc, title asc) {
  _id, _updatedAt, title, slug, description, image, order,
  "products": products[]->{ _id, name, slug, images }
}`;

export const solutionBySlugQuery = groq`*[_type == "solution" && slug.current == $slug][0]{
  ..., "products": products[]->{ _id, name, slug, images, description }
}`;

// Shop Products
export const shopProductsQuery = groq`*[_type == "shopProduct"] | order(coalesce(order, 999) asc, name asc)`;
export const shopProductBySlugQuery = groq`*[_type == "shopProduct" && slug.current == $slug][0]`;

// FAQ
export const faqsQuery = groq`*[_type == "faq"] | order(coalesce(order, 999) asc, category asc, question asc)`;

// Site Settings (singleton)
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;
