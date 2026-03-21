"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  metric?: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const WorkCard = ({
  title,
  description,
  tags,
  metric,
  imageSrc,
  imageAlt,
  href,
}: WorkCardProps) => {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-[2px] aspect-[4/3] bg-black">
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="flex items-center gap-2 text-white">
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em]">
              View Project
            </span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <h3 className="font-display font-bold text-2xl tracking-tight uppercase">
            {title}
          </h3>
          {metric && (
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted whitespace-nowrap">
              {metric}
            </span>
          )}
        </div>
        <p className="text-sm font-body text-white/60 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-muted border border-white/10 px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
