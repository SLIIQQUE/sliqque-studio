import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ExpertisePageClient from "./ExpertisePageClient";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Deep expertise in DeFi interface development, NFT platform engineering, and SaaS frontend architecture.",
  openGraph: {
    title: "Expertise | SLIIQQUE",
    description:
      "Deep expertise in DeFi interface development, NFT platform engineering, and SaaS frontend architecture.",
    images: [
      {
        url: "https://sliiqque.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Expertise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise | SLIIQQUE",
    description:
      "Deep expertise in DeFi interface development, NFT platform engineering, and SaaS frontend architecture.",
    images: ["https://sliiqque.studio/og-image.png"],
  },
};

export default function ExpertisePage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <ExpertisePageClient />
      <Footer />
    </main>
  );
}
