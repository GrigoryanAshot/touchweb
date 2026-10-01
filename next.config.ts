import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/", destination: "/hy", permanent: true },
      { source: "/portfolio", destination: "/hy/portfolio", permanent: true },
      { source: "/services/:slug", destination: "/hy/services/:slug", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 140, 256, 360, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
