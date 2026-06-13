"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Clock, Sparkles } from "lucide-react";

/**
 * AnimatedBackground — large blurred gradient orbs that drift.
 *
 * Performance notes:
 * - Uses `will-change: transform` for GPU compositing.
 * - `blur-[120px]` is expensive; kept to 20% opacity.
 * - Respects prefers-reduced-motion via `MotionConfig reducedMotion="user"`
 *   in layout.tsx (framer-motion).
 * - Consider replacing with CSS animations for lower JS overhead.
 */
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-[120px] will-change-transform"
        animate={{
          x: ["-10%", "110%"],
          y: ["20%", "-20%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-[100px] will-change-transform"
        animate={{
          x: ["110%", "-10%"],
          y: ["-20%", "30%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

/**
 * FloatingElement — decorative circles that rotate and float.
 *
 * Performance notes:
 * - Uses `will-change: transform` for GPU compositing.
 * - Kept as framer-motion (not CSS) to benefit from MotionConfig reducedMotion.
 * - Reduced count on mobile via responsive containers.
 * - Only animates `y` and `rotate` — no layout/paint triggers.
 */
const FloatingElement = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full border border-white/10 will-change-transform"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
    }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 10,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const CTASection = () => {
  return (
    <section aria-labelledby="cta-heading" className="py-32 px-4 sm:px-10 md:px-10 relative overflow-hidden">
      <AnimatedBackground />

      {/* All floating elements on desktop, fewer on mobile */}
      <div className="hidden md:block">
        <FloatingElement delay={0} x="10%" y="20%" size={100} />
        <FloatingElement delay={2} x="80%" y="30%" size={80} />
        <FloatingElement delay={4} x="60%" y="70%" size={120} />
        <FloatingElement delay={1} x="20%" y="60%" size={60} />
      </div>
      <div className="md:hidden">
        <FloatingElement delay={0} x="10%" y="20%" size={80} />
        <FloatingElement delay={2} x="80%" y="30%" size={60} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 id="cta-heading" className="font-display font-bold text-4xl sm:text-4xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9] mb-8">
            Ready to<br />Build Something<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500">
              Extraordinary?
            </span>
          </h2>

          <p className="text-xl font-body text-white/50 max-w-xl mx-auto mb-12">
            Whether you need a new website, workflow automation, AI bots and agents, or a focused engineering partner, let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group relative px-12 py-6 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] overflow-hidden focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </span>
            </Link>

            <a
              href="mailto:hello@sliiqque.space"
              className="group px-12 py-6 border border-white/20 font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              hello@sliiqque.space
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { icon: MapPin, label: "Location", value: "Lagos, Nigeria · Working Globally" },
            { icon: Clock, label: "Response Time", value: "Within 24 Hours" },
            { icon: Sparkles, label: "Projects Taken", value: "2–3 Per Quarter" },
          ].map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group will-change-transform"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <Icon className="w-6 h-6 mx-auto mb-4 text-white/40" aria-hidden="true" />
                <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/55 block mb-2">
                  {label}
                </span>
                <span className="text-sm font-body font-medium">{value}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
