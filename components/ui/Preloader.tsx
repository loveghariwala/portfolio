"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ShieldAlert, Cpu } from "lucide-react";

const gtaArtworks = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80", // Vice Beach Sunset
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80", // Cyber City Night
  "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80", // Synthwave Palms
];

const bootLogs = [
  "LOADING NEXT.JS 16 TURBOPACK ENGINE...",
  "INITIALIZING HIGH-TECH VICE CITY SHADERS...",
  "CONNECTING TO SURAT DEV NODE [200 OK]...",
  "MOUNTING QDRANT VECTOR SEARCH INDEX...",
  "SETTING WANTED LEVEL TO ★★★★★ (SENIOR ARCHITECT)...",
  "WELCOME TO GRAND THEFT ARCHITECTURE VI: VICE CITY",
];

export const Preloader = ({ onComplete }: { onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [artIndex, setArtIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoaded(true);
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        return next > 100 ? 100 : next;
      });
    }, 120);

    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev));
      setArtIndex((prev) => (prev + 1) % gtaArtworks.length);
    }, 450);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-[#05010d] flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none font-sans"
        >
          {/* ROTATING GTA VI BACKDROP ARTWORK */}
          <div className="absolute inset-0 z-0">
            <motion.div
              key={artIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.35, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${gtaArtworks[artIndex]})` }}
            />
            <div className="absolute inset-0 gta-sunset-overlay" />
            <div className="absolute inset-0 vice-scanline opacity-30 pointer-events-none" />
            <div className="absolute inset-0 vice-grid opacity-20 pointer-events-none" />
          </div>

          {/* GIANT BACKDROP "VI" ROMAN NUMERAL */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="text-[40vw] font-black gta-vi-numeral select-none leading-none">
              VI
            </span>
          </div>

          {/* TOP GTA HUD HEADER */}
          <div className="flex justify-between items-center z-10">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-gradient-to-r from-[#ff007f] to-[#ff6b00] text-white text-xs font-black tracking-widest rounded shadow-[0_0_20px_#ff007f]">
                VI
              </div>
              <span className="text-sm font-mono text-[#00f0ff] font-bold tracking-widest uppercase drop-shadow-[0_0_10px_#00f0ff]">
                VICE CITY // ARCHITECT OS
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ffcc00] animate-wanted">
              <ShieldAlert size={16} />
              <span className="font-bold">WANTED: ★★★★★</span>
            </div>
          </div>

          {/* CENTER OFFICIAL GTA VI LOGO TITLE CARD */}
          <div className="my-auto text-center z-10 relative">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-3"
            >
              <div className="text-6xl sm:text-8xl md:text-9xl font-black uppercase gta-vi-logo-text tracking-tighter">
                LOVE GHARIWALA
              </div>
            </motion.div>

            <p className="text-sm sm:text-xl font-mono uppercase tracking-[0.4em] text-[#00f0ff] font-extrabold drop-shadow-[0_0_12px_#00f0ff]">
              &lt; GRAND THEFT ARCHITECTURE // NEXT.JS SPECIALIST /&gt;
            </p>
          </div>

          {/* BOTTOM GTA VI STYLE LOADING BAR */}
          <div className="z-10 max-w-5xl mx-auto w-full font-mono">
            <div className="flex justify-between items-center text-xs text-slate-200 mb-2">
              <div className="flex items-center gap-2 text-[#00f0ff] font-bold">
                <Cpu size={14} className="animate-spin-slow text-[#ff6b00]" />
                <span>{bootLogs[logIndex]}</span>
              </div>
              <span className="font-black text-[#ff007f] text-lg drop-shadow-[0_0_10px_#ff007f]">
                {progress}%
              </span>
            </div>

            {/* GTA VI Loading Bar Track */}
            <div className="w-full h-3.5 bg-[#0a0214] border border-[#ff007f]/50 p-0.5 rounded-sm overflow-hidden shadow-[0_0_25px_rgba(255,0,127,0.4)]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ff007f] via-[#ff6b00] to-[#00f0ff] shadow-[0_0_20px_#00f0ff]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest">
              <span>© 2026 ROCKSTAR DEV STUDIOS // SURAT NODE</span>
              <span>PRESS ANYWHERE TO ENTER VICE CITY</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
