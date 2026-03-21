import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Lumia — Electricity Payment Platform",
  description:
    "A case study on building Nigeria's electricity payment platform — prepaid/postpaid meters, multi-DisCo support, and instant token delivery.",
  openGraph: {
    title: "Lumia Case Study | SLIIQQUE",
    description:
      "A case study on building Nigeria's electricity payment platform — prepaid/postpaid meters, multi-DisCo support, and instant token delivery.",
    images: [
      {
        url: "https://sliiqque.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumia Case Study — SLIIQQUE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumia Case Study | SLIIQQUE",
    description:
      "Building Nigeria's electricity payment platform — prepaid/postpaid meters, multi-DisCo support, and instant token delivery.",
    images: ["https://sliiqque.studio/og-image.png"],
  },
};

export default function LumiaPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <CaseStudyClient />
      <Footer />
    </main>
  );
}
