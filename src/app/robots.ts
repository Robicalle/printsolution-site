import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/studio",
          "/en/studio",
          "/api/",
          "/en/api/",
          // Paginazione combinatoria del vecchio sito Webflow (?77e92ae0_page=2,
          // ?275019bc_page=4&da6f623b_page=7, ...): URL potenzialmente infiniti
          // che servono sempre lo stesso contenuto. Non sono indicizzati - il
          // canonical punta gia' alla versione pulita - ma bruciano crawl budget.
          "/*_page=",
        ],
      },
    ],
    sitemap: "https://www.printsolutionsrl.it/sitemap.xml",
  };
}
