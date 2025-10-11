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
      }]
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
