import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
