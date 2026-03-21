"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, workPageContent } from "@/data";

export default function WorkPageClient() {
  return (
    <div className="pt-[100px]">
      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
              {workPageContent.label}
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase leading-tight max-w-4xl">
              {workPageContent.title}
            </h1>
            <p className="mt-8 text-xl font-body text-white/60 max-w-2xl leading-relaxed">
              {workPageContent.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
