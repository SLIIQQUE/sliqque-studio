import { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import Marquee from "@/components/ui/Marquee";
import Hero from "@/components/sections/Hero";
import { PageSchema } from "@/components/PageSchema";

export const metadata: Metadata = {
  title: "SLIIQQUE | Websites, AI Agents & Workflow Automation Studio",
  description:
    "Boutique software studio in Lagos, Nigeria. Websites from $300, AI bots and agents from $600, workflow automation and SaaS platforms, shipped for founders worldwide.",
  alternates: {
    canonical: "https://sliiqque.space/",
  },
  openGraph: {
    title: "SLIIQQUE | Websites, AI Agents & Workflow Automation Studio",
    description:
      "We build high-performance websites, AI bots and agents, workflow automation, and SaaS platforms, from concept to deployment. Lagos, Nigeria, working worldwide.",
    url: "https://sliiqque.space/",
    images: [
      {
        url: "https://sliiqque.space/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE | Websites, AI Agents & Workflow Automation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SLIIQQUE | Websites, AI Agents & Workflow Automation Studio",
    description:
      "Boutique software studio building websites, AI bots and agents, and workflow automation for founders worldwide.",
    images: ["https://sliiqque.space/og-image.jpg"],
  },
};

const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection")
);
const SelectedWorkSection = dynamic(
  () => import("@/components/sections/SelectedWorkSection")
);
const StatsSection = dynamic(
  () => import("@/components/sections/StatsSection")
);
const StudioSection = dynamic(
  () => import("@/components/sections/StudioSection")
);
const EcosystemCallout = dynamic(
  () => import("@/components/sections/EcosystemCallout")
);
const InsightsSection = dynamic(
  () => import("@/components/sections/InsightsSection")
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection")
);

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen bg-background">
      <Navigation />
      <LightLeaks />
      <PageSchema path="/" />

      <div className="relative z-10">
        <Hero />
        <Marquee speed={40} className="py-0" />
        <ServicesSection />
        <SelectedWorkSection />
        <StatsSection />
        <StudioSection />
        <EcosystemCallout />
        <InsightsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
