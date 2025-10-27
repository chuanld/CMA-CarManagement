import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverComponentsHmrCache: false, // Disable RSC HMR cache
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swebmtbllgqpqqulwjvj.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'sflhbodizwysfnrhmtby.supabase.co', // Added for V2
      },
      {
        protocol: 'https',
        hostname: 'vuuuoaecbivjtnstczol.supabase.co', // Added for V3
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
    // domains: ['swebmtbllgqpqqulwjvj.supabase.co', 'meuqyauxtxadqcaftrwl.supabase.co', 'vuuuoaecbivjtnstczol.supabase.co','img.clerk.com'],
    qualities: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },


  async headers() {

    return [
      {
        source: '/embed',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://56672557-f635-4294-90a6-4dd646f5f93a.created.app",
          },
        ],
      },
      {
        source: '/another-source',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://56672557-f635-4294-90a6-4dd646f5f93a.created.app', // Example of a new header
          },
        ],
      },
    ];
  }
};

export default nextConfig;
