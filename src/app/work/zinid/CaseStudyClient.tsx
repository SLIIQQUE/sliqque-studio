"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "RegTech / Fraud Prevention",
  year: "2018",
  engagementType: "Product Build",
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
  approach: `We built ZINID as shared infrastructure, not a standalone product. The core insight: fraud prevention gets stronger with every platform that participates. We designed the system to be:

• API-first so every Nigerian fintech could integrate with a few lines of code
• Real-time fraud scores updated on every transaction, not batched overnight
• Ecosystem-aware with shared risk memory across all participating platforms
• Compliance-native to satisfy CBN AML requirements from day one
• Privacy-respecting with data sharing fully consent-based and anonymized where possible

The product had to be valuable enough that platforms would share their fraud data. That was a genuine network effect challenge.`,
  whatWeBuilt: `We built a comprehensive fraud prevention and identity verification platform:

1. ZinID Digital Identity: 8-digit unique ID linked to BVN and biometric data
2. Fraud Scoring Engine: Real-time risk assessment analyzing digital footprints, device fingerprints, and cross-platform behavior
3. Transaction Monitoring: Anomaly detection across participating platforms with alert thresholds
4. ZiNCode: Two-factor behavioral authentication detecting unusual account activity
5. AML Compliance Dashboard: CBN-ready reporting with automated suspicious activity flags
6. API Integration Layer: REST APIs for seamless onboarding into partner platforms
7. Shared Risk Memory: Cross-platform intelligence that flagged users attempting multi-platform exploitation`,
  results: `• Shared fraud intelligence network connecting multiple Nigerian fintech platforms
• Fraud scores calculated and updated in real-time across the ecosystem
• Reduced onboarding bonus abuse by identifying repeat offenders across partner platforms
• AML compliance infrastructure satisfying CBN's regulatory framework
• Contact center in Maitama, Abuja, reachable at info@zinid.africa
• Deployed as infrastructure serving the broader Nigerian fintech ecosystem`,
  learnings: `The hardest part of building shared infrastructure isn't the technology. It's getting competitors to share data. Every fintech knows that fraud intelligence is valuable. Convincing them that collective defense beats isolated protection required both a compelling product and strategic relationship-building with platform operators.

We also learned that compliance isn't a feature you bolt on at the end. ZINID was designed around CBN's AML requirements from the first line of architecture. This meant fewer pivots, fewer rewrites, and a smoother path to regulatory approval.`,
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
      sections={[
        { label: "The Context", key: "context" },
        { label: "The Problem", key: "problem" },
        { label: "Our Approach", key: "approach" },
        { label: "What We Built", key: "whatWeBuilt" },
      ]}
    />
  );
}
