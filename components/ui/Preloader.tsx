"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Cpu, Terminal, Sparkles } from "lucide-react";

const bootLogs = [
  "INITIALIZING RUNTIME ENGINE...",
  "COMPILING NEXT.JS 16 ARCHITECTURE...",
  "CONNECTING SURAT DEV NODE [200 OK]...",
  "HYDRATING VECTOR SEARCH EMBEDDINGS...",
  "MOUNTING SYSTEM INTERFACES...",
  "SYSTEM ONLINE",
];

export const Preloader = ({ onComplete }: { onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const finishLoading = useCallback(() => {
    setIsLoaded(true);
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(finishLoading, 200);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 25) + 15;
        return next > 100 ? 100 : next;
      });
    }, 40);

    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev));
    }, 180);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(12px)" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          onClick={finishLoading}
          role="status"
          aria-live="polite"
          aria-label="Loading Love Ghariwala Portfolio"
          className="fixed inset-0 z-[999] bg-[#07060c] flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none font-mono cursor-pointer"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Header */}
          <div className="flex justify-between items-center z-10 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span className="uppercase tracking-widest text-slate-300">LOVE GHARIWALA // DEV KERNEL</span>
            </div>
            <div className="text-[11px] text-purple-400 font-bold tracking-widest uppercase">
              INITIALIZING
            </div>
          </div>

          {/* Center Brand Title */}
          <div className="my-auto text-center z-10 relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-block mb-3"
            >
              <div className="text-4xl sm:text-6xl md:text-8xl font-black font-heading tracking-tight text-white uppercase">
                LOVE<span className="text-purple-400">.</span>
              </div>
            </motion.div>

            <p className="text-xs sm:text-sm tracking-[0.25em] text-slate-400 uppercase font-medium">
              Frontend & Backend Developer // Next.js Specialist
            </p>
          </div>

          {/* Bottom Loading Bar */}
          <div className="z-10 max-w-xl mx-auto w-full">
            <div className="flex justify-between items-center text-xs text-slate-300 mb-2">
              <div className="flex items-center gap-2 text-purple-300">
                <Cpu className="w-3.5 h-3.5 animate-pulse text-purple-400" />
                <span className="text-[11px] font-mono">{bootLogs[logIndex]}</span>
              </div>
              <span className="font-bold text-white font-mono">
                {progress}%
              </span>
            </div>

            {/* Loading Track */}
            <div
              className="w-full h-1.5 bg-white/5 border border-white/10 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-wider">
              <span>Next.js 16 + React 19 Engine</span>
              <span className="text-purple-400 hover:text-purple-300">Click to skip ➔</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
