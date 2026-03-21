import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ExpertiseVerticalClient from "@/components/sections/ExpertiseVerticalClient";

export const metadata: Metadata = {
  title: "SaaS Frontend Engineering",
  description:
    "High-performance React and Next.js interfaces for SaaS products — built for conversion and scale.",
  openGraph: {
    title: "SaaS Frontend Engineering | SLIIQQUE",
    description:
      "High-performance React and Next.js interfaces for SaaS products — built for conversion and scale.",
    images: [
      {
        url: "https://sliiqque.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE SaaS Frontend Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Frontend Engineering | SLIIQQUE",
    description:
      "High-performance React and Next.js interfaces for SaaS products — built for conversion and scale.",
    images: ["https://sliiqque.studio/og-image.png"],
  },
};

export default function SaaSPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <ExpertiseVerticalClient
        title="SaaS"
        subtitle="Frontend Engineering for SaaS Products Built to Scale"
        description="Your SaaS product needs a frontend that performs as well as your backend. We build React interfaces that handle complexity without sacrificing speed."
        stack={["React", "Next.js", "TypeScript", "React Query", "Tailwind CSS", "Framer Motion"]}
        services={[
          "Admin dashboards",
          "User-facing features",
          "Design system implementation",
          "Performance optimization",
          "Component libraries",
          "Onboarding flows",
        ]}
        cta="Building a SaaS product?"
      />
      <Footer />
    </main>
  );
}
