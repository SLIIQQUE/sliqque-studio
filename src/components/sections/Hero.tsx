"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

/**
 * FloatingShape — purely decorative CSS-animated blob.
 *
 * Performance notes:
 * - Animates via CSS `@keyframes float` (transform only — compositor-friendly).
 * - `will-change: transform` promotes GPU layer.
 * - Respects `prefers-reduced-motion` via CSS `@media` query in globals.css.
 */
const FloatingShape = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: string }) => (
  <div
    className="absolute rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm animate-float will-change-transform"
    style={{ width: size, height: size, left: x, top: y, animationDelay: `${delay}s` }}
  />
);

/**
 * GradientOrb — large blurred background gradient.
 *
 * Performance notes:
 * - Animates via CSS `@keyframes pulse-slow` (scale + opacity — compositor-friendly).
 * - `blur-[120px]` is expensive; kept to low opacity (0.3) to reduce GPU cost.
 * - Respects prefers-reduced-motion via CSS.
 */
const GradientOrb = ({ color, size, x, y }: { color: string; size: string; x: string; y: string }) => (
  <div
    className="absolute rounded-full blur-[120px] opacity-30 animate-pulse-slow will-change-transform"
    style={{ width: size, height: size, background: color, left: x, top: y }}
  />
);

const ITEMS = ["React", "Next.js", "TypeScript", "AI Agents", "Bot APIs", "Automation"];

const Hero = ({
  title = "SLIIQQUE",
  subtitle = "We build interfaces that ship, scale, and convert.",
}: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

  const { scrollY } = useScroll();

  const smoothY = useSpring(useTransform(scrollY, [0, 600], [0, 100]), {
    stiffness: 100,
    damping: 30,
  });
  const smoothOpacity = useSpring(useTransform(scrollY, [0, 400], [1, 0]), {
    stiffness: 100,
    damping: 30,
  });
  const smoothScale = useSpring(useTransform(scrollY, [0, 600], [1, 1.05]), {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - 192);
      mouseY.set(e.clientY - 192);
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden" aria-label="Hero">
      <motion.div
        style={{ y: smoothY, opacity: smoothOpacity, willChange: "transform, opacity" }}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-zinc-900" />

        <GradientOrb color="#f97316" size="600px" x="-10%" y="20%" />
        <GradientOrb color="#3b82f6" size="500px" x="60%" y="50%" />
        <GradientOrb color="#8b5cf6" size="400px" x="30%" y="-10%" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating shapes — reduced count on mobile via `hidden md:block` */}
        <div className="hidden md:block">
          <FloatingShape delay={0} x="10%" y="20%" size="120px" />
          <FloatingShape delay={1} x="85%" y="30%" size="80px" />
          <FloatingShape delay={2} x="70%" y="70%" size="150px" />
          <FloatingShape delay={0.5} x="20%" y="60%" size="60px" />
          <FloatingShape delay={1.5} x="50%" y="80%" size="100px" />
        </div>
        {/* Mobile: just 2 shapes */}
        <div className="md:hidden">
          <FloatingShape delay={0} x="10%" y="20%" size="80px" />
          <FloatingShape delay={1} x="70%" y="70%" size="100px" />
        </div>

        <motion.div
          className="absolute w-96 h-96 border border-white/10 rounded-full pointer-events-none will-change-transform"
          style={{ x: springX, y: springY }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-10 text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl will-change-transform"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div style={{ scale: smoothScale }} className="relative inline-block">
                <h1
                  className="relative font-display font-bold text-[12vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase"
                >
                  {title.split('').map((char, i) => (
                    <span
                      key={i}
                      className="inline-block relative cursor-pointer"
                    >
                      <span className="relative z-10 text-white transition-colors duration-200">
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                      <motion.span
                        className="absolute inset-0 z-20"
                        style={{ color: ['#f97316', '#3b82f6', '#8b5cf6', '#ffffff'][i % 4] }}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.15 }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    </span>
                  ))}
                </h1>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-3xl font-body font-light text-white/80 max-w-3xl mx-auto px-[4.5rem] md:px-0 mb-12"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/work"
              className="group relative px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] overflow-hidden focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative z-10 flex items-center gap-3">
                See Our Work
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ArrowRight size={16} aria-hidden="true" />
                </motion.span>
              </span>
            </Link>

            <Link
              href="/contact"
              className="group relative px-10 py-5 border border-white/30 font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="will-change-transform"
              >
                <Play size={14} className="fill-current" aria-hidden="true" />
              </motion.span>
              Start a Project
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-20 flex items-center justify-center gap-8"
          >
            {ITEMS.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/60 hover:text-white hover:border-white/30 transition-all duration-200 will-change-transform"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent will-change-transform"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
