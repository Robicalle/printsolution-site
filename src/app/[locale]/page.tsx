import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === 'it'
      ? "Print Solution — Soluzioni Digitali per Stampa e Packaging"
      : "Print Solution — Digital Printing & Packaging Solutions",
    description: locale === 'it'
      ? "Stampa digitale packaging, etichettatura industriale e consumabili. Dal 2010, Print Solution è il punto di riferimento italiano per soluzioni di stampa digitale."
      : "Digital packaging printing, industrial labelling and consumables. Since 2010, Print Solution has been Italy's reference point for digital printing solutions.",
    keywords: locale === 'it'
      ? ["stampa digitale packaging", "etichettatura industriale", "Print Solution", "stampante packaging", "stampa etichette industriale", "box maker automatico"]
      : ["digital packaging printing", "industrial labelling", "Print Solution", "packaging printer", "industrial label printing", "automatic box maker"],
    openGraph: {
      title: locale === 'it'
        ? "Print Solution — Soluzioni Digitali per Stampa e Packaging"
        : "Print Solution — Digital Printing & Packaging Solutions",
      description: locale === 'it'
        ? "Stampa digitale packaging, etichettatura industriale e consumabili. Dal 2010, il punto di riferimento italiano per la stampa digitale."
        : "Digital packaging printing, industrial labelling and consumables. Since 2010, Italy's reference point for digital printing.",
      images: ["/images/hero-boxes.webp"],
      type: "website",
      locale: locale === 'it' ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: "/" },
  };
}

export default function HomePage() {
  return <HomePageClient />;
}
