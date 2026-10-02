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
  /** Plain-language results, used in llms-full.txt. */
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    title: "BizEdge",
    year: "2021",
    clientType: "HRMS SaaS",
    engagementType: "Product Build",
    description: "All-in-one HR, Payroll & Productivity suite: 11 modules, 2,000+ businesses, mobile apps on iOS & Android.",
    tags: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    metric: "11 Modules",
    logoSrc: "/images/bizedge-logo.svg",
    imageSrc: "/images/bizedge-screenshot.jpg",
    imageAlt: "BizEdge HR and Payroll platform dashboard",
    href: "/work/bizedge",
    bgColor: "#1a1a2e",
    outcomes: [
      "All-in-one platform replacing 5+ disconnected HR tools",
      "PAYE compliance under the Nigeria Tax Act built into payroll",
      "Payroll processing time reduced from days to hours",
      "Mobile app on iOS and Android with 2,000+ active users",
      "Used by 2,000+ businesses across Africa and Europe",
    ],
  },
  {
    title: "SLIIQQUE Real Estate",
    year: "2026",
    clientType: "Real Estate",
    engagementType: "Product Build",
    description: "A property website with a built-in CMS: searchable listings, agent profiles, articles, and enquiry capture, all managed from an admin panel with no redeploys.",
    tags: ["Next.js", "React", "Payload CMS", "PostgreSQL", "Tailwind CSS"],
    metric: "CMS-Powered",
    imageSrc: "/images/real-estate-screenshot.jpg",
    imageAlt: "SLIIQQUE Real Estate homepage with property search",
    href: "/work/real-estate",
    bgColor: "#102E26",
    outcomes: [
      "Website and CMS delivered as one system, so content updates need no code changes",
      "Edits reach the live site within seconds",
      "Every enquiry lands in a single Leads inbox",
      "Production setup on Neon PostgreSQL and Vercel Blob with database migrations",
    ],
  },
  {
    title: "Lumia",
    year: "2019",
    clientType: "FinTech",
    engagementType: "Product Build",
    description: "Nigeria's electricity payment platform: prepaid & postpaid meters, multi-DisCo support, instant token delivery, and mobile apps.",
    tags: ["React", "TypeScript", "Node.js", "Payment Integration"],
    metric: "6 DisCos",
    logoSrc: "https://lumia.ng/assets/Logo.png",
    imageSrc: "/images/lumia-screenshot.jpg",
    imageAlt: "Lumia electricity payment platform homepage",
    href: "/work/lumia",
    bgColor: "#0f0f0f",
    outcomes: [
      "Partnerships with 6 major DisCos across Nigeria",
      "Instant token delivery by SMS and email, typically under 30 seconds",
      "Prepaid and postpaid payments with iOS and Android apps",
      "Reseller program that lets entrepreneurs start electricity vending",
    ],
  },
  {
    title: "Mo Touch",
    year: "2024",
    clientType: "Beauty & Wellness",
    engagementType: "Product Build",
    description: "Premium interactive gallery for a makeup artist: immersive scroll-driven animations, touch-optimized interactions, and a digital-first portfolio experience.",
    tags: ["Vite", "GSAP", "Framer Motion"],
    metric: "Interactive",
    imageSrc: "/images/motouch-screenshot.jpg",
    imageAlt: "Mo Touch — premium interactive makeup artist portfolio gallery with immersive scroll-driven animations",
    href: "/work/mo-touch",
    bgColor: "#0a0a0a",
    outcomes: [
      "Smooth 60fps scroll animations on mobile and desktop",
      "Touch-optimised interactions built for beauty discovery",
      "Static build on Vercel with global edge caching for fast loads and SEO",
    ],
  },
  {
    title: "ZINID",
    year: "2018",
    clientType: "RegTech / Fraud Prevention",
    engagementType: "Product Build",
    description: "Africa's fraud prevention infrastructure platform: credit risk assessment, transaction monitoring, and shared risk memory for the fintech ecosystem.",
    tags: ["React", "TypeScript", "Next.js"],
    metric: "Risk Infrastructure",
    logoSrc: "https://zinid.africa/logo192.png",
    imageSrc: "/images/zinid-screenshot.jpg",
    imageAlt: "ZINID fraud prevention platform homepage",
    href: "/work/zinid",
    bgColor: "#0a0a0a",
    outcomes: [
      "Shared fraud intelligence network connecting multiple Nigerian fintech platforms",
      "Fraud scores updated in real time across the ecosystem",
      "Reduced onboarding bonus abuse by identifying repeat offenders across platforms",
      "AML compliance infrastructure aligned with CBN requirements",
    ],
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
    type: "SaaS: 11-module HR platform",
    metric: "11 Modules",
    link: "/work/bizedge",
  },
  {
    name: "SLIIQQUE Real Estate",
    type: "Real Estate: CMS-powered property platform",
    metric: "CMS-Powered",
    link: "/work/real-estate",
  },
  {
    name: "Lumia",
    type: "FinTech: Electricity payment platform",
    metric: "6 DisCos",
    link: "/work/lumia",
  },
  {
    name: "Mo Touch",
    type: "Beauty: Interactive makeup artist portfolio",
    metric: "Interactive",
    link: "/work/mo-touch",
  },
  {
    name: "ZINID",
    type: "RegTech: Fraud prevention & risk infrastructure",
    metric: "Risk Infrastructure",
    link: "/work/zinid",
  },
];

// Note: Individual case study data is co-located with their respective
// page.tsx files under src/app/work/[slug]/
