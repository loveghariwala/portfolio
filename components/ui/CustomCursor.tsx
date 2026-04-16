"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const trailX = useSpring(cursorX, { stiffness: 300, damping: 30 });
  const trailY = useSpring(cursorY, { stiffness: 300, damping: 30 });
  const scale = useSpring(1, { stiffness: 400, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true);
        scale.set(2.5);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      scale.set(1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, scale]);

  if (!mounted) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        style={{ x: cursorX, y: cursorY, scale }}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
      />
      {/* Outer ring */}
      <motion.div
        style={{ x: trailX, y: trailY, scale }}
        className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full pointer-events-none z-[9998] hidden md:block border transition-colors duration-200 ${
          isHovering ? "border-accent/60 bg-accent/5" : "border-primary/40"
        }`}
      />
    </>
  );
};
