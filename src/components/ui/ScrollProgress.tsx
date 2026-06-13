"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setProgressValue(Math.round(v * 100));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={progressValue}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const PageTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-background z-[99] pointer-events-none will-change-transform"
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
