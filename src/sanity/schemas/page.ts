import { defineField, defineType } from "sanity";
import { allPageBuilderBlocks } from "./pageBuilderBlocks";

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
      of: allPageBuilderBlocks,
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
