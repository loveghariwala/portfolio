"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Zap, Trophy, DollarSign } from "lucide-react";
import { gtaAudio } from "@/lib/gtaAudio";

export const GtaCheatConsole = () => {
  const [activeCheat, setActiveCheat] = useState<string | null>(null);
  const [keyBuffer, setKeyBuffer] = useState("");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if user typing in input/textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const char = e.key.toUpperCase();
      if (char.length === 1 && char >= "A" && char <= "Z") {
        setKeyBuffer((prev) => {
          const nextBuffer = (prev + char).slice(-10);

          if (nextBuffer.includes("GTA6") || nextBuffer.includes("VICE")) {
            triggerCheat("CHEAT ACTIVATED: VICE CITY MODE ($50,000,000 ADDED)");
            return "";
          }
          if (nextBuffer.includes("GODMODE") || nextBuffer.includes("SENIOR")) {
            triggerCheat("CHEAT ACTIVATED: SENIOR ARCHITECT GODMODE");
            return "";
          }
          if (nextBuffer.includes("WANTED") || nextBuffer.includes("STARS")) {
            triggerCheat("CHEAT ACTIVATED: 5-STAR WANTED LEVEL LOCKED");
            return "";
          }

          return nextBuffer;
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const triggerCheat = (cheatText: string) => {
    setActiveCheat(cheatText);
    gtaAudio.playWantedStar();
    setTimeout(() => setActiveCheat(null), 4000);
  };

  return (
    <AnimatePresence>
      {activeCheat && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-24 right-6 z-[350] bg-[#05010d] border-2 border-[#ffcc00] px-6 py-3 rounded-2xl shadow-[0_0_40px_#ffcc00] flex items-center gap-3 font-mono text-xs text-[#ffcc00] font-black uppercase tracking-widest"
        >
          <Trophy size={20} className="animate-bounce text-[#55ff55]" />
          <span>{activeCheat}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
