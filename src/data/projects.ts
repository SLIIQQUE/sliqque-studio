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
