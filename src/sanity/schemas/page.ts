import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Pagine",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titolo", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "content",
      title: "Blocchi Contenuto",
      type: "array",
      of: [
        {
          type: "object",
          name: "textBlock",
          title: "Blocco Testo",
          fields: [
            { name: "heading", title: "Titolo", type: "string" },
            { name: "body", title: "Testo", type: "blockContent" },
          ],
        },
        {
          type: "object",
          name: "imageBlock",
          title: "Blocco Immagine",
          fields: [
            { name: "image", title: "Immagine", type: "image", options: { hotspot: true } },
            { name: "caption", title: "Didascalia", type: "string" },
          ],
        },
        {
          type: "object",
          name: "ctaBlock",
          title: "Blocco CTA",
          fields: [
            { name: "heading", title: "Titolo", type: "string" },
            { name: "text", title: "Testo", type: "text" },
            { name: "buttonText", title: "Testo Bottone", type: "string" },
            { name: "buttonUrl", title: "URL Bottone", type: "string" },
          ],
        },
      ],
    }),
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
    select: { title: "title", media: "heroImage" },
  },
});
