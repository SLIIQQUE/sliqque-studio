"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Send, Check, MapPin, Clock } from "lucide-react";

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
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/60">
              Available for Q2 2026
            </span>
          </motion.div>
          
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
            { icon: Clock, label: "Response Time", value: "Within 48 Hours" },
            { icon: Check, label: "Projects Taken", value: "2–3 Per Quarter" },
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="font-display font-bold text-xl tracking-tight uppercase mb-4 text-center">
              Join Our Newsletter
            </h3>
            <p className="text-sm font-body text-white/40 text-center mb-6">
              Web3 builder insights. 2x/month. No spam.
            </p>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex gap-3"
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-body text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-black rounded-xl font-body font-bold text-[10px] uppercase tracking-[0.2em]"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
                  >
                    <Check className="w-6 h-6 text-green-500" />
                  </motion.div>
                  <p className="text-sm font-body text-white/80">Thanks for subscribing!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
