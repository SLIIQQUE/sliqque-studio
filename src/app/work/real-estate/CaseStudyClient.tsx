"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "Real Estate (Concept Demo)",
  year: "2026",
  engagementType: "Template Build",
  stack: ["Next.js", "React", "TypeScript", "Payload CMS", "PostgreSQL", "Leaflet", "Resend"],
  context: `Real Estate is SLIIQQUE's reusable Canadian-realtor website template, built against a Real Estate Website Build Spec covering Presence, Authority, and Command tiers, and deployed live at realty.sliiqque.space. It ships with a full bilingual (English/French) marketing site, a built-in Payload CMS, and two Canadian-specific calculators, fronted by a fictional agent persona ("Priya Mehta," Toronto/GTA) so the capability can be demonstrated honestly, without a real brokerage client yet.

SLIIQQUE holds no real-estate licence. The agent, brokerage name, licence number, and every listing, testimonial, and sold property shown are disclosed as fictional on every page, so the demo never reads as a real, licensed business.`,
  problem: `Building for the Canadian realtor market raises problems a generic property site doesn't have to solve:

• Most property sites force a trade-off between a generic template and a custom build that needs a developer for every listing change
• Canada is bilingual by law in federal contexts and by market expectation in much of the country, so an English-only site excludes a real share of buyers
• Mortgage and land-transfer-tax math differs by province (and by city, for Toronto's municipal land transfer tax), so a US-style calculator would simply be wrong
• Realtor marketing is trademark- and regulator-sensitive: REALTOR®/MLS® wording, provincial regulator disclosure, PIPEDA and Quebec's Law 25, and CASL's opt-in rules all apply
• Demonstrating the capability with no real client yet means every piece of sample content has to be clearly labeled, not quietly passed off as real`,
  approach: `We treated it as a genuine reusable template, not a one-off mockup, with disclosure built in from the start rather than bolted on:

• Payload CMS runs inside the same Next.js app via route groups, so the public site and the admin panel share one codebase and database, but the site runs with zero environment variables: every page reads from typed static data files until a database is connected, and Payload's Local API takes over automatically with the exact same function signatures once it is
• \`/fr/...\` is handled by middleware that rewrites to the same page files and stamps a locale header, so there's no duplicated route tree to keep in sync
• A mortgage calculator with CMHC insurance and bi-weekly payment rules, and a land-transfer-tax calculator with real Ontario, Toronto, and BC brackets, both carrying an explicit "estimate only" disclaimer
• Every lead form (contact, valuation, viewing request, listing enquiry, newsletter) shares the same honeypot, per-IP rate limiting, required consent checkbox, and attribution capture, emailing through Resend and optionally pushing to a CRM webhook
• A standing production checklist graded against the spec in three states — done in code, wired but needs credentials, or a manual step for a real client — so what's demo-only versus launch-ready stays explicit rather than assumed`,
  whatWeBuilt: `A complete marketing site and CMS, built to be relaunched under a real agent's name rather than thrown away:

1. Home, Listings (search by location, type, price, neighborhood, with map, gallery, mortgage calculator, and enquiry form), Sold, Neighbourhoods, Buy, Sell, Home Valuation, Book a Viewing
2. Two Canadian calculators: mortgage (with CMHC/bi-weekly rules) and land transfer tax (Ontario/Toronto/BC brackets)
3. A dedicated page for buyers purchasing Toronto property remotely from Nigeria — video tours, non-resident financing, foreign-buyer rules, and naira-to-dollar planning — connecting SLIIQQUE's Lagos base to its Toronto demo market
4. Insights articles, Reviews, Team profiles, Open Houses, Favorites, Compare, FAQ, Privacy/Terms/Accessibility, custom 404/500, sitemap/robots
5. Admin panel at /admin, themed to the site's forest-green, cream, and terracotta palette, for listings, agents, neighbourhoods, articles, testimonials, and leads
6. A compliance footer on every page: agent, brokerage, licence, regulator, and correct REALTOR®/MLS® trademark wording`,
  results: `• Full spec-compliant page set shipped and self-audited against a 300+ line production checklist, graded done-in-code, wired-but-needs-credentials, or manual-client-step
• Runs with zero environment variables: forms degrade to a clear "not configured" message and the entire site works off static demo data until Payload and Postgres are connected
• Bilingual EN/FR routing via middleware, with no duplicated route tree
• A dedicated remote-buying page for Nigerian buyers purchasing Toronto property, bridging SLIIQQUE's Lagos base with its Toronto demo market
• Deployed live at realty.sliiqque.space as a working demonstration, not a static mock-up
• Disclosed as a concept demo on every page: fictional agent, brokerage, licence number, and listings, so nothing implies a real, licensed business`,
  learnings: `Disclosure had to be a design constraint from the first commit, not a disclaimer added at the end: a realtor-vertical demo lives or dies on whether a visitor can tell, immediately, that the agent and listings are fictional, so the labeling runs through the data layer (\`src/data/brand.ts\`) and onto every page, not just a footer line.

Wrapping the static data files with the same function signatures Payload's Local API would use meant the site could run, fully, with zero infrastructure, while still being one environment variable away from a real CMS. That turned "reusable template" from a claim into something actually true: a real client's content replaces the demo data, not the architecture.`,
};

export default function CaseStudyClient() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudy}
      title="Real Estate"
      description="A reusable, bilingual Canadian-realtor website template with a built-in CMS, Canadian mortgage and land-transfer-tax calculators, and searchable listings."
      heroImage="/images/real-estate-screenshot.jpg"
      heroAlt="Real Estate homepage with property search"
      heroBgColor="#102E26"
      externalUrl={{ url: "https://realty.sliiqque.space", label: "realty.sliiqque.space" }}
      contact={null}
      useInteractiveTitle={false}
      sections={[
        { label: "The Context", key: "context" },
        { label: "The Problem", key: "problem" },
        { label: "Our Approach", key: "approach" },
        { label: "What We Built", key: "whatWeBuilt" },
      ]}
    />
  );
}
