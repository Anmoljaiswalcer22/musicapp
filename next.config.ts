import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com']
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevent Vercel from failing on lint errors during build
  },
};

export default nextConfig;
