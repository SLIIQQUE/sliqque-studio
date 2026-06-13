import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ExpertiseVerticalClient from "@/components/sections/ExpertiseVerticalClient";

export const metadata: Metadata = {
  title: "SaaS & Full-Stack Platform Engineering | SLIIQQUE",
  description:
    "Full-stack React and Next.js platforms with complex module architectures, payment integrations, real-time data processing, and mobile apps. We built BizEdge's 11-module HRMS serving 2,000+ businesses.",
  openGraph: {
    title: "SaaS & Full-Stack Platform Engineering | SLIIQQUE",
    description:
    "Full-stack React/Next.js platforms with complex module architectures, real-time data, and mobile apps. We built BizEdge's 11-module HRMS.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE SaaS & Full-Stack Platform Engineering",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/expertise/saas",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS & Full-Stack Platform Engineering | SLIIQQUE",
    description:
      "Full-stack React/Next.js platforms. We built BizEdge 11-module HRMS and Lumia payment platform.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function SaaSPage() {
  return (
    <main id="main-content" className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <ExpertiseVerticalClient
        title="SaaS & Full-Stack Platforms"
        subtitle="Full-Stack React & Next.js Platforms Built to Scale"
        description="We build production platforms with complex module architectures, payment integrations, real-time data, and mobile apps. BizEdge's 11-module HRMS suite and Lumia's electricity payment platform are the proof. If it involves React, TypeScript, and data that needs to move, we can build it."
        stack={["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "React Query", "Tailwind CSS", "Framer Motion"]}
        services={[
          "Multi-module platform architecture",
          "Admin dashboards & user-facing features",
          "Payment & API integrations",
          "Real-time data processing",
          "Mobile apps (iOS & Android)",
          "Performance optimization",
        ]}
        cta="Building a SaaS platform?"
        relatedProjects={[
          {
            title: "BizEdge",
            description: "11-module HRMS, Payroll & Productivity suite — 2,000+ businesses across Africa and Europe",
            href: "/work/bizedge",
            imageSrc: "/images/bizedge-screenshot.jpg",
          },
          {
            title: "Lumia",
            description: "Nigeria's digital electricity payment platform — 6 DisCos, thousands of monthly transactions",
            href: "/work/lumia",
            imageSrc: "/images/lumia-screenshot.jpg",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
