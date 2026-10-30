import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import { PageSchema } from "@/components/PageSchema";
import ExpertiseVerticalClient from "@/components/sections/ExpertiseVerticalClient";

export const metadata: Metadata = {
  title: "AI Agents & Workflow Automation Development",
  description:
    "AI bots for WhatsApp and Telegram, website AI agents for support and lead qualification, workflow automation, and interactive frontends.",
  openGraph: {
    url: "https://sliiqque.space/expertise/design-systems/",
    title: "AI Agents & Automation | Bots, Workflow Automation & Interactive Frontends | SLIIQQUE",
    description:
      "AI bots for WhatsApp/Telegram, website AI agents, workflow automation, and interactive frontends with GSAP and Framer Motion.",
    images: [
      {
        url: "https://sliiqque.space/images/motouch-screenshot.jpg",
        width: 1280,
        height: 800,
        alt: "Mo Touch: an interactive frontend, earlier work by SLIIQQUE's founder",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/expertise/design-systems/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents & Automation | Bots, Workflow Automation & Interactive Frontends | SLIIQQUE",
    description:
      "AI bots, website agents, workflow automation, and interactive frontends from SLIIQQUE.",
    images: ["https://sliiqque.space/images/motouch-screenshot.jpg"],
  },
};

export default function DesignSystemsPage() {
  return (
    <main id="main-content" className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <PageSchema path="/expertise/design-systems/" meta={metadata} />
      <ExpertiseVerticalClient
        title="AI Agents & Automation"
        subtitle="Bots, Automation, and Interactive Experiences That Work for You"
        description="AI bots for WhatsApp and Telegram that handle customer support, lead qualification, and booking. AI agents embedded directly into websites that engage visitors in natural conversation. Workflow automation that connects your website, bots, and backend into a single operation. And interactive frontends with scroll-driven animations and touch interactions, like Mo Touch, an earlier portfolio by our founder built with GSAP and Framer Motion."
        stack={["Gemini API", "Bot APIs", "GSAP", "Framer Motion", "TypeScript", "Node.js"]}
        services={[
          "WhatsApp & Telegram bot development",
          "Website AI agent integration",
          "Workflow automation systems",
          "Scroll-driven interactive frontends",
          "Touch-optimized experiences",
          "API & backend integration",
        ]}
        cta="Need AI agents or automation?"
        relatedProjects={[
          {
            title: "Mo Touch",
            description: "Premium interactive portfolio with scroll-driven animations and touch-optimized interactions",
            href: "/work/mo-touch",
            imageSrc: "/images/motouch-screenshot.jpg",
          },
          {
            title: "Real Estate",
            description: "CMS-powered property platform with automated content workflows and no-redeploy publishing",
            href: "/work/real-estate",
            imageSrc: "/images/real-estate-screenshot.jpg",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
