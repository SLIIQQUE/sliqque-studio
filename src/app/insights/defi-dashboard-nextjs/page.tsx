import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "How to Build a DeFi Dashboard with Next.js 14",
  description:
    "A complete guide to building a real-time DeFi dashboard using Next.js 14 App Router, The Graph, and Wagmi. Includes code examples and project structure.",
  openGraph: {
    title: "How to Build a DeFi Dashboard with Next.js 14 | SLIIQQUE",
    description:
      "A complete guide to building a real-time DeFi dashboard using Next.js 14 App Router, The Graph, and Wagmi.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Build a DeFi Dashboard with Next.js 14",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a DeFi Dashboard with Next.js 14 | SLIIQQUE",
    description:
      "A complete guide to building a real-time DeFi dashboard using Next.js 14 App Router, The Graph, and Wagmi.",
    images: ["https://sliiqque.space/og-image.png"],
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
