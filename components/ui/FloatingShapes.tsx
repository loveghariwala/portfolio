"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Shape = ({ index }: { index: number }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Randomize initial positions and animations
  const size = Math.random() * 300 + 100;
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;
  const duration = Math.random() * 20 + 20;

  return (
    <motion.div
      initial={{ x: `${initialX}%`, y: `${initialY}%`, opacity: 0 }}
      animate={{
        x: [`${initialX}%`, `${(initialX + 20) % 100}%`, `${(initialX - 20 + 100) % 100}%`, `${initialX}%`],
        y: [`${initialY}%`, `${(initialY + 20) % 100}%`, `${(initialY - 20 + 100) % 100}%`, `${initialY}%`],
        rotate: [0, 180, 360],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute pointer-events-none rounded-full"
      style={{
        width: size,
        height: size,
        background: index % 2 === 0 
          ? "radial-gradient(circle, var(--primary) 0%, transparent 70%)" 
          : "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  );
};

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
       {[...Array(8)].map((_, i) => (
          <Shape key={i} index={i} />
       ))}
    </div>
  );
};
