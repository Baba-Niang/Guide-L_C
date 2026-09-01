import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const githubRepo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const publicBase = process.env.GITHUB_ACTIONS === "true" && githubRepo ? `/${githubRepo}` : "";

export const metadata: Metadata = {
  title: "Langage C — Guide Interactif",
  description:
    "Apprends le C de zéro, étape par étape, avec des schémas animés, des quiz et des mini-défis.",
  keywords: ["Langage C", "Apprentissage C", "Pointeurs", "Variables", "Mémoire", "Programmation"],
  authors: [{ name: "Baba Niang" }],
  icons: { icon: `${publicBase}/logo-c.svg` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
