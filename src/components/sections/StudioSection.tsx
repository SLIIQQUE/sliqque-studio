"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const differentiators = [
  {
    title: "Full-Stack Ownership",
    description: "From interface architecture to on-chain integration — one person owns the whole stack.",
  },
  {
    title: "Web3-Native",
    description: "Built on Ethereum, Solana, and modern tools like Viem and wagmi — not legacy abstractions.",
  },
  {
    title: "Shipped, Not Promised",
    description: "Every project I've shipped is live. I don't pitch capabilities I haven't already delivered.",
  },
];

const StudioSection = () => {
  return (
    <section className="py-32 px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-orange-500/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40 block mb-4">
                About the Studio
              </span>
              <h2 className="font-display font-bold text-5xl md:text-6xl xl:text-7xl tracking-tight uppercase leading-none">
                Built by<br />one person.<br />Driven by craft.
              </h2>
            </div>
            <div>
              <p className="text-xl font-body text-white/50 leading-relaxed mb-6">
                SLIIQQUE is a boutique software studio founded by Gabriel Njoabozia in Lagos, Nigeria. 5+ years building production frontend systems — leading engineering teams, shipping multi-module SaaS products, integrating blockchain infrastructure into real consumer interfaces.
              </p>
              <p className="text-lg font-body text-white/40">
                Specializing in Web3 interfaces, SaaS frontends, and the engineering layer that makes those products actually work.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-20">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-background p-10 group hover:bg-white/[0.03] transition-colors"
            >
              <h3 className="font-display font-bold text-xl tracking-tight uppercase mb-4">
                {item.title}
              </h3>
              <p className="text-sm font-body text-white/50 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 py-12 border-t border-b border-white/5"
        >
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight uppercase mb-2">
              Gabriel Njoabozia
            </h3>
            <p className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted">
              Founder &amp; Lead Engineer — Lagos, Nigeria
            </p>
          </div>
          <Link
            href="/studio"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            Full Story
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioSection;
