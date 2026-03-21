"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxGalleryProps {
  imageSrc?: string;
  imageAlt?: string;
  overlayText?: string;
}

const ParallaxGallery = ({
  imageSrc = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2560&auto=format&fit=crop",
  imageAlt = "Parallax Visual",
  overlayText = "Visual Symphony",
}: ParallaxGalleryProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section className="relative h-[80vh] overflow-hidden border-b border-white/5">
      <motion.div style={{ y: springY }} className="absolute inset-0 w-full h-[120%]">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-bold text-[8vw] uppercase tracking-tighter opacity-20">
          {overlayText}
        </span>
      </div>
    </section>
  );
};

export default ParallaxGallery;
