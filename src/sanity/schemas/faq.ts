import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Domanda (IT)",
      type: "string",
      validation: (r) => r.required().max(200),
    }),
    defineField({
      name: "question_en",
      title: "Domanda (EN)",
      type: "string",
      validation: (r) => r.max(200),
    }),
    defineField({ name: "answer", title: "Risposta (IT)", type: "blockContent" }),
    defineField({ name: "answer_en", title: "Risposta (EN)", type: "blockContent" }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Generale", value: "generale" },
          { title: "Prodotti", value: "prodotti" },
          { title: "Spedizioni", value: "spedizioni" },
          { title: "Assistenza", value: "assistenza" },
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
  ],
  orderings: [
    { title: "Ordine Manuale", name: "manualOrder", by: [{ field: "order", direction: "asc" }] },
    { title: "Categoria", name: "categoryAsc", by: [{ field: "category", direction: "asc" }] },
  ],
  preview: {
    select: { title: "question", subtitle: "category", order: "order" },
    prepare({ title, subtitle, order }: any) {
      return {
        title: order != null ? `${order}. ${title}` : title,
        subtitle,
      };
    },
  },
});
