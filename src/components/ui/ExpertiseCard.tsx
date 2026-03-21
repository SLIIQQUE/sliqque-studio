"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ExpertiseCardProps {
  title: string;
  description: string;
  href: string;
}

const ExpertiseCard = ({
  title,
  description,
  href,
}: ExpertiseCardProps) => {
  return (
    <Link
      href={href}
      className="group p-10 border border-white/5 hover:border-white/20 transition-colors duration-500 flex flex-col gap-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-3xl tracking-tight uppercase">
          {title}
        </h3>
        <span className="text-white/20 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all">
          ↗
        </span>
      </div>
      <p className="text-sm font-body text-white/60 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted group-hover:text-white transition-colors mt-auto">
        <span>Explore</span>
        <ArrowRight size={12} />
      </div>
    </Link>
  );
};

export default ExpertiseCard;
