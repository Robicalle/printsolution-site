import { defineField, defineType } from "sanity";

export default defineType({
  name: "shopProduct",
  title: "Prodotti Shop",
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
    defineField({
      name: "sku",
      title: "SKU",
      type: "string",
      validation: (r) => r.required().warning("SKU necessario per gestione magazzino"),
    }),
    defineField({
      name: "price",
      title: "Prezzo",
      type: "number",
      validation: (r) => r.required().min(0),
    }),
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
      name: "printerModel",
      title: "Modello Stampante",
      type: "string",
      description: "Es: GreenBox, GreenBox EVO, EDM-650X, ANY-002, ecc.",
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Inchiostri", value: "inchiostri" },
          { title: "Testine", value: "testine" },
          { title: "Etichette", value: "etichette" },
          { title: "Nastri", value: "nastri" },
          { title: "Accessori", value: "accessori" },
          { title: "Toner", value: "toner" },
          { title: "Tamburi", value: "tamburi" },
          { title: "Cartucce", value: "cartucce" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Descrizione (IT)",
      type: "text",
      rows: 4,
      validation: (r) => r.max(300),
    }),
    defineField({
      name: "description_en",
      title: "Descrizione (EN)",
      type: "text",
      rows: 4,
      validation: (r) => r.max(300),
    }),
    defineField({ name: "inStock", title: "Disponibile", type: "boolean", initialValue: true }),
    defineField({
      name: "order",
      title: "Ordinamento",
      type: "number",
      description: "Numero per ordinamento manuale (più basso = prima)",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Ordine Manuale", name: "manualOrder", by: [{ field: "order", direction: "asc" }] },
    { title: "Nome A-Z", name: "nameAsc", by: [{ field: "name", direction: "asc" }] },
    { title: "Prezzo", name: "priceAsc", by: [{ field: "price", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "sku", media: "image" },
  },
});
