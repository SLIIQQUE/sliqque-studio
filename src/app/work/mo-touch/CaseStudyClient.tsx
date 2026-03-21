"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { InteractiveTitle } from "@/components/ui/InteractiveTitle";

const caseStudy = {
  clientType: "Beauty & Wellness",
  year: "2024",
  engagementType: "Product Build",
  stack: ["Vite", "GSAP", "Framer Motion", "TypeScript"],
  context: `Mo Touch is a premium interactive portfolio and digital experience for a makeup artist — built to replace the static gallery format that dominates the beauty industry. The brief was simple: create something that feels as premium as the work itself. The brand needed a digital home that could showcase artistry through immersive, scroll-driven storytelling rather than a flat grid of images.

The makeup industry is saturated with portfolios that look identical — a masonry grid of before-and-after shots, minimal context, no sense of process or craft. Mo Touch was an opportunity to build something that communicated the artist's identity, aesthetic, and attention to detail before a single image loaded.`,
  problem: `Traditional beauty portfolios present work in isolation:

• Images carry no narrative — a visitor sees the result but not the artistry behind it
• No sense of the artist's identity, process, or aesthetic philosophy
• Mobile experience is an afterthought, even though most beauty discovery happens on Instagram and TikTok
• Static pages fail to capture the sensory, tactile nature of makeup artistry
• No differentiation from the hundreds of identical portfolios flooding the beauty space`,
  approach: `We treated this as a digital art installation, not a website. Every scroll interaction, every page transition, every hover state was designed to communicate the same precision and intentionality that defines the makeup work itself.

Key decisions:
• Scroll-driven storytelling with GSAP ScrollTrigger — each section unfolds like a page turn in a fashion editorial
• Touch-optimized interactions throughout — swipe gestures, pinch-to-zoom, smooth momentum scrolling
• Full-screen immersive image presentation with cinematic letterboxing
• Dramatic typography paired with a restrained, dark aesthetic so the work always takes center stage
• Character-by-character title animation that mirrors the meticulous layering of makeup application`,
  whatWeBuilt: `We built a fully immersive, scroll-driven digital portfolio:

1. Hero — Full-viewport intro with animated title reveal and ambient motion
2. Gallery — Immersive scroll-driven image sequences with cinematic aspect ratios
3. Services Section — Animated feature reveals synced to scroll position
4. About Section — Artist bio with portrait imagery and brand story
5. Contact — Minimal, functional booking or inquiry form
6. Touch Interactions — Swipe between images, momentum scrolling, smooth transitions
7. Mobile-First Design — Every interaction refined for touch, not just hover states`,
  results: `• A digital portfolio that stands apart from every other beauty portfolio in the space
• Smooth 60fps scroll animations across mobile and desktop
• Touch-optimized interactions that feel native to the beauty discovery experience
• Portfolio deployed on Vercel with global edge caching for instant load times
• Built as a static site for maximum performance and SEO discoverability`,
  learnings: `Motion should serve narrative, not distract from it. In a portfolio about visual artistry, every animation had to feel intentional — like a deliberate brush stroke rather than a decorative flourish. We stripped away anything that didn't support the work.

Touch interactions require different affordances than hover. What works with a mouse pointer fails on a fingertip. We rebuilt the gallery's navigation entirely for swipe — larger hit targets, momentum-based scrolling, and visual feedback that confirms touch registration.`,
};

export default function CaseStudyClient() {
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
              className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors mb-12"
            >
              <ArrowLeft size={12} />
              All Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase leading-tight mb-4">
                  <InteractiveTitle title="Mo Touch" />
                  <a
                    href="https://mo-touch.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center ml-3 align-middle hover:text-white/60 transition-colors"
                  >
                    <ArrowUpRight size={32} />
                  </a>
                </h1>
                <p className="text-xl font-body text-white/60 max-w-2xl leading-relaxed">
                  Premium interactive portfolio — immersive scroll-driven storytelling
                  and touch-optimized interactions for a makeup artist.
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div>
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">
                      Client Type
                    </span>
                    <span className="text-sm font-body">{caseStudy.clientType}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">
                      Year
                    </span>
                    <span className="text-sm font-body">{caseStudy.year}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">
                      Engagement
                    </span>
                    <span className="text-sm font-body">{caseStudy.engagementType}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">
                      External
                    </span>
                    <a
                      href="https://mo-touch.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-body text-white hover:text-white/60 transition-colors inline-flex items-center gap-1"
                    >
                      mo-touch.vercel.app
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[4/3] bg-[#0a0a0a] rounded-[2px] overflow-hidden flex items-center justify-center">
            <InteractiveTitle
              title="Mo Touch"
              className="font-display font-bold leading-none tracking-tighter uppercase"
              spanClassName="text-7xl md:text-8xl lg:text-9xl"
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
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block">
                Stack
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-9"
            >
              <div className="flex flex-wrap gap-2">
                {caseStudy.stack.map((tech) => (
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

      {[
        { label: "The Context", key: "context" },
        { label: "The Problem", key: "problem" },
        { label: "Our Approach", key: "approach" },
        { label: "What We Built", key: "whatWeBuilt" },
      ].map(({ label, key }) => (
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
                  {caseStudy[key as keyof typeof caseStudy] as string}
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
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block">
                Results
              </span>
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
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block">
                What We Learned
              </span>
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
