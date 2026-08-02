import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photography is served from Unsplash. The search string is pinned to the
    // exact query built by photoSrc() in src/lib/images.ts — keep the two in sync.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-*",
        search: "?auto=format&fit=crop&w=1920&q=80",
      },
    ],
  },
};

export default nextConfig;
