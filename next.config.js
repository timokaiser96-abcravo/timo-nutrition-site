/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },

  experimental: {
    appDir: true,
    // Removed outputFileTracingRoot to avoid path issues on Vercel
  },

  // Use default distDir and output
};

module.exports = nextConfig;
