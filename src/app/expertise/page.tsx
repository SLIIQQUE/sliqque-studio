import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ExpertisePageClient from "./ExpertisePageClient";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Deep expertise in DeFi interface development, NFT platform engineering, and SaaS frontend architecture.",
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
