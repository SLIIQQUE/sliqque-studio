import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ExpertiseVerticalClient from "@/components/sections/ExpertiseVerticalClient";

export const metadata: Metadata = {
  title: "NFT Platform Development",
  description:
    "We build NFT minting platforms, marketplace UIs, and collection managers. Built for creators who want control and collectors who want simplicity.",
};

export default function NFTPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <ExpertiseVerticalClient
        title="NFT"
        subtitle="Building NFT Platforms That Creators and Collectors Trust"
        description="The NFT space is evolving beyond speculation. We build platforms that serve real use cases — from artist minting tools to community collection managers."
        stack={["Solidity", "IPFS", "React", "Next.js", "ERC-721", "ERC-1155"]}
        services={[
          "NFT minting platforms",
          "Marketplace UIs",
          "Collection managers",
          "Auction systems",
          "Royalty tracking",
          "Whitelist mechanics",
        ]}
        cta="Building an NFT product?"
      />
      <Footer />
    </main>
  );
}
