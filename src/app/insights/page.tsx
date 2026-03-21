import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import InsightsPageClient from "./InsightsPageClient";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical articles, Web3 perspectives, and studio thinking from SLIIQQUE.",
  openGraph: {
    title: "Insights | SLIIQQUE",
    description:
      "Technical articles, Web3 perspectives, and studio thinking from SLIIQQUE.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | SLIIQQUE",
    description:
      "Technical articles, Web3 perspectives, and studio thinking from SLIIQQUE.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function InsightsPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <InsightsPageClient />
      <Footer />
    </main>
  );
}
