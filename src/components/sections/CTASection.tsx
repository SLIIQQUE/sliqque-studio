"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Clock, Sparkles } from "lucide-react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-[120px]"
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
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-[100px]"
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

const FloatingElement = ({ delay, x, y, size }: any) => (
  <motion.div
    className="absolute rounded-full border border-white/10"
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
    <section className="py-32 px-10 relative overflow-hidden">
      <AnimatedBackground />
      
      <FloatingElement delay={0} x="10%" y="20%" size={100} />
      <FloatingElement delay={2} x="80%" y="30%" size={80} />
      <FloatingElement delay={4} x="60%" y="70%" size={120} />
      <FloatingElement delay={1} x="20%" y="60%" size={60} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9] mb-8">
            Ready to<br />Build Something<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500">
              Extraordinary?
            </span>
          </h2>
          
          <p className="text-xl font-body text-white/50 max-w-xl mx-auto mb-12">
            Whether you're launching a protocol, shipping a SaaS, or need a focused engineering partner — let's talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group relative px-12 py-6 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            
            <a
              href="mailto:hello@sliiqque.studio"
              className="group px-12 py-6 border border-white/20 font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center gap-3"
            >
              <Mail className="w-4 h-4" />
              hello@sliiqque.studio
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
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <Icon className="w-6 h-6 mx-auto mb-4 text-white/40" />
                <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30 block mb-2">
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
