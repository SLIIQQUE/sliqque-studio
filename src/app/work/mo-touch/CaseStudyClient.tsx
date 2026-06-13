"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "Beauty & Wellness",
  year: "2024",
  engagementType: "Product Build",
  stack: ["Vite", "GSAP", "Framer Motion", "TypeScript"],
  context: `Mo Touch is a premium interactive portfolio and digital experience for a makeup artist. It replaces the static gallery format that dominates the beauty industry. The brief was simple: create something that feels as premium as the work itself. The brand needed a digital home that could showcase artistry through immersive, scroll-driven storytelling rather than a flat grid of images.

The makeup industry is saturated with portfolios that look identical. A masonry grid of before-and-after shots, minimal context, no sense of process or craft. Mo Touch was an opportunity to build something that communicated the artist's identity, aesthetic, and attention to detail before a single image loaded.`,
  problem: `Traditional beauty portfolios present work in isolation:

• Images carry no narrative. A visitor sees the result but not the artistry behind it
• No sense of the artist's identity, process, or aesthetic philosophy
• Mobile experience is an afterthought, even though most beauty discovery happens on Instagram and TikTok
• Static pages fail to capture the sensory, tactile nature of makeup artistry
• No differentiation from the hundreds of identical portfolios flooding the beauty space`,
  approach: `We treated this as a digital art installation, not a website. Every scroll interaction, every page transition, every hover state was designed to communicate the same precision and intentionality that defines the makeup work itself.

Key decisions:
• Scroll-driven storytelling with GSAP ScrollTrigger. Each section unfolds like a page turn in a fashion editorial
• Touch-optimized interactions throughout, including swipe gestures, pinch-to-zoom, and smooth momentum scrolling
• Full-screen immersive image presentation with cinematic letterboxing
• Dramatic typography paired with a restrained, dark aesthetic so the work always takes center stage
• Character-by-character title animation that mirrors the meticulous layering of makeup application`,
  whatWeBuilt: `We built a fully immersive, scroll-driven digital portfolio:

1. Hero: Full-viewport intro with animated title reveal and ambient motion
2. Gallery: Immersive scroll-driven image sequences with cinematic aspect ratios
3. Services Section: Animated feature reveals synced to scroll position
4. About Section: Artist bio with portrait imagery and brand story
5. Contact: Minimal, functional booking or inquiry form
6. Touch Interactions: Swipe between images, momentum scrolling, smooth transitions
7. Mobile-First Design: Every interaction refined for touch, not just hover states`,
  results: `• A digital portfolio that stands apart from every other beauty portfolio in the space
• Smooth 60fps scroll animations across mobile and desktop
• Touch-optimized interactions that feel native to the beauty discovery experience
• Portfolio deployed on Vercel with global edge caching for instant load times
• Built as a static site for maximum performance and SEO discoverability`,
  learnings: `Motion should serve narrative, not distract from it. In a portfolio about visual artistry, every animation had to feel intentional, like a deliberate brush stroke rather than a decorative flourish. We stripped away anything that didn't support the work.

Touch interactions require different affordances than hover. What works with a mouse pointer fails on a fingertip. We rebuilt the gallery's navigation entirely for swipe, with larger hit targets, momentum-based scrolling, and visual feedback that confirms touch registration.`,
};

export default function CaseStudyClient() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudy}
      title="Mo Touch"
      description="Premium interactive portfolio with immersive scroll-driven storytelling and touch-optimized interactions for a makeup artist."
      heroImage="/images/motouch-screenshot.jpg"
      heroAlt="Mo Touch — premium interactive makeup artist portfolio gallery"
      heroBgColor="#0a0a0a"
      externalUrl={{ url: "https://mo-touch.vercel.app/", label: "mo-touch.vercel.app" }}
      contact={null}
      useInteractiveTitle={true}
      sections={[
        { label: "The Context", key: "context" },
        { label: "The Problem", key: "problem" },
        { label: "Our Approach", key: "approach" },
        { label: "What We Built", key: "whatWeBuilt" },
      ]}
    />
  );
}
