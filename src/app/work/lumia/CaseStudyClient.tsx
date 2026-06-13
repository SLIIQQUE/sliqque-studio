"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "FinTech",
  year: "2019",
  engagementType: "Product Build",
  stack: ["React", "TypeScript", "Node.js", "Payment Integration"],
  context: `Lumia is Nigeria's digital electricity payment platform that enables users to purchase prepaid and postpaid electricity units without visiting physical locations. Founded to solve the problem of long queues and inconvenience at electricity distribution company offices, Lumia partnered with major DisCos across Nigeria including AEDC, PHEDC, IKEDC, KNEDC, EEDC, and EKEDC.

The platform provides instant token delivery via SMS and email after payment, with support for both prepaid meters and postpaid bill payments. Lumia also offers mobile apps for Android and iOS, making electricity purchases accessible from anywhere.`,
  problem: `Nigerian electricity consumers faced significant friction in purchasing electricity:

• Long queues at PHCN/DisCo offices consuming hours of productive time
• Limited operating hours of physical payment centers
• No option to purchase electricity for third parties remotely
• Inability to check meter balance or account status online
• No loyalty programs or rewards for regular customers
• Poor mobile experience at existing digital options`,
  approach: `We approached Lumia with a focus on speed, reliability, and user trust. Key decisions:

• Built a web platform and native mobile apps (iOS & Android) for maximum accessibility
• Integrated with multiple DisCo APIs for real-time meter validation and token generation
• Designed for instant token delivery via SMS and email simultaneously
• Created a proxy buying feature allowing users to purchase for family/friends
• Implemented a loyalty program with points and discounts for repeat customers
• Built a referral system with wallet bonuses for successful referrals`,
  whatWeBuilt: `We built a complete electricity payment ecosystem:

1. Web Platform: Responsive website for purchasing prepaid and postpaid electricity
2. Mobile Apps: Native iOS and Android applications for on-the-go purchases
3. DisCo Integration: Real-time integration with AEDC, PHEDC, IKEDC, KNEDC, EEDC, EKEDC
4. Meter Validation: Instant verification of meter numbers and account details
5. Payment Processing: Secure payment gateway integration with multiple options
6. Token Generation: Instant token generation and delivery system
7. Proxy Buying: Save beneficiary meter details for quick third-party purchases
8. Loyalty Program: Points accumulation and redemption system
9. Referral System: Wallet bonus system for successful app referrals
10. Reseller Program: White-label solution for entrepreneurs to start their own electricity vending business`,
  results: `• Platform processing thousands of electricity transactions monthly
• Partnerships with 6 major DisCos across Nigeria
• Instant token delivery, typically under 30 seconds from payment
• Mobile apps available on both iOS App Store and Google Play Store
• Reseller program enabling entrepreneurs to start electricity vending with N1,000
• Featured in Nigerian tech media including TechCabal
• Contact center in Wuse II, Abuja with 07056414224 support line`,
  learnings: `This project reinforced several critical principles for Nigerian fintech:

Trust is everything. Users need to believe their money will convert to electricity units. We built in multiple confirmation steps and instant feedback to build confidence. The 30-second token delivery became our most important feature.

Partnership complexity was real. Working with DisCos required understanding each company's technical capabilities and limitations. Not all DisCos had robust APIs, so we built fallback mechanisms.

Mobile-first isn't optional. Nigerian consumers predominantly access services via mobile. The native apps weren't an afterthought. They were designed alongside the web platform.

Reseller networks work. The white-label reseller program created a growth flywheel, turning customers into distribution partners.`,
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
      title="Lumia"
      description="Get out of the dark with Nigeria's digital electricity payment platform for prepaid and postpaid meters."
      heroImage="/images/lumia-screenshot.jpg"
      heroAlt="Lumia electricity payment platform"
      heroBgColor="#0f0f0f"
      externalUrl={{ url: "https://lumia.ng", label: "lumia.ng" }}
      contact={null}
      useInteractiveTitle={false}
      sections={sections}
    />
  );
}
