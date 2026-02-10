import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Print Solution — Soluzioni Digitali per Stampa e Packaging",
    template: "%s | Print Solution",
  },
  description:
    "Distributore italiano di stampanti digitali per packaging, etichette e consumabili. Brand: Afinia Label, NeurALabel, GreenBox, Anypack, DTM Print.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Print Solution S.r.l.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
