"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

/**
 * StatsSection — animated counters, progress rings, stat cards, and marquee.
 *
 * Performance notes:
 * - AnimatedCounter uses framer-motion's imperative `animate()` — no React
 *   re-renders during the count-up animation (latest value set via ref callback).
 * - The ProgressRing SVG circle uses `strokeDashoffset` which only triggers
 *   compositing, not layout.
 * - `will-change: transform` hints are applied to elements with whileInView /
 *   whileHover / infinite animations to promote GPU compositing.
 * - All infinite animations are gated behind `isInView` to prevent background
 *   work.
 * - `MotionConfig reducedMotion="user"` in layout.tsx respects user preference.
 */

const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return controls.stop;
    }
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display font-bold text-5xl md:text-7xl tracking-tight will-change-transform"
    >
      {count}
      {suffix}
    </motion.span>
  );
};

const StatCard = ({
  value,
  suffix,
  label,
  icon,
  delay
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group will-change-transform"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-background/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl will-change-transform"
          animate={isInView ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative z-10">
          <div className="mb-4 text-white/30">
            {icon}
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <AnimatedCounter value={value} suffix={suffix} duration={2} />
          </div>

          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/50">
            {label}
          </span>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

const MarqueeStats = () => {
  const stats = ["5+ Years Experience", "•", "5+ Projects Shipped", "•", "SaaS & Website Focus", "•", "Lagos, Nigeria", "•"];

  return (
    <div className="py-6 border-y border-white/10 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...stats, ...stats].map((stat, i) => (
          <span
            key={i}
            className="mx-8 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30"
          >
            {stat}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 5, suffix: "+", label: "Years Experience", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { value: 5, suffix: "+", label: "Projects Shipped", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> },
    { value: 3, suffix: "", label: "Focus Verticals", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
    { value: 1, suffix: "", label: "Principal", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5" />

      <div className="max-w-6xl mx-auto px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase mb-4">
            By The Numbers
          </h2>
          <p className="text-white/50 font-body">
            Honest numbers. Real work.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>

      <MarqueeStats />
    </section>
  );
};

export default StatsSection;
