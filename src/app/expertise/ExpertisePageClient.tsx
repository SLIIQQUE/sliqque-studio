"use client";

import React from "react";
import { motion } from "framer-motion";
import ExpertiseCard from "@/components/ui/ExpertiseCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const verticals = [
  {
    title: "DeFi",
    description:
      "Dashboards, staking interfaces, liquidity UIs, and yield optimization tools. We build the interfaces that make DeFi usable.",
    href: "/expertise/defi",
  },
  {
    title: "NFT",
    description:
      "Minting platforms, marketplace UIs, and collection managers. Built for creators who want control and collectors who want simplicity.",
    href: "/expertise/nft",
  },
  {
    title: "SaaS",
    description:
      "Frontend architecture for SaaS products — from admin dashboards to user-facing features. React, Next.js, TypeScript.",
    href: "/expertise/saas",
  },
];

const capabilities = [
  {
    title: "Wallet Integration",
    description:
      "MetaMask, WalletConnect, Coinbase Wallet — we integrate any wallet provider with consistent, accessible patterns.",
  },
  {
    title: "On-chain Data",
    description:
      "Real-time data from The Graph, subgraphs, and direct RPC calls. We make on-chain data fast and usable.",
  },
  {
    title: "Smart Contract UI",
    description:
      "Readable interfaces for complex contract interactions. Token swaps, staking, governance — all simplified.",
  },
  {
    title: "Performance",
    description:
      "Sub-second load times, smooth animations, and 60fps interactions. Performance is a feature, not an afterthought.",
  },
];

export default function ExpertisePageClient() {
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
              Expertise
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase leading-tight max-w-4xl">
              What We Do Well
            </h1>
            <p className="mt-8 text-xl font-body text-white/60 max-w-2xl leading-relaxed">
              We focus on three verticals where we have deep expertise and a
              track record of shipping production software. Not generalists —
              specialists.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verticals.map((vertical, i) => (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ExpertiseCard {...vertical} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
              Capabilities
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase">
              Core Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-4"
              >
                <h3 className="font-display font-bold text-2xl tracking-tight uppercase">
                  {cap.title}
                </h3>
                <p className="text-sm font-body text-white/60 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase mb-8">
              Building in One of These Areas?
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors"
            >
              Let's Talk
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
