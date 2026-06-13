"use client";

import React from "react";
import { motion } from "framer-motion";
import InsightCard from "@/components/ui/InsightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { insightArticles } from "@/data";

export default function InsightsPageClient() {
  return (
    <div className="pt-[100px]">
      <section aria-labelledby="insights-page-heading" className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="From the Studio"
            title="Insights"
            description="Technical articles on frontend engineering, SaaS development, and studio thinking. Written by engineers who build, for engineers who want to learn."
            as="h1"
          />
        </div>
      </section>

      <section className="py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {insightArticles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <InsightCard {...article} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
