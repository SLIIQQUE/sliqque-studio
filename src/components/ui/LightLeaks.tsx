"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LightLeaks = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-orange-500/10 to-transparent"
        style={{ top: "-20%", left: "-10%" }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-blue-500/10 to-transparent"
        style={{ bottom: "-10%", right: "-5%" }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent"
        style={{ top: "30%", right: "10%" }}
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[20vw] h-[20vw] rounded-full bg-gradient-to-br from-green-500/5 to-transparent"
        style={{ bottom: "20%", left: "20%" }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default LightLeaks;
