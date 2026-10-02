"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { estimateTotal, formatPrice, type ServiceDetail } from "@/data";

interface ServiceConfiguratorProps {
  service: ServiceDetail;
}

export function ServiceConfigurator({ service }: ServiceConfiguratorProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const groups = useMemo(() => {
    const map = new Map<string, typeof service.addOns>();
    service.addOns.forEach((a) => map.set(a.group, [...(map.get(a.group) ?? []), a]));
    return Array.from(map.entries());
  }, [service]);

  const chosen = service.addOns.filter((a) => selected.includes(a.id));
  const total = estimateTotal(service, selected);
  const toggle = (id: string) =>
    setSelected((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  const quoteHref = `/contact/?${new URLSearchParams({
    service: service.contactValue,
    addons: selected.join(","),
    estimate: String(total),
  }).toString()}`;

  return (
    <section aria-label="Build your quote" className="py-10 px-6 md:px-10 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Build Your Quote"
          title="Choose Your Add-Ons"
          description={`Start from ${formatPrice(service.basePrice, service.unit)}. Select what you need and the estimate updates instantly.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 space-y-10">
            {groups.map(([group, items]) => (
              <fieldset key={group}>
                <legend className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted mb-4">
                  {group}
                </legend>
                <div className="space-y-3">
                  {items.map((addOn) => {
                    const active = selected.includes(addOn.id);
                    return (
                      <label
                        key={addOn.id}
                        className={`flex items-start gap-4 p-4 border cursor-pointer transition-colors duration-300 focus-within:ring-2 focus-within:ring-orange-500 ${
                          active ? "border-orange-500/50 bg-orange-500/5" : "border-white/10 hover:border-white/25"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={active}
                          onChange={() => toggle(addOn.id)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center border transition-colors ${
                            active ? "bg-orange-500 border-orange-500 text-black" : "border-white/30 text-white/40"
                          }`}
                        >
                          {active ? <Check size={12} strokeWidth={3} /> : <Plus size={12} />}
                        </span>
                        <span className="flex-1">
                          <span className="block font-display font-bold text-base tracking-tight">{addOn.name}</span>
                          <span className="block mt-1 text-sm font-body text-white/50 leading-relaxed">
                            {addOn.description}
                          </span>
                        </span>
                        <span className="font-display font-bold text-sm text-orange-400 whitespace-nowrap">
                          +{formatPrice(addOn.price, service.unit)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 border border-white/10 p-6 md:p-8 bg-white/[0.02]">
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
                Your Estimate
              </span>
              <motion.div
                key={total}
                initial={{ opacity: 0.4, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-display font-bold text-4xl md:text-5xl tracking-tighter"
                aria-live="polite"
              >
                {formatPrice(total, service.unit)}
              </motion.div>
              <p className="text-xs font-body text-white/40 mt-2 mb-6">
                Estimated starting price. We confirm the final quote after a short conversation.
              </p>

              <ul className="space-y-2 text-sm font-body border-t border-white/10 pt-5 mb-6">
                <li className="flex justify-between gap-4 text-white/70">
                  <span>{service.title} (base)</span>
                  <span>{formatPrice(service.basePrice, service.unit)}</span>
                </li>
                {chosen.map((a) => (
                  <li key={a.id} className="flex justify-between gap-4 text-white/50">
                    <span>{a.name}</span>
                    <span>+{formatPrice(a.price, service.unit)}</span>
                  </li>
                ))}
                {chosen.length === 0 && (
                  <li className="text-white/30 text-xs">No add-ons selected yet.</li>
                )}
              </ul>

              <Link
                href={quoteHref}
                className="group w-full px-8 py-4 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
              >
                Request This Quote
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
