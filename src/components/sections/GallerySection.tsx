"use client";

import React from "react";
import { motion } from "framer-motion";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface GallerySectionProps {
  items?: GalleryItem[];
}

const defaultItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
    alt: "Gallery Item 1",
    caption: "View Collection",
  },
  {
    src: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop",
    alt: "Gallery Item 2",
    caption: "Explore Gallery",
  },
];

const GallerySection = ({ items = defaultItems }: GallerySectionProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-white/5 divide-x divide-white/5 h-[80vh]">
      {items.map((item, i) => (
        <div key={i} className="group relative overflow-hidden bg-black h-full cursor-crosshair">
          <motion.img 
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-[2s] ease-out group-hover:opacity-40"
          />
          <div className="absolute inset-0 flex items-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {item.caption && (
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] bg-white text-black px-4 py-2">
                {item.caption}
              </span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default GallerySection;
