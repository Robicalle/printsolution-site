"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import type { StructureBuilder } from "sanity/structure";

function deskStructure(S: StructureBuilder) {
  return S.list()
    .title("Contenuti")
    .items([
      // Site Settings singleton
      S.listItem()
        .title("⚙️ Impostazioni Sito")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Impostazioni Sito")
        ),

      S.divider(),

      // Products - ordered
      S.listItem()
        .title("📦 Prodotti")
        .child(
          S.documentTypeList("product")
            .title("Prodotti")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),

      // Solutions - ordered
      S.listItem()
        .title("💡 Soluzioni")
        .child(
          S.documentTypeList("solution")
            .title("Soluzioni")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),

      S.divider(),

      // Blog
      S.listItem()
        .title("📝 Blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem()
                .title("Tutti gli Articoli")
                .child(
                  S.documentTypeList("post")
                    .title("Tutti gli Articoli")
                    .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
                ),
              S.divider(),
              // By category
              ...["packaging", "etichette", "tecnologia", "guide", "news"].map(
                (cat) =>
                  S.listItem()
                    .title(`📁 ${cat.charAt(0).toUpperCase() + cat.slice(1)}`)
                    .child(
                      S.documentTypeList("post")
                        .title(`Blog: ${cat}`)
                        .filter('_type == "post" && category == $category')
                        .params({ category: cat })
                        .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
                    )
              ),
            ])
        ),

      S.divider(),

      // Shop - grouped by category
      S.listItem()
        .title("🛒 Shop")
        .child(
          S.list()
            .title("Shop")
            .items([
              S.listItem()
                .title("Tutti i Prodotti Shop")
                .child(
                  S.documentTypeList("shopProduct")
                    .title("Tutti i Prodotti Shop")
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                ),
              S.divider(),
              ...["inchiostri", "testine", "etichette", "nastri", "accessori", "toner", "tamburi", "cartucce"].map(
                (cat) =>
                  S.listItem()
                    .title(`📁 ${cat.charAt(0).toUpperCase() + cat.slice(1)}`)
                    .child(
                      S.documentTypeList("shopProduct")
                        .title(`Shop: ${cat}`)
                        .filter('_type == "shopProduct" && category == $category')
                        .params({ category: cat })
                        .defaultOrdering([{ field: "order", direction: "asc" }])
                    )
              ),
            ])
        ),

      S.divider(),

      // FAQ
      S.listItem()
        .title("❓ FAQ")
        .child(
          S.documentTypeList("faq")
            .title("FAQ")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),

      // Pages
      S.listItem()
        .title("📄 Pagine")
        .child(S.documentTypeList("page").title("Pagine")),
    ]);
}

export default defineConfig({
  name: "print-solution",
  title: "Print Solution CMS",
  projectId: "dnhjoqwl",
  dataset: "production",
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
  // NOTA RUOLI: Sanity free tier gestisce i ruoli dalla dashboard (manage.sanity.io).
  // Ruoli disponibili: Administrator, Editor, Viewer.
  // Roberto (admin) → ruolo Administrator (può pubblicare e cancellare)
  // Eventuali editor → ruolo Editor (può creare bozze ma non pubblicare)
  // Per workflow di approvazione avanzato serve Sanity Team/Enterprise plan.
});
