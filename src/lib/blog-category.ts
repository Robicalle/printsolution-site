// Etichette leggibili e localizzate per le categorie del blog.
// Il valore salvato su Sanity e' lo slug (es. "etichette"): qui lo mappiamo
// a un'etichetta IT/EN. Nuove categorie senza mappatura ricadono su una
// versione con l'iniziale maiuscola dello slug.
const CATEGORY_LABELS: Record<string, { it: string; en: string }> = {
  packaging: { it: "Packaging", en: "Packaging" },
  etichette: { it: "Etichette", en: "Labels" },
  tecnologia: { it: "Tecnologia", en: "Technology" },
  guide: { it: "Guide", en: "Guides" },
  news: { it: "News", en: "News" },
  "case-study": { it: "Case Study", en: "Case Study" },
};

export function categoryLabel(category: string | undefined | null, locale: string): string {
  if (!category) return "Blog";
  const entry = CATEGORY_LABELS[category.toLowerCase()];
  if (entry) return locale === "en" ? entry.en : entry.it;
  return category.charAt(0).toUpperCase() + category.slice(1);
}
