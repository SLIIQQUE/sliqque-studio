"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceConfigurator } from "@/components/services/ServiceConfigurator";
import { formatPrice, serviceDetails, type ServiceDetail } from "@/data";

export default function ServiceDetailClient({ service }: { service: ServiceDetail }) {
  const others = serviceDetails.filter((s) => s.slug !== service.slug);

  return (
    <div className="pt-[100px]">
      <section aria-labelledby="service-heading" className="py-10 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors mb-8 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              <ArrowLeft size={12} aria-hidden="true" />
              All Services
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
                  {service.tagline}
                </span>
                <h1
                  id="service-heading"
                  className="font-display font-bold text-4xl md:text-6xl tracking-tighter uppercase leading-tight mb-6"
                >
                  {service.title}
                </h1>
                <p className="text-base font-body text-white/60 leading-relaxed max-w-2xl">{service.description}</p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <span className="text-[10px] font-mono text-white/50 tracking-widest block mb-1">Starting at</span>
                <span className="font-display font-bold text-4xl tracking-tighter text-orange-400">
                  {formatPrice(service.basePrice, service.unit)}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section aria-label="What the starting price includes" className="py-10 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <SectionHeader label="Base Package" title="What's Included" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-body text-white/70">
                  <Check size={16} className="mt-0.5 shrink-0 text-orange-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <SectionHeader label="Good Fit" title="Ideal For" />
            <ul className="space-y-3">
              {service.idealFor.map((item) => (
                <li key={item} className="text-sm font-body text-white/60 border-l border-white/10 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ServiceConfigurator service={service} />

      <section aria-label="Other services" className="py-10 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Explore" title="Other Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group bg-background p-6 flex items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
              >
                <span>
                  <span className="block font-display font-bold text-lg tracking-tight uppercase">{s.title}</span>
                  <span className="block text-xs font-mono text-white/50 mt-1">
                    From {formatPrice(s.basePrice, s.unit)}
                  </span>
                </span>
                <ArrowRight size={16} className="text-white/40 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
