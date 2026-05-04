import { defineField, defineType } from "sanity";
import { allPageBuilderBlocks } from "./pageBuilderBlocks";

export default defineType({
  name: "solution",
  title: "Soluzioni",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titolo (IT)",
      type: "string",
      validation: (r) => r.required().max(100),
    }),
    defineField({
      name: "title_en",
      title: "Titolo (EN)",
      type: "string",
      description: "English title — leave empty to use Italian",
      validation: (r) => r.max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
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
      name: "image",
      title: "Immagine",
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
    }),
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
      name: "order",
      title: "Ordinamento",
      type: "number",
      description: "Numero per ordinamento manuale (più basso = prima)",
      initialValue: 0,
    }),
    defineField({
      name: "sezioniPagina",
      title: "Sezioni Pagina (Page Builder)",
      type: "array",
      of: allPageBuilderBlocks,
      description: "Blocchi page builder per la pagina soluzione dinamica",
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
        { name: "keywords", title: "Keywords (IT)", type: "array", of: [{ type: "string" }] },
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
    { title: "Titolo A-Z", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image", order: "order" },
    prepare({ title, subtitle, media, order }: any) {
      return {
        title: order != null ? `${order}. ${title}` : title,
        subtitle,
        media,
      };
    },
  },
});
