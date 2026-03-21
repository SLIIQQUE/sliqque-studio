export interface StudioProject {
  name: string;
  type: string;
  metric: string;
  link: string;
}

export interface WorkPageContent {
  label: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  year: string;
  clientType: string;
  engagementType: string;
  description: string;
  tags: string[];
  metric: string;
  imageSrc?: string;
  logoSrc?: string;
  imageAlt: string;
  href: string;
  bgColor?: string;
}

export interface CaseStudy extends Project {
  context: string;
  problem: string;
  approach: string;
  whatWeBuilt: string;
  results: string;
  learnings: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    title: "BizEdge",
    year: "2021",
    clientType: "HRMS SaaS",
    engagementType: "Product Build",
    description: "All-in-one HR, Payroll & Productivity suite — 11 modules, 2,000+ businesses, mobile apps on iOS & Android.",
    tags: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    metric: "11 Modules",
    imageAlt: "BizEdge Logo",
    href: "/work/bizedge",
    bgColor: "#1a1a2e",
  },
  {
    title: "Lumia",
    year: "2019",
    clientType: "FinTech",
    engagementType: "Product Build",
    description: "Nigeria's electricity payment platform — prepaid & postpaid meters, multi-DisCo support, instant token delivery, and mobile apps.",
    tags: ["React", "TypeScript", "Node.js", "Payment Integration"],
    metric: "6 DisCos",
    logoSrc: "https://lumia.ng/assets/Logo.png",
    imageAlt: "Lumia Logo",
    href: "/work/lumia",
    bgColor: "#0f0f0f",
  },
  {
    title: "Meridian Finance",
    year: "2024",
    clientType: "DeFi SaaS",
    engagementType: "Interface Engineering",
    description: "Real-time DeFi analytics dashboard with multi-chain support, portfolio tracking, and yield optimization tools.",
    tags: ["Web3", "Wagmi", "The Graph"],
    metric: "Multi-chain",
    imageSrc: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Meridian Finance Dashboard",
    href: "/work/meridian",
  },
  {
    title: "Origin Protocol",
    year: "2024",
    clientType: "NFT Platform",
    engagementType: "Product Build",
    description: "NFT minting platform with IPFS storage, zero-slippage trading engine, and creator-friendly royalty system.",
    tags: ["NFT", "Solidity", "IPFS"],
    metric: "On-chain Minting",
    imageSrc: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Origin Protocol Platform",
    href: "/work/origin",
  },
];

export const featuredProjects = projects.slice(0, 3);

export const workPageContent: WorkPageContent = {
  label: "Selected Work",
  title: "Projects",
  description: "Products we've built, shaped, and shipped. Each project represents a real problem solved and a relationship built.",
};

export const studioProjects: StudioProject[] = [
  {
    name: "BizEdge",
    type: "SaaS — 11-module HR platform",
    metric: "11 Modules",
    link: "/work/bizedge",
  },
  {
    name: "Lumia",
    type: "FinTech — Electricity payment platform",
    metric: "6 DisCos",
    link: "/work/lumia",
  },
  {
    name: "Meridian Finance",
    type: "Web3 dashboard & DeFi analytics",
    metric: "Multi-chain",
    link: "/work/meridian",
  },
];

export const caseStudies: Record<string, CaseStudy> = {
  lumia: {
    title: "Lumia",
    year: "2019",
    clientType: "FinTech",
    engagementType: "Product Build",
    description: "Nigeria's electricity payment platform — prepaid & postpaid meters, multi-DisCo support, instant token delivery, and mobile apps.",
    tags: ["React", "TypeScript", "Node.js", "Payment Integration"],
    metric: "6 DisCos",
    logoSrc: "https://lumia.ng/assets/Logo.png",
    imageAlt: "Lumia Logo",
    href: "/work/lumia",
    externalUrl: "https://lumia.ng",
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

1. Web Platform — Responsive website for purchasing prepaid and postpaid electricity
2. Mobile Apps — Native iOS and Android applications for on-the-go purchases
3. DisCo Integration — Real-time integration with AEDC, PHEDC, IKEDC, KNEDC, EEDC, EKEDC
4. Meter Validation — Instant verification of meter numbers and account details
5. Payment Processing — Secure payment gateway integration with multiple options
6. Token Generation — Instant token generation and delivery system
7. Proxy Buying — Save beneficiary meter details for quick third-party purchases
8. Loyalty Program — Points accumulation and redemption system
9. Referral System — Wallet bonus system for successful app referrals
10. Reseller Program — White-label solution for entrepreneurs to start their own electricity vending business`,
    results: `• Platform processing thousands of electricity transactions monthly
• Partnerships with 6 major DisCos across Nigeria
• Instant token delivery — typically under 30 seconds from payment
• Mobile apps available on both iOS App Store and Google Play Store
• Reseller program enabling entrepreneurs to start electricity vending with N1,000
• Featured in Nigerian tech media including TechCabal
• Contact center in Wuse II, Abuja with 07056414224 support line`,
    learnings: `This project reinforced several critical principles for Nigerian fintech:

Trust is everything — Users need to believe their money will convert to electricity units. We built in multiple confirmation steps and instant feedback to build confidence. The 30-second token delivery became our most important feature.

Partnership complexity — Working with DisCos required understanding each company's technical capabilities and limitations. Not all DisCos had robust APIs, so we built fallback mechanisms.

Mobile-first isn't optional — Nigerian consumers predominantly access services via mobile. The native apps weren't an afterthought — they were designed alongside the web platform.

Reseller networks work — The white-label reseller program created a growth flywheel, turning customers into distribution partners.`,
  },
};
