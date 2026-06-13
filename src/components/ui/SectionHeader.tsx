"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  pill?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  pill,
  align = "left",
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-20 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      {pill && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className={`inline-flex items-center gap-3 px-5 py-2.5 border border-white/10 rounded-full mb-8 backdrop-blur-sm ${align === "center" ? "mx-auto" : ""}`}
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
          <span className="text-[10px] font-body font-medium uppercase tracking-[0.2em] text-white/60">
            {pill}
          </span>
        </motion.div>
      )}

      {label && (
        <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/50 block mb-4">
          {label}
        </span>
      )}

      <Heading
        className={`font-display font-bold tracking-tight uppercase leading-[0.9] ${
          Heading === "h1"
            ? "text-5xl md:text-7xl"
            : "text-4xl md:text-5xl lg:text-6xl"
        }`}
      >
        {title}
      </Heading>

      {description && (
        <p className={`text-base font-body text-white/50 max-w-lg mt-6 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
