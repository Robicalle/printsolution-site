import { defineField, defineType } from "sanity";

export default defineType({
  name: "shopProduct",
  title: "Prodotti Shop",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome (IT)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "name_en", title: "Nome (EN)", type: "string", description: "English name — leave empty to use Italian" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "sku", title: "SKU", type: "string" }),
    defineField({ name: "price", title: "Prezzo", type: "number", validation: (r) => r.required().min(0) }),
    defineField({ name: "image", title: "Immagine", type: "image", options: { hotspot: true } }),
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
    defineField({ name: "description", title: "Descrizione (IT)", type: "text", rows: 4 }),
    defineField({ name: "description_en", title: "Descrizione (EN)", type: "text", rows: 4 }),
    defineField({ name: "inStock", title: "Disponibile", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "name", subtitle: "sku", media: "image" },
  },
});
