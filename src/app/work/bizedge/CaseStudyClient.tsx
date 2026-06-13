"use client";

import React from "react";
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

const caseStudy = {
  clientType: "SME SaaS",
  year: "2021",
  engagementType: "Product Build",
  stack: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
  context: `BizEdge is an all-in-one HR, Payroll & Productivity suite serving 2,000+ fast-growing businesses across Africa and Europe. Founded in 2012 and relaunched as a digital product in 2021, the platform consolidates every people operation, from recruitment to payroll and time and attendance to performance management, into a single unified interface.

The product had been operating with disconnected tools and manual processes. BizEdge needed a complete platform rebuild that could handle the full complexity of Nigerian HR requirements (PAYE tax calculations, pension contributions, multi-state payroll) while remaining intuitive for non-technical HR managers.`,
  problem: `The existing operations relied on fragmented tooling and manual processes including spreadsheets for attendance, separate software for payroll, email threads for leave requests, and disconnected tools for recruitment. This fragmentation led to:

• Inconsistent employee data across systems
• Payroll errors from manual calculations
• No real-time visibility into attendance or performance
• Compliance risks with inconsistent record-keeping
• Inability to scale as client businesses grew
• Nigerian tax compliance handled incorrectly or not at all`,
  approach: `Before writing a single line of code, we spent two weeks in discovery. We interviewed HR managers, business owners, and employees to understand the actual workflows behind the stated requirements.

We identified that the core challenge wasn't just software. It was information flow. HR managers needed the complete picture of an employee in one place, from first application to latest performance review.

Our technical approach prioritized:
• A modular architecture with 11+ independent but interconnected modules
• Role-based access control for admins, managers, and employees
• Nigerian PAYE tax compliance built into the payroll engine
• Mobile-first design with a robust native app for iOS and Android
• Offline-capable mobile design for areas with unreliable connectivity`,
  whatWeBuilt: `We built a comprehensive HRMS platform with 11 interconnected modules:

1. Core HR: Employee records, time-off, benefits, document storage
2. BizEdge Payroll: Full payroll processing with PAYE, pension, and tax compliance
3. BizEdge Recruit: Recruitment and applicant tracking system
4. Time and Attendance: Clock-in and clock-out for on-site and remote employees
5. Rota and Shift Scheduling: Shift planning and rota publishing
6. Task and Project Management: Team task assignment, deadlines, and collaboration
7. Performance Management: 360 reviews, goal setting, peer-to-peer feedback
8. MyEdge: Employee self-service mobile app
9. BizEdge Chat: Internal team communication
10. Asset Tracking: Company assets, assignments, and maintenance logs
11. Employee Reference Check: Online reference-checking tool

Each module was designed to work independently but share a common data layer, allowing businesses to adopt modules incrementally. Available on iOS and Android, with pricing tiers from Free to Pro.`,
  results: `• All-in-one platform replacing 5+ disconnected tools
• Full PAYE compliance under the Nigeria Tax Act built into payroll
• Processing time reduced from days to hours
• Mobile app with 2,000+ active users on iOS and Android
• Real-time attendance visibility across multiple locations
• Used by 2,000+ fast-growing businesses across Africa and Europe
• Featured in Vanguard, Business Day, Nairametrics, and TechCabal`,
  learnings: `The biggest lesson from this project was the importance of the "offline moment." Those brief instances when internet connectivity drops are common in Nigerian offices. We designed for graceful degradation: queuing actions locally on the mobile app and syncing when connectivity returns. This pattern is essential for every enterprise tool built for emerging markets. We also learned that compliance isn't just a feature. It's a foundation. Building Nigerian PAYE, pension, and tax calculations correctly from day one saved months of rework.`,
};

export default function CaseStudyClient() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudy}
      title="BizEdge"
      description="Multi-module HRMS platform built for SMEs, covering recruitment, payroll, time and attendance, and task management."
      heroImage="/images/bizedge-screenshot.jpg"
      heroAlt="BizEdge HR and Payroll platform"
      heroBgColor="#1a1a2e"
      externalUrl={{ url: "https://bizedgeapp.com", label: "bizedgeapp.com" }}
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
