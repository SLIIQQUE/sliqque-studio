"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Play, ChevronRight } from "lucide-react";

const VideoReveal = ({ src, poster, title }: { src?: string; poster: string; title: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      className="relative aspect-video overflow-hidden rounded-2xl bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPlaying(false); }}
    >
      <motion.img
        src={poster}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
        animate={{ opacity: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
            >
              <Play className="w-8 h-8 text-white fill-current ml-1" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute top-6 left-6 right-6 flex items-center justify-between"
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/60">
          {title}
        </span>
        <ArrowUpRight className="w-4 h-4 text-white/60" />
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-6 right-6"
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm font-body text-white/80">
          View Project →
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

const ProjectCard = ({
  title,
  description,
  tags,
  metric,
  imageSrc,
  imageAlt,
  href,
  index
}: {
  title: string;
  description: string;
  tags: string[];
  metric?: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        style={{ y, rotate }}
        className="relative"
      >
        <Link href={href} className="block">
          <div className="relative overflow-hidden rounded-3xl">
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={900}
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              decoding="async"
              animate={{ scale: isHovered ? 1.1 : 1, filter: isHovered ? "grayscale(0%)" : "grayscale(100%)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-transparent"
              animate={{ x: isHovered ? "100%" : "-100%" }}
              transition={{ duration: 0.7 }}
            />

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute top-6 left-6">
              <motion.span
                animate={isHovered ? { y: -5 } : {}}
                className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white"
              >
                {metric}
              </motion.span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-start justify-between mb-3">
              <motion.h3
                animate={isHovered ? { x: 5 } : {}}
                className="font-display font-bold text-2xl md:text-3xl tracking-tight uppercase"
              >
                {title}
              </motion.h3>
              <motion.div
                animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-6 h-6 text-white/30" />
              </motion.div>
            </div>
            
            <p className="text-white/50 font-body text-sm leading-relaxed mb-4">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/30 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const projects = [
  {
    title: "BizEdge",
    description: "Multi-module HRMS platform built for SMEs — from recruitment to payroll, time & attendance to task management.",
    tags: ["React", "TypeScript", "Next.js"],
    metric: "9+ Modules",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "BizEdge HRMS Dashboard",
    href: "/work/bizedge",
  },
  {
    title: "Meridian Finance",
    description: "Real-time DeFi analytics dashboard with multi-chain support, portfolio tracking, and yield optimization tools.",
    tags: ["Web3", "Wagmi", "The Graph"],
    metric: "Multi-chain",
    imageSrc: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Meridian Finance Dashboard",
    href: "/work/meridian",
  },
  {
    title: "Origin Protocol",
    description: "NFT minting platform with IPFS storage, zero-slippage trading engine, and creator-friendly royalty system.",
    tags: ["NFT", "Solidity", "IPFS"],
    metric: "On-chain Minting",
    imageSrc: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Origin Protocol Platform",
    href: "/work/origin",
  },
];

const SelectedWorkSection = () => {
  return (
    <section className="py-32 px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex items-end justify-between"
        >
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40 block mb-4">
                Selected Work
              </span>
            </motion.div>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight uppercase">
              Projects
            </h2>
          </div>
          
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
          >
            View All
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center md:hidden"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
