"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";

export const SectionSeparator = () => {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <Container className="h-full">
        <div className="relative h-full w-full">
          {/* Main Line with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          {/* Animated Scanning Beam */}
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(124,58,237,0.8)]"
          />
          
          {/* Center Sparkle Point */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="w-1.5 h-1.5 rounded-full bg-primary blur-[2px] animate-pulse" />
             <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-white opacity-80" />
          </div>
        </div>
      </Container>
    </div>
  );
};
