"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Layers,
  Boxes,
  Shield,
  Monitor,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const ServiceItem = ({
  index,
  title,
  description,
  icon: Icon,
  price,
  features,
  delay,
}: {
  index: string;
  title: string;
  description: string;
  icon: any;
  price?: string;
  features?: string[];
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      
      <div className="pl-8 py-10 border-b border-white/5 hover:border-white/10 transition-colors duration-500">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-mono text-white/20 tracking-widest">
                {index}
              </span>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
              >
                <Icon className="w-4 h-4 text-white/60" />
              </motion.div>
            </div>
            
            <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight uppercase mb-3 group-hover:text-white/90 transition-colors">
              {title}
            </h3>
            
            <p className="text-sm font-body text-white/40 max-w-xl leading-relaxed mb-4">
              {description}
            </p>
            
            {features && features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {features.slice(0, 3).map((feature) => (
                  <span key={feature} className="text-[10px] font-mono text-white/30 px-2 py-1 bg-white/5 rounded">
                    {feature}
                  </span>
                ))}
                {features.length > 3 && (
                  <span className="text-[10px] font-mono text-white/30 px-2 py-1">+{features.length - 3} more</span>
                )}
              </div>
            )}
            
            <motion.a
              href="/contact"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors duration-300"
            >
              Learn More
              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
          
          {price && (
            <div className="hidden md:block text-right shrink-0">
              <span className="text-[10px] font-mono text-white/20 tracking-widest block mb-2">Starting at</span>
              <span className="font-display font-bold text-xl tracking-tight">{price}</span>
            </div>
          )}
        </div>
        
        <motion.div
          className="h-px bg-gradient-to-r from-orange-500/50 via-blue-500/50 to-purple-500/50 mt-8 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
        />
      </div>
    </motion.div>
  );
};

const FeaturedService = ({
  index,
  title,
  description,
  icon: Icon,
  price,
  features,
  delay,
}: {
  index: string;
  title: string;
  description: string;
  icon: any;
  price: string;
  features: string[];
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative md:col-span-2 lg:col-span-1"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 lg:p-10 hover:border-white/20 transition-all duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-10">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center"
            >
              <Icon className="w-8 h-8 text-orange-400" />
            </motion.div>
            
            <span className="text-[10px] font-mono text-white/20 tracking-[0.3em]">
              {index}
            </span>
          </div>
          
          <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight uppercase mb-4 leading-tight">
            {title}
          </h3>
          
          <p className="text-sm font-body text-white/50 leading-relaxed mb-8 max-w-sm">
            {description}
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-10">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: delay + 0.1 * i }}
                className="flex items-center gap-2 text-xs font-body text-white/40"
              >
                <span className="w-1 h-1 rounded-full bg-orange-500/60" />
                {feature}
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <div>
              <span className="text-[10px] font-mono text-white/20 tracking-widest block mb-1">Starting at</span>
              <span className="font-display font-bold text-2xl tracking-tight">{price}</span>
            </div>
            
            <motion.a
              href="/contact"
              whileHover={{ x: 4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] rounded-full"
            >
              Get Started
              <ArrowRight size={12} />
            </motion.a>
          </div>
        </div>
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
        />
      </div>
    </motion.div>
  );
};

const services = [
  {
    index: "01",
    title: "Website Design & Development",
    description:
      "Professional, conversion-focused websites for businesses ready to establish their online presence and grow.",
    icon: Monitor,
    price: "From $1,000",
    features: [
      "Custom responsive design",
      "SEO optimization",
      "Fast load times",
      "Mobile-first",
      "Analytics setup",
      "Contact forms",
    ],
  },
  {
    index: "02",
    title: "Product Build",
    description:
      "From brief to mainnet in weeks — not months. Full-stack product engineering for Web3 founders ready to ship.",
    icon: Rocket,
    price: "From $15,000",
    features: [
      "Smart contract integration",
      "dApp interface",
      "Wallet auth",
      "Launch-ready",
    ],
  },
  {
    index: "03",
    title: "Interface Engineering",
    description:
      "SaaS and Web3 interfaces built for performance and conversion. React, Next.js, TypeScript.",
    icon: Layers,
    price: "From $8,000",
    features: [
      "Pixel-perfect build",
      "Performance-first",
      "Component systems",
      "Conversion-focused",
    ],
  },
  {
    index: "04",
    title: "Studio Retainer",
    description:
      "Your dedicated frontend engineering partner — on call, embedded, always shipping.",
    icon: Boxes,
    price: "From $6,000/month",
    features: [
      "Priority access",
      "40hrs/month",
      "Strategy sessions",
      "Ongoing support",
    ],
  },
  {
    index: "05",
    title: "Technical Audit",
    description:
      "We review your existing product and tell you exactly what to fix and why.",
    icon: Shield,
    price: "Fixed: $2,500",
    features: [
      "Performance audit",
      "Architecture review",
      "Action plan",
      "Implementation guide",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/10 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-[10px] font-body font-medium uppercase tracking-[0.2em] text-white/60">
              What We Do
            </span>
          </motion.div>

          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase mb-6 leading-[0.9]">
            Services
          </h2>
          <p className="text-base font-body text-white/40 max-w-lg mx-auto">
            Tailored engagements for every stage of your journey — from landing pages to mainnet launches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <FeaturedService {...services[0]} delay={0.1} />
          
          <div className="lg:col-span-4 space-y-0">
            {services.slice(1).map((service, i) => (
              <ServiceItem key={service.index} {...service} delay={0.2 + i * 0.1} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="/services"
            className="group inline-flex items-center gap-3 text-[11px] font-body font-medium uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
          >
            View all services
            <motion.span
              initial={{ x: -4, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
