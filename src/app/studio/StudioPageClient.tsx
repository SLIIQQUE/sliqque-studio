"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const beliefs = [
  {
    quote:
      "The best Web3 interface is one that doesn't feel like Web3 at all.",
    description:
      "We believe the future of decentralized applications is interfaces so intuitive that users never need to understand what's happening underneath.",
  },
  {
    quote: "Performance is a design decision, not an engineering afterthought.",
    description:
      "Speed isn't just a technical metric — it's a user experience choice. Every millisecond matters when you're trying to onboard new users.",
  },
  {
    quote:
      "We'd rather say no to a project than deliver something we're not proud of.",
    description:
      "Quality over quantity. We take on the projects that challenge us and the founders who are building what comes next.",
  },
];

const team = [
  {
    name: "Gabriel Njoabozia",
    role: "Founder & Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "BSc Physics → Frontend Engineer → Team Lead → Studio Founder. 5+ years building production React and TypeScript systems across SaaS, HR tech, and Web3. Led frontend engineering at Torilo and Zinary. Now building the products I wish existed.",
    stack: ["React", "TypeScript", "Next.js", "Solidity", "Ethers.js", "Viem"],
  },
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
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase leading-tight max-w-4xl">
              Built by Engineers.<br />Driven by Craft.
            </h1>
            <p className="mt-8 text-xl font-body text-white/60 max-w-2xl leading-relaxed">
              SLIIQQUE was founded by Gabriel Njoabozia in Lagos, Nigeria.
              After 5+ years building production frontend systems — leading
              engineering teams, shipping multi-module SaaS products, and
              integrating blockchain infrastructure into real consumer
              interfaces — the studio was built to do one thing well: Take
              ambitious Web3 and SaaS products from concept to production, with
              craft and precision at every layer.
            </p>
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
              The Team
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase">
              People
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="lg:col-span-4"
              >
                <div className="aspect-[3/4] bg-white/5 rounded-[2px] overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h3 className="font-display font-bold text-2xl tracking-tight uppercase">
                  {member.name}
                </h3>
                <p className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted mt-2 mb-4">
                  {member.role}
                </p>
                <p className="text-sm font-body text-white/60 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted border border-white/10 px-2 py-1"
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
                We're not a production line. Every engagement starts with a
                discovery session where we understand your users, your
                architecture constraints, and what "done" actually means.
              </p>
              <p className="text-lg font-body text-white/60 leading-relaxed">
                From there, we work in focused 2-week sprints with daily
                updates and a shared workspace. You always know where we are.
              </p>
              <p className="text-lg font-body text-white/80 leading-relaxed font-medium">
                We don't disappear. We don't overcommit. We ship.
              </p>
            </div>
          </motion.div>
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
              We're selective about the projects we take on. If you're building
              something ambitious, we'd love to hear about it.
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
