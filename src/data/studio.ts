export interface Differentiator {
  title: string;
  description: string;
}

export interface StudioInfo {
  name: string;
  founder: string;
  location: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  specialization: string;
  role: string;
}

export interface Belief {
  quote: string;
  description: string;
}

export const studioInfo: StudioInfo = {
  name: "SLIIQQUE",
  founder: "Gabriel Njoabozia",
  location: "Lagos, Nigeria",
  tagline: "Built with intent. Driven by craft.",
  headline: "Built with<br />intent.<br />Driven by craft.",
  subheadline: "About the Studio",
  description: "SLIIQQUE is a boutique software studio founded by Gabriel Njoabozia in Lagos, Nigeria. We build high-performance websites, workflow automation systems, AI-powered bots and agents, and production frontend systems. We lead engineering teams and ship products that drive real business results.",
  specialization: "Specializing in website development, workflow automation, AI bot and agent creation, and high-performance frontend engineering, building the digital infrastructure that makes businesses actually work.",
  role: "Founder & Lead Engineer",
};

export const differentiators: Differentiator[] = [
  {
    title: "AI & Automation-First",
    description: "AI bots for WhatsApp and Telegram. AI agents embedded in websites. Automation that works while you sleep.",
  },
  {
    title: "Modern Stack",
    description: "Built on React, Next.js, TypeScript, and Tailwind: the modern web stack that ships fast and scales clean.",
  },
  {
    title: "Shipped, Not Promised",
    description: "Every project we've shipped is live. We don't pitch capabilities we haven't already delivered.",
  },
];

export const beliefs: Belief[] = [
  {
    quote: "The interface is the product. If users can't figure it out in 5 seconds, you've already lost them.",
    description: "In product engineering, design isn't decoration. It's infrastructure. We build interfaces that reduce cognitive load, not add to it.",
  },
  {
    quote: "Production means it still works 6 months later.",
    description: "I write code that lasts. No shortcuts, no throwaway prototypes. Every project is architected to scale, maintain, and evolve with your product.",
  },
  {
    quote: "Complexity is easy. Simple is expensive, and worth it.",
    description: "Anyone can build a feature. It takes craft to build one that doesn't need documentation. I'd rather take longer to get it right than hand over something fragile.",
  },
];

export const studioServices: string[] = [
  "Website Design & Development",
  "SaaS Frontend Architecture",
  "AI Bot & Agent Development",
  "Design Systems & Component Libraries",
  "Performance Optimization",
  "AI Agent Consulting",
];

export const studioStack: string[] = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion",
  "Node.js", "PostgreSQL", "WhatsApp API", "Telegram Bot API",
  "Gemini API", "GitHub Actions",
];

export const studioStats = [
  { value: "2021", label: "Founded" },
  { value: "5+", label: "Projects shipped" },
  { value: "3", label: "Focus verticals" },
  { value: "1", label: "Principal" },
];

export const bioParagraphs: string[] = [
  "BSc Physics turned frontend engineer. Building production React and TypeScript systems, leading teams, shipping multi-module SaaS products, and engineering websites that convert visitors into customers.",
  "SLIIQQUE was built to do one thing well: take ambitious products from concept to production, from websites and automation to bots and AI agents, with craft and precision at every layer.",
];
