"use client";

import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Code2,
  Palette,
  Zap,
  Shield,
  Globe,
  Rocket,
  ArrowRight,
  Layers,
  Boxes,
  Sparkles,
  Monitor,
} from "lucide-react";

const AnimatedIcon = ({
  icon: Icon,
  delay = 0,
}: {
  icon: any;
  delay?: number;
}) => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay,
    }}
    whileHover={{ scale: 1.2, rotate: 5 }}
    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center"
  >
    <Icon className="w-8 h-8 text-white/80" />
  </motion.div>
);

const InteractiveCard3D = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`cursor-pointer perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const ServiceCard = ({
  index,
  title,
  description,
  icon: Icon,
  features,
  startingAt,
  href,
  delay,
}: {
  index: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  startingAt: string;
  href: string;
  delay: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      />

      <div className="relative bg-background/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"
          animate={
            isHovered ? { scale: 2, opacity: 1 } : { scale: 1, opacity: 0 }
          }
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: delay + 0.2 }}
            className="flex items-center justify-between mb-8"
          >
            <motion.div
              animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-12 h-12 text-white/80" />
            </motion.div>
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30">
              {index}
            </span>
          </motion.div>

          <motion.h3
            className="font-display font-bold text-3xl tracking-tight uppercase mb-4"
            animate={isHovered ? { x: 5 } : { x: 0 }}
          >
            {title}
          </motion.h3>

          <p className="text-white/50 font-body leading-relaxed mb-8">
            {description}
          </p>

          <div className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.1 * i }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={
                    isHovered
                      ? { scale: [1, 1.5, 1], backgroundColor: "#f97316" }
                      : {}
                  }
                  transition={{ duration: 0.3 }}
                  className="w-1.5 h-1.5 rounded-full bg-white/30"
                />
                <span className="text-sm font-body text-white/50">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <motion.span
              animate={isHovered ? { scale: 1.05 } : {}}
              className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/30"
            >
              {startingAt}
            </motion.span>

            <motion.a
              href={href}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              Learn More
              <ArrowRight size={12} />
            </motion.a>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
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
    features: [
      "Custom responsive design",
      "SEO-optimized structure",
      "Fast load times",
      "Mobile-first approach",
    ],
    startingAt: "From $1,000",
    href: "/contact",
  },
  {
    index: "02",
    title: "Product Build",
    description:
      "From brief to mainnet in weeks — not months. Full-stack product engineering for Web3 founders ready to ship.",
    icon: Rocket,
    features: [
      "Smart contract integration",
      "dApp interface engineering",
      "Wallet auth + on-chain data",
      "Launch-ready architecture",
    ],
    startingAt: "From $15,000",
    href: "/contact",
  },
  {
    index: "03",
    title: "Interface Engineering",
    description:
      "SaaS and Web3 interfaces built for performance and conversion. React, Next.js, TypeScript.",
    icon: Layers,
    features: [
      "Pixel-perfect implementation",
      "Performance-first architecture",
      "Component systems that scale",
      "Conversion-optimized UX",
    ],
    startingAt: "From $8,000",
    href: "/contact",
  },
  {
    index: "04",
    title: "Studio Retainer",
    description:
      "Your dedicated frontend engineering partner — on call, embedded, always shipping.",
    icon: Boxes,
    features: [
      "Priority access",
      "40hrs/month minimum",
      "Monthly strategy sessions",
      "Ongoing support & iteration",
    ],
    startingAt: "From $6,000/month",
    href: "/contact",
  },
  {
    index: "05",
    title: "Technical Audit",
    description:
      "We review your existing product and tell you exactly what to fix and why.",
    icon: Shield,
    features: [
      "Performance diagnosis",
      "Architecture review",
      "Prioritised action plan",
      "Implementation roadmap",
    ],
    startingAt: "Fixed: $2,500",
    href: "/contact",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/60">
              What We Do
            </span>
          </motion.div>

          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight uppercase mb-6">
            Services
          </h2>
          <p className="text-lg font-body text-white/50 max-w-2xl mx-auto">
            Five engagement types designed for founders and businesses building what's next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.index} {...service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
