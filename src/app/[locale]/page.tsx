import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import FaqSection from "@/components/FaqSection";
import { getLocale } from "next-intl/server";
import { getSiteSettings } from "@/sanity/lib/fetchers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === 'it'
      ? "Print Solution — Stampanti per Packaging ed Etichette dal 2010"
      : "Print Solution — Digital Packaging & Label Printers | Italy",
    description: locale === 'it'
      ? "Stampanti digitali per scatole personalizzate, etichette a colori e packaging industriale. Box maker automatici, sistemi single-pass e inkjet. Demo gratuita a Sesto San Giovanni (MI)."
      : "Digital printers for custom boxes, colour labels and industrial packaging. Automatic box makers, single-pass and inkjet systems. Free demo near Milan, Italy.",
    keywords: locale === 'it'
      ? ["stampa digitale packaging", "etichettatura industriale", "Print Solution", "stampante packaging", "stampa etichette industriale", "box maker automatico"]
      : ["digital packaging printing", "industrial labelling", "Print Solution", "packaging printer", "industrial label printing", "automatic box maker"],
    openGraph: {
      title: locale === 'it'
        ? "Print Solution — Stampanti per Packaging ed Etichette dal 2010"
        : "Print Solution — Digital Packaging & Label Printers | Italy",
      description: locale === 'it'
        ? "Stampanti digitali per scatole personalizzate, etichette a colori e packaging industriale. Box maker automatici, sistemi single-pass e inkjet. Demo gratuita a Sesto San Giovanni (MI)."
        : "Digital printers for custom boxes, colour labels and industrial packaging. Automatic box makers, single-pass and inkjet systems. Free demo near Milan, Italy.",
      images: ["/images/hero-boxes.webp"],
      type: "website",
      locale: locale === 'it' ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: locale === 'it' ? 'https://www.printsolutionsrl.it' : 'https://www.printsolutionsrl.it/en',
      languages: {
        'it': 'https://www.printsolutionsrl.it',
        'en': 'https://www.printsolutionsrl.it/en',
        'x-default': 'https://www.printsolutionsrl.it',
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
    streetAddress: "Via Pisa 200, int. 23",
    postalCode: "20099",
    addressLocality: "Sesto San Giovanni",
    addressRegion: "Lombardia",
    addressCountry: "IT",
  },
  telephone: "+39-02-49439417",
  sameAs: [
    "https://www.facebook.com/printsolutionsrl",
    "https://www.linkedin.com/company/print-solution-srl",
  ],
  knowsAbout: [
    "stampanti digitali per packaging",
    "box maker automatici",
    "stampa single-pass cartone ondulato",
    "etichette a colori inkjet",
    "stampanti per etichette in bobina",
    "packaging personalizzato on-demand",
    "stampa digitale fustellatura",
    "etichettatrici industriali",
    "GreenBox corrugated printer",
    "Anypack box maker",
    "Afinia label printer",
    "digital packaging Italy",
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
