import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/studio/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https:; media-src 'self' https:; frame-src 'self' https:",
          },
        ],
      },
      {
        source: "/((?!studio).*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.sentry.io https://*.googletagmanager.com https://*.google-analytics.com https://connect.facebook.net https://*.clarity.ms https://api.pirsch.io https://app.legalblink.it https://challenges.cloudflare.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https: https://cdn.sanity.io https://*.facebook.com https://*.facebook.net",
              "font-src 'self' data:",
              "connect-src 'self' https: https://*.sentry.io https://*.google-analytics.com https://*.clarity.ms https://api.pirsch.io https://*.facebook.com https://challenges.cloudflare.com",
              "media-src 'self' https:",
              "frame-src 'self' https://www.google.com https://player.vimeo.com https://www.youtube.com https://youtube.com https://challenges.cloudflare.com",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // === OLD SITE REDIRECTS (printsolutionsrl.it → new site) ===
      
      // --- IT: Pages ---
      { source: '/newseventi', destination: '/news', permanent: true },
      { source: '/privacypolicy', destination: '/privacy', permanent: true },
      { source: '/search', destination: '/', permanent: true },
      { source: '/video', destination: '/', permanent: true },

      // --- IT: Category/folder pages ---
      { source: '/cartella-prodotti/promo-usato', destination: '/usato', permanent: true },
      { source: '/cartella-prodotti/applicatori-di-etichette', destination: '/soluzioni/etichette', permanent: true },
      { source: '/cartella-prodotti/stampanti-packaging', destination: '/soluzioni/packaging', permanent: true },
      { source: '/cartella-prodotti/sistemi-di-taglio-e-finitura', destination: '/soluzioni/etichette', permanent: true },
      { source: '/cartella-prodotti/stampanti-per-cd-dvd', destination: '/prodotti', permanent: true },
      { source: '/cartella-prodotti/stampanti-etichette', destination: '/soluzioni/etichette', permanent: true },
      { source: '/cartella-prodotti/:slug', destination: '/prodotti', permanent: true },
      { source: '/categoria/box-maker', destination: '/soluzioni/packaging', permanent: true },
      { source: '/categoria/packaging-printers', destination: '/soluzioni/packaging', permanent: true },
      { source: '/categoria/label-printers', destination: '/soluzioni/etichette', permanent: true },
      { source: '/categoria/book-edge-printers', destination: '/soluzioni/labbratura', permanent: true },
      { source: '/categoria/:slug', destination: '/prodotti', permanent: true },

      // --- IT: Old product pages that DON'T exist in new site ---
      { source: '/prodotti/anypack-ab2500', destination: '/prodotti/ab2500', permanent: true },
      { source: '/prodotti/dp-se-autoprinter', destination: '/prodotti', permanent: true },
      { source: '/prodotti/dp-se-dvd', destination: '/prodotti', permanent: true },
      { source: '/prodotti/dp-se-blu-ray', destination: '/prodotti', permanent: true },
      { source: '/prodotti/dp-4102-xrp-blu-ray', destination: '/prodotti', permanent: true },
      { source: '/prodotti/digital-print-cup', destination: '/prodotti', permanent: true },
      { source: '/prodotti/digital-print-cup-water-based', destination: '/prodotti', permanent: true },
      { source: '/prodotti/ns-multi', destination: '/prodotti', permanent: true },
      { source: '/prodotti/greenbox', destination: '/prodotti/greenbox-evo', permanent: true },
      { source: '/prodotti/edm-650', destination: '/prodotti/edm-650x', permanent: true },

      // --- IT: Old product pages missing ---
      { source: '/prodotti/easybox', destination: '/prodotti', permanent: true },
      // --- IT: Old shop pages with same slug (already exist, just safety) ---
      // /shop/consumabili-greenbox, /shop/consumabili-cx1000, etc. → same slug, no redirect needed
      // /shop/consumabil-lt5c (old typo) → correct
      { source: '/shop/consumabil-lt5c', destination: '/shop/consumabili-lt5c', permanent: true },

      // --- IT: Blog/news posts ---
      { source: '/post/:slug', destination: '/blog', permanent: true },

      // --- IT: Missing pages ---
      { source: '/assistenza', destination: '/contatti', permanent: true },

      // --- EN: Pages ---
      { source: '/en/home-en', destination: '/en', permanent: true },
      { source: '/en/newseventi', destination: '/en/news', permanent: true },
      { source: '/en/contacts', destination: '/en/contatti', permanent: true },
      { source: '/en/about', destination: '/en/chi-siamo', permanent: true },
      { source: '/en/privacy-policy', destination: '/en/privacy', permanent: true },
      { source: '/en/privacypolicy', destination: '/en/privacy', permanent: true },
      { source: '/en/service', destination: '/en/contatti', permanent: true },
      { source: '/en/terms-an-conditions', destination: '/en/condizioni-di-vendita', permanent: true },
      { source: '/en/video', destination: '/en', permanent: true },
      { source: '/en/search', destination: '/en', permanent: true },

      // --- EN: Category/folder pages ---
      { source: '/en/products/promo-used', destination: '/en/usato', permanent: true },
      { source: '/en/products/packaging-cardboard-printers', destination: '/en/soluzioni/packaging', permanent: true },
      { source: '/en/products/cutting-and-finishing-systems', destination: '/en/soluzioni/etichette', permanent: true },
      { source: '/en/products/cd-dvd-printers', destination: '/en/prodotti', permanent: true },
      { source: '/en/products/label-printers', destination: '/en/soluzioni/etichette', permanent: true },
      { source: '/en/products/label-applicators', destination: '/en/soluzioni/etichette', permanent: true },
      { source: '/en/products/:slug', destination: '/en/prodotti', permanent: true },
      { source: '/en/categoria/:slug', destination: '/en/prodotti', permanent: true },
      { source: '/en/cartella-prodotti/:slug', destination: '/en/prodotti', permanent: true },

      // --- EN: Old product pages that DON'T exist in new site ---
      { source: '/en/prodotti/anypack-ab2500', destination: '/en/prodotti/ab2500', permanent: true },
      { source: '/en/prodotti/anypack-ab2500f', destination: '/en/prodotti/ab2500', permanent: true },
      { source: '/en/prodotti/dp-se-autoprinter', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/dp-se-dvd', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/dp-se-blu-ray', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/dp-4102-xrp-blu-ray', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/dp-4102-xrp-disc-publisher', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/digital-print-cup', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/digital-print-cup-water-based', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/ns-multi', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/greenbox', destination: '/en/prodotti/greenbox-evo', permanent: true },
      { source: '/en/prodotti/edm-650', destination: '/en/prodotti/edm-650x', permanent: true },
      { source: '/en/prodotti/imark3550', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/dtm-lx4000e-2', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/lt5', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/ap-380e', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/ap550e', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/easybox', destination: '/en/prodotti', permanent: true },
      // --- EN: Old shop pages ---
      { source: '/en/shop/consumabili-any-002', destination: '/en/shop', permanent: true },
      { source: '/en/shop/lx2000-consumables', destination: '/en/shop', permanent: true },
      { source: '/en/shop/cx1000-consumables', destination: '/en/shop', permanent: true },
      { source: '/en/shop/consumabili-ns-multi-lg', destination: '/en/shop', permanent: true },
      { source: '/en/shop/consumabili-l901', destination: '/en/shop', permanent: true },
      { source: '/en/shop/consumabili-i700', destination: '/en/shop', permanent: true },
      { source: '/en/shop/consumabili-vp700', destination: '/en/shop', permanent: true },
      { source: '/en/shop/consumabili-printbox42', destination: '/en/shop', permanent: true },

      // --- EN: Shop old typo ---
      { source: '/en/shop/consumabil-lt5c', destination: '/en/shop/consumabili-lt5c', permanent: true },

      // --- EN: Blog/news posts ---
      { source: '/en/post/:slug', destination: '/en/blog', permanent: true },

      // --- Brand pages (removed) ---
      { source: '/brand/:slug', destination: '/prodotti', permanent: true },
      { source: '/en/brand/:slug', destination: '/en/prodotti', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
