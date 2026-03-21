"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { InteractiveTitle } from "@/components/ui/InteractiveTitle";

const caseStudy = {
  clientType: "RegTech / Fraud Prevention",
  year: "2018",
  engagementType: "Product Build",
  stack: ["React", "TypeScript", "Next.js", "Node.js"],
  context: `ZINID — Africa's fraud prevention infrastructure — was conceived to solve one of fintech's most expensive unsolved problems: shared risk memory. Nigerian financial institutions were losing millions to fraudsters who would default across multiple lending platforms, exploit signup bonuses, and operate mule wallets — all because no system connected the dots.

The existing approach to fraud prevention in Nigeria was fragmented. Each fintech operated its own siloed system, checking BVN and identity documents in isolation, with no shared intelligence about a user's behavior across the ecosystem. A bad actor could exhaust one platform's trust, then move immediately to the next. ZINID was built to be the shared layer — a fraud intelligence network where every verification enriched the ecosystem's collective knowledge.`,
  problem: `The Nigerian fintech ecosystem was hemorrhaging money to coordinated fraud:

• No shared risk memory — fraudsters exploited the lack of cross-platform intelligence
• Default scores were assessed per-platform, not per-user across the ecosystem
• Mule wallet detection was manual and slow — by the time a pattern was identified, damage was done
• BVN verification confirmed identity but not intent or risk
• Onboarding bonuses were systematically abused by bad actors cycling between platforms
• Compliance reporting was manual, inconsistent, and regulator-unfriendly`,
  approach: `We built ZINID as shared infrastructure, not a standalone product. The core insight: fraud prevention gets stronger with every platform that participates. We designed the system to be:

• API-first — every Nigerian fintech could integrate with a few lines of code
• Real-time — fraud scores updated on every transaction, not batched overnight
• Ecosystem-aware — shared risk memory across all participating platforms
• Compliance-native — built to satisfy CBN AML requirements from day one
• Privacy-respecting — data sharing with user consent, anonymized where possible

The product had to be valuable enough that platforms would share their fraud data — a genuine network effect challenge.`,
  whatWeBuilt: `We built a comprehensive fraud prevention and identity verification platform:

1. ZinID Digital Identity — 8-digit unique ID linked to BVN and biometric data
2. Fraud Scoring Engine — Real-time risk assessment analyzing digital footprints, device fingerprints, and cross-platform behavior
3. Transaction Monitoring — Anomaly detection across participating platforms with alert thresholds
4. ZiNCode — Two-factor behavioral authentication detecting unusual account activity
5. AML Compliance Dashboard — CBN-ready reporting with automated suspicious activity flags
6. API Integration Layer — REST APIs for seamless onboarding into partner platforms
7. Shared Risk Memory — Cross-platform intelligence that flagged users attempting multi-platform exploitation`,
  results: `• Shared fraud intelligence network connecting multiple Nigerian fintech platforms
• Fraud scores calculated and updated in real-time across the ecosystem
• Reduced onboarding bonus abuse by identifying repeat offenders across partner platforms
• AML compliance infrastructure satisfying CBN's regulatory framework
• Contact center in Maitama, Abuja — info@zinid.africa
• Deployed as infrastructure serving the broader Nigerian fintech ecosystem`,
  learnings: `The hardest part of building shared infrastructure isn't the technology — it's getting competitors to share data. Every fintech knows that fraud intelligence is valuable. Convincing them that collective defense beats isolated protection required both a compelling product and strategic relationship-building with platform operators.

We also learned that compliance isn't a feature you bolt on at the end. ZINID was designed around CBN's AML requirements from the first line of architecture. This meant fewer pivots, fewer rewrites, and a smoother path to regulatory approval.`,
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
                  <InteractiveTitle title="ZINID" />
                </h1>
                <p className="text-xl font-body text-white/60 max-w-2xl leading-relaxed">
                  Africa&apos;s shared fraud prevention infrastructure — digital identity,
                  real-time risk scoring, and cross-platform AML compliance.
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
                      Contact
                    </span>
                    <a
                      href="mailto:info@zinid.africa"
                      className="text-sm font-body text-white hover:text-white/60 transition-colors inline-flex items-center gap-1"
                    >
                      info@zinid.africa
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
          <div className="aspect-[4/3] bg-[#0f1117] rounded-[2px] overflow-hidden flex items-center justify-center">
            <InteractiveTitle
              title="ZINID"
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
