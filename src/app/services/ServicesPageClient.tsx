"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    index: "01",
    title: "Product Build",
    description:
      "From brief to mainnet in weeks — not months. Full-stack product engineering for Web3 founders ready to ship.",
    features: [
      "Smart contract integration",
      "dApp interface engineering",
      "Wallet auth + on-chain data",
      "Launch-ready architecture",
      "Post-launch support",
    ],
    startingAt: "From $15,000",
    href: "/contact",
  },
  {
    index: "02",
    title: "Interface Engineering",
    description:
      "SaaS and Web3 interfaces built for performance and conversion. React, Next.js, TypeScript.",
    features: [
      "Pixel-perfect implementation",
      "Performance-first architecture",
      "Component systems that scale",
      "Conversion-optimized UX",
      "Design system integration",
    ],
    startingAt: "From $8,000",
    href: "/contact",
  },
  {
    index: "03",
    title: "Studio Retainer",
    description:
      "Your dedicated frontend engineering partner — on call, embedded, always shipping.",
    features: [
      "Priority access",
      "40hrs/month minimum",
      "Monthly strategy sessions",
      "Ongoing support & iteration",
      "Dedicated Slack channel",
    ],
    startingAt: "From $6,000/month",
    href: "/contact",
  },
  {
    index: "04",
    title: "Technical Audit",
    description:
      "We review your existing product and tell you exactly what to fix and why.",
    features: [
      "Performance diagnosis",
      "Architecture review",
      "Prioritised action plan",
      "Implementation roadmap",
      "Follow-up call included",
    ],
    startingAt: "Fixed: $2,500",
    href: "/contact",
  },
];

const process = [
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
      "We design the technical architecture that will support your product at scale — from smart contract interfaces to frontend state management.",
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

export default function ServicesPageClient() {
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
              Services
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase leading-tight max-w-4xl">
              Engagement Types Built for Founders
            </h1>
            <p className="mt-8 text-xl font-body text-white/60 max-w-2xl leading-relaxed">
              We offer four engagement types — not a menu of hourly services.
              Each is designed for a specific stage of your product journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ServiceCard {...service} />
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
              How We Work
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase">
              Our Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-4"
              >
                <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
                  {step.step}
                </span>
                <h3 className="font-display font-bold text-2xl tracking-tight uppercase">
                  {step.title}
                </h3>
                <p className="text-sm font-body text-white/60 leading-relaxed">
                  {step.description}
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
              Ready to Start?
            </h2>
            <p className="text-lg font-body text-white/60 max-w-xl mx-auto mb-12">
              We take on 2–3 new projects per quarter. Let's see if we're a
              fit.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors"
            >
              Start a Conversation
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
