import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "MetaMask Integration in React",
  description:
    "A practical guide to connecting MetaMask and any Web3 wallet to your React application — covering hooks, state management, and error handling.",
  openGraph: {
    title: "MetaMask Integration in React | SLIIQQUE",
    description:
      "A practical guide to connecting MetaMask and any Web3 wallet to your React application — covering hooks, state management, and error handling.",
    images: [
      {
        url: "https://sliiqque.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "MetaMask Integration in React",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MetaMask Integration in React | SLIIQQUE",
    description:
      "A practical guide to connecting MetaMask and any Web3 wallet to your React application.",
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
