import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import FaqSection from "@/components/FaqSection";
import { getLocale } from "next-intl/server";
import { getSiteSettings } from "@/sanity/lib/fetchers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === 'it'
      ? "Print Solution — Soluzioni Digitali per la stampa di Labelling e Packaging"
      : "Print Solution — Digital Solutions for Labelling and Packaging Printing",
    description: locale === 'it'
      ? "Stampa digitale packaging, etichettatura industriale e consumabili. Dal 2010, Print Solution è il punto di riferimento italiano per soluzioni di stampa digitale."
      : "Digital packaging printing, industrial labelling and consumables. Since 2010, Print Solution has been Italy's reference point for digital printing solutions.",
    keywords: locale === 'it'
      ? ["stampa digitale packaging", "etichettatura industriale", "Print Solution", "stampante packaging", "stampa etichette industriale", "box maker automatico"]
      : ["digital packaging printing", "industrial labelling", "Print Solution", "packaging printer", "industrial label printing", "automatic box maker"],
    openGraph: {
      title: locale === 'it'
        ? "Print Solution — Soluzioni Digitali per la stampa di Labelling e Packaging"
        : "Print Solution — Digital Solutions for Labelling and Packaging Printing",
      description: locale === 'it'
        ? "Stampa digitale packaging, etichettatura industriale e consumabili. Dal 2010, il punto di riferimento italiano per la stampa digitale."
        : "Digital packaging printing, industrial labelling and consumables. Since 2010, Italy's reference point for digital printing.",
      images: ["/images/hero-boxes.webp"],
      type: "website",
      locale: locale === 'it' ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `https://website-theta-one-59.vercel.app/${locale}`,
      languages: {
        'it': 'https://website-theta-one-59.vercel.app/it',
        'en': 'https://website-theta-one-59.vercel.app/en',
      },
    },
  };
}

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Print Solution S.r.l.",
  url: "https://www.printsolutionsrl.it",
  logo: "https://www.printsolutionsrl.it/logo.png",
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

export default async function HomePage() {
  const settings = await getSiteSettings().catch(() => null);

  const dynamicJsonLd = settings
    ? {
        ...homepageJsonLd,
        name: settings.companyName || homepageJsonLd.name,
        telephone: settings.contact?.phone ? `+39-${settings.contact.phone.replace(/\s/g, "-")}` : homepageJsonLd.telephone,
        email: settings.contact?.email,
      }
    : homepageJsonLd;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicJsonLd) }}
      />
      <HomePageClient />
      <FaqSection />
    </>
  );
}
