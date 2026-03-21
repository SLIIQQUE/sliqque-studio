"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Gabriel Njoabozia",
    role: "Founder & Lead Engineer",
    initials: "GN",
    bio: "5+ years building production frontend systems across SaaS, HR tech, and Web3. Led engineering teams shipping multi-module products from zero to launch.",
    stack: ["React", "TypeScript", "Next.js", "Solidity", "Viem"],
  },
  {
    name: "Chidi Okonkwo",
    role: "Lead Designer",
    initials: "CO",
    bio: "Crafts interfaces that reduce cognitive load. Background in product design at scale — from enterprise dashboards to consumer Web3 products.",
    stack: ["Figma", "Design Systems", "UX Research", "Framer"],
  },
];

const beliefs = [
  {
    quote:
      "The interface is the product. If users can't figure it out in 5 seconds, you've already lost them.",
    description:
      "In Web3 and SaaS, design isn't decoration — it's infrastructure. We build interfaces that reduce cognitive load, not add to it.",
  },
  {
    quote: "Production means it still works 6 months later.",
    description:
      "We write code that lasts. No shortcuts, no throwaway prototypes. Every project is architected to scale, maintain, and evolve with your product.",
  },
  {
    quote:
      "Complexity is easy. Simple is expensive — and worth it.",
    description:
      "Anyone can build a feature. It takes craft to build one that doesn't need documentation. We'd rather take longer to get it right than hand over something fragile.",
  },
];

const stats = [
  { value: "2021", label: "Founded" },
  { value: "5+", label: "Projects shipped" },
  { value: "2,000+", label: "Businesses served" },
  { value: "3", label: "Focus verticals" },
];

export default function StudioPageClient() {
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
              About the Studio
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase leading-tight max-w-4xl mb-12">
              We build Web3 and SaaS<br />products that last.
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display font-bold text-4xl tracking-tight block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <p className="text-lg font-body text-white/60 leading-relaxed">
                SLIIQQUE is a boutique software studio based in Lagos, Nigeria. We
                partner with Web3 founders and SaaS builders to ship the products
                they've designed — from interface architecture to production deployment.
              </p>
              <p className="text-lg font-body text-white/60 leading-relaxed">
                We don't do everything. We do Web3 interfaces, SaaS frontends,
                and the things in between that make those products actually work
                for real users. Every project gets senior engineering attention — no
                juniors, no hand-offs, no project managers in the middle.
              </p>
            </div>
          </motion.div>
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
              The Team
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase">
              Two People. Full Stack.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-white/10 p-10"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-lg tracking-tight">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg tracking-tight uppercase">
                      {member.name}
                    </h3>
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted">
                      {member.role}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-body text-white/60 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted border border-white/10 px-3 py-1.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
              What We Believe
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
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-4">
                  <blockquote className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight">
                    "{belief.quote}"
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
              Process
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="space-y-8">
              <p className="text-lg font-body text-white/60 leading-relaxed">
                Every engagement starts with understanding what you're building and
                who it's for. We spend time in discovery so we don't waste time
                building the wrong thing.
              </p>
              <p className="text-lg font-body text-white/60 leading-relaxed">
                From there, we work in focused 2-week sprints with regular updates
                and a shared workspace. You always know where we are and what's
                next.
              </p>
              <p className="text-lg font-body text-white/80 leading-relaxed font-medium">
                Fixed scope. Fixed timeline. No surprises. And we stay involved
                after launch.
              </p>
            </div>
          </motion.div>
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
              Why We're Different
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: "Senior attention, every time",
                body: "No juniors, no hand-offs, no project managers. The people you talk to are the people building your product.",
              },
              {
                title: "We say no when we should",
                body: "We're not the right fit for every project. If we're not sure we can deliver, we'll tell you honestly — and often point you somewhere better.",
              },
              {
                title: "Fixed scope, no surprises",
                body: "You get a complete quote before we start. If scope changes, we discuss it openly before doing any additional work.",
              },
              {
                title: "We stay after launch",
                body: "The launch isn't the end. We're available for questions, fixes, and ongoing support long after we've handed over.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3 className="font-display font-bold text-xl tracking-tight uppercase mb-4">
                  {item.title}
                </h3>
                <p className="text-sm font-body text-white/60 leading-relaxed">
                  {item.body}
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
              Work With Us
            </h2>
            <p className="text-lg font-body text-white/60 max-w-xl mx-auto mb-12">
              We take on 2–3 projects per quarter. If you're building something
              ambitious, we'd love to hear about it.
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
