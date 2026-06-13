"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceItem } from "@/components/ui/ServiceItem";
import { services } from "@/data";

const ServicesSection = () => {
  return (
    <section aria-labelledby="services-heading" className="py-32 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          pill="What We Do"
          title="Services"
          description="Tailored engagements for every stage of your journey, from landing pages to full-scale platforms."
          align="center"
        />

        <div className="space-y-0">
          {services.slice(0, 4).map((service, i) => (
            <ServiceItem key={service.index} {...service} delay={0.1 + i * 0.08} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="/services"
            className="group inline-flex items-center gap-3 text-[11px] font-body font-medium uppercase tracking-[0.2em] text-white/55 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
          >
            View all services
            <motion.span
              initial={{ x: -4, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
