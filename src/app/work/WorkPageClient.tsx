"use client";

import React from "react";
import { motion } from "framer-motion";
import WorkCard from "@/components/ui/WorkCard";

const projects = [
  {
    title: "BizEdge",
    description:
      "Multi-module HRMS platform built for SMEs — from recruitment to payroll, time & attendance to task management. A comprehensive enterprise solution serving real businesses.",
    tags: ["React", "TypeScript", "Next.js"],
    metric: "9+ Modules",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "BizEdge HRMS Dashboard",
    href: "/work/bizedge",
  },
  {
    title: "Meridian Finance",
    description:
      "Real-time DeFi analytics dashboard with multi-chain support, portfolio tracking, and yield optimization tools. Built for DeFi power users who need data, fast.",
    tags: ["Web3", "Wagmi", "The Graph"],
    metric: "Multi-chain",
    imageSrc:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Meridian Finance Dashboard",
    href: "/work/meridian",
  },
  {
    title: "Origin Protocol",
    description:
      "NFT minting platform with IPFS storage, zero-slippage trading engine, and creator-friendly royalty system. Built for artists who want control.",
    tags: ["NFT", "Solidity", "IPFS"],
    metric: "On-chain Minting",
    imageSrc:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Origin Protocol Platform",
    href: "/work/origin",
  },
  {
    title: "Nexus Analytics",
    description:
      "On-chain data visualization platform for institutional investors. Real-time tracking of whale wallets, token flows, and protocol metrics.",
    tags: ["D3.js", "Viem", "React"],
    metric: "Real-time Data",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Nexus Analytics Platform",
    href: "/work/nexus",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <WorkCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
