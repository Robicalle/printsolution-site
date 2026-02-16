import type { Metadata } from "next";
import ContattiClient from "./ContattiClient";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Print Solution: richiedi informazioni, prenota una demo gratuita o visita la sala demo a Sesto San Giovanni (MI). Tel. +39 02 4943 9417.",
  keywords: [
    "contatti Print Solution",
    "demo stampante packaging",
    "sala demo stampa digitale",
    "Sesto San Giovanni",
  ],
  openGraph: {
    title: "Contatti | Print Solution",
    description:
      "Contatta Print Solution: richiedi informazioni, prenota una demo gratuita o visita la sala demo a Sesto San Giovanni (MI).",
    images: ["/images/hero-boxes.webp"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return <ContattiClient />;
}
