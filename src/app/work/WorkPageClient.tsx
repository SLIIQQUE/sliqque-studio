"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Lumia",
    year: "2019",
    clientType: "FinTech",
    engagementType: "Product Build",
    description:
      "Nigeria's electricity payment platform — prepaid & postpaid meters, multi-DisCo support, instant token delivery, and mobile apps.",
    tags: ["React", "TypeScript", "Node.js", "Payment Integration"],
    metric: "6 DisCos",
    imageSrc:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Lumia Electricity Payment Platform",
    href: "/work/lumia",
  },
  {
    title: "BizEdge",
    year: "2021",
    clientType: "HRMS SaaS",
    engagementType: "Product Build",
    description:
      "All-in-one HR, Payroll & Productivity suite — 11 modules, 2,000+ businesses, mobile apps on iOS & Android.",
    tags: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    metric: "11 Modules",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "BizEdge HRMS Dashboard",
    href: "/work/bizedge",
  },
  {
    title: "Meridian Finance",
    year: "2024",
    clientType: "DeFi SaaS",
    engagementType: "Interface Engineering",
    description:
      "Real-time DeFi analytics dashboard with multi-chain support, portfolio tracking, and yield optimization tools.",
    tags: ["Web3", "Wagmi", "The Graph"],
    metric: "Multi-chain",
    imageSrc:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Meridian Finance Dashboard",
    href: "/work/meridian",
  },
  {
    title: "Origin Protocol",
    year: "2024",
    clientType: "NFT Platform",
    engagementType: "Product Build",
    description:
      "NFT minting platform with IPFS storage, zero-slippage trading engine, and creator-friendly royalty system.",
    tags: ["NFT", "Solidity", "IPFS"],
    metric: "On-chain Minting",
    imageSrc:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Origin Protocol Platform",
    href: "/work/origin",
  },
];

export default function WorkPageClient() {
  return (
    <div className="pt-[100px]">
      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
              Selected Work
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase leading-tight max-w-4xl">
              Projects
            </h1>
            <p className="mt-8 text-xl font-body text-white/60 max-w-2xl leading-relaxed">
              Products we've built, shaped, and shipped. Each project represents
              a real problem solved and a relationship built.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
