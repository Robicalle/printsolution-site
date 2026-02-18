import { groq } from "next-sanity";

// Prodotti
export const productsQuery = groq`*[_type == "product"] | order(name asc) {
  _id, name, slug, description, specs, images, video, price, category,
  "seoTitle": seo.title, "seoDescription": seo.description
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0]`;

// Blog
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, author, category, coverImage, excerpt, publishedAt,
  "seoTitle": seo.title, "seoDescription": seo.description
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

// Pagine
export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]`;

// Soluzioni
export const solutionsQuery = groq`*[_type == "solution"] | order(title asc) {
  _id, title, slug, description, image,
  "products": products[]->{ _id, name, slug, images }
}`;

export const solutionBySlugQuery = groq`*[_type == "solution" && slug.current == $slug][0]{
  ..., "products": products[]->{ _id, name, slug, images, description }
}`;

// Shop Products
export const shopProductsQuery = groq`*[_type == "shopProduct"] | order(name asc)`;
export const shopProductBySlugQuery = groq`*[_type == "shopProduct" && slug.current == $slug][0]`;

// FAQ
export const faqsQuery = groq`*[_type == "faq"] | order(category asc, question asc)`;

// Site Settings (singleton)
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;
