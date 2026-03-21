import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies from SLIIQQUE — Web3 and SaaS products built with craft and precision.",
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
