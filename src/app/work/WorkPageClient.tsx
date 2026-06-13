"use client";

import React from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, workPageContent } from "@/data";

export default function WorkPageClient() {
  return (
    <div className="pt-[100px]">
      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label={workPageContent.label}
            title={workPageContent.title}
            description={workPageContent.description}
            as="h1"
          />
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
