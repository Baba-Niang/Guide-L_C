import type { NextConfig } from "next";

// Nom du dépôt GitHub (ex: "langage-c-guide"). Utilisé pour servir le site
// sous https://<utilisateur>.github.io/<repo>/ au lieu de la racine.
// Laissez vide ("") si votre dépôt s'appelle exactement "<utilisateur>.github.io".
const repoName = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // build statique -> dossier out/, compatible GitHub Pages
  basePath: repoName ? `/${repoName}` : "",
  assetPrefix: repoName ? `/${repoName}/` : "",
  images: {
    unoptimized: true, // l'optimisation d'images Next.js exige un serveur
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
