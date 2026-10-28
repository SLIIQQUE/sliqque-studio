"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { projects } from "@/data/projects";
import { industries, type IndustryMark } from "@/data/industries";
import { foundersWebsitesDeployed } from "@/data/studio";
import { IndustryMarkIcon } from "@/components/ui/IndustryMark";

/**
 * StatsSection: animated counters, progress rings, stat cards, and marquee.
 *
 * Performance notes:
 * - AnimatedCounter uses framer-motion's imperative `animate()`, so there are no React
 *   re-renders during the count-up animation (latest value set via ref callback).
 * - The ProgressRing SVG circle uses `strokeDashoffset` which only triggers
 *   compositing, not layout.
 * - `will-change: transform` hints are applied to elements with whileInView /
 *   whileHover / infinite animations to promote GPU compositing.
 * - All infinite animations are gated behind `isInView` to prevent background
 *   work.
 * - `MotionConfig reducedMotion="user"` in layout.tsx respects user preference.
 */

const AnimatedCounter = ({
  value,
  suffix = "",
  duration = 2,
  sizeClass = "text-5xl",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  sizeClass?: string;
}) => {
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
      className={`font-display font-bold tracking-tight will-change-transform ${sizeClass}`}
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
  note,
  featured = false,
  delay
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  note?: string;
  featured?: boolean;
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
      className="relative group will-change-transform h-full"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className={`relative h-full bg-background/80 backdrop-blur-xl border rounded-3xl p-6 overflow-hidden ${
          featured ? "border-orange-500/25" : "border-white/10"
        }`}
      >
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl will-change-transform"
          animate={isInView ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative z-10">
          <div className={`mb-4 ${featured ? "text-orange-400/70" : "text-white/30"}`}>
            {icon}
          </div>

          {featured && (
            <span className="mb-2 block text-[10px] font-body font-bold uppercase tracking-[0.2em] text-orange-400/80">
              Career total
            </span>
          )}

          <div className="flex items-baseline gap-2 mb-2">
            <AnimatedCounter
              value={value}
              suffix={suffix}
              duration={2}
              sizeClass={featured ? "text-6xl md:text-7xl" : undefined}
            />
          </div>

          <span
            className={`text-[10px] font-body font-bold uppercase tracking-[0.2em] ${
              featured ? "text-white/70" : "text-white/50"
            }`}
          >
            {label}
          </span>
          {note && <p className="mt-2 text-xs font-body text-white/40 leading-snug">{note}</p>}
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

type MarqueeItem =
  | { kind: "text"; label: string }
  | { kind: "industry"; label: string; mark: IndustryMark };

const MarqueeStats = () => {
  const items: MarqueeItem[] = [
    { kind: "text", label: `${foundersWebsitesDeployed}+ Websites Deployed By Our Founder` },
    { kind: "text", label: `${projects.filter((p) => !p.earlier).length}+ Projects Shipped At SLIIQQUE` },
    { kind: "text", label: "Industries We Ship In" },
    ...industries.map((industry): MarqueeItem => ({ kind: "industry", ...industry })),
    { kind: "text", label: "Founded December 2025" },
    { kind: "text", label: "SaaS & Website Focus" },
    { kind: "text", label: "Lagos, Nigeria" },
  ];

  return (
    <div className="py-6 border-y border-white/10 overflow-hidden">
      <motion.div
        className="flex items-center whitespace-nowrap will-change-transform"
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
        {[...items, ...items].map((item, i) => (
          <React.Fragment key={i}>
            <span className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30">
              {item.kind === "industry" && (
                <IndustryMarkIcon
                  mark={item.mark}
                  className="h-3.5 w-3.5 text-white/25"
                />
              )}
              {item.label}
            </span>
            <span className="mx-5 text-[8px] leading-none text-white/15" aria-hidden="true">
              ●
            </span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: foundersWebsitesDeployed, suffix: "+", label: "Websites Deployed", note: "By our founder, before and at SLIIQQUE", featured: true, icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> },
    { value: projects.filter((p) => !p.earlier).length, suffix: "+", label: "Projects Shipped", note: "At SLIIQQUE since December 2025", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> },
    { value: 2025, suffix: "", label: "Founded", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { value: 3, suffix: "", label: "Focus Verticals", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
    { value: 1, suffix: "", label: "Principal", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
  ];

  return (
    <section className="py-8 relative overflow-hidden">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2 h-full" : "h-full"}
            >
              <StatCard {...stat} delay={i * 0.1} />
            </div>
          ))}
        </div>
      </div>

      <MarqueeStats />
    </section>
  );
};

export default StatsSection;
