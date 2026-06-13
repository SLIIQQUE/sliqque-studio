"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface InsightCardProps {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  href: string;
  imageSrc?: string;
}

const InsightCard = ({
  title,
  excerpt,
  date,
  readingTime,
  href,
  imageSrc,
}: InsightCardProps) => {
  return (
    <Link href={href} className="group block py-10 border-b border-white/5 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none">
      <div className="flex flex-col gap-4">
        {imageSrc && (
          <div className="aspect-video bg-white/5 overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={450}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
            {date}
          </span>
          <span className="text-white/20" aria-hidden="true">•</span>
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
            {readingTime}
          </span>
        </div>
        <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight group-hover:text-white/60 transition-colors">
          {title}
        </h2>
        <p className="text-sm font-body text-white/60 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted group-hover:text-white transition-colors pt-4">
          <span>Read Article</span>
          <ArrowRight size={12} aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
};

export default InsightCard;
