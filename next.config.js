/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimise images — add external domains here if needed in future
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Allow cleaner imports
  experimental: {
    typedRoutes: false,
  },
};

module.exports = nextConfig;
