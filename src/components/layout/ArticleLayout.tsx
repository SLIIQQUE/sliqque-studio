"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ArticleLayoutProps {
  date: string;
  readTime: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  authorImage?: string;
  authorName?: string;
  authorRole?: string;
  children: React.ReactNode;
  ctaText?: string;
}

export default function ArticleLayout({
  date,
  readTime,
  title,
  description,
  heroImage,
  heroAlt,
  authorImage = "/images/Gabriel.jpg",
  authorName = "Gabriel Njoabozia",
  authorRole = "Founder & Lead Engineer",
  children,
  ctaText = "Building something great?",
}: ArticleLayoutProps) {
  useEffect(() => {
    const preElements = document.querySelectorAll("pre");
    preElements.forEach((pre) => {
      if (!pre.hasAttribute("tabIndex") && pre.scrollWidth > pre.clientWidth) {
        pre.setAttribute("tabIndex", "0");
      } else if (!pre.hasAttribute("tabIndex")) {
        pre.setAttribute("tabIndex", "0");
      }
    });
  }, []);

  return (
    <div className="pt-[100px]">
      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors mb-12 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            >
              <ArrowLeft size={12} aria-hidden="true" />
              All Insights
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
                {date}
              </span>
              <span className="text-white/20" aria-hidden="true">&bull;</span>
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
                {readTime}
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              {title}
            </h1>

            <p className="text-lg font-body text-white/60 leading-relaxed">
              {description}
            </p>

            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
              <div className="w-10 h-10 bg-white/10 rounded-full overflow-hidden">
                <Image
                  src={authorImage}
                  alt={authorName}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-sm font-body font-medium block">
                  {authorName}
                </span>
                <span className="text-[10px] font-body text-muted uppercase tracking-[0.1em]">
                  {authorRole}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="aspect-[3/2] bg-white/5 overflow-hidden">
              <Image
                src={heroImage}
                alt={heroAlt}
                width={1920}
                height={1280}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-10">
        <div className="max-w-3xl mx-auto prose">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {children}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-white/5"
          >
            <p className="text-sm font-body text-muted">
              {ctaText}{" "}
              <Link href="/contact" className="text-white underline underline-offset-2 hover:no-underline">
                Let&apos;s talk &rarr;
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
