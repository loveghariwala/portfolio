"use client";

import { useState, useEffect } from "react";
import { Navigation, MapPin, Compass } from "lucide-react";
import { gtaAudio } from "@/lib/gtaAudio";

export const GtaMinimap = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
      setRotation(angle + 90);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      onClick={() => gtaAudio.playClick()}
      className="fixed bottom-6 left-6 z-[140] hidden md:flex items-center gap-4 select-none font-mono cursor-pointer group"
    >
      {/* CIRCULAR GTA RADAR MINIMAP */}
      <div className="relative w-36 h-36 rounded-full bg-[#05010d] border-4 border-[#120826] shadow-[0_0_30px_rgba(255,0,127,0.4)] overflow-hidden flex items-center justify-center vice-grid">
        
        {/* Background Sunset Grid */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#ff007f]/20 via-[#ff6b00]/10 to-transparent pointer-events-none" />

        {/* Rotating Radar Sweep Line */}
        <div className="absolute inset-0 rounded-full border border-[#00f0ff]/30 animate-spin-slow pointer-events-none">
          <div className="w-1/2 h-1/2 bg-gradient-to-br from-[#00f0ff]/30 to-transparent rounded-tl-full origin-bottom-right" />
        </div>

        {/* GPS Waypoint Path Line */}
        <svg className="absolute inset-0 w-full h-full text-[#ff007f]" viewBox="0 0 100 100">
          <path
            d="M50 50 L75 25 L85 45"
            fill="none"
            stroke="#ff007f"
            strokeWidth="3"
            strokeDasharray="4 4"
          />
          <circle cx="85" cy="45" r="4" fill="#00f0ff" className="animate-ping" />
        </svg>

        {/* Outer Health Gauge Arc (Green) */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 text-[#55ff55]" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="276"
            strokeDashoffset="70"
            className="filter drop-shadow-[0_0_8px_#55ff55]"
          />
        </svg>

        {/* Outer Armor Gauge Arc (Cyan) */}
        <svg className="absolute inset-0 w-full h-full rotate-90 text-[#00f0ff]" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="276"
            strokeDashoffset="140"
            className="filter drop-shadow-[0_0_8px_#00f0ff]"
          />
        </svg>

        {/* Center Player Blip Arrow (Rotates with Mouse) */}
        <div
          style={{ transform: `rotate(${rotation}deg)` }}
          className="relative z-20 text-[#00f0ff] filter drop-shadow-[0_0_10px_#00f0ff] transition-transform duration-100"
        >
          <Navigation size={22} fill="#00f0ff" />
        </div>

        {/* Zone Label Overlay */}
        <div className="absolute bottom-1 inset-x-0 text-center z-20">
          <span className="text-[8px] bg-[#05010d]/90 border border-[#ff007f]/50 text-white font-extrabold uppercase px-2 py-0.5 rounded shadow-[0_0_10px_#ff007f]">
            VICE CITY
          </span>
        </div>
      </div>

      {/* MINIMAP TELEMETRY INFO BADGE */}
      <div className="flex flex-col gap-1 text-[10px]">
        <div className="bg-[#05010d]/90 border border-[#ff007f]/40 px-3 py-1.5 rounded-xl backdrop-blur-md shadow-lg flex items-center gap-2">
          <MapPin size={12} className="text-[#ff007f]" />
          <span className="text-white font-extrabold">SURAT NODE [IN]</span>
        </div>
        <div className="bg-[#05010d]/90 border border-[#00f0ff]/40 px-3 py-1 rounded-xl backdrop-blur-md flex items-center gap-2 text-[#00f0ff]">
          <Compass size={12} />
          <span className="font-bold">GPS: HEIST ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
