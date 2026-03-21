import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product builds, interface engineering, studio retainers, and technical audits. SLIIQQUE takes on 2–3 new projects per quarter.",
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
