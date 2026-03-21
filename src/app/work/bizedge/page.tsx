import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "BizEdge — Multi-module HRMS Platform",
  description:
    "A case study on building a comprehensive HRMS platform for SMEs — 11 modules, 2,000+ businesses, payroll compliance, and mobile apps.",
  openGraph: {
    title: "BizEdge Case Study | SLIIQQUE",
    description:
      "A case study on building a comprehensive HRMS platform for SMEs — 11 modules, 2,000+ businesses, payroll compliance, and mobile apps.",
    images: [
      {
        url: "https://sliiqque.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "BizEdge Case Study — SLIIQQUE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizEdge Case Study | SLIIQQUE",
    description:
      "Building a comprehensive HRMS platform for SMEs — 11 modules, 2,000+ businesses, payroll compliance, and mobile apps.",
    images: ["https://sliiqque.studio/og-image.png"],
  },
};

export default function BizEdgePage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <CaseStudyClient />
      <Footer />
    </main>
  );
}
