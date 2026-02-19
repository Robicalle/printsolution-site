import { defineField, defineType } from "sanity";

// ── Reusable field helpers ──
const localeString = (name: string, titleIt: string, titleEn: string) => [
  defineField({ name, title: titleIt, type: "string" }),
  defineField({ name: `${name}_en`, title: titleEn, type: "string" }),
];

const localeText = (name: string, titleIt: string, titleEn: string) => [
  defineField({ name, title: titleIt, type: "text", rows: 4 }),
  defineField({ name: `${name}_en`, title: titleEn, type: "text", rows: 4 }),
];

// ── Block type definitions ──
const pageHeroBlock = {
  type: "object",
  name: "pageHero",
  title: "Page Hero",
  fields: [
    ...localeString("title", "Titolo (IT)", "Titolo (EN)"),
    ...localeString("subtitle", "Sottotitolo (IT)", "Sottotitolo (EN)"),
    ...localeString("breadcrumb", "Breadcrumb (IT)", "Breadcrumb (EN)"),
    defineField({ name: "videoSrc", title: "Video URL", type: "string" }),
    defineField({ name: "imageSrc", title: "Image URL", type: "string" }),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }: any) => ({ title: `🎬 Hero: ${title || ""}` }) },
};

const productHeroBlock = {
  type: "object",
  name: "productHero",
  title: "Product Hero",
  fields: [
    ...localeString("breadcrumb", "Breadcrumb (IT)", "Breadcrumb (EN)"),
    defineField({ name: "productName", title: "Nome Prodotto", type: "string" }),
    ...localeText("description", "Descrizione (IT)", "Descrizione (EN)"),
    defineField({ name: "videoSrc", title: "Video Hero URL", type: "string" }),
    ...localeString("ctaText", "CTA Text (IT)", "CTA Text (EN)"),
    defineField({ name: "ctaUrl", title: "CTA URL (mailto/link)", type: "string" }),
  ],
  preview: { select: { title: "productName" }, prepare: ({ title }: any) => ({ title: `🎬 Product Hero: ${title || ""}` }) },
};

const sectionHeadingBlock = {
  type: "object",
  name: "sectionHeading",
  title: "Section Heading",
  fields: [
    ...localeString("eyebrow", "Eyebrow (IT)", "Eyebrow (EN)"),
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    ...localeText("description", "Descrizione (IT)", "Descrizione (EN)"),
    defineField({ name: "eyebrowColor", title: "Eyebrow Color Class", type: "string", description: "e.g. text-cyan-500" }),
    defineField({ name: "bgClass", title: "Section BG Class", type: "string", description: "e.g. bg-white, bg-surface-50" }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }: any) => ({ title: `📌 Heading: ${title || ""}` }) },
};

const productCardListBlock = {
  type: "object",
  name: "productCardList",
  title: "Product Card List",
  fields: [
    ...localeString("sectionEyebrow", "Section Eyebrow (IT)", "Section Eyebrow (EN)"),
    ...localeString("sectionHeading", "Section Heading (IT)", "Section Heading (EN)"),
    defineField({ name: "eyebrowColor", title: "Eyebrow Color", type: "string" }),
    defineField({ name: "bgClass", title: "Section BG", type: "string" }),
    defineField({ name: "ctaSubject", title: "CTA mailto subject", type: "string" }),
    defineField({
      name: "products",
      title: "Prodotti",
      type: "array",
      of: [{
        type: "object",
        name: "productCard",
        fields: [
          defineField({ name: "name", title: "Nome", type: "string" }),
          ...localeString("subtitle", "Sottotitolo (IT)", "Sottotitolo (EN)"),
          defineField({ name: "image", title: "Immagine URL", type: "string" }),
          defineField({ name: "href", title: "Link", type: "string" }),
          ...localeText("desc", "Descrizione (IT)", "Descrizione (EN)"),
          defineField({
            name: "specs",
            title: "Specifiche (IT)",
            type: "array",
            of: [{ type: "string" }],
          }),
          defineField({
            name: "specs_en",
            title: "Specifiche (EN)",
            type: "array",
            of: [{ type: "string" }],
          }),
          defineField({ name: "gradient", title: "Gradient Class", type: "string" }),
          ...localeString("tag", "Tag (IT)", "Tag (EN)"),
          defineField({ name: "brand", title: "Brand", type: "string" }),
          defineField({ name: "brandHref", title: "Brand Link", type: "string" }),
        ],
        preview: { select: { title: "name" } },
      }],
    }),
  ],
  preview: { select: { title: "sectionHeading" }, prepare: ({ title }: any) => ({ title: `📋 Cards: ${title || ""}` }) },
};

const ctaBannerBlock = {
  type: "object",
  name: "ctaBanner",
  title: "CTA Banner",
  fields: [
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    ...localeText("text", "Testo (IT)", "Testo (EN)"),
    ...localeString("buttonText", "Button Text (IT)", "Button Text (EN)"),
    defineField({ name: "buttonUrl", title: "Button URL", type: "string" }),
    ...localeString("secondButtonText", "Second Button Text (IT)", "Second Button Text (EN)"),
    defineField({ name: "secondButtonUrl", title: "Second Button URL", type: "string" }),
    defineField({ name: "bgClass", title: "Section BG", type: "string" }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }: any) => ({ title: `🔔 CTA: ${title || ""}` }) },
};

const useCasesGridBlock = {
  type: "object",
  name: "useCasesGrid",
  title: "Use Cases Grid",
  fields: [
    ...localeString("eyebrow", "Eyebrow (IT)", "Eyebrow (EN)"),
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    defineField({ name: "eyebrowColor", title: "Eyebrow Color", type: "string" }),
    defineField({ name: "bgClass", title: "BG Class", type: "string" }),
    defineField({
      name: "cases",
      title: "Use Cases",
      type: "array",
      of: [{
        type: "object",
        fields: [
          ...localeString("title", "Titolo (IT)", "Titolo (EN)"),
          ...localeText("desc", "Descrizione (IT)", "Descrizione (EN)"),
          defineField({ name: "icon", title: "Emoji Icon", type: "string" }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }: any) => ({ title: `🎯 Use Cases: ${title || ""}` }) },
};

const consumablesCategoryListBlock = {
  type: "object",
  name: "consumablesCategoryList",
  title: "Consumables Categories",
  fields: [
    ...localeString("sectionEyebrow", "Section Eyebrow (IT)", "Section Eyebrow (EN)"),
    ...localeString("sectionHeading", "Section Heading (IT)", "Section Heading (EN)"),
    ...localeText("sectionDesc", "Section Desc (IT)", "Section Desc (EN)"),
    defineField({
      name: "categories",
      title: "Categorie",
      type: "array",
      of: [{
        type: "object",
        fields: [
          ...localeString("title", "Titolo (IT)", "Titolo (EN)"),
          ...localeText("desc", "Descrizione (IT)", "Descrizione (EN)"),
          defineField({
            name: "items",
            title: "Prodotti",
            type: "array",
            of: [{
              type: "object",
              fields: [
                defineField({ name: "name", title: "Nome", type: "string" }),
                defineField({ name: "detail", title: "Dettaglio", type: "string" }),
              ],
              preview: { select: { title: "name" } },
            }],
          }),
          defineField({ name: "features", title: "Caratteristiche (IT)", type: "array", of: [{ type: "string" }] }),
          defineField({ name: "features_en", title: "Caratteristiche (EN)", type: "array", of: [{ type: "string" }] }),
          defineField({ name: "gradient", title: "Gradient Class", type: "string" }),
          defineField({ name: "icon", title: "Emoji Icon", type: "string" }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "🛒 Consumables Categories" }) },
};

const carePackGridBlock = {
  type: "object",
  name: "carePackGrid",
  title: "Care Pack Grid",
  fields: [
    ...localeString("eyebrow", "Eyebrow (IT)", "Eyebrow (EN)"),
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    ...localeText("description", "Descrizione (IT)", "Descrizione (EN)"),
    defineField({
      name: "packs",
      title: "Pack",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "name", title: "Nome", type: "string" }),
          ...localeString("hours", "Ore (IT)", "Ore (EN)"),
          defineField({ name: "discount", title: "Sconto", type: "string" }),
          defineField({ name: "color", title: "Color Gradient", type: "string" }),
        ],
        preview: { select: { title: "name" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "💎 Care Pack Grid" }) },
};

const productPhotoBlock = {
  type: "object",
  name: "productPhoto",
  title: "Product Photo",
  fields: [
    defineField({ name: "imageSrc", title: "Image URL", type: "string" }),
    defineField({ name: "alt", title: "Alt Text", type: "string" }),
  ],
  preview: { select: { title: "alt" }, prepare: ({ title }: any) => ({ title: `📷 Photo: ${title || ""}` }) },
};

const productDescriptionBlock = {
  type: "object",
  name: "productDescription",
  title: "Product Description",
  fields: [
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    ...localeText("body", "Body (IT)", "Body (EN)"),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }: any) => ({ title: `📝 Desc: ${title || ""}` }) },
};

const productVideoBlock = {
  type: "object",
  name: "productVideo",
  title: "Product Video",
  fields: [
    ...localeString("eyebrow", "Eyebrow (IT)", "Eyebrow (EN)"),
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    defineField({ name: "videoSrc", title: "Video URL", type: "string" }),
    defineField({ name: "posterSrc", title: "Poster Image URL", type: "string" }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }: any) => ({ title: `🎥 Video: ${title || ""}` }) },
};

const featuresGridBlock = {
  type: "object",
  name: "featuresGrid",
  title: "Features Grid",
  fields: [
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    defineField({ name: "gradientFrom", title: "Icon Gradient From", type: "string", description: "e.g. from-cyan-500" }),
    defineField({ name: "gradientTo", title: "Icon Gradient To", type: "string", description: "e.g. to-yellow-500" }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{
        type: "object",
        fields: [
          ...localeString("title", "Titolo (IT)", "Titolo (EN)"),
          ...localeText("desc", "Descrizione (IT)", "Descrizione (EN)"),
          defineField({ name: "iconSvg", title: "SVG Path (d attribute)", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }: any) => ({ title: `⭐ Features: ${title || ""}` }) },
};

const specsTableBlock = {
  type: "object",
  name: "specsTable",
  title: "Specs Table",
  fields: [
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    defineField({
      name: "specs",
      title: "Specifiche (IT)",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", type: "string" }),
          defineField({ name: "value", title: "Value", type: "string" }),
        ],
        preview: { select: { title: "label", subtitle: "value" } },
      }],
    }),
    defineField({
      name: "specs_en",
      title: "Specifiche (EN)",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", type: "string" }),
          defineField({ name: "value", title: "Value", type: "string" }),
        ],
        preview: { select: { title: "label", subtitle: "value" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "📊 Specs Table" }) },
};

const relatedProductsBlock = {
  type: "object",
  name: "relatedProducts",
  title: "Related Products",
  fields: [
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    defineField({
      name: "products",
      title: "Prodotti",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "name", title: "Nome", type: "string" }),
          ...localeString("desc", "Descrizione (IT)", "Descrizione (EN)"),
          defineField({ name: "href", title: "Link", type: "string" }),
          defineField({ name: "image", title: "Immagine URL", type: "string" }),
        ],
        preview: { select: { title: "name" } },
      }],
    }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }: any) => ({ title: `🔗 Related: ${title || ""}` }) },
};

const simpleCtaBlock = {
  type: "object",
  name: "simpleCta",
  title: "Simple CTA",
  fields: [
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    ...localeText("text", "Testo (IT)", "Testo (EN)"),
    ...localeString("buttonText", "Button Text (IT)", "Button Text (EN)"),
    defineField({ name: "buttonUrl", title: "Button URL", type: "string" }),
    defineField({ name: "bgClass", title: "BG Class", type: "string" }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }: any) => ({ title: `📣 Simple CTA: ${title || ""}` }) },
};

const storyStatsBlock = {
  type: "object",
  name: "storyStats",
  title: "Story + Stats",
  fields: [
    ...localeString("eyebrow", "Eyebrow (IT)", "Eyebrow (EN)"),
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    ...localeText("body", "Body (IT)", "Body (EN)"),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "value", title: "Valore", type: "string" }),
          ...localeString("label", "Label (IT)", "Label (EN)"),
        ],
        preview: { select: { title: "value", subtitle: "label" } },
      }],
    }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }: any) => ({ title: `📖 Story: ${title || ""}` }) },
};

const valuesGridBlock = {
  type: "object",
  name: "valuesGrid",
  title: "Values Grid",
  fields: [
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    defineField({
      name: "values",
      title: "Valori",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "icon", title: "Emoji Icon", type: "string" }),
          ...localeString("title", "Titolo (IT)", "Titolo (EN)"),
          ...localeText("desc", "Descrizione (IT)", "Descrizione (EN)"),
        ],
        preview: { select: { title: "title" } },
      }],
    }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }: any) => ({ title: `💡 Values: ${title || ""}` }) },
};

const demoRoomBlock = {
  type: "object",
  name: "demoRoom",
  title: "Demo Room Section",
  fields: [
    ...localeString("eyebrow", "Eyebrow (IT)", "Eyebrow (EN)"),
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    ...localeText("body", "Body (IT)", "Body (EN)"),
    ...localeString("buttonText", "Button Text (IT)", "Button Text (EN)"),
    defineField({ name: "buttonUrl", title: "Button URL", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "🏢 Demo Room" }) },
};

const teamSectionBlock = {
  type: "object",
  name: "teamSection",
  title: "Team Section",
  fields: [
    ...localeString("heading", "Heading (IT)", "Heading (EN)"),
    ...localeText("description", "Descrizione (IT)", "Descrizione (EN)"),
    defineField({ name: "teamPhoto", title: "Team Photo URL", type: "string" }),
    defineField({
      name: "roles",
      title: "Ruoli",
      type: "array",
      of: [{
        type: "object",
        fields: [
          ...localeString("role", "Ruolo (IT)", "Ruolo (EN)"),
          ...localeString("desc", "Descrizione (IT)", "Descrizione (EN)"),
        ],
        preview: { select: { title: "role" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "👥 Team Section" }) },
};

const solutionCategoryListBlock = {
  type: "object",
  name: "solutionCategoryList",
  title: "Solution Category List",
  fields: [
    defineField({
      name: "categories",
      title: "Categorie",
      type: "array",
      of: [{
        type: "object",
        fields: [
          ...localeString("name", "Nome (IT)", "Nome (EN)"),
          ...localeText("desc", "Descrizione (IT)", "Descrizione (EN)"),
          defineField({ name: "href", title: "Link", type: "string" }),
          defineField({ name: "image", title: "Immagine URL", type: "string" }),
          defineField({ name: "color", title: "Gradient Color", type: "string" }),
          defineField({ name: "icon", title: "Emoji Icon", type: "string" }),
        ],
        preview: { select: { title: "name" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "📂 Solution Categories" }) },
};

const jsonLdBlock = {
  type: "object",
  name: "jsonLd",
  title: "JSON-LD Schema",
  fields: [
    defineField({ name: "jsonContent", title: "JSON-LD Content", type: "text", rows: 10 }),
  ],
  preview: { prepare: () => ({ title: "🔍 JSON-LD" }) },
};

const soluzioniHeroBlock = {
  type: "object",
  name: "soluzioniHero",
  title: "Soluzioni Hero (gradient)",
  fields: [
    ...localeString("eyebrow", "Eyebrow (IT)", "Eyebrow (EN)"),
    ...localeString("title", "Titolo (IT)", "Titolo (EN)"),
    ...localeText("subtitle", "Sottotitolo (IT)", "Sottotitolo (EN)"),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }: any) => ({ title: `🌈 Soluzioni Hero: ${title || ""}` }) },
};

// ── Main Page Document ──
export default defineType({
  name: "page",
  title: "Pagine",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titolo (IT)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title_en", title: "Titolo (EN)", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({
      name: "pageType",
      title: "Tipo Pagina",
      type: "string",
      options: {
        list: [
          { title: "Soluzione (dettaglio)", value: "soluzione" },
          { title: "Prodotto", value: "prodotto" },
          { title: "Soluzioni (listing)", value: "soluzioni-listing" },
          { title: "Chi Siamo", value: "chi-siamo" },
          { title: "Generica", value: "generica" },
        ],
      },
    }),
    defineField({
      name: "sections",
      title: "Sezioni Pagina",
      type: "array",
      of: [
        pageHeroBlock,
        productHeroBlock,
        soluzioniHeroBlock,
        sectionHeadingBlock,
        productCardListBlock,
        ctaBannerBlock,
        useCasesGridBlock,
        consumablesCategoryListBlock,
        carePackGridBlock,
        productPhotoBlock,
        productDescriptionBlock,
        productVideoBlock,
        featuresGridBlock,
        specsTableBlock,
        relatedProductsBlock,
        simpleCtaBlock,
        storyStatsBlock,
        valuesGridBlock,
        demoRoomBlock,
        teamSectionBlock,
        solutionCategoryListBlock,
        jsonLdBlock,
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO (IT)",
      type: "object",
      fields: [
        { name: "title", title: "Meta Title", type: "string" },
        { name: "description", title: "Meta Description", type: "text", rows: 3 },
        { name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }] },
        { name: "image", title: "OG Image URL", type: "string" },
        { name: "canonical", title: "Canonical URL", type: "string" },
      ],
    }),
    defineField({
      name: "seo_en",
      title: "SEO (EN)",
      type: "object",
      fields: [
        { name: "title", title: "Meta Title (EN)", type: "string" },
        { name: "description", title: "Meta Description (EN)", type: "text", rows: 3 },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "pageType" },
  },
});
