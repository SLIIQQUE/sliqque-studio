import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import { PageSchema } from "@/components/PageSchema";
import ExpertiseVerticalClient from "@/components/sections/ExpertiseVerticalClient";

export const metadata: Metadata = {
  title: "SaaS & Full-Stack Platform Engineering",
  description:
    "Full-stack React and Next.js platforms with CMS-backed admin panels, payments and mobile apps. We built Real Estate's CMS platform.",
  openGraph: {
    url: "https://sliiqque.space/expertise/saas/",
    title: "SaaS & Full-Stack Platform Engineering | SLIIQQUE",
    description:
    "Full-stack React/Next.js platforms with CMS-backed architectures, real-time data, and mobile apps. We built Real Estate.",
    images: [
      {
        url: "https://sliiqque.space/images/real-estate-screenshot.jpg",
        width: 1280,
        height: 800,
        alt: "Real Estate: a SaaS platform built by SLIIQQUE",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/expertise/saas/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS & Full-Stack Platform Engineering | SLIIQQUE",
    description:
      "Full-stack React/Next.js platforms. We built Real Estate's CMS platform.",
    images: ["https://sliiqque.space/images/real-estate-screenshot.jpg"],
  },
};

export default function SaaSPage() {
  return (
    <main id="main-content" className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <PageSchema path="/expertise/saas/" />
      <ExpertiseVerticalClient
        title="SaaS & Full-Stack Platforms"
        subtitle="Full-Stack React & Next.js Platforms Built to Scale"
        description="We build production platforms with CMS-backed admin panels, payment integrations, real-time data, and mobile apps. Real Estate's CMS-powered platform is a SLIIQQUE build. If it involves React, TypeScript, and data that needs to move, we can build it."
        stack={["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "React Query", "Tailwind CSS", "Framer Motion"]}
        services={[
          "CMS-backed platform architecture",
          "Admin dashboards & user-facing features",
          "Payment & API integrations",
          "Real-time data processing",
          "Mobile apps (iOS & Android)",
          "Performance optimization",
        ]}
        cta="Building a SaaS platform?"
        relatedProjects={[
          {
            title: "Real Estate",
            description: "CMS-powered property platform: searchable listings, agent profiles, enquiry capture",
            href: "/work/real-estate",
            imageSrc: "/images/real-estate-screenshot.jpg",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
