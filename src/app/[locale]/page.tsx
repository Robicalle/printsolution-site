import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Print Solution — Soluzioni Digitali per Stampa e Packaging",
  description:
    "Stampa digitale packaging, etichettatura industriale e consumabili. Dal 2010, Print Solution è il punto di riferimento italiano per soluzioni di stampa digitale.",
  keywords: [
    "stampa digitale packaging",
    "etichettatura industriale",
    "Print Solution",
    "stampante packaging",
    "stampa etichette industriale",
    "box maker automatico",
  ],
  openGraph: {
    title: "Print Solution — Soluzioni Digitali per Stampa e Packaging",
    description:
      "Stampa digitale packaging, etichettatura industriale e consumabili. Dal 2010, il punto di riferimento italiano per la stampa digitale.",
    images: ["/images/hero-boxes.webp"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomePageClient />;
}
