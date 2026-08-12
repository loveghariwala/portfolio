"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Crosshair, Zap, Shield, Flame, Target, Cpu } from "lucide-react";
import { gtaAudio } from "@/lib/gtaAudio";

const weaponSlots = [
  {
    id: "nextjs",
    name: "NEXT.JS 16 TURBOPACK",
    type: "PRIMARY ASSAULT RIFLE",
    ammo: "999 / 999",
    damage: 100,
    speed: "0.01s",
    range: "GLOBAL DEPLOYMENT",
    desc: "Full-stack server actions, sub-50ms SSR routing, and Turbopack compiler.",
    icon: "🔫",
  },
  {
    id: "react",
    name: "REACT.JS 19",
    type: "DUAL PLASMA PISTOLS",
    ammo: "850 / 999",
    damage: 98,
    speed: "0.02s",
    range: "UI COMPOSITION",
    desc: "Concurrent rendering, server components, and dynamic client hooks.",
    icon: "⚡",
  },
  {
    id: "typescript",
    name: "TYPESCRIPT 5.2",
    type: "PRECISION SNIPER RIFLE",
    ammo: "999 / 999",
    damage: 100,
    speed: "0.01s",
    range: "TYPE SAFETY",
    desc: "Strict type safety, generic interfaces, and zero runtime reference crashes.",
    icon: "🎯",
  },
  {
    id: "fastapi",
    name: "FASTAPI PROXY",
    type: "HEAVY LAUNCHER",
    ammo: "500 / 500",
    damage: 96,
    speed: "0.05s",
    range: "MICROSERVICES",
    desc: "Async Python routers, sub-50ms JSON fallovers, and TMDB key cloaking.",
    icon: "🚀",
  },
  {
    id: "qdrant",
    name: "QDRANT VECTOR DB",
    type: "PLASMA CANNON",
    ammo: "384 / 384",
    damage: 99,
    speed: "0.03s",
    range: "EMBEDDING SEARCH",
    desc: "384-dimensional cosine similarity searches under 50ms latency.",
    icon: "🔮",
  },
  {
    id: "supabase",
    name: "SUPABASE & POSTGRES",
    type: "HEAVY SHOTGUN",
    ammo: "750 / 750",
    damage: 97,
    speed: "0.04s",
    range: "RLS SECURITY",
    desc: "Row level security, real-time database subscriptions, and auth rules.",
    icon: "💥",
  },
  {
    id: "tailwind",
    name: "TAILWIND CSS V4",
    type: "TACTICAL SHIELD",
    ammo: "MAX / MAX",
    damage: 100,
    speed: "0.00s",
    range: "DESIGN SYSTEM",
    desc: "Ultra-responsive CSS engine, glassmorphic HUDs, and Vice color design tokens.",
    icon: "🛡️",
  },
  {
    id: "webrtc",
    name: "WEBRTC & WEBSOCKETS",
    type: "SUBMACHINE GUN",
    ammo: "999 / 999",
    damage: 95,
    speed: "0.01s",
    range: "REALTIME STREAM",
    desc: "Low-latency peer-to-peer data channels and live WebSockets streams.",
    icon: "📡",
  },
];

export const GtaWeaponWheelModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const currentWeapon = weaponSlots[activeIdx];

  // Listen for TAB key or global trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        gtaAudio.playWeaponSwitch();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* FLOATING HUD TRIGGER BUTTON */}
      <button
        id="gta-weapon-wheel-trigger"
        onClick={() => {
          setIsOpen(!isOpen);
          gtaAudio.playWeaponSwitch();
        }}
        className="fixed top-20 right-6 z-[140] bg-[#05010d]/90 border border-[#ff007f] hover:border-[#00f0ff] px-4 py-2 rounded-xl text-xs font-mono text-white font-extrabold uppercase tracking-widest shadow-[0_0_20px_rgba(255,0,127,0.3)] flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
      >
        <Crosshair size={16} className="text-[#ff007f] animate-spin-slow" />
        <span>WEAPON WHEEL [TAB]</span>
      </button>

      {/* FULLSCREEN RADIAL GTA WEAPON WHEEL MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-[#05010d]/90 backdrop-blur-2xl flex items-center justify-center p-6 font-mono select-none"
          >
            <div className="relative w-full max-w-4xl flex flex-col items-center justify-center">
              
              {/* TOP HEADER */}
              <div className="text-center mb-8">
                <span className="text-xs text-[#00f0ff] font-extrabold uppercase tracking-widest block mb-1">
                  VICE CITY WEAPON SELECTION // PRESS TAB OR CLICK TO CLOSE
                </span>
                <h3 className="text-4xl font-black font-heading text-white uppercase gta-vi-logo-text">
                  GRAND THEFT WEAPON WHEEL
                </h3>
              </div>

              {/* RADIAL WHEEL CONTAINER */}
              <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border-2 border-[#ff007f]/40 flex items-center justify-center vice-grid shadow-[0_0_60px_rgba(255,0,127,0.3)]">
                
                {/* Center Weapon Summary Box */}
                <div className="w-44 h-44 rounded-full bg-[#05010d] border-2 border-[#00f0ff] flex flex-col items-center justify-center text-center p-4 z-20 shadow-[0_0_30px_#00f0ff]">
                  <span className="text-3xl mb-1">{currentWeapon.icon}</span>
                  <span className="text-xs font-black font-heading text-white uppercase truncate w-full">
                    {currentWeapon.name}
                  </span>
                  <span className="text-[9px] text-[#55ff55] font-extrabold mt-1">
                    AMMO: {currentWeapon.ammo}
                  </span>
                </div>

                {/* 8 RADIAL WEAPON SLOTS */}
                {weaponSlots.map((w, idx) => {
                  const angle = (idx * 360) / weaponSlots.length - 90;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 150; // distance from center
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;
                  const isSelected = activeIdx === idx;

                  return (
                    <motion.button
                      key={w.id}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                      onMouseEnter={() => {
                        setActiveIdx(idx);
                        gtaAudio.playWeaponSwitch();
                      }}
                      onClick={() => {
                        setActiveIdx(idx);
                        gtaAudio.playWeaponSwitch();
                      }}
                      className={`absolute w-16 h-16 rounded-2xl flex flex-col items-center justify-center border-2 transition-all cursor-pointer z-10 ${
                        isSelected
                          ? "bg-[#ff007f] border-white scale-125 shadow-[0_0_25px_#ff007f]"
                          : "bg-[#0c051a] border-[#00f0ff]/50 hover:border-[#ff007f] text-slate-300"
                      }`}
                    >
                      <span className="text-xl">{w.icon}</span>
                      <span className="text-[8px] font-black text-white mt-0.5 truncate max-w-[50px]">
                        0{idx + 1}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* BOTTOM SELECTED WEAPON TELEMETRY SPECIFICATION */}
              <div className="mt-8 w-full max-w-xl gta-hud-card p-6 rounded-2xl border border-[#ff007f] font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <span className="text-[#00f0ff] font-extrabold uppercase">
                    {currentWeapon.type}
                  </span>
                  <span className="text-[#55ff55] font-black">AMMO: {currentWeapon.ammo}</span>
                </div>

                <p className="text-slate-300 font-sans mb-4 leading-relaxed text-xs">
                  {currentWeapon.desc}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase block mb-1">
                      FIREPOWER DAMAGE
                    </span>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#ff007f]"
                        style={{ width: `${currentWeapon.damage}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase block mb-1">
                      TTFB LATENCY: {currentWeapon.speed}
                    </span>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00f0ff] w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-6 py-2 rounded-xl bg-white/10 hover:bg-[#ff007f] text-white text-xs font-black uppercase tracking-widest transition-all cursor-pointer"
              >
                CLOSE WEAPON WHEEL [ESC]
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
