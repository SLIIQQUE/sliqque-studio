"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

const caseStudy = {
  clientType: "SME SaaS",
  year: "2021",
  engagementType: "Product Build",
  stack: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
  context: `BizEdge is an all-in-one HR, Payroll & Productivity suite serving 2,000+ fast-growing businesses across Africa and Europe. Founded in 2012 and relaunched as a digital product in 2021, the platform consolidates every people operation — from recruitment to payroll, time & attendance to performance management — into a single, unified interface.

The product had been operating with disconnected tools and manual processes. BizEdge needed a complete platform rebuild that could handle the full complexity of Nigerian HR requirements (PAYE tax calculations, pension contributions, multi-state payroll) while remaining intuitive for non-technical HR managers.`,
  problem: `The existing operations relied on fragmented tooling and manual processes — spreadsheets for attendance, separate software for payroll, email threads for leave requests, disconnected tools for recruitment. This fragmentation led to:

• Inconsistent employee data across systems
• Payroll errors from manual calculations
• No real-time visibility into attendance or performance
• Compliance risks with inconsistent record-keeping
• Inability to scale as client businesses grew
• Nigerian tax compliance handled incorrectly or not at all`,
  approach: `Before writing a single line of code, we spent two weeks in discovery — interviewing HR managers, business owners, and employees to understand the actual workflows behind the stated requirements.

We identified that the core challenge wasn't just software — it was information flow. HR managers needed the complete picture of an employee in one place, from first application to latest performance review.

Our technical approach prioritized:
• A modular architecture with 11+ independent but interconnected modules
• Role-based access control for admins, managers, and employees
• Nigerian PAYE tax compliance built into the payroll engine
• Mobile-first design with a robust native app for iOS and Android
• Offline-capable mobile design for areas with unreliable connectivity`,
  whatWeBuilt: `We built a comprehensive HRMS platform with 11 interconnected modules:

1. Core HR — Employee records, time-off, benefits, document storage
2. BizEdge Payroll — Full payroll processing with PAYE, pension, and tax compliance
3. BizEdge Recruit — Recruitment & applicant tracking system
4. Time & Attendance — Clock-in/out for on-site and remote employees
5. Rota & Shift Scheduling — Shift planning and rota publishing
6. Task & Project Management — Team task assignment, deadlines, and collaboration
7. Performance Management — 360 reviews, goal setting, peer-to-peer feedback
8. MyEdge — Employee self-service mobile app
9. BizEdge Chat — Internal team communication
10. Asset Tracking — Company assets, assignments, and maintenance logs
11. Employee Reference Check — Online reference-checking tool

Each module was designed to work independently but share a common data layer, allowing businesses to adopt modules incrementally. Available on iOS and Android, with pricing tiers from Free to Pro.`,
  results: `• All-in-one platform replacing 5+ disconnected tools
• Full PAYE compliance under the Nigeria Tax Act built into payroll
• Processing time reduced from days to hours
• Mobile app with 2,000+ active users on iOS and Android
• Real-time attendance visibility across multiple locations
• Used by 2,000+ fast-growing businesses across Africa and Europe
• Featured in Vanguard, Business Day, Nairametrics, and TechCabal`,
  learnings: `The biggest lesson from this project was the importance of the "offline moment" — those brief instances when internet connectivity drops. In Nigerian offices, this happens daily. We designed for graceful degradation: queuing actions locally on the mobile app and syncing when connectivity returns. This pattern is essential for every enterprise tool built for emerging markets. We also learned that compliance isn't a feature — it's a foundation. Building Nigerian PAYE, pension, and tax calculations correctly from day one saved months of rework.`,
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
                  BizEdge
                  <a
                    href="https://bizedgeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center ml-3 align-middle hover:text-white/60 transition-colors"
                  >
                    <ArrowUpRight size={32} />
                  </a>
                </h1>
                <p className="text-xl font-body text-white/60 max-w-2xl leading-relaxed">
                  Multi-module HRMS platform built for SMEs — from recruitment
                  to payroll, time & attendance to task management.
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div>
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">
                      Client Type
                    </span>
                    <span className="text-sm font-body">
                      {caseStudy.clientType}
                    </span>
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
                    <span className="text-sm font-body">
                      {caseStudy.engagementType}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">
                      External
                    </span>
                    <a
                      href="https://bizedgeapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-body text-white hover:text-white/60 transition-colors inline-flex items-center gap-1"
                    >
                      bizedgeapp.com
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
          <div className="aspect-video bg-white/5 rounded-[2px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
              alt="BizEdge Dashboard"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale"
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
                The Context
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-9"
            >
              <p className="text-lg font-body text-white/60 leading-relaxed whitespace-pre-line">
                {caseStudy.context}
              </p>
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
                The Problem
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-9"
            >
              <p className="text-lg font-body text-white/60 leading-relaxed whitespace-pre-line">
                {caseStudy.problem}
              </p>
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
                Our Approach
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-9"
            >
              <p className="text-lg font-body text-white/60 leading-relaxed whitespace-pre-line">
                {caseStudy.approach}
              </p>
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
                What We Built
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-9"
            >
              <p className="text-lg font-body text-white/60 leading-relaxed whitespace-pre-line">
                {caseStudy.whatWeBuilt}
              </p>
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
