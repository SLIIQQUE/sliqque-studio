"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Rocket,
  Layers,
  Boxes,
  Shield,
  Monitor,
  ChevronRight,
  Star,
} from "lucide-react";
import type { ServiceItemData } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Rocket,
  Layers,
  Boxes,
  Shield,
};

interface ServiceItemProps extends ServiceItemData {
  delay?: number;
}

export function ServiceItem({
  index,
  title,
  description,
  icon: iconName,
  price,
  features,
  delay = 0,
  highlight = false,
}: ServiceItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = iconMap[iconName] || Monitor;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative pl-8 py-8 border-b border-white/5 hover:border-white/10 transition-colors duration-500">
        <div className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-500 ${
          highlight ? 'bg-gradient-to-b from-orange-500 via-amber-400 to-orange-500' : 'bg-gradient-to-b from-transparent via-white/10 to-transparent'
        }`} />
        
        <div className="flex items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[10px] font-mono text-white/60 tracking-widest">
                {index}
              </span>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  highlight 
                    ? 'bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30' 
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${highlight ? 'text-orange-400' : 'text-white/60'}`} aria-hidden="true" />
              </motion.div>
              {highlight && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: delay + 0.2 }}
                  className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wider text-orange-400/80"
                >
                  <Star size={8} className="fill-current" aria-hidden="true" />
                  Popular
                </motion.span>
              )}
            </div>
            
            <h2 className={`font-display font-bold tracking-tight uppercase mb-2 group-hover:text-white/90 transition-colors ${
              highlight ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
            }`}>
              {title}
            </h2>
            
            <p className="text-sm font-body text-white/50 max-w-xl leading-relaxed mb-4">
              {description}
            </p>
            
            {features && features.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {features.slice(0, 4).map((feature) => (
                  <span 
                    key={feature} 
                    className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors duration-300 ${
                      highlight 
                        ? 'text-orange-300 bg-orange-500/10' 
                        : 'text-white/55 bg-white/5'
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="hidden md:flex flex-col items-end gap-4 shrink-0">
            {price && (
              <div className="text-right">
                <span className="text-[10px] font-mono text-white/50 tracking-widest block mb-1">Starting at</span>
                <span className={`font-display font-bold tracking-tight ${highlight ? 'text-lg text-orange-400' : 'text-base'}`}>
                  {price}
                </span>
              </div>
            )}
            
            <motion.a
              href="/contact"
              whileHover={{ x: 4 }}
              className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none ${
                highlight 
                  ? 'text-orange-400/70 hover:text-orange-400' 
                  : 'text-white/55 hover:text-white/80'
              }`}
            >
              Get {title} Quote
              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </motion.a>
          </div>
        </div>
        
        <motion.div
          className={`h-px mt-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out ${
            highlight ? 'bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500' : 'bg-gradient-to-r from-orange-500/50 via-blue-500/50 to-purple-500/50'
          }`}
        />
      </div>
    </motion.div>
  );
}
