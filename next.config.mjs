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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.sentry.io",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https: https://cdn.sanity.io",
              "font-src 'self' data:",
              "connect-src 'self' https: https://*.sentry.io",
              "media-src 'self' https:",
              "frame-src 'self' https://www.google.com https://player.vimeo.com https://www.youtube.com https://youtube.com",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // === OLD SITE REDIRECTS (printsolutionsrl.it) ===
      
      // Category pages → solution pages
      { source: '/categoria/box-maker', destination: '/soluzioni/packaging', permanent: true },
      { source: '/categoria/packaging-printers', destination: '/soluzioni/packaging', permanent: true },
      { source: '/categoria/label-printers', destination: '/soluzioni/etichette', permanent: true },
      { source: '/categoria/book-edge-printers', destination: '/soluzioni/labbratura', permanent: true },
      { source: '/categoria/:slug', destination: '/soluzioni/packaging', permanent: true },
      
      // Old product listing pages
      { source: '/products/packaging-cardboard-printers', destination: '/soluzioni/packaging', permanent: true },
      { source: '/products/cutting-and-finishing-systems', destination: '/soluzioni/etichette', permanent: true },
      { source: '/products/cd-dvd-printers', destination: '/prodotti', permanent: true },
      { source: '/products/promo-used', destination: '/promozioni', permanent: true },
      { source: '/products/:slug', destination: '/prodotti', permanent: true },
      
      // Old product pages that exist with same slug (no redirect needed, just safety)
      // greenbox-evo, any-002, etc. → same slug, no redirect
      
      // Old product pages that DON'T exist in new site → redirect to products listing
      { source: '/prodotti/dp-se-autoprinter', destination: '/prodotti', permanent: true },
      { source: '/prodotti/dp-se-dvd', destination: '/prodotti', permanent: true },
      { source: '/prodotti/dp-se-blu-ray', destination: '/prodotti', permanent: true },
      { source: '/prodotti/dp-4102-xrp-blu-ray', destination: '/prodotti', permanent: true },
      { source: '/prodotti/digital-print-cup', destination: '/prodotti', permanent: true },
      { source: '/prodotti/digital-print-cup-water-based', destination: '/prodotti', permanent: true },
      { source: '/prodotti/ns-multi', destination: '/prodotti', permanent: true },
      { source: '/prodotti/greenbox', destination: '/prodotti/greenbox-evo', permanent: true },
      
      // Old English routes
      { source: '/en/home-en', destination: '/en', permanent: true },
      { source: '/en/video', destination: '/en', permanent: true },
      { source: '/en/products/:slug', destination: '/en/prodotti', permanent: true },
      { source: '/en/categoria/:slug', destination: '/en/soluzioni/packaging', permanent: true },
      { source: '/en/prodotti/dp-se-autoprinter', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/dp-se-dvd', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/dp-se-blu-ray', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/dp-4102-xrp-blu-ray', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/digital-print-cup', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/digital-print-cup-water-based', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/ns-multi', destination: '/en/prodotti', permanent: true },
      { source: '/en/prodotti/greenbox', destination: '/en/prodotti/greenbox-evo', permanent: true },
      
      // Old misc pages
      { source: '/video', destination: '/', permanent: true },
      { source: '/post/:slug', destination: '/blog', permanent: true },
      { source: '/en/post/:slug', destination: '/en/blog', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
