import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import { PageSchema } from "@/components/PageSchema";
import ExpertiseVerticalClient from "@/components/sections/ExpertiseVerticalClient";

export const metadata: Metadata = {
  title: "FinTech & RegTech Systems Development",
  description:
    "Payment infrastructure, multi-API integration and fraud prevention platforms for Africa. Earlier work by our founder includes Lumia and ZINID.",
  openGraph: {
    url: "https://sliiqque.space/expertise/frontend-architecture/",
    title: "FinTech & RegTech Systems | Payment Infrastructure & Fraud Prevention | SLIIQQUE",
    description:
      "Payment infrastructure, multi-API integration, real-time transaction processing, and fraud prevention platforms. Earlier work by our founder includes Lumia and ZINID.",
    images: [
      {
        url: "https://sliiqque.space/images/lumia-screenshot.jpg",
        width: 1280,
        height: 800,
        alt: "Lumia: a FinTech payment platform, earlier work by SLIIQQUE's founder",
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
      "Payment infrastructure, multi-API integration, and fraud prevention platforms. Earlier work by our founder includes Lumia and ZINID.",
    images: ["https://sliiqque.space/images/lumia-screenshot.jpg"],
  },
};

export default function FrontendArchitecturePage() {
  return (
    <main id="main-content" className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <PageSchema path="/expertise/frontend-architecture/" />
      <ExpertiseVerticalClient
        title="FinTech & RegTech Systems"
        subtitle="Payment Infrastructure & Fraud Prevention Built for Africa"
        description="We build financial infrastructure that handles real transactions, integrates with multiple providers, and processes data in real-time. Our founder's earlier work includes Lumia, an electricity payment platform, and ZINID, a fraud prevention platform. If it involves payments, APIs, and compliance, we know the ground."
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
        relatedProjects={[
          {
            title: "Lumia",
            description: "Nigeria's digital electricity payment platform: 6 DisCos, thousands of monthly transactions",
            href: "/work/lumia",
            imageSrc: "/images/lumia-screenshot.jpg",
          },
          {
            title: "ZINID",
            description: "Africa's fraud prevention infrastructure: shared risk intelligence for the fintech ecosystem",
            href: "/work/zinid",
            imageSrc: "/images/zinid-screenshot.jpg",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
