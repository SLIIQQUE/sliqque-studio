"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const beliefs = [
  {
    quote:
      "The interface is the product. If users can't figure it out in 5 seconds, you've already lost them.",
    description:
      "In Web3 and SaaS, design isn't decoration — it's infrastructure. I build interfaces that reduce cognitive load, not add to it.",
  },
  {
    quote: "Production means it still works 6 months later.",
    description:
      "I write code that lasts. No shortcuts, no throwaway prototypes. Every project is architected to scale, maintain, and evolve with your product.",
  },
  {
    quote:
      "Complexity is easy. Simple is expensive — and worth it.",
    description:
      "Anyone can build a feature. It takes craft to build one that doesn't need documentation. I'd rather take longer to get it right than hand over something fragile.",
  },
];

const services = [
  "Web3 Interface Design & Development",
  "SaaS Frontend Architecture",
  "On-chain Integration (Ethereum, Solana)",
  "Design Systems & Component Libraries",
  "Performance Optimization",
  "Smart Contract Frontend Integration",
];

const projects = [
  {
    name: "BizEdge",
    type: "SaaS — 11-module HR platform",
    metric: "11 Modules",
    link: "/work/bizedge",
  },
  {
    name: "DeFi Protocol",
    type: "Web3 dashboard & token gating",
    metric: "On-chain",
    link: "/expertise/defi",
  },
  {
    name: "NFT Marketplace",
    type: "Minting flow & wallet integration",
    metric: "Live",
    link: "/expertise/nft",
  },
];

const stack = [
  "React", "TypeScript", "Next.js", "Solidity", "Viem", "Ethers.js",
  "Framer Motion", "Tailwind CSS", "Node.js", "PostgreSQL",
];

export default function StudioPageClient() {
  return (
    <div className="pt-[100px]">
      <section className="min-h-[70vh] px-10 pb-32 border-b border-white/5 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative inline-block mb-8">
                <div className="relative w-[160px] h-[160px] flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/20"
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-[2px] rounded-2xl bg-background" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative text-center"
                  >
                    <span className="font-display font-bold text-5xl tracking-tighter block">
                      GN
                    </span>
                    <span className="text-[9px] font-body font-bold uppercase tracking-[0.2em] text-white/30 mt-1 block">
                      Founder
                    </span>
                  </motion.div>
                </div>
              </div>

              <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tighter uppercase leading-none mb-6">
                Gabriel<br />Njoabozia
              </h1>
              <p className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
                Founder & Lead Engineer — Lagos, Nigeria
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl xl:text-6xl tracking-tighter uppercase leading-tight mb-10">
                I build Web3 &amp; SaaS products that ship, scale, and drive real business.
              </h2>
              <div className="space-y-6 max-w-xl">
                <p className="text-lg font-body text-white/60 leading-relaxed">
                  BSc Physics turned frontend engineer. 5+ years building production React and TypeScript systems — leading teams, shipping multi-module SaaS products, integrating blockchain infrastructure into real consumer interfaces.
                </p>
                <p className="text-lg font-body text-white/60 leading-relaxed">
                  SLIIQQUE was built to do one thing well: take ambitious Web3 and SaaS products from concept to production, with craft and precision at every layer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2021", label: "Founded" },
              { value: "5+", label: "Projects shipped" },
              { value: "3", label: "Focus verticals" },
              { value: "1", label: "Principal" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-display font-bold text-5xl md:text-6xl tracking-tight block mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
              What I Work On
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase">
              Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-background p-8 group hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted">
                    0{i + 1}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-white/20 group-hover:text-white/60 transition-colors"
                  />
                </div>
                <h3 className="font-display font-bold text-lg tracking-tight uppercase leading-tight">
                  {service}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
              Selected Work
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase">
              Projects
            </h2>
          </motion.div>

          <div className="space-y-0">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={project.link}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="md:col-span-1">
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight uppercase mb-2 group-hover:text-white/80 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm font-body text-white/40">
                      {project.type}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex items-center">
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] border border-white/10 px-3 py-1.5">
                      {project.metric}
                    </span>
                  </div>
                  <div className="md:col-span-2 flex items-center justify-end">
                    <ArrowRight
                      size={20}
                      className="text-white/30 group-hover:text-white/80 group-hover:translate-x-2 transition-all"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white border border-white/10 hover:border-white/30 px-6 py-3 transition-all"
            >
              View All Work
              <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
              Tech Stack
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase">
              Tools I Use
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted border border-white/10 px-4 py-2 hover:border-white/30 hover:text-white/80 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
              What I Believe
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase">
              Philosophy
            </h2>
          </motion.div>

          <div className="space-y-16">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-4">
                  <blockquote className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight">
                    &ldquo;{belief.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="lg:col-span-8 lg:col-start-9">
                  <p className="text-base font-body text-white/60 leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase mb-8">
              Start a Project
            </h2>
            <p className="text-lg font-body text-white/60 max-w-xl mx-auto mb-12">
              I take on 2–3 projects per quarter. If you&apos;re building something ambitious, let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors"
            >
              Get in Touch
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
