"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { InteractiveTitle } from "./InteractiveTitle";

export interface ProjectCardProps {
  title: string;
  year?: string;
  clientType?: string;
  engagementType?: string;
  description: string;
  tags: string[];
  metric?: string;
  imageSrc?: string;
  logoSrc?: string;
  imageAlt: string;
  href: string;
  index: number;
  bgColor?: string;
}

export function ProjectCard({
  title,
  year,
  clientType,
  engagementType,
  description,
  tags,
  metric,
  imageSrc,
  logoSrc,
  imageAlt,
  href,
  index,
  bgColor = "#0a0a0a"
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative">
        <Link href={href} className="block focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none rounded-2xl">
          <div className="relative overflow-hidden rounded-2xl aspect-[8/5]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1280}
                height={800}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 grayscale"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            ) : logoSrc ? (
              <div
                className="w-full h-full flex items-center justify-center p-8 transition-all duration-700 ease-out group-hover:scale-105"
                style={{ backgroundColor: bgColor }}
              >
                <Image
                  src={logoSrc}
                  alt={imageAlt}
                  width={400}
                  height={400}
                  className="max-w-full max-h-full object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            ) : (
              <div
                className="w-full h-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-out group-hover:scale-105"
                style={{ backgroundColor: bgColor }}
              >
                <InteractiveTitle
                  title={title}
                  className="font-display font-bold leading-none tracking-tighter uppercase"
                  spanClassName="text-3xl md:text-4xl lg:text-5xl"
                />
              </div>
            )}
            
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
                    <ArrowUpRight className="w-8 h-8 text-white" aria-hidden="true" />
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
              <motion.h2
                animate={isHovered ? { x: 5 } : {}}
                className="font-display font-bold text-2xl md:text-3xl tracking-tight uppercase"
              >
                {title}
              </motion.h2>
              <motion.div
                animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-6 h-6 text-white/30" aria-hidden="true" />
              </motion.div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              {year && (
                <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/55">
                  {year}
                </span>
              )}
              {clientType && (
                <>
                  <span className="text-white/20 text-[10px]">•</span>
                  <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/55">
                    {clientType}
                  </span>
                </>
              )}
              {engagementType && (
                <>
                  <span className="text-white/20 text-[10px]" aria-hidden="true">•</span>
                  <span className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/55">
                    {engagementType}
                  </span>
                </>
              )}
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
                  className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-white/55 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
