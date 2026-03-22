"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const FloatingShape = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: string }) => (
  <div
    className="absolute rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm animate-float"
    style={{ width: size, height: size, left: x, top: y, animationDelay: `${delay}s` }}
  />
);

const Hero = ({
  title = "SLIIQQUE",
  subtitle = "We build Web3 and SaaS products that ship, scale, and convert.",
}: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const smoothY = useSpring(useTransform(scrollY, [0, 600], [0, 100]), {
    stiffness: 100,
    damping: 30,
  });
  const smoothOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const smoothScale = useTransform(scrollY, [0, 600], [1, 1.05]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      <motion.div 
        style={{ y: smoothY, opacity: smoothOpacity }}
        className="sticky top-0 h-screen flex items-center justify-center will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-zinc-900" />
        
        <div className="absolute rounded-full blur-[120px] opacity-30 animate-pulse-slow" style={{ width: "600px", height: "600px", background: "#f97316", left: "-10%", top: "20%" }} />
        <div className="absolute rounded-full blur-[120px] opacity-30 animate-pulse-slow" style={{ width: "500px", height: "500px", background: "#3b82f6", left: "60%", top: "50%" }} />
        <div className="absolute rounded-full blur-[120px] opacity-30 animate-pulse-slow" style={{ width: "400px", height: "400px", background: "#8b5cf6", left: "30%", top: "-10%" }} />

        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        <FloatingShape delay={0} x="10%" y="20%" size="120px" />
        <FloatingShape delay={1} x="85%" y="30%" size="80px" />
        <FloatingShape delay={2} x="70%" y="70%" size="150px" />
        <FloatingShape delay={0.5} x="20%" y="60%" size="60px" />
        <FloatingShape delay={1.5} x="50%" y="80%" size="100px" />

        <div className="relative z-10 max-w-7xl mx-auto px-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse-slow" />
              <motion.div style={{ scale: smoothScale }} className="relative inline-block">
                <h1
                  className="relative font-display font-bold text-[12vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase"
                >
                  {title}
                </h1>
              </motion.div>
            </div>
          </motion.div>

          <p className="text-xl md:text-3xl font-body font-light text-white/80 max-w-3xl mx-auto px-[4.5rem] md:px-0 mb-12">
            {"We build Web3 and SaaS products\nthat ship, scale, and convert."}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/work"
              className="group relative px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] overflow-hidden hover:bg-white/90 transition-colors"
            >
              <span className="flex items-center gap-3">
                See Our Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="group relative px-10 py-5 border border-white/30 font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
            >
              <Play size={14} className="fill-current animate-spin-slow" style={{ animationDuration: "12s" }} />
              Start a Project
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-4"
          >
            {['Web3', 'React', 'Next.js', 'TypeScript', 'Solidity'].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/60 hover:text-white hover:border-white/30 transition-all duration-200 cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div
            className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent animate-float"
            style={{ animationDuration: "2s", animationDirection: "alternate" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
