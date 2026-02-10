/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/printsolution-site' : '',
  assetPrefix: isProd ? '/printsolution-site/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
