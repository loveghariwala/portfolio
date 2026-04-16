"use client";

import { motion } from "framer-motion";

const GeometricShape = ({ delay, size, color, initialX, initialY }: { 
  delay: number; 
  size: number; 
  color: string;
  initialX: string;
  initialY: string;
}) => {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY, rotate: 0, opacity: 0 }}
      animate={{
        x: [initialX, "80vw", "10vw", initialX],
        y: [initialY, "10vh", "90vh", initialY],
        rotate: [0, 180, 360, 0],
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      className="absolute pointer-events-none z-[-2]"
      style={{
        width: size,
        height: size,
      }}
    >
       <div 
         className={`w-full h-full border border-white/10 backdrop-blur-sm rounded-xl rotate-45`}
         style={{ background: `linear-gradient(135deg, ${color}33, transparent)` }}
       />
    </motion.div>
  );
};

export const GeometricFlow = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
       <GeometricShape delay={0} size={150} color="#7c3aed" initialX="10vw" initialY="20vh" />
       <GeometricShape delay={5} size={100} color="#06b6d4" initialX="80vw" initialY="70vh" />
       <GeometricShape delay={10} size={200} color="#7c3aed" initialX="50vw" initialY="50vh" />
       <GeometricShape delay={15} size={80} color="#ec4899" initialX="20vw" initialY="80vh" />
       <GeometricShape delay={20} size={120} color="#06b6d4" initialX="70vw" initialY="10vh" />
    </div>
  );
};
