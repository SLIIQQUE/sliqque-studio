import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ExpertiseVerticalClient from "@/components/sections/ExpertiseVerticalClient";

export const metadata: Metadata = {
  title: "DeFi Interface Development",
  description:
    "We engineer high-performance DeFi dashboards, staking interfaces, and liquidity UIs. Built with Wagmi, Viem, The Graph, and Next.js.",
  openGraph: {
    title: "DeFi Interface Development | SLIIQQUE",
    description:
      "We engineer high-performance DeFi dashboards, staking interfaces, and liquidity UIs. Built with Wagmi, Viem, The Graph, and Next.js.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE DeFi Interface Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeFi Interface Development | SLIIQQUE",
    description:
      "We engineer high-performance DeFi dashboards, staking interfaces, and liquidity UIs.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function DeFiPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <ExpertiseVerticalClient
        title="DeFi"
        subtitle="Engineering DeFi Interfaces That Users Actually Use"
        description="DeFi is complex by nature. The interfaces shouldn't be. We build dashboards, staking UIs, and liquidity interfaces that onboard users who've never touched crypto — and keep them coming back."
        stack={["Wagmi", "Viem", "The Graph", "React Query", "Next.js", "TypeScript"]}
        services={[
          "DeFi dashboard development",
          "Staking interface engineering",
          "Liquidity pool UIs",
          "Yield optimization tools",
          "Portfolio trackers",
          "Multi-chain aggregators",
        ]}
        cta="Building a DeFi product?"
      />
      <Footer />
    </main>
  );
}
