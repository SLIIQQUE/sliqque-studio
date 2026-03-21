import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import InsightsPageClient from "./InsightsPageClient";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical articles, Web3 perspectives, and studio thinking from SLIIQQUE.",
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
