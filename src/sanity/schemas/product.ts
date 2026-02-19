import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Prodotti",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome (IT)",
      type: "string",
      validation: (r) => r.required().max(100),
    }),
    defineField({
      name: "name_en",
      title: "Nome (EN)",
      type: "string",
      description: "English name — leave empty to use Italian",
      validation: (r) => r.max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) =>
        r.required().custom((slug) => {
          if (!slug?.current) return "Slug obbligatorio";
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug.current))
            return "Solo lettere minuscole, numeri e trattini";
          return true;
        }),
    }),
    defineField({ name: "description", title: "Descrizione (IT)", type: "blockContent" }),
    defineField({ name: "description_en", title: "Descrizione (EN)", type: "blockContent" }),
    defineField({
      name: "specs",
      title: "Specifiche Tecniche",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Etichetta", type: "string" },
            { name: "value", title: "Valore", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Gallery Immagini",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Testo alternativo (accessibilità)",
              type: "string",
              validation: (r) =>
                r.required().warning("Aggiungi un testo alternativo per accessibilità"),
            }),
          ],
        },
      ],
    }),
    defineField({ name: "video", title: "Video URL", type: "url" }),
    defineField({
      name: "price",
      title: "Prezzo",
      type: "number",
      validation: (r) => r.min(0),
    }),
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
      name: "order",
      title: "Ordinamento",
      type: "number",
      description: "Numero per ordinamento manuale (più basso = prima)",
      initialValue: 0,
    }),
    defineField({
      name: "seo",
      title: "SEO (IT)",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Meta Title",
          type: "string",
          validation: (r) => r.max(60).warning("Massimo 60 caratteri per SEO"),
        },
        {
          name: "description",
          title: "Meta Description",
          type: "text",
          rows: 3,
          validation: (r) => r.max(160).warning("Massimo 160 caratteri per SEO"),
        },
        { name: "image", title: "OG Image", type: "image" },
      ],
    }),
    defineField({
      name: "seo_en",
      title: "SEO (EN)",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Meta Title (EN)",
          type: "string",
          validation: (r) => r.max(60),
        },
        {
          name: "description",
          title: "Meta Description (EN)",
          type: "text",
          rows: 3,
          validation: (r) => r.max(160),
        },
      ],
    }),
  ],
  orderings: [
    { title: "Ordine Manuale", name: "manualOrder", by: [{ field: "order", direction: "asc" }] },
    { title: "Nome A-Z", name: "nameAsc", by: [{ field: "name", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", media: "images.0", order: "order" },
    prepare({ title, media, order }: any) {
      return { title: order != null ? `${order}. ${title}` : title, media };
    },
  },
});
