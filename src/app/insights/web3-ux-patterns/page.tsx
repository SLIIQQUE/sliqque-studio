import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Web3 UX Patterns That Work",
  description:
    "After building dozens of dApps, these are the interface patterns that consistently improve onboarding and reduce abandonment.",
  openGraph: {
    title: "Web3 UX Patterns That Work | SLIIQQUE",
    description:
      "After building dozens of dApps, these are the interface patterns that consistently improve onboarding and reduce abandonment.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web3 UX Patterns That Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3 UX Patterns That Work | SLIIQQUE",
    description:
      "After building dozens of dApps, these are the interface patterns that consistently improve onboarding.",
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
