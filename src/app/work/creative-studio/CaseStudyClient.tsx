"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "Creative Production (In-House)",
  year: "2026",
  engagementType: "Platform Build",
  stack: ["Next.js 16", "React 19", "TypeScript", "Resend", "Vercel Analytics"],
  context: `Creative Studio is the creative-production vertical of the SLIIQQUE ecosystem: AI commercials, AI UGC and digital humans, AI product and fashion photography, and brand launch campaigns, run on its own platform at studio.sliiqque.space, separate from this site's software and automation work.

AI is how the studio produces, not what it sells. The brief we set ourselves: build a platform that presents five creative service lines with transparent, dual-currency pricing, and prove range across categories with real finished work, without a single client logo to lean on yet.`,
  problem: `Launching a new creative-production vertical with no existing client roster meant solving a few problems at once:

• Service lines (AI commercials, digital humans, photography, fashion imagery, campaigns) are unfamiliar enough that each page needs to explain what it is before it sells it
• Nigerian and international buyers think in different currencies, so a single USD price list excludes half the market
• Portfolio-less launches usually fall back on vague claims; we needed to show finished, specific work instead
• Age-restricted categories (spirits, alcohol-adjacent concept work) needed real gating, not a disclaimer
• The studio needed to read as a credible sister brand to the main SLIIQQUE site, not a disconnected side project`,
  approach: `We treated the studio like any other product build: a content model first, then pages generated from it.

• Five service pages (AI Commercials, AI UGC & Digital Humans, AI Photography, AI Fashion Imagery, Brand Launches & Campaigns), each with a direct-answer opening paragraph written to be quoted by search and AI answer engines
• Every price shown in Naira and US Dollars together, sourced from one typed data file so the two currencies can never drift apart
• A per-service FAQ that also feeds the site's FAQPage structured data
• Three complete concept brand worlds: ÀLÀ (skincare), ODÈ (grooming) and ÀSE (spirits), built end to end as portfolio proof, each explicitly labeled as concept work with no invented clients, testimonials, awards or metrics
• Age-gating on the pages that show ÀSE's alcohol-related concept work
• A cross-link back to the main SLIIQQUE engineering site: shared navigation entry, footer link, a dedicated FAQ answer, and a schema.org sameAs reference, so the two sites read as one ecosystem`,
  whatWeBuilt: `A complete platform for the creative-production side of the business:

1. Home: hero, service overview, and a preview of the concept portfolio
2. Services: five priced service pages (commercials, digital humans, photography, fashion imagery, campaigns), each with its own direct answer, inclusions, process and FAQ
3. Pricing: a single page comparing every service and retainer tier in Naira and US Dollars
4. Works: ÀLÀ, ODÈ and ÀSE, three concept brand worlds with their own case pages: brief, challenge, results and conclusion
5. Journal: articles on identity lock, storyboarding, grading and fashion imagery
6. About, FAQ, Glossary, Contact: supporting pages, plus Privacy, Terms and Policies
7. Contact handling via Resend, and Vercel Analytics for traffic`,
  results: `• 5 fully-scoped service pages, each priced in NGN and USD with its own FAQ
• 3 complete concept brand worlds built end to end (ÀLÀ, ODÈ and ÀSE), each labeled as concept work with no invented clients, testimonials or metrics
• Age-gated presentation for 18+ concept work, consistent with the platform's content policies
• Cross-linked with the main SLIIQQUE site: shared navigation, footer link, FAQ entry and schema.org sameAs
• Its own Vercel deployment and domain, independent of the main site`,
  learnings: `Separating the creative-production vertical onto its own domain let each side speak to its own audience without diluting either one's positioning: the main site stays focused on software and automation, and the studio site stays focused on production and craft, with the ecosystem link doing the work of connecting them.

Pricing in two currencies from one source file, rather than hand-maintained duplicates, turned out to matter more than expected: it's the kind of inconsistency that's invisible until a Naira price and a Dollar price stop matching, and by then it's already been live and wrong for a while. Writing the production system (identity locks, continuity rules, quality checklists) before generating a single image, as we did for ÀLÀ, ODÈ and ÀSE, was the same lesson in a different form: the system is the deliverable, and the finished images are its proof.`,
};

const sections = [
  { label: "The Context", key: "context" },
  { label: "The Problem", key: "problem" },
  { label: "Our Approach", key: "approach" },
  { label: "What We Built", key: "whatWeBuilt" },
];

export default function CaseStudyClient() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudy}
      title="Creative Studio"
      description="Our own creative-production vertical: AI commercials, digital humans, product and fashion photography, and brand launch campaigns."
      heroImage="/images/creative-studio-screenshot.jpg"
      heroAlt="Creative Studio homepage"
      heroBgColor="#0a0a0a"
      externalUrl={{ url: "https://studio.sliiqque.space", label: "studio.sliiqque.space" }}
      contact={null}
      useInteractiveTitle={false}
      sections={sections}
    />
  );
}
