"use client";

import { useState, useEffect } from "react";
import { Activity, Cpu, ShieldAlert, Wifi, Zap } from "lucide-react";

export const CyberDiagnostics = () => {
  const [fps, setFps] = useState(60);
  const [latency, setLatency] = useState(0.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setFps(Math.floor(Math.random() * 3) + 59);
      setLatency(Number((Math.random() * 0.3 + 0.3).toFixed(2)));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[140] hidden xl:flex items-center gap-4 bg-[#0a0318]/90 border border-[#00f0ff]/40 px-4 py-2 rounded-xl backdrop-blur-xl font-mono text-[10px] shadow-[0_0_20px_rgba(0,240,255,0.2)] select-none">
      <div className="flex items-center gap-2 text-[#55ff55] font-bold">
        <Activity size={13} className="animate-pulse" />
        <span>FPS: {fps}</span>
      </div>

      <div className="h-3 w-px bg-white/20" />

      <div className="flex items-center gap-2 text-[#00f0ff] font-bold">
        <Wifi size={13} />
        <span>LATENCY: {latency}ms</span>
      </div>

      <div className="h-3 w-px bg-white/20" />

      <div className="flex items-center gap-2 text-[#ff007f] font-bold">
        <Cpu size={13} />
        <span>NODE: SURAT_ONLINE</span>
      </div>

      <div className="h-3 w-px bg-white/20" />

      <div className="flex items-center gap-1.5 text-[#ffcc00] font-extrabold animate-wanted">
        <ShieldAlert size={13} />
        <span>WANTED: ★★★★★</span>
      </div>
    </div>
  );
};
