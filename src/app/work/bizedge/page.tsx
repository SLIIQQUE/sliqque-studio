import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "BizEdge — Multi-module HRMS Platform",
  description:
    "A case study on building a comprehensive HRMS platform for SMEs — 9+ modules from recruitment to payroll.",
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
