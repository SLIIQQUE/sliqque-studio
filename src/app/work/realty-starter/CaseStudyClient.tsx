"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "Real Estate (Concept Demo)",
  year: "2026",
  engagementType: "Vertical Solution",
  stack: ["Next.js", "React", "TypeScript", "Payload CMS", "PostgreSQL", "Leaflet", "Resend"],
  context: `Realty Starter is the website SLIIQQUE built for the Canadian realtor market, live at realty.sliiqque.space. It combines a complete bilingual marketing site, searchable Toronto and GTA listings, two Canadian calculators, and a built-in Payload CMS that lets an agent edit the whole site without a developer.

It is fronted by a fictional Toronto agent, Priya Mehta, and a fictional brokerage, because SLIIQQUE holds no real-estate licence. Every agent name, licence number, listing, testimonial and sold price is labelled as sample content on the page where it appears. That label is not a disclaimer bolted onto a demo. It is the first proof that the team behind the site takes trust seriously.`,
  problem: `Canadian realtors are usually offered two bad options: a generic template that looks like everyone else's, or a custom build that needs a developer every time a listing changes. Realty Starter exists to remove that trade-off. The market also adds five constraints a US template ignores:

• Template or developer, with no middle option that is both distinctive and editable
• English-only sites turn away buyers in a country that is bilingual by law and by market expectation
• US mortgage and land-transfer-tax math gives Canadian clients the wrong numbers, and Toronto adds a municipal land transfer tax on top
• Compliance is not a footer: REALTOR®/MLS® wording, provincial regulator disclosure, PIPEDA, Quebec's Law 25 and CASL opt-in rules all apply
• A realtor evaluating an agency wants to see the working product, not a pitch deck`,
  values: `We built the demo to the same standard we would apply to a live brokerage, because a template teaches by example:

• Disclosure over polish. The agent, brokerage, licence number, listings, testimonials and sold prices are fictional and labelled wherever they appear. No borrowed logos, no invented awards, no metrics we cannot source.
• Canadian by default. Bilingual routes, CMHC and bi-weekly mortgage rules, and real provincial and municipal tax brackets, not an American template with the currency swapped.
• One system, not a stack of plugins. The website and the admin panel share one codebase, one database and one content model, so a listing is edited once and nothing needs redeploying.
• Honest about readiness. Every capability is graded as built, wired but waiting on your credentials, or a manual step, so a launch conversation starts from facts.
• Data handled with care. Consent, attribution, rate limits and a real privacy policy are part of the form flow, not a checkbox added at the end.
• Nothing to sign to evaluate. The full site runs with no database and no environment variables, so a realtor can judge the work before a sales call.`,
  whatWeBuilt: `Realty Starter ships as a complete site, not a page builder with gaps to fill:

1. Search and discovery: listings with filters for status, neighbourhood, bedrooms and keyword, a map view, photo galleries, favourites and side-by-side comparison
2. Two Canadian calculators: mortgage with CMHC insurance and bi-weekly payment rules, and land transfer tax with real Ontario, Toronto and British Columbia brackets, each carrying an estimate-only disclaimer
3. Seller tools: a multi-step home valuation request routed to human review, a seller guide, a preparation checklist and a plain explanation of private listings
4. Lead capture on every page: contact, valuation, viewing, listing enquiry and newsletter forms, all sharing a honeypot, per-IP rate limiting, required consent and attribution capture
5. A built-in CMS: Payload runs inside the same Next.js app, with listings, agents, neighbourhoods, articles, testimonials, sold properties, tax rules and leads in one themed admin panel
6. Bilingual routes: every page exists in English and French through middleware that rewrites to one route tree, so there is no second site to maintain
7. A remote-buying route for Nigerian buyers: video tours, non-resident financing, foreign-buyer rules and naira-to-dollar planning
8. Editorial and trust pages: insights, reviews, team profiles, open houses, neighbourhood guides, FAQ, privacy, terms and accessibility
9. Production plumbing: sitemap, robots, structured data, Open Graph cards, security headers, consent-gated analytics and a compliance footer with correct REALTOR®/MLS® wording
10. A launch path: the whole site runs with zero environment variables, and Payload, Resend, CRM and analytics switch on with credentials when the brokerage is ready`,
  salesCase: `Realty Starter is built to shorten the distance between a visitor and a conversation, because that is what a realtor actually sells:

• Every page ends in a next step: browse listings, request a viewing, ask for a valuation, book a consultation or message on WhatsApp, with no dead ends
• The calculators do the qualifying: a buyer who has already run their own mortgage and land-transfer-tax numbers arrives at the conversation closer to a decision
• The valuation form is a lead magnet with a reason to exist: a human-reviewed range in one business day, not an instant algorithm that erodes trust
• Bilingual routing widens the addressable market without doubling the work, because there is one site and one content model, not two
• Listings are edited in one admin panel, so the inventory stays current, and current inventory is what brings buyers back
• Every enquiry arrives with consent, source and attribution attached, so follow-up starts informed and compliant
• The remote-buying page for Nigerian buyers turns a market most Canadian realtors ignore into a differentiated reason to call`,
  results: `Live at realty.sliiqque.space, not a mockup and not a deck
A complete page set: home, listings and detail, sold, neighbourhoods and detail, buy, sell, valuation, viewing, insights, reviews, team, open houses, favourites, compare, FAQ and the legal pages
Two Canadian calculators with real provincial and municipal rules, each carrying an estimate-only disclaimer
Five lead forms sharing one consent, rate-limit and attribution pattern, with optional Resend email, CRM webhook and Payload storage
Bilingual English and French routing through one route tree, with no duplicated pages to maintain
Zero environment variables required to run the full demo; Payload, email, CRM and analytics activate with credentials
A dedicated remote-buying page for Nigerian buyers purchasing Toronto property
Clear disclosure throughout: fictional agent, brokerage, licence and listings, with correct REALTOR®/MLS® trademark wording`,
  learnings: `The most useful constraint was making the demo honest. A realtor evaluating a website is really asking two questions: can I trust this team, and can I run this myself? Labelling every fictional detail answers the first before a call, and wrapping the static content in the same function signatures Payload would use answers the second, because switching to a live CMS is a data change, not a rebuild.

The second lesson is that Canadian specificity is a sales feature, not a detail. Real tax brackets, CMHC rules and French routes are the things a US template cannot copy quickly, and they are the things a buyer notices in the first five minutes.`,
};

export default function CaseStudyClient() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudy}
      title="Realty Starter"
      description="The bilingual, REALTOR®/MLS®-compliant website a Canadian realtor can launch under their own name, with Toronto listings, Canadian calculators and one admin panel."
      heroImage="/images/realty-starter-screenshot.jpg"
      heroAlt="Realty Starter homepage with Toronto and GTA property search"
      heroBgColor="#050505"
      externalUrl={{ url: "https://realty.sliiqque.space", label: "realty.sliiqque.space" }}
      contact={null}
      useInteractiveTitle={false}
      sections={[
        { label: "The Context", key: "context" },
        { label: "The Problem", key: "problem" },
        { label: "Our Values", key: "values" },
        { label: "The Features", key: "whatWeBuilt" },
        { label: "The Sales Case", key: "salesCase" },
      ]}
    />
  );
}
