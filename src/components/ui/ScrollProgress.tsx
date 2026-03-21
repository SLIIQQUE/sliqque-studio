"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const PageTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-background z-[99] pointer-events-none"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      }}
    />
  );
};

export { ScrollProgress, PageTransition };
