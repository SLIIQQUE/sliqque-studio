import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, product builds, interface engineering, studio retainers, and technical audits. SLIIQQUE takes on 2–3 new projects per quarter.",
  openGraph: {
    title: "Services | SLIIQQUE",
    description:
      "Website design, product builds, interface engineering, studio retainers, and technical audits. SLIIQQUE takes on 2–3 new projects per quarter.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | SLIIQQUE",
    description:
      "Website design, product builds, interface engineering, studio retainers, and technical audits.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <ServicesPageClient />
      <Footer />
    </main>
  );
}
