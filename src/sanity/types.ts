import type { PortableTextBlock, Image } from "sanity";

// ── Shared SEO ────────────────────────────────────────────
export interface SanitySeo {
  title?: string;
  description?: string;
  image?: Image;
}

// ── Product ───────────────────────────────────────────────
export interface SanityProduct {
  _id: string;
  _updatedAt?: string;
  name: string;
  name_en?: string;
  slug: { current: string };
  description?: PortableTextBlock[] | string;
  description_en?: PortableTextBlock[] | string;
  specs?: { label: string; value: string }[];
  images?: (Image & { alt?: string })[];
  video?: string;
  price?: number;
  category?: string;
  order?: number;
  seo?: SanitySeo;
  seo_en?: SanitySeo;
}

// ── Blog Post ─────────────────────────────────────────────
export interface SanityPost {
  _id: string;
  _updatedAt?: string;
  title: string;
  title_en?: string;
  slug: { current: string };
  author?: string;
  category?: string;
  coverImage?: Image & { alt?: string };
  excerpt?: string;
  excerpt_en?: string;
  body?: PortableTextBlock[];
  body_en?: PortableTextBlock[];
  publishedAt?: string;
  order?: number;
  seo?: SanitySeo;
  seo_en?: SanitySeo;
}

// ── Solution ──────────────────────────────────────────────
export interface SanitySolution {
  _id: string;
  _updatedAt?: string;
  title: string;
  title_en?: string;
  slug: { current: string };
  description?: PortableTextBlock[] | string;
  description_en?: PortableTextBlock[] | string;
  image?: Image & { alt?: string };
  category?: string;
  order?: number;
  products?: SanityProduct[];
  seo?: SanitySeo;
  seo_en?: SanitySeo;
}

// ── Shop Product ──────────────────────────────────────────
export interface SanityShopProduct {
  _id: string;
  _updatedAt?: string;
  name: string;
  name_en?: string;
  slug: { current: string };
  sku?: string;
  price: number;
  image?: Image & { alt?: string };
  printerModel?: string;
  category?: string;
  description?: string;
  description_en?: string;
  inStock?: boolean;
  order?: number;
}

// ── FAQ ───────────────────────────────────────────────────
export interface SanityFaq {
  _id: string;
  question: string;
  question_en?: string;
  answer?: PortableTextBlock[];
  answer_en?: PortableTextBlock[];
  category?: string;
  order?: number;
}

// ── Site Settings ─────────────────────────────────────────
export interface SanitySiteSettings {
  _id: string;
  companyName?: string;
  logo?: Image;
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}
