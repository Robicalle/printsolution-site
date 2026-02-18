import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog / Articoli",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titolo (IT)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title_en", title: "Titolo (EN)", type: "string", description: "English title — leave empty to use Italian" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "author", title: "Autore", type: "string" }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Packaging", value: "packaging" },
          { title: "Etichette", value: "etichette" },
          { title: "Tecnologia", value: "tecnologia" },
          { title: "Guide", value: "guide" },
          { title: "News", value: "news" },
        ],
      },
    }),
    defineField({ name: "coverImage", title: "Immagine Copertina", type: "image", options: { hotspot: true } }),
    defineField({ name: "excerpt", title: "Estratto (IT)", type: "text", rows: 3 }),
    defineField({ name: "excerpt_en", title: "Estratto (EN)", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Contenuto (IT)", type: "blockContent" }),
    defineField({ name: "body_en", title: "Contenuto (EN)", type: "blockContent" }),
    defineField({ name: "publishedAt", title: "Data Pubblicazione", type: "datetime" }),
    defineField({
      name: "seo",
      title: "SEO (IT)",
      type: "object",
      fields: [
        { name: "title", title: "Meta Title", type: "string" },
        { name: "description", title: "Meta Description", type: "text", rows: 3 },
        { name: "image", title: "OG Image", type: "image" },
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
    select: { title: "title", subtitle: "author", media: "coverImage" },
  },
});
