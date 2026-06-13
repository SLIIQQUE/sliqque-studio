"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * LightLeaks — decorative ambient background blobs.
 */

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

const orbBase =
  "absolute rounded-full pointer-events-none";

const orbs = [
  {
    className: `${orbBase} w-[50vw] h-[50vw] bg-gradient-to-br from-orange-500/10 to-transparent will-change-transform`,
    style: { top: "-20%", left: "-10%" } as React.CSSProperties,
    animate: { x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] },
    transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
  },
  {
    className: `${orbBase} w-[40vw] h-[40vw] bg-gradient-to-br from-blue-500/10 to-transparent will-change-transform`,
    style: { bottom: "-10%", right: "-5%" } as React.CSSProperties,
    animate: { x: [0, -80, 0], y: [0, -60, 0], scale: [1, 1.3, 1] },
    transition: { duration: 25, repeat: Infinity, ease: "easeInOut" },
  },
  {
    className: `${orbBase} w-[30vw] h-[30vw] bg-gradient-to-br from-purple-500/10 to-transparent will-change-transform`,
    style: { top: "30%", right: "10%" } as React.CSSProperties,
    animate: { x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] },
    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
  },
  {
    className: `${orbBase} w-[20vw] h-[20vw] bg-gradient-to-br from-green-500/5 to-transparent will-change-transform`,
    style: { bottom: "20%", left: "20%" } as React.CSSProperties,
    animate: { x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.2, 1] },
    transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
  },
];

const LightLeaks = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {orbs.map((orb, i) =>
        reducedMotion ? (
          <div key={i} className={orb.className} style={orb.style} />
        ) : (
          <motion.div
            key={i}
            className={orb.className}
            style={orb.style}
            animate={orb.animate}
            transition={orb.transition}
          />
        )
      )}
    </div>
  );
};

export default LightLeaks;
