"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { featuredProjects, workPageContent } from "@/data";

const SelectedWorkSection = () => {
  return (
    <section aria-labelledby="work-heading" className="py-32 px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex items-end justify-between"
        >
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "auto" }}
                viewport={{ once: true }}
                className="overflow-hidden"
              >
                <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/50 block mb-4">
                  {workPageContent.label}
                </span>
              </motion.div>
              <h2 id="work-heading" className="font-display font-bold text-5xl md:text-7xl tracking-tight uppercase">
                {workPageContent.title}
              </h2>
            </div>
          
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/55 hover:text-white transition-colors group focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
          >
            View All
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </motion.div>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center md:hidden"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/55 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
