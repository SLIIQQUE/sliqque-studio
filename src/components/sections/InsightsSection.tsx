"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Tag, ArrowUpRight } from "lucide-react";

const ArticleCard = ({
  title,
  excerpt,
  date,
  readingTime,
  tags,
  href,
  index,
  image
}: {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  href: string;
  index: number;
  image?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Link href={href} className="block">
        <div className="relative overflow-hidden rounded-3xl mb-6">
          <motion.img
            src={image || `https://images.unsplash.com/photo-${1551288049 + index * 1000}-bebda4e38f71?q=80&w=600&auto=format&fit=crop`}
            alt={title}
            width={600}
            height={338}
            className="w-full aspect-video object-cover"
            loading="lazy"
            decoding="async"
            animate={{ scale: isHovered ? 1.1 : 1, filter: isHovered ? "grayscale(0%)" : "grayscale(80%)" }}
            transition={{ duration: 0.7 }}
          />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20"
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
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="flex items-center gap-1.5 text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/60">
                <Calendar className="w-3 h-3" />
                {date}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/60">
                <Clock className="w-3 h-3" />
                {readingTime}
              </span>
            </div>
          </div>

          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/60"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <motion.h3
            animate={isHovered ? { x: 5, color: "#fff" } : {}}
            className="font-display font-bold text-xl md:text-2xl tracking-tight uppercase mb-3"
          >
            {title}
          </motion.h3>
          
          <p className="text-sm font-body text-white/40 leading-relaxed mb-4">
            {excerpt}
          </p>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors"
          >
            Read Article
            <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform" />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedArticle = ({
  title,
  excerpt,
  date,
  readingTime,
  tags,
  href,
  image
}: {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  href: string;
  image: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="lg:col-span-2 group"
    >
      <Link href={href} className="block">
        <div className="relative overflow-hidden rounded-3xl mb-8 h-full">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full aspect-[21/9] object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7 }}
          />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-transparent to-blue-500/30"
            animate={{ x: isHovered ? "100%" : "-100%" }}
            transition={{ duration: 1 }}
          />

          <div className="absolute inset-0 flex flex-col justify-end p-10">
            <div className="mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <motion.h3
              animate={isHovered ? { x: 10 } : {}}
              className="font-display font-bold text-3xl md:text-4xl tracking-tight uppercase leading-tight mb-4"
            >
              {title}
            </motion.h3>
            
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/60">
                {date}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/60">
                {readingTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const insights = [
  {
    title: "How to Build a DeFi Dashboard with Next.js 14",
    excerpt: "A complete guide to building a real-time DeFi dashboard using Next.js 14 App Router, The Graph, and Wagmi.",
    date: "Mar 2026",
    readingTime: "8 min read",
    tags: ["Web3", "Next.js", "Tutorial"],
    href: "/insights/defi-dashboard-nextjs",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "MetaMask Integration in React",
    excerpt: "Everything you need to know about connecting wallets to your React application.",
    date: "Feb 2026",
    readingTime: "12 min read",
    tags: ["Web3", "React"],
    href: "/insights/metamask-react",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Web3 UX Patterns That Work",
    excerpt: "After building dozens of dApps, these are the interface patterns that improve onboarding.",
    date: "Feb 2026",
    readingTime: "6 min read",
    tags: ["UX", "Web3"],
    href: "/insights/web3-ux-patterns",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Why We Switched to Viem",
    excerpt: "A practical look at migrating our Web3 stack from Web3.js to Viem.",
    date: "Jan 2026",
    readingTime: "10 min read",
    tags: ["Web3", "Viem"],
    href: "/insights/viem-migration",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=600&auto=format&fit=crop",
    featured: false,
  },
];

const InsightsSection = () => {
  const featuredArticle = insights.find((i) => i.featured);
  const regularArticles = insights.filter((i) => !i.featured);

  return (
    <section className="py-32 px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex items-end justify-between"
        >
          <div>
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40 block mb-4">
              From the Studio
            </span>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight uppercase">
              Insights
            </h2>
          </div>
          
          <Link
            href="/insights"
            className="hidden md:flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
          >
            Read All Articles
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticle && (
            <FeaturedArticle {...featuredArticle} />
          )}
          
          <div className="space-y-8">
            {regularArticles.slice(0, 2).map((article, i) => (
              <ArticleCard key={article.title} {...article} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center md:hidden"
        >
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
          >
            Read All Articles
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection;
