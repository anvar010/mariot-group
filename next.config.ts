import type { NextConfig } from "next";

// Next.js auto-loads .env in every environment — nothing extra needed here.
// A single .env file covers both local dev and production; see .env.example.

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Default 1MB is too small for the contact form's BOQ/layout attachment.
      bodySizeLimit: "10mb",
    },
  },
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
