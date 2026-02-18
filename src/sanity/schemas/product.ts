import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Prodotti",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome (IT)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "name_en", title: "Nome (EN)", type: "string", description: "English name — leave empty to use Italian" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Descrizione (IT)", type: "blockContent" }),
    defineField({ name: "description_en", title: "Descrizione (EN)", type: "blockContent" }),
    defineField({
      name: "specs",
      title: "Specifiche Tecniche",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label", title: "Etichetta", type: "string" },
          { name: "value", title: "Valore", type: "string" },
        ],
      }],
    }),
    defineField({
      name: "images",
      title: "Gallery Immagini",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "video", title: "Video URL", type: "url" }),
    defineField({ name: "price", title: "Prezzo", type: "number" }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Stampanti Etichette", value: "stampanti-etichette" },
          { title: "Stampanti Packaging", value: "stampanti-packaging" },
          { title: "Finishing", value: "finishing" },
          { title: "Labbratura", value: "labbratura" },
        ],
      },
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
    select: { title: "name", media: "images.0" },
  },
});
