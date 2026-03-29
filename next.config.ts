import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      domains: ['miro.medium.com']
  },
  env: {
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString().split('T')[0],
  }
};

export default nextConfig;
