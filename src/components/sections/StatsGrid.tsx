"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatItem {
  label: string;
  value: string;
}

interface StatsGridProps {
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { label: "Edition", value: "A/W 2026" },
  { label: "Contributors", value: "14 Artists" },
  { label: "Format", value: "128 Pages" },
  { label: "Impact", value: "Net Zero" },
];

const StatsGrid = ({ stats = defaultStats }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/5 divide-x divide-white/5">
      {stats.map((stat, i) => (
        <motion.div 
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="p-10 flex flex-col gap-2"
        >
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
            {stat.label}
          </span>
          <span className="text-2xl font-display font-medium tracking-tight">
            {stat.value}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsGrid;
