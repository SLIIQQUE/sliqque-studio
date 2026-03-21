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
  Star,
} from "lucide-react";

const ServiceItem = ({
  index,
  title,
  description,
  icon: Icon,
  price,
  features,
  delay,
  highlight = false,
}: {
  index: string;
  title: string;
  description: string;
  icon: any;
  price?: string;
  features?: string[];
  delay: number;
  highlight?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative pl-8 py-8 border-b border-white/5 hover:border-white/10 transition-colors duration-500">
        <div className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-500 ${
          highlight ? 'bg-gradient-to-b from-orange-500 via-amber-400 to-orange-500' : 'bg-gradient-to-b from-transparent via-white/10 to-transparent'
        }`} />
        
        <div className="flex items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[10px] font-mono text-white/20 tracking-widest">
                {index}
              </span>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  highlight 
                    ? 'bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30' 
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${highlight ? 'text-orange-400' : 'text-white/60'}`} />
              </motion.div>
              {highlight && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: delay + 0.2 }}
                  className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wider text-orange-400/80"
                >
                  <Star size={8} className="fill-current" />
                  Popular
                </motion.span>
              )}
            </div>
            
            <h3 className={`font-display font-bold tracking-tight uppercase mb-2 group-hover:text-white/90 transition-colors ${
              highlight ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
            }`}>
              {title}
            </h3>
            
            <p className="text-sm font-body text-white/40 max-w-xl leading-relaxed mb-4">
              {description}
            </p>
            
            {features && features.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {features.slice(0, 4).map((feature) => (
                  <span 
                    key={feature} 
                    className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors duration-300 ${
                      highlight 
                        ? 'text-orange-400/60 bg-orange-500/10' 
                        : 'text-white/30 bg-white/5'
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="hidden md:flex flex-col items-end gap-4 shrink-0">
            {price && (
              <div className="text-right">
                <span className="text-[10px] font-mono text-white/20 tracking-widest block mb-1">Starting at</span>
                <span className={`font-display font-bold tracking-tight ${highlight ? 'text-lg text-orange-400' : 'text-base'}`}>
                  {price}
                </span>
              </div>
            )}
            
            <motion.a
              href="/contact"
              whileHover={{ x: 4 }}
              className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                highlight 
                  ? 'text-orange-400/70 hover:text-orange-400' 
                  : 'text-white/30 hover:text-white/60'
              }`}
            >
              Learn More
              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
        
        <motion.div
          className={`h-px mt-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out ${
            highlight ? 'bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500' : 'bg-gradient-to-r from-orange-500/50 via-blue-500/50 to-purple-500/50'
          }`}
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
    ],
    highlight: true,
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

        <div className="space-y-0">
          {services.slice(0, 4).map((service, i) => (
            <ServiceItem key={service.index} {...service} delay={0.1 + i * 0.08} />
          ))}
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
