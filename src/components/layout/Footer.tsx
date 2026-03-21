"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";

interface FooterProps {
  brandMark?: string;
  email?: string;
  socials?: { label: string; href: string; icon: any }[];
  copyright?: string;
}

const AnimatedBackground = () => {
  return (
    <>
      <motion.div
        className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-orange-500/20 to-transparent blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </>
  );
};

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.1 }}
    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group cursor-pointer"
  >
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
    </Link>
  </motion.div>
);

const Footer = ({
  brandMark = "SLIIQQUE",
  email = "hello@sliiqque.studio",
  socials = [
    { label: "Twitter", href: "https://twitter.com/sliiqque", icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com/company/sliiqque", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/sliiqque", icon: Github },
  ],
  copyright = "© 2026 SLIIQQUE Studio. All rights reserved.",
}: FooterProps) => {
  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <footer className="relative bg-footer pt-32 pb-10 px-10 overflow-hidden border-t border-white/5">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30 block mb-8">
          Ready to build?
        </span>
        
        <motion.a
          href={`mailto:${email}`}
          onMouseEnter={() => setEmailHovered(true)}
          onMouseLeave={() => setEmailHovered(false)}
          className="relative inline-block"
        >
          <motion.span 
            className="font-display font-bold text-4xl md:text-6xl lg:text-8xl tracking-tighter uppercase block"
            animate={{ 
              backgroundSize: emailHovered ? "100% 100%" : "0% 100%",
              backgroundPosition: emailHovered ? "0% 0%" : "100% 0%"
            }}
            style={{
              backgroundImage: "linear-gradient(90deg, #f97316, #3b82f6, #8b5cf6, #f97316)",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            transition={{ duration: 0.5 }}
          >
            {email}
          </motion.span>
          
          <motion.div
            className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500"
            animate={{ scaleX: emailHovered ? 1 : 0, originX: 0 }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.div
            className="absolute -bottom-4 left-0 w-full h-[4px] bg-white/20"
            animate={{ scaleX: emailHovered ? 0 : 1, originX: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-base font-body text-white/40 max-w-md mx-auto"
        >
          We take on 2–3 new projects per quarter. Let's see if we're a fit.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center gap-8 mb-20"
      >
        <div className="flex gap-6">
          {socials.map(({ href, icon, label }) => (
            <SocialLink key={label} href={href} icon={icon} label={label} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full border-t border-white/5 pt-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors"
            >
              Terms
            </Link>
          </div>
          
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/20">
            {copyright}
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative z-10 text-center mt-12"
      >
        <Link
          href="#top"
          className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors"
        >
          Back to top
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.div>
        </Link>
      </motion.div>

      <span className="absolute bottom-[-15%] font-display font-bold text-[25vw] uppercase tracking-tighter opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
        {brandMark}
      </span>
    </footer>
  );
};

export default Footer;
