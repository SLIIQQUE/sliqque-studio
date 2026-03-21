"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

const caseStudy = {
  clientType: "FinTech",
  year: "2019",
  engagementType: "Product Build",
  stack: ["React", "TypeScript", "Node.js", "Payment Integration"],
  context: `Lumia is Nigeria's digital electricity payment platform that enables users to purchase prepaid and postpaid electricity units without visiting physical locations. Founded to solve the problem of long queues and inconvenience at electricity distribution company offices, Lumia partnered with major DisCos across Nigeria including AEDC, PHEDC, IKEDC, KNEDC, EEDC, and EKEDC.

The platform provides instant token delivery via SMS and email after payment, with support for both prepaid meters and postpaid bill payments. Lumia also offers mobile apps for Android and iOS, making electricity purchases accessible from anywhere.`,
  problem: `Nigerian electricity consumers faced significant friction in purchasing electricity:

• Long queues at PHCN/DisCo offices consuming hours of productive time
• Limited operating hours of physical payment centers
• No option to purchase electricity for third parties remotely
• Inability to check meter balance or account status online
• No loyalty programs or rewards for regular customers
• Poor mobile experience at existing digital options`,
  approach: `We approached Lumia with a focus on speed, reliability, and user trust. Key decisions:

• Built a web platform and native mobile apps (iOS & Android) for maximum accessibility
• Integrated with multiple DisCo APIs for real-time meter validation and token generation
• Designed for instant token delivery via SMS and email simultaneously
• Created a proxy buying feature allowing users to purchase for family/friends
• Implemented a loyalty program with points and discounts for repeat customers
• Built a referral system with wallet bonuses for successful referrals`,
  whatWeBuilt: `We built a complete electricity payment ecosystem:

1. Web Platform — Responsive website for purchasing prepaid and postpaid electricity
2. Mobile Apps — Native iOS and Android applications for on-the-go purchases
3. DisCo Integration — Real-time integration with AEDC, PHEDC, IKEDC, KNEDC, EEDC, EKEDC
4. Meter Validation — Instant verification of meter numbers and account details
5. Payment Processing — Secure payment gateway integration with multiple options
6. Token Generation — Instant token generation and delivery system
7. Proxy Buying — Save beneficiary meter details for quick third-party purchases
8. Loyalty Program — Points accumulation and redemption system
9. Referral System — Wallet bonus system for successful app referrals
10. Reseller Program — White-label solution for entrepreneurs to start their own electricity vending business`,
  results: `• Platform processing thousands of electricity transactions monthly
• Partnerships with 6 major DisCos across Nigeria
• Instant token delivery — typically under 30 seconds from payment
• Mobile apps available on both iOS App Store and Google Play Store
• Reseller program enabling entrepreneurs to start electricity vending with N1,000
• Featured in Nigerian tech media including TechCabal
• Contact center in Wuse II, Abuja with 07056414224 support line`,
  learnings: `This project reinforced several critical principles for Nigerian fintech:

Trust is everything — Users need to believe their money will convert to electricity units. We built in multiple confirmation steps and instant feedback to build confidence. The 30-second token delivery became our most important feature.

Partnership complexity — Working with DisCos required understanding each company's technical capabilities and limitations. Not all DisCos had robust APIs, so we built fallback mechanisms.

Mobile-first isn't optional — Nigerian consumers predominantly access services via mobile. The native apps weren't an afterthought — they were designed alongside the web platform.

Reseller networks work — The white-label reseller program created a growth flywheel, turning customers into distribution partners.`,
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
                  Lumia
                  <a
                    href="https://lumia.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center ml-3 align-middle hover:text-white/60 transition-colors"
                  >
                    <ArrowUpRight size={32} />
                  </a>
                </h1>
                <p className="text-xl font-body text-white/60 max-w-2xl leading-relaxed">
                  Get out of the dark — Nigeria&apos;s digital electricity payment platform
                  for prepaid and postpaid meters.
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
                      href="https://lumia.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-body text-white hover:text-white/60 transition-colors inline-flex items-center gap-1"
                    >
                      lumia.ng
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
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop"
              alt="Lumia Electricity Payment Platform"
              width={1600}
              height={900}
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
