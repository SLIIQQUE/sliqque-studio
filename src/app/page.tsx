import dynamic from "next/dynamic";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import Marquee from "@/components/ui/Marquee";
import Hero from "@/components/sections/Hero";

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

      <div className="relative z-10">
        <Hero />
        <Marquee speed={40} className="py-0" />
        <ServicesSection />
        <SelectedWorkSection />
        <StatsSection />
        <StudioSection />
        <InsightsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
