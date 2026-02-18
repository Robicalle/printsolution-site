import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Prodotti",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Descrizione", type: "blockContent" }),
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
    select: { title: "name", media: "images.0" },
  },
});
