"use client";

import React, { useEffect, useState } from "react";
import { 
  Zap, 
  Code2, 
  Palette, 
  Globe, 
  Rocket, 
  Shield, 
  Sparkles,
  Layers,
  Cpu,
  Database
} from "lucide-react";

const icons = [
  { Icon: Zap, color: "text-orange-500" },
  { Icon: Code2, color: "text-blue-500" },
  { Icon: Palette, color: "text-purple-500" },
  { Icon: Globe, color: "text-green-500" },
  { Icon: Rocket, color: "text-red-500" },
  { Icon: Shield, color: "text-yellow-500" },
  { Icon: Sparkles, color: "text-pink-500" },
  { Icon: Layers, color: "text-cyan-500" },
  { Icon: Cpu, color: "text-indigo-500" },
  { Icon: Database, color: "text-teal-500" },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

const Marquee = ({ speed = 40, className = "" }: { speed?: number; className?: string }) => {
  const reducedMotion = useReducedMotion();
  const items = [
    "React",
    "Next.js",
    "TypeScript",
    "AI Agents",
    "Workflow Automation",
    "Bot Development",
    "Craft-Led Engineering",
    "Lagos to the World",
    "Website Design",
    "SaaS Frontend",
  ];

  return (
    <div className={`relative overflow-hidden border-y border-white/5 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <div
        className={`flex items-center py-8 ${reducedMotion ? "" : "animate-marquee"}`}
        style={reducedMotion ? undefined : { "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-8 whitespace-nowrap group">
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/55 group-hover:text-white group-hover:scale-110 transition-all duration-200">
              {item}
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 animate-spin-slow" />
          </div>
        ))}
      </div>
    </div>
  );
};

const IconMarquee = () => {
  const reducedMotion = useReducedMotion();
  return (
    <div className="py-16 border-b border-white/5 overflow-hidden">
      <div className={`flex items-center justify-center gap-8 ${reducedMotion ? "" : "animate-marquee"}`} style={reducedMotion ? undefined : { "--marquee-duration": "30s" } as React.CSSProperties}>
        {[...icons, ...icons].map(({ Icon, color }, i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:scale-130 hover:rotate-10 transition-all duration-200"
          >
            <Icon className={`w-8 h-8 ${color} group-hover:text-white transition-colors`} aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStackMarquee = () => {
  const reducedMotion = useReducedMotion();
  const techStack = [
    { name: "React", level: 98 },
    { name: "Next.js", level: 95 },
    { name: "TypeScript", level: 92 },
    { name: "Node.js", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "AWS", level: 78 },
    { name: "Docker", level: 75 },
    { name: "GraphQL", level: 82 },
  ];

  return (
    <div className="py-12 overflow-hidden">
      <div className={`flex items-center gap-6 ${reducedMotion ? "" : "animate-marquee"}`} style={reducedMotion ? undefined : { "--marquee-duration": "40s" } as React.CSSProperties}>
        {[...techStack, ...techStack].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-full whitespace-nowrap hover:scale-105 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden group-hover:opacity-30 transition-opacity">
              <span className="text-sm font-bold">{tech.name.charAt(0)}</span>
            </div>
            <div>
              <span className="text-sm font-body font-medium">{tech.name}</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-blue-500 rounded-full group-hover:opacity-100 opacity-30 transition-opacity"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
                <span className="text-[10px] text-white/55">{tech.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectTypeMarquee = () => {
  const reducedMotion = useReducedMotion();
  const projectTypes = [
    { type: "Business Website", icon: "🌐" },
    { type: "SaaS Platform", icon: "🚀" },
    { type: "Dashboard UI", icon: "📊" },
    { type: "Design System", icon: "🎨" },
    { type: "Voice AI Bot", icon: "🎙️" },
    { type: "Landing Page", icon: "💻" },
  ];

  return (
    <div className="py-12 border-y border-white/5 overflow-hidden">
      <div className={`flex items-center gap-4 ${reducedMotion ? "" : "animate-marquee"}`} style={reducedMotion ? undefined : { "--marquee-duration": "25s" } as React.CSSProperties}>
        {[...projectTypes, ...projectTypes].map((project, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl whitespace-nowrap hover:scale-105 transition-all duration-200"
          >
            <span className="text-2xl" aria-hidden="true">{project.icon}</span>
            <span className="text-sm font-body font-medium">{project.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Marquee, IconMarquee, TechStackMarquee, ProjectTypeMarquee };

export default Marquee;
