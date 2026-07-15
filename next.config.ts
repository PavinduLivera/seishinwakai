import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.12', '192.168.1.10', '192.168.1.22'], 
  images: {
    domains: ['images.unsplash.com', 'cdn-icons-png.flaticon.com'],
  },
};

export default nextConfig;
