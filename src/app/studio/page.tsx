import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import StudioPageClient from "./StudioPageClient";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "SLIIQQUE is a Lagos-based boutique software studio built by engineers who believe the best Web3 interfaces are the ones that feel effortless.",
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
