import type { Metadata } from "next";
import ContattiClient from "./ContattiClient";
import { getLocale } from "next-intl/server";
import { getSiteSettings } from "@/sanity/lib/fetchers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === 'it' ? "Contatti" : "Contact Us",
    description: locale === 'it'
      ? "Contatta Print Solution: richiedi informazioni, Consulenza gratuitao visita la sala demo a Sesto San Giovanni (MI). Tel. +39 02 4943 9417."
      : "Contact Print Solution: request information, Free consultationor visit our demo room in Sesto San Giovanni (MI). Tel. +39 02 4943 9417.",
    keywords: locale === 'it'
      ? ["contatti Print Solution", "demo stampante packaging", "sala demo stampa digitale", "Sesto San Giovanni"]
      : ["contact Print Solution", "packaging printer demo", "digital printing demo room", "Sesto San Giovanni"],
    openGraph: {
      title: locale === 'it' ? "Contatti | Print Solution" : "Contact Us | Print Solution",
      description: locale === 'it'
        ? "Contatta Print Solution: richiedi informazioni, Consulenza gratuitao visita la sala demo a Sesto San Giovanni (MI)."
        : "Contact Print Solution: request information, Free consultationor visit our demo room in Sesto San Giovanni (MI).",
      images: ["/images/hero-boxes.webp"],
      type: "website",
      locale: locale === 'it' ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `https://website-theta-one-59.vercel.app/${locale}/contatti`,
      languages: {
        'it': 'https://website-theta-one-59.vercel.app/it/contatti',
        'en': 'https://website-theta-one-59.vercel.app/en/contatti',
      },
    },
  };
}

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contatti - Print Solution S.r.l.",
  url: "https://www.printsolutionsrl.it/contatti",
  mainEntity: {
    "@type": "Organization",
    name: "Print Solution S.r.l.",
    telephone: "+39-0141-352540",
    email: "info@printsolutionsrl.it",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Asti",
      addressRegion: "Piemonte",
      addressCountry: "IT",
    },
  },
};

export default async function ContattiPage() {
  const locale = await getLocale();
  const settings = await getSiteSettings().catch(() => null);

  const dynamicJsonLd = settings
    ? {
        ...contactPageJsonLd,
        mainEntity: {
          ...contactPageJsonLd.mainEntity,
          telephone: settings.contact?.phone ? `+39-${settings.contact.phone.replace(/\s/g, "-")}` : contactPageJsonLd.mainEntity.telephone,
          email: settings.contact?.email || contactPageJsonLd.mainEntity.email,
        },
      }
    : contactPageJsonLd;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicJsonLd) }}
      />
      <ContattiClient />
    </>
  );
}
