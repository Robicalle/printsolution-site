import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog / Articoli",
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
          { title: "Case Study", value: "case-study" },
        ],
      },
    }),
    defineField({
      name: "coverImage",
      title: "Immagine Copertina",
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
      name: "excerpt",
      title: "Estratto (IT)",
      type: "text",
      rows: 3,
      validation: (r) => r.max(300).warning("Massimo 300 caratteri per meta description"),
    }),
    defineField({
      name: "excerpt_en",
      title: "Estratto (EN)",
      type: "text",
      rows: 3,
      validation: (r) => r.max(300),
    }),
    defineField({ name: "body", title: "Contenuto (IT)", type: "blockContent" }),
    defineField({ name: "body_en", title: "Contenuto (EN)", type: "blockContent" }),
    defineField({
      name: "faq",
      title: "FAQ (IT)",
      type: "array",
      description: "Domande frequenti — usate per il FAQPage schema (AI Overview)",
      of: [{
        type: "object",
        name: "faqItem",
        fields: [
          { name: "question", title: "Domanda", type: "string" },
          { name: "answer", title: "Risposta", type: "text", rows: 3 },
        ],
        preview: { select: { title: "question" } },
      }],
    }),
    defineField({
      name: "faq_en",
      title: "FAQ (EN)",
      type: "array",
      of: [{
        type: "object",
        name: "faqItemEn",
        fields: [
          { name: "question", title: "Question", type: "string" },
          { name: "answer", title: "Answer", type: "text", rows: 3 },
        ],
        preview: { select: { title: "question" } },
      }],
    }),
    defineField({
      name: "relatedProducts",
      title: "Prodotti Correlati",
      description: "Fino a 3 prodotti mostrati in fondo all'articolo e come callout inline nel testo",
      type: "array",
      validation: (r) => r.max(3).warning("Massimo 3 prodotti correlati"),
      of: [{
        type: "object",
        name: "relatedProduct",
        title: "Prodotto",
        fields: [
          { name: "name", title: "Nome Prodotto", type: "string", validation: (r) => r.required() },
          { name: "desc", title: "Descrizione breve (IT)", type: "string" },
          { name: "desc_en", title: "Descrizione breve (EN)", type: "string" },
          { name: "href", title: "URL (es. /prodotti/ab2500)", type: "string", validation: (r) => r.required() },
          { name: "image", title: "Immagine (percorso es. /images/products/ab2500-nobg.png)", type: "string" },
        ],
        preview: {
          select: { title: "name", subtitle: "href" },
          prepare({ title, subtitle }: any) {
            return { title: `🖨 ${title || "Prodotto"}`, subtitle };
          },
        },
      }],
    }),
    defineField({ name: "publishedAt", title: "Data Pubblicazione", type: "datetime" }),
    defineField({
      name: "order",
      title: "Ordinamento",
      type: "number",
      description: "Numero per ordinamento manuale (più basso = prima)",
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
    { title: "Data Pubblicazione", name: "publishDate", by: [{ field: "publishedAt", direction: "desc" }] },
    { title: "Ordine Manuale", name: "manualOrder", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "author", media: "coverImage" },
  },
});
