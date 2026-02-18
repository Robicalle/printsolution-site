import { defineField, defineType } from "sanity";

export default defineType({
  name: "shopProduct",
  title: "Prodotti Shop",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "sku", title: "SKU", type: "string" }),
    defineField({ name: "price", title: "Prezzo", type: "number", validation: (r) => r.required().min(0) }),
    defineField({ name: "image", title: "Immagine", type: "image", options: { hotspot: true } }),
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
        ],
      },
    }),
    defineField({ name: "description", title: "Descrizione", type: "text", rows: 4 }),
  ],
  preview: {
    select: { title: "name", subtitle: "sku", media: "image" },
  },
});
