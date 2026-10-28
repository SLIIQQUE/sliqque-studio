"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "FinTech",
  year: "2019",
  engagementType: "Earlier work, before SLIIQQUE",
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
};

const sections = [
  { label: "The Context", key: "context" },
  { label: "The Problem", key: "problem" },
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
      earlierWork
      sections={sections}
    />
  );
}
