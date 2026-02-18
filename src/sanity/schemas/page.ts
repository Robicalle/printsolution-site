import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Pagine",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titolo (IT)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title_en", title: "Titolo (EN)", type: "string" }),
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
            { name: "heading", title: "Titolo (IT)", type: "string" },
            { name: "heading_en", title: "Titolo (EN)", type: "string" },
            { name: "body", title: "Testo (IT)", type: "blockContent" },
            { name: "body_en", title: "Testo (EN)", type: "blockContent" },
          ],
        },
        {
          type: "object",
          name: "imageBlock",
          title: "Blocco Immagine",
          fields: [
            { name: "image", title: "Immagine", type: "image", options: { hotspot: true } },
            { name: "caption", title: "Didascalia (IT)", type: "string" },
            { name: "caption_en", title: "Didascalia (EN)", type: "string" },
          ],
        },
        {
          type: "object",
          name: "ctaBlock",
          title: "Blocco CTA",
          fields: [
            { name: "heading", title: "Titolo (IT)", type: "string" },
            { name: "heading_en", title: "Titolo (EN)", type: "string" },
            { name: "text", title: "Testo (IT)", type: "text" },
            { name: "text_en", title: "Testo (EN)", type: "text" },
            { name: "buttonText", title: "Testo Bottone (IT)", type: "string" },
            { name: "buttonText_en", title: "Testo Bottone (EN)", type: "string" },
            { name: "buttonUrl", title: "URL Bottone", type: "string" },
          ],
        },
      ],
    }),
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
    select: { title: "title", media: "heroImage" },
  },
});
