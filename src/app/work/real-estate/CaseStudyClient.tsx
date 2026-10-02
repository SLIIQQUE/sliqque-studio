"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "Real Estate",
  year: "2026",
  engagementType: "Product Build",
  stack: ["Next.js", "React", "TypeScript", "Payload CMS", "PostgreSQL", "Tailwind CSS"],
  context: `SLIIQQUE Real Estate is a property website with a content management system built into the same application. Visitors browse homes for sale or rent, meet the agents, read market insights, and send enquiries. The team behind it manages every listing, agent, article, and photo from a themed admin panel at /admin.

The goal was a site that feels like a premium editorial brand for visitors and behaves like a simple tool for the people running it.`,
  problem: `Most property sites force a trade-off between design and control:

• Template sites look generic and are hard to differentiate in a crowded market
• Custom-built sites look great but need a developer for every new listing or price change
• Enquiries end up scattered across email, WhatsApp, and contact forms with no single record
• Photos and content live in different places, so listings go stale
• Search is an afterthought, so visitors cannot narrow homes by location, type, price, or neighborhood`,
  approach: `We built the website and the CMS as one product, so there is nothing to wire together and nothing for the team to deploy:

• Payload CMS runs inside the same Next.js app, so editors and visitors share one codebase and one database
• Content is never hard-coded. Every listing, agent, neighborhood, article, and testimonial lives in PostgreSQL
• Public pages are Server Components that read through the Payload Local API, with filters validated against a whitelist
• Edits appear on the live site within seconds through on-demand cache invalidation
• The admin panel is themed to match the site, so the team works inside the brand, not a generic dashboard`,
  whatWeBuilt: `A complete property platform for visitors and for the team:

1. Home: full-bleed hero with a buy, rent, or sell search, featured listings, neighborhoods, agents, articles, and testimonials
2. Properties: search by location, type, price band, and neighborhood, with sorting, pagination, photo galleries, and a viewing-request form
3. Agents: profiles filterable by specialty, with bio, experience, current listings, and a message form
4. Insights: articles with search, category filters, share buttons, and related reading
5. Admin panel: manage listings, agents, neighborhoods, articles, testimonials, photos, and site settings
6. Leads: every viewing request, valuation request, contact message, and newsletter signup lands in one inbox
7. Brand system: a forest green, cream, and terracotta palette carried from the website into the admin`,
  results: `• One system for the site and its content, with no code changes needed to publish or update
• Edits reach the live site within seconds
• Every enquiry captured in a single Leads inbox instead of scattered across channels
• Production-ready setup with Neon PostgreSQL, Vercel Blob storage, and database migrations
• A strict 300-line file limit enforced at build time to keep the codebase maintainable`,
  learnings: `Building the CMS inside the website, rather than beside it, removed an entire class of problems: no separate API to keep in sync, no second deployment, and one set of types from database to page.

We also learned that editor experience is part of the product. Theming the admin to match the brand and keeping the content model simple mattered as much as the public design, because the people updating the site every day are the ones who decide whether it stays accurate.`,
};

export default function CaseStudyClient() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudy}
      title="SLIIQQUE Real Estate"
      description="A property website with a built-in CMS for listings, agents, articles, and enquiries, managed without code changes."
      heroImage="/images/real-estate-screenshot.jpg"
      heroAlt="SLIIQQUE Real Estate homepage with property search"
      heroBgColor="#102E26"
      sections={[
        { label: "The Context", key: "context" },
        { label: "The Problem", key: "problem" },
        { label: "Our Approach", key: "approach" },
        { label: "What We Built", key: "whatWeBuilt" },
      ]}
    />
  );
}
