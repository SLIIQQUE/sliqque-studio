import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import { PageSchema } from "@/components/PageSchema";
import ExpertiseVerticalClient from "@/components/sections/ExpertiseVerticalClient";

export const metadata: Metadata = {
  title: "FinTech & RegTech Systems Development",
  description:
    "Payment infrastructure, multi-API integration and fraud prevention platforms for Africa.",
  openGraph: {
    url: "https://sliiqque.space/expertise/frontend-architecture/",
    title: "FinTech & RegTech Systems | Payment Infrastructure & Fraud Prevention | SLIIQQUE",
    description:
      "Payment infrastructure, multi-API integration, real-time transaction processing, and fraud prevention platforms.",
    images: [
      {
        url: "https://sliiqque.space/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE FinTech and RegTech systems development",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/expertise/frontend-architecture/",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech & RegTech Systems | Payment Infrastructure & Fraud Prevention | SLIIQQUE",
    description:
      "Payment infrastructure, multi-API integration, and fraud prevention platforms.",
    images: ["https://sliiqque.space/og-image.jpg"],
  },
};

export default function FrontendArchitecturePage() {
  return (
    <main id="main-content" className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <PageSchema path="/expertise/frontend-architecture/" meta={metadata} />
      <ExpertiseVerticalClient
        title="FinTech & RegTech Systems"
        subtitle="Payment Infrastructure & Fraud Prevention Built for Africa"
        description="We build payment and compliance-heavy systems: integration with multiple providers, real-time processing and fraud checks. If it involves payments, APIs, and compliance, talk to us about scope."
        stack={["React", "TypeScript", "Node.js", "Payment Gateways", "REST APIs", "Fraud Detection"]}
        services={[
          "Multi-provider API integration",
          "Real-time transaction processing",
          "Payment gateway integration",
          "Fraud detection & risk scoring",
          "AML compliance systems",
          "Shared intelligence networks",
        ]}
        cta="Building a FinTech or RegTech product?"
        relatedProjects={[]}
      />
      <Footer />
    </main>
  );
}
