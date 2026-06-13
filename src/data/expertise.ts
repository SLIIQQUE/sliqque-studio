export interface ExpertiseVertical {
  title: string;
  description: string;
  href: string;
  metric: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectReference {
  name: string;
  description: string;
  href: string;
}

export const verticals: ExpertiseVertical[] = [
  {
    title: "SaaS & Full-Stack Platforms",
    description:
      "Full-stack React and Next.js platforms with complex module architectures, payment integrations, real-time data processing, and mobile apps. We've built multi-module HRMS suites handling payroll, recruitment, and performance management, and digital payment platforms processing thousands of transactions daily.",
    href: "/expertise/saas",
    metric: "Shipped",
    imageSrc: "/images/bizedge-screenshot.jpg",
    imageAlt: "BizEdge HR and Payroll platform dashboard",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "FinTech & RegTech Systems",
    description:
      "Payment infrastructure and fraud prevention platforms built for the African market. DisCo API integration, real-time token generation, multi-gateway payment processing, shared risk intelligence networks, and AML compliance systems. Built to handle scale, complexity, and regulatory requirements.",
    href: "/expertise/frontend-architecture",
    metric: "Live",
    imageSrc: "/images/lumia-screenshot.jpg",
    imageAlt: "Lumia electricity payment platform",
    tags: ["React", "Node.js", "Payment APIs", "Fraud Detection"],
  },
  {
    title: "AI Agents & Automation",
    description:
      "AI bots for WhatsApp, Telegram, and social platforms. AI agents embedded directly into websites for customer support, lead qualification, and booking automation. Workflow automation systems that connect websites, bots, and backend services into unified operations.",
    href: "/expertise/design-systems",
    metric: "Active",
    imageSrc: "/images/motouch-screenshot.jpg",
    imageAlt: "Mo Touch interactive portfolio gallery",
    tags: ["AI Agents", "Bot APIs", "Automation", "Gemini API"],
  },
];

export const capabilities: Capability[] = [
  {
    title: "React & Next.js Engineering",
    description:
      "Component architecture, state management, SSR and static generation. We build frontends that stay fast as features grow, not monoliths that slow down with every release. BizEdge's 11-module HRMS runs on this foundation.",
    icon: "Layers",
  },
  {
    title: "AI Bot & Agent Systems",
    description:
      "Custom AI bots for WhatsApp and Telegram. Website-embedded AI agents handling customer support, lead qualification, and booking. Built with the Gemini API for natural conversations that actually convert.",
    icon: "BrainCircuit",
  },
  {
    title: "Payment & API Integration",
    description:
      "Payment gateway integration, DisCo API connections for real-time meter validation and token generation, multi-provider API orchestration. Lumia processes transactions across 6 electricity distribution companies through a unified integration layer.",
    icon: "Building2",
  },
  {
    title: "Interactive & Motion Frontends",
    description:
      "Scroll-driven storytelling with GSAP ScrollTrigger, Framer Motion animations, touch-optimized interactions, and immersive digital experiences. Mo Touch proves what a frontend can be when motion serves narrative.",
    icon: "Palette",
  },
  {
    title: "Workflow Automation",
    description:
      "End-to-end automation connecting websites, bots, and backend systems. Reduce manual operations, automate customer engagement, and build systems that work while you sleep.",
    icon: "Workflow",
  },
];

export const projectReferences: ProjectReference[] = [
  {
    name: "BizEdge",
    description: "11-module HRMS, Payroll & Productivity suite — 2,000+ businesses",
    href: "/work/bizedge",
  },
  {
    name: "Lumia",
    description: "Electricity payment platform — 6 DisCos, thousands of monthly transactions",
    href: "/work/lumia",
  },
  {
    name: "ZINID",
    description: "Fraud prevention infrastructure — shared risk intelligence for fintech",
    href: "/work/zinid",
  },
  {
    name: "Mo Touch",
    description: "Interactive portfolio — scroll-driven animations and touch interactions",
    href: "/work/mo-touch",
  },
];
