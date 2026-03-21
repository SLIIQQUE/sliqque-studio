"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote, Play } from "lucide-react";

const FloatingImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={1333}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </motion.div>
  );
};

const BeliefCard = ({ quote, index }: { quote: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative bg-background/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 overflow-hidden">
        <motion.div
          className="absolute top-6 right-6 text-6xl text-white/5 font-serif"
          animate={isHovered ? { rotate: [0, 10], scale: [1, 1.1] } : {}}
        >
          "
        </motion.div>

        <motion.blockquote
          animate={isHovered ? { x: 10 } : {}}
          className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight mb-6"
        >
          {quote}
        </motion.blockquote>

        <motion.div
          className="flex items-center gap-4"
          animate={isHovered ? { x: 10 } : {}}
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-blue-500" />
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30">
            SLIIQQUE Philosophy
          </span>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

const TeamCard = ({ 
  name, 
  role, 
  image,
  bio,
  stack
}: { 
  name: string; 
  role: string; 
  image: string;
  bio: string;
  stack: string[];
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative overflow-hidden rounded-3xl mb-6">
        <Image
          src={image}
          alt={name}
          width={600}
          height={800}
          className="w-full aspect-[3/4] object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale"
          loading="lazy"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Play className="w-6 h-6 text-white fill-current ml-1" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-6 left-6 right-6">
          <motion.h3
            animate={isHovered ? { y: -5 } : {}}
            className="font-display font-bold text-2xl tracking-tight uppercase"
          >
            {name}
          </motion.h3>
          <p className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/60 mt-2">
            {role}
          </p>
        </div>
      </div>

      <p className="text-sm font-body text-white/50 leading-relaxed mb-6">
        {bio}
      </p>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/30 border border-white/10 px-3 py-1.5 rounded-full hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const beliefs = [
  "The best Web3 interface is one that doesn't feel like Web3 at all.",
  "Performance is a design decision, not an engineering afterthought.",
  "We'd rather say no to a project than deliver something we're not proud of.",
];

const team = [
  {
    name: "Gabriel Njoabozia",
    role: "Founder & Lead Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "BSc Physics → Frontend Engineer → Team Lead → Studio Founder. 5+ years building production React and TypeScript systems across SaaS, HR tech, and Web3.",
    stack: ["React", "TypeScript", "Next.js", "Solidity", "Ethers.js", "Viem"],
  },
];

const StudioSection = () => {
  return (
    <section className="py-32 px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-orange-500/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40 block mb-4">
                About the Studio
              </span>
              <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight uppercase leading-tight">
                Built by Engineers.<br />Driven by Craft.
              </h2>
            </div>
            <div>
              <p className="text-xl font-body text-white/50 leading-relaxed mb-6">
                SLIIQQUE was founded by Gabriel Njoabozia in Lagos, Nigeria. After 5+ years building production frontend systems — leading engineering teams, shipping multi-module SaaS products, and integrating blockchain infrastructure into real consumer interfaces — the studio was built to do one thing well.
              </p>
              <p className="text-lg font-body text-white/40">
                Take ambitious Web3 and SaaS products from concept to production, with craft and precision at every layer.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-full"
          >
            <FloatingImage
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="Team collaboration"
              className="h-full"
            />
          </motion.div>
          
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40 block mb-4">
                What We Believe
              </span>
              <h3 className="font-display font-bold text-3xl tracking-tight uppercase mb-8">
                Philosophy
              </h3>
            </motion.div>
            
            <div className="space-y-6">
              {beliefs.map((belief, i) => (
                <BeliefCard key={i} quote={belief} index={i} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40 block mb-8">
            The Team
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-display font-bold text-3xl tracking-tight uppercase mb-6">
            Work With Us
          </h3>
          <p className="text-lg font-body text-white/50 max-w-xl mx-auto mb-8">
            We're selective about the projects we take on. If you're building something ambitious, we'd love to hear about it.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors"
          >
            Start a Conversation
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioSection;
