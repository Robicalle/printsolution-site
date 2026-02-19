import { I } from './icons.mjs';
const IC = I;

export function k() { return Math.random().toString(36).slice(2, 14); }

export function buildSections(p) {
  const s = [];
  if (p.jsonLd) s.push({ _type: "jsonLd", _key: k(), jsonContent: typeof p.jsonLd === 'string' ? p.jsonLd : JSON.stringify(p.jsonLd) });
  s.push({ _type: "productHero", _key: k(), breadcrumb: p.bc || "", breadcrumb_en: p.bc_en || "", productName: p.name, description: p.desc, description_en: p.desc_en || "", videoSrc: p.heroVideo || "", ctaText: "Richiedi Informazioni", ctaText_en: "Request Information", ctaUrl: p.ctaUrl || "" });
  if (p.photo) s.push({ _type: "productPhoto", _key: k(), imageSrc: p.photo, alt: p.name });
  if (p.dh) s.push({ _type: "productDescription", _key: k(), heading: p.dh, heading_en: p.dh_en || "", body: p.db, body_en: p.db_en || "" });
  if (p.videos) for (const v of p.videos) s.push({ _type: "productVideo", _key: k(), eyebrow: "Video", eyebrow_en: "Video", heading: v.h, heading_en: v.he || "", videoSrc: v.s, posterSrc: v.p || "" });
  if (p.feats) s.push({ _type: "featuresGrid", _key: k(), heading: p.fh || "Vantaggi Principali", heading_en: p.fh_en || "Key Benefits", gradientFrom: p.gf || "from-cyan-500", gradientTo: p.gt || "to-magenta-500", features: p.feats.map(f => ({ _key: k(), title: f.t, title_en: f.te || "", desc: f.d, desc_en: f.de || "", iconSvg: IC[f.i] || IC.bolt })) });
  if (p.specs) s.push({ _type: "specsTable", _key: k(), heading: p.sh || "Specifiche Tecniche", heading_en: p.sh_en || "Technical Specifications", specs: p.specs.map(x => ({ _key: k(), label: x[0], value: x[1] })), specs_en: (p.specs_en || []).map(x => ({ _key: k(), label: x[0], value: x[1] })) });
  if (p.rel) s.push({ _type: "relatedProducts", _key: k(), heading: "Prodotti Correlati", heading_en: "Related Products", products: p.rel.map(r => ({ _key: k(), name: r.n, desc: r.d, desc_en: r.de || "", href: r.h, image: r.img })) });
  if (p.cta) s.push({ _type: "simpleCta", _key: k(), heading: p.cta.h, heading_en: p.cta.he || "", text: p.cta.t, text_en: p.cta.te || "", buttonText: p.cta.b || "Consulenza gratuita", buttonText_en: p.cta.be || "Free consultation", buttonUrl: p.cta.u || "", secondButtonText: p.cta.b2 || "", secondButtonText_en: p.cta.b2e || "", secondButtonUrl: p.cta.u2 || "", bgClass: "bg-surface-50" });
  return s;
}
