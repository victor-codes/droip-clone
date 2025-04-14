import type { NextConfig } from "next";

// todo: check for eslint errors
const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [new URL("https://droip.com/wp-content/uploads/**")],
  },
};

export default nextConfig;
