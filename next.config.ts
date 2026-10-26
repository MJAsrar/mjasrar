import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The portfolio lives at portfolio.mjasrar.site (see proxy.ts). Old links to
      // mjasrar.site/portfolio move there for good. Only the main domain is
      // matched, so localhost:3000/portfolio still works in development.
      {
        source: "/portfolio/:path*",
        has: [{ type: "host", value: "(www\\.)?mjasrar\\.site" }],
        destination: "https://portfolio.mjasrar.site/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
