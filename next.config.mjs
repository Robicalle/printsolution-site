/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';
const nextConfig = {
  // Only use static export for GitHub Pages, not Vercel
  ...(isProd && !isVercel ? { output: 'export', basePath: '/printsolution-site', assetPrefix: '/printsolution-site/' } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
