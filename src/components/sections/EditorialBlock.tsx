"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EditorialBlockProps {
  index: string;
  title: string;
  content: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const EditorialBlock = ({ 
  index, 
  title, 
  content, 
  ctaLabel = "Explore Manifesto", 
  ctaHref = "#" 
}: EditorialBlockProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 px-10 py-32 gap-10 border-b border-white/5">
      <div className="md:col-span-3">
        <h2 className="sticky top-32 font-display font-bold text-6xl tracking-tighter text-muted/30">
          {index}
        </h2>
      </div>
      <div className="md:col-start-5 md:col-span-8 flex flex-col gap-10">
        <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tighter max-w-xl">
          {title}
        </h3>
        <p className="text-xl md:text-2xl font-body font-light leading-relaxed max-w-2xl text-white/80">
          {content}
        </p>
        <Link href={ctaHref} className="group flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] border-b border-white/10 pb-2 w-fit transition-all hover:border-white">
          {ctaLabel}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
};

export default EditorialBlock;
