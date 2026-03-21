import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import StudioPageClient from "./StudioPageClient";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "SLIIQQUE is a Lagos-based boutique software studio built by engineers who believe the best Web3 interfaces are the ones that feel effortless.",
  openGraph: {
    title: "About the Studio | SLIIQQUE",
    description:
      "SLIIQQUE is a Lagos-based boutique software studio built by engineers who believe the best Web3 interfaces are the ones that feel effortless.",
    images: [
      {
        url: "https://sliiqque.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About the Studio | SLIIQQUE",
    description:
      "Lagos-based boutique software studio building high-performance Web3 and SaaS products.",
    images: ["https://sliiqque.studio/og-image.png"],
  },
};

export default function StudioPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <StudioPageClient />
      <Footer />
    </main>
  );
}
