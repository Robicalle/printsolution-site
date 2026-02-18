import { defineField, defineType } from "sanity";

export default defineType({
  name: "solution",
  title: "Soluzioni",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titolo (IT)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title_en", title: "Titolo (EN)", type: "string", description: "English title — leave empty to use Italian" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Descrizione (IT)", type: "blockContent" }),
    defineField({ name: "description_en", title: "Descrizione (EN)", type: "blockContent" }),
    defineField({ name: "image", title: "Immagine", type: "image", options: { hotspot: true } }),
    defineField({
      name: "category",
      title: "Tipo Soluzione",
      type: "string",
      options: {
        list: [
          { title: "Packaging", value: "packaging" },
          { title: "Etichette", value: "etichette" },
          { title: "Shopper", value: "shopper" },
          { title: "Labbratura", value: "labbratura" },
        ],
      },
    }),
    defineField({
      name: "products",
      title: "Prodotti Collegati",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({
      name: "seo",
      title: "SEO (IT)",
      type: "object",
      fields: [
        { name: "title", title: "Meta Title", type: "string" },
        { name: "description", title: "Meta Description", type: "text", rows: 3 },
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
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
