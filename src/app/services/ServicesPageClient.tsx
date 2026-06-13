"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceItem } from "@/components/ui/ServiceItem";
import { services, processSteps } from "@/data";

export default function ServicesPageClient() {
  return (
    <div className="pt-[100px]">
      <section aria-labelledby="services-page-heading" className="py-24 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Services"
            title="Engagement Types Built for Founders"
            description="Five engagement types, not a menu of hourly services. Each is designed for a specific stage of your product or business journey."
            as="h1"
          />
        </div>
      </section>

      <section className="py-8 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-0">
            {services.map((service, i) => (
              <ServiceItem key={service.index} {...service} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="py-24 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="How We Work" title="Our Process" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((step, i) => (
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
                <h3 className="font-display font-bold text-xl tracking-tight uppercase">
                  {step.title}
                </h3>
                <p className="text-sm font-body text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Ready to Start" className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight uppercase mb-6">
              Ready to Start?
            </h2>
            <p className="text-base font-body text-white/50 max-w-xl mx-auto mb-10">
              We take on 2–3 new projects per quarter. Let&apos;s see if we&apos;re a fit.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            >
              Start a Conversation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
