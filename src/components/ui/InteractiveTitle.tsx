"use client";

import React from "react";
import { motion } from "framer-motion";

const COLORS = ["#f97316", "#3b82f6", "#8b5cf6", "#ffffff"];

interface InteractiveTitleProps {
  title: string;
  className?: string;
  spanClassName?: string;
  enableHover?: boolean;
}

export function InteractiveTitle({
  title,
  className = "",
  spanClassName = "",
  enableHover = true,
}: InteractiveTitleProps) {
  return (
    <span className={className}>
      {title.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block relative ${spanClassName}`}
        >
          <span className="relative z-10 text-white transition-colors duration-200">
            {char === " " ? "\u00A0" : char}
          </span>
          {enableHover && (
            <motion.span
              className="absolute inset-0 z-20"
              style={{ color: COLORS[i % COLORS.length] }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              whileFocus={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          )}
        </span>
      ))}
    </span>
  );
}
