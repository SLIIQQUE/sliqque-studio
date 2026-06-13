export interface ServiceItemData {
  index: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
  features?: string[];
  highlight?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const services: ServiceItemData[] = [
  {
    index: "01",
    title: "Website Design & Development",
    description:
      "Professional, conversion-focused websites for businesses ready to establish their online presence and grow.",
    icon: "Monitor",
    price: "From $1,000",
    features: [
      "Custom responsive design",
      "SEO optimization",
      "Fast load times",
      "Mobile-first",
    ],
    highlight: true,
  },
  {
    index: "02",
    title: "AI Bot & Agent Development",
    description:
      "Custom AI bots for WhatsApp, Telegram, and social platforms. AI agents embedded in websites for real-time customer engagement, lead capture, and automation.",
    icon: "Rocket",
    price: "From $3,000",
    features: [
      "WhatsApp bot integration",
      "Telegram bot development",
      "Website AI agents",
      "Social platform automation",
    ],
  },
  {
    index: "03",
    title: "Interface Engineering",
    description:
      "SaaS and business interfaces built for performance and conversion. React, Next.js, TypeScript.",
    icon: "Layers",
    price: "From $8,000",
    features: [
      "Pixel-perfect build",
      "Performance-first",
      "Component systems",
      "Conversion-focused",
    ],
  },
  {
    index: "04",
    title: "Studio Retainer",
    description:
      "Your dedicated engineering partner for websites, automation, and AI agents. On call, embedded, always shipping.",
    icon: "Boxes",
    price: "From $6,000/month",
    features: [
      "Priority access",
      "40hrs/month",
      "Strategy sessions",
      "Ongoing support",
    ],
  },
  {
    index: "05",
    title: "Technical Audit",
    description:
      "We audit your website, workflows, and tech stack. Then we tell you exactly what to fix, automate, or rebuild.",
    icon: "Shield",
    price: "Fixed: $2,500",
    features: [
      "Performance audit",
      "Architecture review",
      "Action plan",
      "Implementation guide",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start with a focused session to understand your users, your architecture constraints, and what 'done' actually means for your product.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "We design the technical architecture that will support your product at scale, from component systems to state management and deployment.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Two-week focused sprints with daily updates and a shared workspace. You always know where we are and what's next.",
  },
  {
    step: "04",
    title: "Ship",
    description:
      "We don't disappear after launch. We ensure smooth deployment, monitor performance, and iterate based on real user feedback.",
  },
];
