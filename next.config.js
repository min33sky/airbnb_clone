/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key: process.env.MAPBOX_KEY,
  },
};

module.exports = nextConfig;
