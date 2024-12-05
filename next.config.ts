import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    async headers() {
      return [
        {
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,DELETE,PATCH,POST,PUT",
            },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
            {
              key: "X-Frame-Options", // Add this line
              value: "ALLOW-FROM https://docs.google.com", // Replace with your domain
            },
          ],
        },
      ];
    },

  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

export default nextConfig;
