"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Folder, Terminal, Volume2, VolumeX, MapPin, X, Sparkles } from "lucide-react";
import { DATA } from "@/constants/data";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export const IFruitPhone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeApp, setActiveApp] = useState<"home" | "contacts" | "missions" | "terminal">("home");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [cmdInput, setCmdInput] = useState("");

  const playClickSFX = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // Audio context fallback
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        playClickSFX();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [soundEnabled]);

  return (
    <>
      {/* FLOATING CORNER iFRUIT PHONE MINIMAP WIDGET */}
      <button
        id="ifruit-phone-trigger"
        onClick={() => {
          setIsOpen(!isOpen);
          playClickSFX();
        }}
        className="fixed bottom-6 right-6 z-[150] w-24 h-40 bg-[#0c051a] border-2 border-[#ff007f] rounded-2xl p-1.5 shadow-[0_0_30px_rgba(255,0,127,0.4)] hover:scale-105 transition-all group flex flex-col justify-between overflow-hidden cursor-pointer select-none"
      >
        {/* Vice Minimap Screen */}
        <div className="relative w-full flex-1 bg-[#05010d] rounded-xl overflow-hidden vice-grid flex items-center justify-center border border-[#00f0ff]/40">
          <div className="absolute inset-0 bg-gradient-to-t from-[#ff007f]/20 to-transparent" />
          
          <div className="relative z-10 flex flex-col items-center">
            <MapPin size={20} className="text-[#00f0ff] animate-bounce filter drop-shadow-[0_0_10px_#00f0ff]" />
            <span className="text-[7px] font-mono text-[#ffcc00] font-bold uppercase tracking-widest mt-1">
              NEXT OBJECTIVE
            </span>
          </div>
        </div>

        <div className="w-full h-3 flex items-center justify-center">
          <div className="w-8 h-1 bg-[#ff007f] rounded-full group-hover:bg-[#00f0ff] transition-colors" />
        </div>
      </button>

      {/* EXPANDED INTERACTIVE iFRUIT SMARTPHONE SCREEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-24 right-6 z-[160] w-80 h-[520px] bg-[#0c051a] border-4 border-[#ff007f] rounded-[2.5rem] shadow-[0_0_60px_rgba(255,0,127,0.5)] flex flex-col overflow-hidden font-mono select-none"
          >
            {/* Phone Top Notch Bar */}
            <div className="bg-[#05010d] px-6 py-3 flex items-center justify-between border-b border-white/10 text-[10px] text-slate-300">
              <span className="font-bold text-[#00f0ff]">iFruit OS v6.0</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="text-slate-400 hover:text-[#ffcc00]"
                >
                  {soundEnabled ? <Volume2 size={12} /> : <VolumeX size={12} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#ff007f] hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* SCREEN VIEWPORT */}
            <div className="flex-1 bg-[#05010d] p-5 flex flex-col justify-between overflow-y-auto">
              
              {/* HOME SCREEN */}
              {activeApp === "home" && (
                <div className="flex-1 flex flex-col justify-between">
                  <div className="text-center mt-2">
                    <span className="text-[10px] text-[#00f0ff] font-bold uppercase tracking-widest block">
                      SURAT NODE CONNECTOR
                    </span>
                    <h4 className="text-lg font-black font-heading text-white uppercase">
                      {DATA.personal.name}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-auto">
                    <button
                      onClick={() => {
                        setActiveApp("contacts");
                        playClickSFX();
                      }}
                      className="p-4 bg-[#0a0214] border border-[#ff007f]/40 hover:border-[#00f0ff] rounded-2xl flex flex-col items-center gap-2 group transition-all cursor-pointer"
                    >
                      <Phone size={24} className="text-[#ff007f] group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-white font-bold uppercase">Contacts</span>
                    </button>

                    <button
                      onClick={() => {
                        setActiveApp("missions");
                        playClickSFX();
                      }}
                      className="p-4 bg-[#0a0214] border border-[#00f0ff]/40 hover:border-[#ff007f] rounded-2xl flex flex-col items-center gap-2 group transition-all cursor-pointer"
                    >
                      <Folder size={24} className="text-[#00f0ff] group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-white font-bold uppercase">Missions</span>
                    </button>

                    <button
                      onClick={() => {
                        setActiveApp("terminal");
                        playClickSFX();
                      }}
                      className="p-4 bg-[#0a0214] border border-[#ffcc00]/40 hover:border-[#00f0ff] rounded-2xl flex flex-col items-center gap-2 group transition-all cursor-pointer"
                    >
                      <Terminal size={24} className="text-[#ffcc00] group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-white font-bold uppercase">Cmd Terminal</span>
                    </button>

                    <a
                      href={`mailto:${DATA.personal.email}`}
                      className="p-4 bg-[#0a0214] border border-[#ff007f]/40 hover:border-[#00f0ff] rounded-2xl flex flex-col items-center gap-2 group transition-all cursor-pointer"
                    >
                      <Mail size={24} className="text-[#ff007f] group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-white font-bold uppercase">Direct Mail</span>
                    </a>
                  </div>

                  <div className="text-center text-[9px] text-slate-500 uppercase tracking-widest">
                    PRESS HOME BAR TO RETURN
                  </div>
                </div>
              )}

              {/* CONTACTS APP */}
              {activeApp === "contacts" && (
                <div className="flex-1 flex flex-col gap-4">
                  <span className="text-xs text-[#00f0ff] font-bold uppercase">CONTACTS // DIRECT SIGNAL</span>

                  <a
                    href={`mailto:${DATA.personal.email}`}
                    className="p-3 bg-[#0a0214] border border-[#ff007f]/30 rounded-xl flex items-center gap-3 text-xs text-white"
                  >
                    <Mail size={16} className="text-[#ff007f]" />
                    <span className="truncate">{DATA.personal.email}</span>
                  </a>

                  {DATA.social.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#0a0214] border border-[#00f0ff]/30 rounded-xl flex items-center justify-between text-xs text-white hover:border-[#00f0ff]"
                    >
                      <div className="flex items-center gap-3 text-[#00f0ff]">
                        {s.name === "GitHub" ? <GithubIcon /> : <LinkedinIcon />}
                        <span>{s.name}</span>
                      </div>
                      <span>→</span>
                    </a>
                  ))}
                </div>
              )}

              {/* MISSIONS APP */}
              {activeApp === "missions" && (
                <div className="flex-1 flex flex-col gap-3">
                  <span className="text-xs text-[#ff007f] font-bold uppercase">ACTIVE HEIST MISSIONS</span>
                  {DATA.projects.map((p) => (
                    <a
                      key={p.slug}
                      href="#projects"
                      onClick={() => setIsOpen(false)}
                      className="p-3 bg-[#0a0214] border border-[#00f0ff]/30 rounded-xl flex items-center justify-between text-xs text-white hover:bg-[#ff007f]/20"
                    >
                      <span className="font-bold truncate">{p.title}</span>
                      <span className="text-[10px] text-[#ffcc00]">VIEW</span>
                    </a>
                  ))}
                </div>
              )}

              {/* TERMINAL APP */}
              {activeApp === "terminal" && (
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#ffcc00] font-bold uppercase block mb-2">CMD TERMINAL PROMPT</span>
                    <div className="p-3 bg-[#0a0214] border border-white/20 rounded-xl text-xs text-[#00f0ff]">
                      &gt; COMMAND: SURAT_NODE_ACTIVE
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Type command..."
                    value={cmdInput}
                    onChange={(e) => setCmdInput(e.target.value)}
                    className="w-full p-3 bg-[#0a0214] border border-[#ff007f] rounded-xl text-xs text-white focus:outline-none"
                  />
                </div>
              )}

            </div>

            {/* Bottom Home Button */}
            <button
              onClick={() => {
                setActiveApp("home");
                playClickSFX();
              }}
              className="bg-[#05010d] py-3 flex justify-center border-t border-white/10 hover:bg-[#ff007f]/20 transition-colors cursor-pointer"
            >
              <div className="w-10 h-1.5 bg-[#ff007f] rounded-full" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
