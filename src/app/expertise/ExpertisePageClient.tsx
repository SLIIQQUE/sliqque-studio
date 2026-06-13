"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Link from "next/link";
import { ArrowRight, Layers, Building2, BrainCircuit, Workflow, Palette } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { verticals, capabilities, projectReferences } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Layers, Building2, BrainCircuit, Workflow, Palette,
};

export default function ExpertisePageClient() {
  return (
    <div className="pt-[100px]">
      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Expertise"
            title="Built These, Can Build Yours"
            description="We don't pitch capabilities we haven't shipped. Every vertical below is backed by production software that's live, processing real transactions, and serving real users. Here's what we actually do."
            as="h1"
          />
        </div>
      </section>

      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {verticals.map((vertical, i) => (
              <ProjectCard key={vertical.title} {...vertical} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Capabilities" title="What We Ship" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {capabilities.map((cap, i) => {
              const Icon = iconMap[cap.icon] || Layers;
              return (
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
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white/40" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-2xl tracking-tight uppercase">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-sm font-body text-white/60 leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Shipped Work" title="Projects That Back This Up" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectReferences.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={project.href}
                  className="group block p-8 border border-white/5 hover:border-white/20 transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-2xl tracking-tight uppercase group-hover:text-white/80 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <p className="text-sm font-body text-white/50 leading-relaxed">
                    {project.description}
                  </p>
                </Link>
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
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase mb-6">
            Need Something Built in One of These Areas?
            </h2>
            <p className="text-base font-body text-white/50 max-w-xl mx-auto mb-10">
              We take on 2&ndash;3 new projects per quarter. If your project matches what we&apos;ve already shipped, we can move fast.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            >
              Let&apos;s Talk
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
