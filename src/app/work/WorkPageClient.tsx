"use client";

import React from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EcosystemCallout } from "@/components/sections/EcosystemCallout";
import { projects, workPageContent } from "@/data";
import { foundersWebsitesDeployed } from "@/data/studio";

export default function WorkPageClient() {
  const sliiqqueProjectCount = projects.filter((project) => !project.earlier).length;

  return (
    <div className="pt-[100px]">
      <section className="py-12 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label={workPageContent.label}
            title={workPageContent.title}
            description={workPageContent.description}
            as="h1"
          />
        </div>
      </section>

      <section className="py-10 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <div className="shrink-0">
            <span className="font-display text-5xl md:text-6xl font-bold tracking-tight block">
              {foundersWebsitesDeployed}+
            </span>
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/50">
              Websites deployed by our founder
            </span>
          </div>
          <div className="hidden sm:block h-16 w-px bg-white/10" />
          <p className="text-sm font-body text-white/50 leading-relaxed max-w-xl">
            Most of our work is private or under NDA. The {sliiqqueProjectCount} builds below are
            the projects we can show publicly.
          </p>
        </div>
      </section>

      <section className="py-8 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <EcosystemCallout />
    </div>
  );
}
