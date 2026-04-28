import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en"],
  defaultLocale: "it",
  localePrefix: "as-needed", // no prefix for Italian
  localeDetection: false,    // locale determinato solo dall'URL, non dall'header Accept-Language
});
