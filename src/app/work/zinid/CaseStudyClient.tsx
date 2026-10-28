"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "RegTech / Fraud Prevention",
  year: "2018",
  engagementType: "Earlier work, before SLIIQQUE",
  stack: ["React", "TypeScript", "Next.js", "Node.js"],
  context: `ZINID, Africa's fraud prevention infrastructure, was conceived to solve one of fintech's most expensive unsolved problems: shared risk memory. Nigerian financial institutions were losing millions to fraudsters who would default across multiple lending platforms, exploit signup bonuses, and operate mule wallets. All because no system connected the dots.

The existing approach to fraud prevention in Nigeria was fragmented. Each fintech operated its own siloed system, checking BVN and identity documents in isolation, with no shared intelligence about a user's behavior across the ecosystem. A bad actor could exhaust one platform's trust, then move immediately to the next. ZINID was built as the shared layer, a fraud intelligence network where every verification enriched the ecosystem's collective knowledge.`,
  problem: `The Nigerian fintech ecosystem was hemorrhaging money to coordinated fraud:

• No shared risk memory. Fraudsters exploited the lack of cross-platform intelligence
• Default scores were assessed per-platform, not per-user across the ecosystem
• Mule wallet detection was manual and slow. By the time a pattern was identified, damage was done
• BVN verification confirmed identity but not intent or risk
• Onboarding bonuses were systematically abused by bad actors cycling between platforms
• Compliance reporting was manual, inconsistent, and regulator-unfriendly`,
};

export default function CaseStudyClient() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudy}
      title="ZINID"
      description="Africa&apos;s shared fraud prevention infrastructure for digital identity, real-time risk scoring, and cross-platform AML compliance."
      heroImage="/images/zinid-screenshot.jpg"
      heroAlt="ZINID fraud prevention platform"
      heroBgColor="#0a0a0a"
      useInteractiveTitle
      contact={{ label: "info@zinid.africa", href: "mailto:info@zinid.africa" }}
      earlierWork
      sections={[
        { label: "The Context", key: "context" },
        { label: "The Problem", key: "problem" },
      ]}
    />
  );
}
