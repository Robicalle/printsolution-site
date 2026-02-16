import type { Metadata } from "next";
import ContattiClient from "./ContattiClient";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === 'it' ? "Contatti" : "Contact Us",
    description: locale === 'it'
      ? "Contatta Print Solution: richiedi informazioni, Richiedi una Consulenza Gratuita o visita la sala demo a Sesto San Giovanni (MI). Tel. +39 02 4943 9417."
      : "Contact Print Solution: request information, Request a Free Consultation or visit our demo room in Sesto San Giovanni (MI). Tel. +39 02 4943 9417.",
    keywords: locale === 'it'
      ? ["contatti Print Solution", "demo stampante packaging", "sala demo stampa digitale", "Sesto San Giovanni"]
      : ["contact Print Solution", "packaging printer demo", "digital printing demo room", "Sesto San Giovanni"],
    openGraph: {
      title: locale === 'it' ? "Contatti | Print Solution" : "Contact Us | Print Solution",
      description: locale === 'it'
        ? "Contatta Print Solution: richiedi informazioni, Richiedi una Consulenza Gratuita o visita la sala demo a Sesto San Giovanni (MI)."
        : "Contact Print Solution: request information, Request a Free Consultation or visit our demo room in Sesto San Giovanni (MI).",
      images: ["/images/hero-boxes.webp"],
      type: "website",
      locale: locale === 'it' ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: "/contatti" },
  };
}

export default async function ContattiPage() {
  const locale = await getLocale();
  return <ContattiClient />;
}
