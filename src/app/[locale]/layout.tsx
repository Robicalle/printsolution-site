import { Inter } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import CmykCursor from "@/components/CmykCursor";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import CookieBanner from "@/components/CookieBanner";
import ChatWidget from "@/components/ChatWidget";
import BottomNavBar from "@/components/BottomNavBar";
import { CartProvider } from "@/lib/cart-context";
import CartSidebar from "@/components/CartSidebar";
import CartButton from "@/components/CartButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Print Solution S.r.l.",
  url: "https://www.printsolution.it",
  logo: "https://www.printsolution.it/logo.png",
  description: "Vendita e assistenza stampanti digitali per etichette e packaging",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Asti",
    addressRegion: "Piemonte",
    addressCountry: "IT",
  },
  telephone: "+39-0141-352540",
  email: "info@printsolution.it",
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Print Solution S.r.l.",
  url: "https://www.printsolution.it",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.printsolution.it/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} font-inter`}>
      <head>
        <link rel="preconnect" href="https://api.anthropic.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="alternate" hrefLang="it" href="https://www.printsolution.it" />
        <link rel="alternate" hrefLang="en" href="https://www.printsolution.it/en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.printsolution.it" />
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
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-cyan-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm">
            {locale === "it" ? "Salta al contenuto" : "Skip to content"}
          </a>
          <CartProvider>
            <CmykCursor />
            <Header />
            <main id="main-content" className="pb-28 lg:pb-0">{children}</main>
            <Footer />
            <MobileCTABar />
            <BackToTop />
            <ScrollReveal />
            <CookieBanner />
            <ChatWidget />
            <CartSidebar />
            <CartButton />
            <BottomNavBar />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
