"use client";

import React from "react";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
      <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
        Scroll
      </span>
      <motion.div
        className="w-[1px] h-12 bg-white/20 relative overflow-hidden"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ScrollIndicator;
