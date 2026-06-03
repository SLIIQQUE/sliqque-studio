import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Why AI Natives Are Choosing Boutique Studios Over Freelance Platforms",
  description:
    "Why AI-native founders are ditching Upwork and Fiverr for boutique software studios — and what that means for your next build.",
  openGraph: {
    title:
      "Why AI Natives Are Choosing Boutique Studios Over Freelance Platforms | SLIIQQUE",
    description:
      "Why AI-native founders are ditching Upwork and Fiverr for boutique software studios — and what that means for your next build.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "Why AI Natives Are Choosing Boutique Studios Over Freelance Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Why AI Natives Are Choosing Boutique Studios Over Freelance Platforms | SLIIQQUE",
    description:
      "Why AI-native founders are ditching Upwork and Fiverr for boutique software studios — and what that means for your next build.",
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
