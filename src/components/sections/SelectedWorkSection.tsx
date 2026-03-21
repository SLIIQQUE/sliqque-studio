"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";

const VideoReveal = ({ src, poster, title }: { src?: string; poster: string; title: string }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isHovered && (
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
        )}
      </motion.div>

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

const projects = [
  {
    title: "BizEdge",
    year: "2021",
    clientType: "HRMS SaaS",
    engagementType: "Product Build",
    description: "All-in-one HR, Payroll & Productivity suite — 11 modules, 2,000+ businesses, mobile apps on iOS & Android.",
    tags: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    metric: "11 Modules",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "BizEdge HRMS Dashboard",
    href: "/work/bizedge",
  },
  {
    title: "Meridian Finance",
    year: "2024",
    clientType: "DeFi SaaS",
    engagementType: "Interface Engineering",
    description: "Real-time DeFi analytics dashboard with multi-chain support, portfolio tracking, and yield optimization tools.",
    tags: ["Web3", "Wagmi", "The Graph"],
    metric: "Multi-chain",
    imageSrc: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Meridian Finance Dashboard",
    href: "/work/meridian",
  },
  {
    title: "Origin Protocol",
    year: "2024",
    clientType: "NFT Platform",
    engagementType: "Product Build",
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
