"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { creativeStudio } from "@/data";

interface EcosystemCalloutProps {
  className?: string;
}

export function EcosystemCallout({ className = "" }: EcosystemCalloutProps) {
  return (
    <section
      aria-label="The SLIIQQUE ecosystem: Creative Studio"
      className={`py-12 px-10 border-b border-white/5 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="The SLIIQQUE Ecosystem" title="Creative Studio" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 border border-white/10 p-8 md:p-10"
        >
          <div className="max-w-2xl">
            <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight uppercase mb-4">
              {creativeStudio.name}
            </h3>
            <p className="text-base font-body text-white/60 leading-relaxed">
              {creativeStudio.description}
            </p>
          </div>
          <a
            href={creativeStudio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 px-8 py-4 border border-white/20 font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
          >
            Visit Creative Studio
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default EcosystemCallout;
