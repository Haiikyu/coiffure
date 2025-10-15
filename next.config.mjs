/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: false,
  },
  // Disable ESLint during build if it causes issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during build if needed
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
