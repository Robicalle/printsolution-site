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

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Print Solution S.r.l.",
  url: "https://www.printsolution.it",
  logo: "https://www.printsolution.it/logo.png",
  description: "Vendita e assistenza stampanti digitali per etichette e packaging",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Asti",
    addressRegion: "Piemonte",
    addressCountry: "IT",
  },
  telephone: "+39-0141-352540",
  sameAs: [
    "https://www.facebook.com/printsolutionsrl",
    "https://www.linkedin.com/company/print-solution-srl",
  ],
  knowsAbout: [
    "stampanti digitali etichette",
    "packaging digitale",
    "stampanti inkjet industriali",
    "consumabili stampa digitale",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
