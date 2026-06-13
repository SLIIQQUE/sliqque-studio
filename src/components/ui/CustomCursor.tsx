"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

/**
 * CustomCursor — replaces the native cursor with a styled follower.
 *
 * Performance notes:
 * - Mouse event listener uses `{ passive: true }` to avoid blocking scrolling.
 * - `will-change: transform` is set via Tailwind utility to promote elements
 *   to their own compositor layer — avoids repainting on every frame.
 * - CursorWrapper conditionally mounts this component (no-op on touch devices).
 * - `MotionConfig reducedMotion="user"` in layout.tsx disables spring
 *   animation for users who prefer reduced motion.
 */

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isReducedMotion]);

  if (isReducedMotion) return null;

  return (
    <div role="presentation" aria-hidden="true">
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white/50 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-white/20 pointer-events-none z-[9998] will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.3 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </div>
  );
};

export default CustomCursor;
