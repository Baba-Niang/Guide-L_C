import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true" || !!process.env.GITHUB_REPOSITORY;
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "langage-c-guide-v4";

const nextConfig: NextConfig = {
  // Pas de "standalone" : on veut un export statique simple pour GitHub Pages.
  output: "export",
  // Sur GitHub Pages, le site est servi sous https://user.github.io/<repo>/
  // Donc basePath + assetPrefix doivent pointer vers /<repo>/.
  ...(isGithubPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
};

export default nextConfig;
