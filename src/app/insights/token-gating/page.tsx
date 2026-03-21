import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Building a Token-Gated Interface with Wagmi",
  description:
    "Step-by-step guide to implementing token-gated content in your Next.js application using Wagmi — with useTokenGate hook and TokenGate component patterns.",
  openGraph: {
    title: "Building a Token-Gated Interface with Wagmi | SLIIQQUE",
    description:
      "Step-by-step guide to implementing token-gated content in your Next.js application using Wagmi.",
    images: [
      {
        url: "https://sliiqque.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Building a Token-Gated Interface with Wagmi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building a Token-Gated Interface with Wagmi | SLIIQQUE",
    description:
      "Step-by-step guide to implementing token-gated content in your Next.js application using Wagmi.",
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
