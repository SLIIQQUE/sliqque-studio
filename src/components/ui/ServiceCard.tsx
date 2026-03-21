"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  index: string;
  title: string;
  description: string;
  features: string[];
  startingAt: string;
  href?: string;
}

const ServiceCard = ({
  index,
  title,
  description,
  features,
  startingAt,
  href = "#services",
}: ServiceCardProps) => {
  return (
    <div className="group p-10 border border-white/5 hover:border-white/20 transition-colors duration-500 flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
          {index}
        </span>
        <span className="text-white/20 group-hover:text-white/60 transition-colors text-sm">
          →
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-3xl tracking-tight uppercase">
          {title}
        </h3>
        <p className="text-white/60 font-body font-light text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="border-t border-white/5 pt-8">
        <ul className="flex flex-col gap-3">
          {features.map((feature, i) => (
            <li
              key={i}
              className="text-xs font-body text-white/40 flex items-center gap-3"
            >
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
        <Link
          href={href}
          className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors flex items-center gap-2 group-hover:gap-4"
        >
          Learn More
          <ArrowRight size={12} />
        </Link>
        <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
          {startingAt}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
