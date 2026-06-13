"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  beliefs,
  studioServices,
  studioStack,
  studioStats,
  bioParagraphs,
  studioProjects,
} from "@/data";

function FounderSection() {
  return (
    <section aria-label="About the founder" className="min-h-[70vh] px-10 pb-32 border-b border-white/5 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative inline-block mb-8">
              <div className="relative w-[160px] h-[160px] flex items-center justify-center overflow-hidden rounded-2xl">
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
                  className="relative"
                >
                  <Image
                    src="/images/Gabriel.jpg"
                    alt="Gabriel Njoabozia"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tighter uppercase leading-none mb-6">
              Gabriel<br />Njoabozia
            </h1>
            <p className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
              Founder & Lead Engineer, Lagos, Nigeria
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl xl:text-6xl tracking-tighter uppercase leading-tight mb-10">
              We build products that ship, scale, and drive real business.
            </h2>
            <div className="space-y-6 max-w-xl">
              {bioParagraphs.map((p, i) => (
                <p key={i} className="text-lg font-body text-white/60 leading-relaxed">{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-32 px-10 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {studioStats.map((stat) => (
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
  );
}

function ServicesListSection() {
  return (
    <section aria-labelledby="studio-services-heading" className="py-32 px-10 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="What I Work On" title="Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {studioServices.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 group hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted">0{i + 1}</span>
                <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/60 transition-colors" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-lg tracking-tight uppercase leading-tight">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section aria-labelledby="studio-projects-heading" className="py-32 px-10 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Selected Work" title="Projects" />

        <div className="space-y-0">
          {studioProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={project.link}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-white/5 hover:border-white/20 transition-colors"
              >
                <div className="md:col-span-1">
                  <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted">0{i + 1}</span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight uppercase mb-2 group-hover:text-white/80 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm font-body text-white/50">{project.type}</p>
                </div>
                <div className="md:col-span-2 flex items-center">
                  <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] border border-white/10 px-3 py-1.5">
                    {project.metric}
                  </span>
                </div>
                <div className="md:col-span-2 flex items-center justify-end">
                  <ArrowRight size={20} className="text-white/30 group-hover:text-white/80 group-hover:translate-x-2 transition-all" aria-hidden="true" />
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
            className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white border border-white/10 hover:border-white/30 px-6 py-3 transition-all focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
          >
            View All Work
            <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section aria-labelledby="studio-tech-heading" className="py-32 px-10 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Tech Stack" title="Tools I Use" />

        <div className="flex flex-wrap gap-3">
          {studioStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted border border-white/10 px-4 py-2 hover:border-white/30 hover:text-white/80 transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section aria-labelledby="studio-philosophy-heading" className="py-32 px-10 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="What I Believe" title="Philosophy" />

        <div className="space-y-16">
          {beliefs.map((belief, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-4">
                <blockquote className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight">
                  &ldquo;{belief.quote}&rdquo;
                </blockquote>
              </div>
              <div className="lg:col-span-8 lg:col-start-9">
                <p className="text-base font-body text-white/60 leading-relaxed">{belief.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StartProjectSection() {
  return (
    <section aria-label="Start a Project" className="py-32 px-10">
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
            I take on 2&ndash;3 projects per quarter. If you&apos;re building something ambitious, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
          >
            Get in Touch
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function StudioPageClient() {
  return (
    <div className="pt-[100px]">
      <FounderSection />
      <StatsSection />
      <ServicesListSection />
      <ProjectsSection />
      <TechStackSection />
      <PhilosophySection />
      <StartProjectSection />
    </div>
  );
}
