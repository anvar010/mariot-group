import type { NextConfig } from "next";
import { config as loadEnv } from "dotenv";

// Next.js auto-loads .env.local in every environment, so local dev needs no
// extra step. It has no built-in notion of .env.live, so that's loaded here
// explicitly for production — a no-op if the platform already injects these
// vars directly (dotenv never overwrites an existing process.env value).
if (process.env.NODE_ENV === "production") {
  loadEnv({ path: ".env.live" });
}

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
