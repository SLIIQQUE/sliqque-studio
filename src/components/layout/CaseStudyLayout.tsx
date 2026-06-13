"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { InteractiveTitle } from "@/components/ui/InteractiveTitle";

interface CaseStudyData {
  clientType: string;
  year: string;
  engagementType: string;
  stack: string[];
  context: string;
  problem: string;
  approach: string;
  whatWeBuilt: string;
  results: string;
  learnings: string;
  [key: string]: string | string[];
}

interface MetaEntry {
  label: string;
  key: string;
}

interface CaseStudyLayoutProps {
  caseStudy: CaseStudyData;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  heroBgColor?: string;
  externalUrl?: { url: string; label: string } | null;
  contact?: { label: string; href: string } | null;
  useInteractiveTitle?: boolean;
  sections: MetaEntry[];
}

export default function CaseStudyLayout({
  caseStudy,
  title,
  description,
  heroImage,
  heroAlt,
  heroBgColor = "#0a0a0a",
  externalUrl = null,
  contact = null,
  useInteractiveTitle = false,
  sections,
}: CaseStudyLayoutProps) {
  return (
    <div className="pt-[100px]">
      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors mb-12 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            >
              <ArrowLeft size={12} aria-hidden="true" />
              All Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase leading-tight mb-4">
                  {useInteractiveTitle ? (
                    <InteractiveTitle title={title} />
                  ) : (
                    title
                  )}
                  {externalUrl && (
                    <a
                      href={externalUrl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${externalUrl.label}`}
                      className="inline-flex items-center ml-3 align-middle hover:text-white/60 transition-colors"
                    >
                      <ArrowUpRight size={32} aria-hidden="true" />
                    </a>
                  )}
                </h1>
                <p className="text-xl font-body text-white/60 max-w-2xl leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div>
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">Client Type</span>
                    <span className="text-sm font-body">{caseStudy.clientType}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">Year</span>
                    <span className="text-sm font-body">{caseStudy.year}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">Engagement</span>
                    <span className="text-sm font-body">{caseStudy.engagementType}</span>
                  </div>
                  {externalUrl && (
                    <div>
                      <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">External</span>
                      <a
                        href={externalUrl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-body text-white hover:text-white/60 transition-colors inline-flex items-center gap-1"
                      >
                        {externalUrl.label}
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </a>
                    </div>
                  )}
                  {contact && (
                    <div>
                      <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">Contact</span>
                      <a
                        href={contact.href}
                        className="text-sm font-body text-white hover:text-white/60 transition-colors inline-flex items-center gap-1"
                      >
                        {contact.label}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div
            className="aspect-[8/5] rounded-[2px] overflow-hidden"
            style={{ backgroundColor: heroBgColor }}
          >
            <Image
              src={heroImage}
              alt={heroAlt}
              width={1280}
              height={800}
              className="w-full h-full object-cover grayscale"
              sizes="100vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block">Stack</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-9"
            >
              <div className="flex flex-wrap gap-2">
                {caseStudy.stack.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted border border-white/10 px-3 py-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {sections.map(({ label, key }) => (
        <section key={key} className="py-20 px-10 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-3"
              >
                <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block">
                  {label}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="lg:col-span-9"
              >
                <p className="text-lg font-body text-white/60 leading-relaxed whitespace-pre-line">
                  {String(caseStudy[key])}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block">Results</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-9"
            >
              <ul className="space-y-4">
                {caseStudy.results.split("\n").map((result, i) => (
                  <li
                    key={i}
                    className="text-lg font-body text-white/60 leading-relaxed flex items-start gap-4"
                  >
                    <span className="w-2 h-2 bg-white/20 rounded-full mt-2 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block">What We Learned</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-9"
            >
              <p className="text-lg font-body text-white/60 leading-relaxed">
                {caseStudy.learnings}
              </p>
            </motion.div>
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
              Ready to Build Something Similar?
            </h2>
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
