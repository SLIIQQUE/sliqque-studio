"use client";

import React from "react";
import { motion } from "framer-motion";
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

const Marquee = ({ speed = 40, className = "" }: { speed?: number; className?: string }) => {
  const items = [
    "Web3 Native",
    "React",
    "Next.js",
    "TypeScript",
    "Built for Performance",
    "Shipped in Weeks",
    "Craft-Led Engineering",
    "Lagos to the World",
    "Solidity",
    "SaaS Frontend",
  ];

  return (
    <div className={`relative overflow-hidden border-y border-white/5 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <motion.div
        className="flex items-center py-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-8 whitespace-nowrap">
            <motion.span
              whileHover={{ scale: 1.1, color: "#fff" }}
              className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40"
            >
              {item}
            </motion.span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-blue-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const IconMarquee = () => {
  return (
    <div className="py-16 border-b border-white/5 overflow-hidden">
      <motion.div
        className="flex items-center justify-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...icons, ...icons].map(({ Icon, color }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.3, rotate: 10 }}
            className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group cursor-pointer"
          >
            <Icon className={`w-8 h-8 ${color} group-hover:text-white transition-colors`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const TechStackMarquee = () => {
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
      <motion.div
        className="flex items-center gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-full whitespace-nowrap cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-blue-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                style={{ opacity: 0.3 }}
              />
              <span className="relative text-sm font-bold">{tech.name.charAt(0)}</span>
            </div>
            <div>
              <span className="text-sm font-body font-medium">{tech.name}</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: `${tech.level}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="text-[10px] text-white/30">{tech.level}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const ProjectTypeMarquee = () => {
  const projectTypes = [
    { type: "DeFi Dashboard", icon: "📊" },
    { type: "NFT Platform", icon: "🎨" },
    { type: "SaaS Product", icon: "🚀" },
    { type: "DAO Interface", icon: "🏛️" },
    { type: "Trading Platform", icon: "📈" },
    { type: "Social dApp", icon: "💬" },
  ];

  return (
    <div className="py-12 border-y border-white/5 overflow-hidden">
      <motion.div
        className="flex items-center gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...projectTypes, ...projectTypes].map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl whitespace-nowrap"
          >
            <span className="text-2xl">{project.icon}</span>
            <span className="text-sm font-body font-medium">{project.type}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export { Marquee, IconMarquee, TechStackMarquee, ProjectTypeMarquee };

export default Marquee;
