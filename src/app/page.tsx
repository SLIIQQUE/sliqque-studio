"use client";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import Marquee, { ProjectTypeMarquee } from "@/components/ui/Marquee";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";
import StatsSection from "@/components/sections/StatsSection";
import StudioSection from "@/components/sections/StudioSection";
import InsightsSection from "@/components/sections/InsightsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <LightLeaks />

      <div className="relative z-10">
        <Hero />
        <Marquee speed={40} className="py-0" />
        <ServicesSection />
        <SelectedWorkSection />
        <StatsSection />
        <StudioSection />
        {/* <ProjectTypeMarquee /> */}
        <InsightsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
