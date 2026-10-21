"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "Real Estate (Concept Demo)",
  year: "2026",
  engagementType: "Vertical Solution",
  stack: ["Next.js", "React", "TypeScript", "Payload CMS", "PostgreSQL", "Leaflet", "Resend"],
  context: `Canadian real estate agents are stuck choosing between a generic template that looks like everyone else's, or a custom build they need to call a developer for every time a listing changes. Realty Starter is SLIIQQUE's answer: a bilingual (English/French), REALTOR®/MLS®-compliant website with a built-in CMS and two Canadian-specific calculators — live right now at realty.sliiqque.space, so you can see exactly what you'd be getting before your brand goes anywhere near it.

It's fronted by a fictional agent persona ("Priya Mehta," Toronto/GTA) because SLIIQQUE holds no real-estate licence. Every agent name, brokerage, licence number, listing, and testimonial on the site is clearly disclosed as fictional — this is a demonstration of what we build, not a live brokerage, and we'd rather you know that up front than wonder.`,
  problem: `Most Canadian real estate websites get this wrong in the same five ways:

• You're stuck with a generic template, or stuck paying a developer for every listing update — there's no middle ground on offer
• An English-only site turns away a real share of your buyers in a country that's bilingual by law and by market expectation
• A US-style mortgage or land-transfer-tax calculator hands your clients the wrong numbers — Canadian math isn't optional, and Toronto's municipal land transfer tax makes it worse
• Realtor marketing is a compliance minefield: REALTOR®/MLS® wording, provincial regulator disclosure, PIPEDA, Quebec's Law 25, and CASL's opt-in rules all apply, whether your current site handles them or not
• And if you're evaluating who builds this for you, you want to see the real thing working, not a pitch deck`,
  approach: `We built this the way we'd want to buy it — live, working, and provable before anyone signs anything:

• One system, not two: the website and the admin panel you'd manage listings from run on the same CMS, so there's nothing extra to buy, host, or keep in sync
• French isn't bolted on afterward: every page exists in English and French from day one, so you're never maintaining a second site or falling behind on translations
• Canadian math, not American guesswork: a mortgage calculator with CMHC insurance and bi-weekly payment rules, and a land-transfer-tax calculator with real Ontario, Toronto, and BC brackets
• No enquiry falls through the cracks: contact, valuation, viewing, listing, and newsletter forms all capture consent and lead source automatically and land in your inbox or CRM
• No surprises before launch: every feature is graded ready, wired-but-needs-your-credentials, or a manual step, so you know exactly what it takes to go live under your name`,
  whatWeBuilt: `Everything a Canadian brokerage needs to launch under its own name — nothing left to build from scratch:

1. A complete marketing site: Home, Listings (search by location, type, price, and neighborhood, with map, gallery, mortgage calculator, and enquiry form), Sold, Neighbourhoods, Buy, Sell, Home Valuation, Book a Viewing
2. Two Canadian calculators built in: mortgage (CMHC/bi-weekly rules) and land transfer tax (Ontario/Toronto/BC brackets)
3. A page built for a market most competitors ignore entirely: Toronto property bought remotely from Nigeria — video tours, non-resident financing, foreign-buyer rules, and naira-to-dollar planning
4. A full content engine covered end to end: Insights articles, Reviews, Team profiles, Open Houses, Favorites, Compare, FAQ, Privacy/Terms/Accessibility, custom 404/500, sitemap and robots
5. An admin panel your team can actually run the business from, themed to the brand instead of a generic dashboard — listings, agents, neighbourhoods, articles, testimonials, and leads, all in one place
6. A compliance footer on every page, done right out of the box: agent, brokerage, licence, regulator, and correct REALTOR®/MLS® trademark wording`,
  results: `• You can see it live right now at realty.sliiqque.space — not a mockup, not a deck
• Nothing to set up to evaluate it: the whole site runs with zero infrastructure, so what you're browsing today is what you'd get, not a promise
• Bilingual from the first click, with no second site to maintain
• A dedicated page turning a niche most Canadian realtors miss entirely — Nigerian buyers purchasing Toronto property remotely — into a differentiator, bridging SLIIQQUE's Lagos base with its Toronto demo market
• Disclosed honestly on every page: fictional agent, brokerage, and listings, clearly labeled, so there's never a question about what's real
• One re-skin away from launch: swap in a real brokerage's brand, listings, and team, and it's live`,
  learnings: `The lesson that shaped this build: trust is the actual product. Anyone evaluating whether to hand us their brand needs to know, instantly, what's a demonstration and what's real — so disclosure isn't a footer line added at the end, it runs through the data layer and onto every page.

That same discipline is what makes this a genuine offer rather than a mockup: the demo data you're browsing uses the identical structure the real CMS would, so handing us a real brokerage's content is a data swap, not a rebuild. What you see today is what you'd get, just with your name on it.`,
};

export default function CaseStudyClient() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudy}
      title="Realty Starter"
      description="The website Canadian realtors switch to: bilingual, REALTOR®-compliant, and built to convert — live listings, a built-in CMS, and Canadian mortgage and land-transfer-tax calculators your clients can actually trust."
      heroImage="/images/realty-starter-screenshot.jpg"
      heroAlt="Realty Starter homepage with Toronto and GTA property search"
      heroBgColor="#050505"
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
