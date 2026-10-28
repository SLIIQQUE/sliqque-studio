"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "Beauty & Wellness",
  year: "2024",
  engagementType: "Earlier work, before SLIIQQUE",
  stack: ["Vite", "GSAP", "Framer Motion", "TypeScript"],
  context: `Mo Touch is a premium interactive portfolio and digital experience for a makeup artist. It replaces the static gallery format that dominates the beauty industry. The brief was simple: create something that feels as premium as the work itself. The brand needed a digital home that could showcase artistry through immersive, scroll-driven storytelling rather than a flat grid of images.

The makeup industry is saturated with portfolios that look identical. A masonry grid of before-and-after shots, minimal context, no sense of process or craft. Mo Touch was an opportunity to build something that communicated the artist's identity, aesthetic, and attention to detail before a single image loaded.`,
  problem: `Traditional beauty portfolios present work in isolation:

• Images carry no narrative. A visitor sees the result but not the artistry behind it
• No sense of the artist's identity, process, or aesthetic philosophy
• Mobile experience is an afterthought, even though most beauty discovery happens on Instagram and TikTok
• Static pages fail to capture the sensory, tactile nature of makeup artistry
• No differentiation from the hundreds of identical portfolios flooding the beauty space`,
};

export default function CaseStudyClient() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudy}
      title="Mo Touch"
      description="Premium interactive portfolio with immersive scroll-driven storytelling and touch-optimized interactions for a makeup artist."
      heroImage="/images/motouch-screenshot.jpg"
      heroAlt="Mo Touch: premium interactive makeup artist portfolio gallery"
      heroBgColor="#0a0a0a"
      externalUrl={{ url: "https://mo-touch.vercel.app/", label: "mo-touch.vercel.app" }}
      contact={null}
      useInteractiveTitle={true}
      earlierWork
      sections={[
        { label: "The Context", key: "context" },
        { label: "The Problem", key: "problem" },
      ]}
    />
  );
}
