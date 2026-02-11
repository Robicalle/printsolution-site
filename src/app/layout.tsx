import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CmykCursor from "@/components/CmykCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.printsolutionsrl.it"),
  title: {
    default: "Print Solution — Soluzioni Digitali per Stampa e Packaging",
    template: "%s | Print Solution",
  },
  description:
    "Distributore italiano di stampanti digitali per packaging, etichette e consumabili. Stampa digitale packaging, etichettatura industriale dal 2010. Sesto San Giovanni (MI).",
  keywords: [
    "stampa digitale packaging",
    "etichettatura industriale",
    "Print Solution",
    "stampante etichette",
    "packaging digitale",
    "stampa cartone ondulato",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Print Solution S.r.l.",
    images: [
      {
        url: "/images/hero-boxes.webp",
        width: 1200,
        height: 630,
        alt: "Print Solution — Soluzioni Digitali per Stampa e Packaging",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Print Solution S.r.l.",
  url: "https://www.printsolutionsrl.it",
  logo: "https://www.printsolutionsrl.it/logo.png",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Pisa 200, int. 23",
    addressLocality: "Sesto San Giovanni",
    addressRegion: "MI",
    postalCode: "20099",
    addressCountry: "IT",
  },
  telephone: "+39 02 3652 7093",
  email: "info@printsolutionsrl.it",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Print Solution S.r.l.",
  url: "https://www.printsolutionsrl.it",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.printsolutionsrl.it/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <CmykCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
