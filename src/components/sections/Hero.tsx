"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const FloatingShape = ({ delay, x, y, size, duration }: any) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const AnimatedText = ({ children, delay = 0 }: { children: string; delay?: number }) => (
  <motion.span
    className="inline-block"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    {children}
  </motion.span>
);

const GradientOrb = ({ color, size, x, y }: any) => (
  <motion.div
    className="absolute rounded-full blur-[120px] opacity-30"
    style={{
      width: size,
      height: size,
      background: color,
      left: x,
      top: y,
    }}
    animate={{
      x: [0, 50, 0],
      y: [0, -30, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Hero = ({
  title = "SLIIQQUE",
  subtitle = "We build Web3 and SaaS products that ship, scale, and convert.",
  description = "Boutique software studio. Partnering with founders and protocols to engineer high-performance interfaces — from onboarding flow to on-chain interaction.",
}: HeroProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-zinc-900" />
        
        <GradientOrb color="#f97316" size="600px" x="-10%" y="20%" />
        <GradientOrb color="#3b82f6" size="500px" x="60%" y="50%" />
        <GradientOrb color="#8b5cf6" size="400px" x="30%" y="-10%" />

        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <FloatingShape delay={0} x="10%" y="20%" size={120} duration={6} />
        <FloatingShape delay={1} x="85%" y="30%" size={80} duration={8} />
        <FloatingShape delay={2} x="70%" y="70%" size={150} duration={7} />
        <FloatingShape delay={0.5} x="20%" y="60%" size={60} duration={5} />
        <FloatingShape delay={1.5} x="50%" y="80%" size={100} duration={9} />

        <motion.div
          className="absolute w-96 h-96 border border-white/10 rounded-full"
          style={{
            left: cursorPos.x - 192,
            top: cursorPos.y - 192,
            transform: 'translate(0, 0)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.h1
                style={{ scale }}
                className="relative font-display font-bold text-[15vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60"
              >
                {title.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      y: -10,
                      color: ['#f97316', '#3b82f6', '#8b5cf6', '#fff'][i % 4],
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="inline-block cursor-pointer"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-green-500"
            />
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-green-500">
              Available for Q2 2026
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-3xl font-body font-light text-white/80 max-w-3xl mx-auto mb-12"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/work"
              className="group relative px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                See Our Work
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="group px-10 py-5 border border-white/30 font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center gap-3"
            >
              Start a Project
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Play size={14} className="fill-current" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 flex items-center justify-center gap-8"
          >
            {['Web3', 'React', 'Next.js', 'TypeScript', 'Solidity'].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/60 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
