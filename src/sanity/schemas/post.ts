import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog / Articoli",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titolo", type: "string", validation: (r) => r.required() }),
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
    defineField({ name: "excerpt", title: "Estratto", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Contenuto", type: "blockContent" }),
    defineField({ name: "publishedAt", title: "Data Pubblicazione", type: "datetime" }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "title", title: "Meta Title", type: "string" },
        { name: "description", title: "Meta Description", type: "text", rows: 3 },
        { name: "image", title: "OG Image", type: "image" },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "author", media: "coverImage" },
  },
});
