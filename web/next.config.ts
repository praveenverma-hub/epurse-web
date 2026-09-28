import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["192.168.1.6", "127.0.0.1"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
