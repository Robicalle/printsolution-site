import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Domanda (IT)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "question_en", title: "Domanda (EN)", type: "string" }),
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
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
});
