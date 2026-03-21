import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Why We Switched to Viem",
  description:
    "A practical look at migrating our entire Web3 stack from Web3.js to Viem — the DX improvements, bundle size wins, and whether we recommend it.",
  openGraph: {
    title: "Why We Switched to Viem | SLIIQQUE",
    description:
      "A practical look at migrating our entire Web3 stack from Web3.js to Viem — the DX improvements, bundle size wins, and whether we recommend it.",
    images: [
      {
        url: "https://sliiqque.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Why We Switched to Viem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why We Switched to Viem | SLIIQQUE",
    description:
      "A practical look at migrating our entire Web3 stack from Web3.js to Viem.",
    images: ["https://sliiqque.studio/og-image.png"],
  },
};

export default function ArticlePage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <ArticleClient />
      <Footer />
    </main>
  );
}
