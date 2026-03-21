export interface Differentiator {
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
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

export const studioInfo: StudioInfo = {
  name: "SLIIQQUE",
  founder: "Gabriel Njoabozia",
  location: "Lagos, Nigeria",
  tagline: "Built with intent. Driven by craft.",
  headline: "Built with<br />intent.<br />Driven by craft.",
  subheadline: "About the Studio",
  description: "SLIIQQUE is a boutique software studio founded by Gabriel Njoabozia in Lagos, Nigeria. Building production frontend systems — leading engineering teams, shipping multi-module SaaS products, integrating blockchain infrastructure into real consumer interfaces.",
  specialization: "Specializing in Web3 interfaces, SaaS frontends, and the engineering layer that makes those products actually work.",
  role: "Founder & Lead Engineer",
};

export const differentiators: Differentiator[] = [
  {
    title: "Full-Stack Ownership",
    description: "From interface architecture to on-chain integration — one cohesive team owns the whole stack.",
  },
  {
    title: "Web3-Native",
    description: "Built on Ethereum, Solana, and modern tools like Viem and wagmi — not legacy abstractions.",
  },
  {
    title: "Shipped, Not Promised",
    description: "Every project we've shipped is live. We don't pitch capabilities we haven't already delivered.",
  },
];

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Projects Shipped" },
  { value: 3, suffix: "", label: "Focus Verticals" },
  { value: 1, suffix: "", label: "Principal" },
];

export const marqueeStats: string[] = [
  "Years Experience",
  "Projects Shipped",
  "Web3 & SaaS Focus",
  "Lagos, Nigeria",
];

export const bioParagraphs: string[] = [
  "BSc Physics turned frontend engineer. Building production React and TypeScript systems — leading teams, shipping multi-module SaaS products, integrating blockchain infrastructure into real consumer interfaces.",
  "SLIIQQUE was built to do one thing well: take ambitious Web3 and SaaS products from concept to production, with craft and precision at every layer.",
];
