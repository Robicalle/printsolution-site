import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Impostazioni Sito",
  type: "document",
  // Singleton — only one document
  fields: [
    defineField({ name: "companyName", title: "Nome Azienda", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({
      name: "contact",
      title: "Contatti",
      type: "object",
      fields: [
        { name: "email", title: "Email", type: "string" },
        { name: "phone", title: "Telefono", type: "string" },
        { name: "address", title: "Indirizzo", type: "text", rows: 2 },
      ],
    }),
    defineField({
      name: "tracking",
      title: "Tracking & Analytics",
      type: "object",
      fields: [
        { name: "gtmId", title: "Google Tag Manager ID", type: "string", description: "Formato: GTM-XXXXXXX" },
        { name: "ga4Id", title: "Google Analytics 4 ID", type: "string", description: "Formato: G-XXXXXXXXXX (opzionale se usi GTM)" },
        { name: "metaPixelId", title: "Meta Pixel ID", type: "string", description: "Per Facebook/Instagram Ads (opzionale)" },
        { name: "googleSiteVerification", title: "Google Search Console", type: "string", description: "Codice di verifica Google Search Console" },
      ],
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "youtube", title: "YouTube", type: "url" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Impostazioni Sito" };
    },
  },
});
