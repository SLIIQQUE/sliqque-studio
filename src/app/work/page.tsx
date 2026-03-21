import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies from SLIIQQUE — Web3 and SaaS products built with craft and precision.",
  openGraph: {
    title: "Work | SLIIQQUE",
    description:
      "Selected case studies from SLIIQQUE — Web3 and SaaS products built with craft and precision.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | SLIIQQUE",
    description:
      "Selected case studies from SLIIQQUE — Web3 and SaaS products built with craft and precision.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function WorkPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <WorkPageClient />
      <Footer />
    </main>
  );
}
