"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface InsightCardProps {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  href: string;
}

const InsightCard = ({
  title,
  excerpt,
  date,
  readingTime,
  href,
}: InsightCardProps) => {
  return (
    <Link href={href} className="group block py-10 border-b border-white/5">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
            {date}
          </span>
          <span className="text-white/20">•</span>
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
            {readingTime}
          </span>
        </div>
        <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight group-hover:text-white/60 transition-colors">
          {title}
        </h3>
        <p className="text-sm font-body text-white/60 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted group-hover:text-white transition-colors pt-4">
          <span>Read Article</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
};

export default InsightCard;
