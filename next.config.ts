import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/Guide-L_C";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
};

export default nextConfig;
