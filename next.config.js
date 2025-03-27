/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'vercel.app'],
      bodySizeLimit: '2mb'
    }
  },
};

module.exports = nextConfig; 