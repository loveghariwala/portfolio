"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Folder,
  Terminal,
  Volume2,
  VolumeX,
  MapPin,
  X,
  Radio,
  Gamepad2,
  Camera,
  Star,
  ArrowLeft,
  ExternalLink,
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Send,
  Sliders,
  Zap,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { DATA } from "@/constants/data";
import { gtaAudio } from "@/lib/gtaAudio";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

type AppScreen =
  | "home"
  | "missions"
  | "project_detail"
  | "dialer"
  | "calling"
  | "terminal"
  | "radio"
  | "cheats"
  | "gallery"
  | "game"
  | "mail";

const WALLPAPERS = [
  { name: "Vice Neon", bg: "bg-gradient-to-b from-[#180630] via-[#090217] to-[#04010a]" },
  { name: "Cyber Sunset", bg: "bg-gradient-to-b from-[#2b0824] via-[#12031c] to-[#06000a]" },
  { name: "Matrix Code", bg: "bg-gradient-to-b from-[#021f14] via-[#01120b] to-[#000805]" },
  { name: "Obsidian Dark", bg: "bg-gradient-to-b from-[#111116] via-[#09090c] to-[#020204]" },
];

const RADIO_STATIONS = [
  { name: "Flash FM 105.6", genre: "Synthwave / Synth-pop", freq: "105.6 MHz" },
  { name: "Wave 103 Vice", genre: "New Wave / Electro", freq: "103.0 MHz" },
  { name: "Nightride FM", genre: "Cyberpunk Darksynth", freq: "98.4 MHz" },
  { name: "V-Rock Cyber", genre: "High Energy Rock", freq: "91.1 MHz" },
];

export const IFruitPhone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeApp, setActiveApp] = useState<AppScreen>("home");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [wallpaperIdx, setWallpaperIdx] = useState(0);
  const [timeString, setTimeString] = useState("12:00");
  const [wantedLevel, setWantedLevel] = useState(3);

  // Dialer state
  const [dialNumber, setDialNumber] = useState("");
  const [activeCallTarget, setActiveCallTarget] = useState<string | null>(null);
  const [callDuration, setCallDuration] = useState(0);

  // Selected project for missions app
  const [selectedProject, setSelectedProject] = useState<(typeof DATA.projects)[number] | null>(
    null
  );

  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<
    Array<{ type: "in" | "out"; text: string; color?: string }>
  >([
    { type: "out", text: "iFruit OS v6.0 [Hacker Kernel 4.20]", color: "#00f0ff" },
    { type: "out", text: 'Type "help" or click suggestion pills below.', color: "#ffcc00" },
  ]);
  const [terminalInput, setTerminalInput] = useState("");

  // Radio state
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);
  const [stationIdx, setStationIdx] = useState(0);
  const [radioBeat, setRadioBeat] = useState(0);

  // Gallery state
  const [galleryIdx, setGalleryIdx] = useState(0);

  // Mini-game state
  const [gameScore, setGameScore] = useState(0);
  const [gameHighScore, setGameHighScore] = useState(0);
  const [gameState, setGameState] = useState<"idle" | "playing" | "gameover">("idle");
  const [birdPos, setBirdPos] = useState(50);
  const [pipePos, setPipePos] = useState(100);
  const [pipeGap, setPipeGap] = useState(50);

  // Mail / Dispatch state (Nodemailer connected)
  const [mailName, setMailName] = useState("");
  const [mailEmail, setMailEmail] = useState("");
  const [mailMsg, setMailMsg] = useState("");
  const [mailLoading, setMailLoading] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [mailError, setMailError] = useState("");

  // Global visual cheat effects
  const [activeCheatEffect, setActiveCheatEffect] = useState<string | null>(null);

  // Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Call duration counter
  useEffect(() => {
    let timer: any = null;
    if (activeApp === "calling") {
      timer = setInterval(() => setCallDuration((c) => c + 1), 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(timer);
  }, [activeApp]);

  // Mini-Game Loop
  useEffect(() => {
    if (activeApp !== "game" || gameState !== "playing") return;

    const gameLoop = setInterval(() => {
      setBirdPos((prev) => {
        const next = prev + 3;
        if (next >= 92 || next <= 4) {
          setGameState("gameover");
          if (soundEnabled) gtaAudio.playWantedStar();
          return 50;
        }
        return next;
      });

      setPipePos((prev) => {
        if (prev <= -20) {
          setPipeGap(Math.floor(Math.random() * 40) + 30);
          setGameScore((s) => {
            const next = s + 1;
            if (next > gameHighScore) setGameHighScore(next);
            if (soundEnabled) gtaAudio.playGameCoin();
            return next;
          });
          return 100;
        }
        return prev - 4;
      });
    }, 40);

    return () => clearInterval(gameLoop);
  }, [activeApp, gameState, gameHighScore, soundEnabled]);

  // Handle Keydown shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        if (soundEnabled) gtaAudio.playClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [soundEnabled]);

  // All screenshots flat array for Snapmatic Gallery
  const allScreenshots = useMemo(() => {
    const list: Array<{ title: string; src: string }> = [];
    DATA.projects.forEach((p) => {
      if (p.image) list.push({ title: `${p.title} Cover`, src: p.image });
      p.screenshots?.forEach((s, idx) => {
        list.push({ title: `${p.title} View 0${idx + 1}`, src: s });
      });
    });
    return list;
  }, []);

  const playClick = () => {
    if (soundEnabled) gtaAudio.playClick();
  };

  const handleDialPress = (val: string) => {
    if (soundEnabled) gtaAudio.playDtmf(val);
    setDialNumber((prev) => (prev.length < 14 ? prev + val : prev));
  };

  const startCall = (name: string, num: string) => {
    if (soundEnabled) gtaAudio.playPhoneRing();
    setActiveCallTarget(name || num || DATA.personal.name);
    setActiveApp("calling");
  };

  const handleTerminalSubmit = (cmd?: string) => {
    const rawCmd = (cmd || terminalInput).trim().toLowerCase();
    if (!rawCmd) return;

    const newHistory = [...terminalHistory, { type: "in" as const, text: `> ${rawCmd}` }];

    switch (rawCmd) {
      case "help":
        newHistory.push({
          type: "out",
          text: "Available commands: skills, projects, hire, whoami, matrix, cheat, clear, date, about",
          color: "#00f0ff",
        });
        break;
      case "skills":
        DATA.skills.forEach((cat) => {
          newHistory.push({
            type: "out",
            text: `[${cat.category}]: ${cat.items.slice(0, 4).join(", ")}...`,
            color: cat.color || "#ffcc00",
          });
        });
        break;
      case "projects":
        DATA.projects.forEach((p, idx) => {
          newHistory.push({
            type: "out",
            text: `#0${idx + 1} ${p.title} -> ${p.link}`,
            color: "#55ff55",
          });
        });
        break;
      case "hire":
      case "contact":
        setActiveApp("mail");
        newHistory.push({
          type: "out",
          text: "Launching Dispatch Messenger App...",
          color: "#ff007f",
        });
        break;
      case "whoami":
        newHistory.push({
          type: "out",
          text: "Elite Recruiter / Client visiting Love Ghariwala's Vice City Portal.",
          color: "#ffcc00",
        });
        break;
      case "about":
        newHistory.push({
          type: "out",
          text: `${DATA.personal.name} - ${DATA.personal.role} (${DATA.personal.location})`,
          color: "#00f0ff",
        });
        break;
      case "matrix":
        newHistory.push({
          type: "out",
          text: "01001100 01001111 01010110 01000101 00100000 01000111 01001000 01000001 01010010 01001001 01010111 01000001 01001100 01000001",
          color: "#55ff55",
        });
        break;
      case "cheat":
        triggerCheat("NEON_BLAST");
        newHistory.push({
          type: "out",
          text: "CHEAT CODE ACTIVATED: NEON_BLAST OVERLOAD!",
          color: "#ff007f",
        });
        break;
      case "date":
        newHistory.push({
          type: "out",
          text: new Date().toUTCString(),
          color: "#ffffff",
        });
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        newHistory.push({
          type: "out",
          text: `Command not found: "${rawCmd}". Type "help" for manual.`,
          color: "#ff0055",
        });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
    if (soundEnabled) gtaAudio.playClick();
  };

  const toggleRadio = () => {
    const nextState = !isRadioPlaying;
    setIsRadioPlaying(nextState);
    if (soundEnabled) {
      gtaAudio.toggleSynthwaveRadio(nextState, () => {
        setRadioBeat((b) => (b + 1) % 4);
      });
    }
  };

  const nextStation = () => {
    setStationIdx((prev) => (prev + 1) % RADIO_STATIONS.length);
    if (soundEnabled) gtaAudio.playWeaponSwitch();
  };

  const triggerCheat = (cheatName: string) => {
    if (soundEnabled) gtaAudio.playCheatCode();
    setActiveCheatEffect(cheatName);

    if (cheatName === "WANTED_LEVEL") {
      setWantedLevel((w) => (w % 5) + 1);
    } else if (cheatName === "SUPER_SPEED") {
      window.scrollTo({ top: window.scrollY > 300 ? 0 : document.body.scrollHeight, behavior: "smooth" });
    }

    setTimeout(() => {
      setActiveCheatEffect(null);
    }, 4500);
  };

  const jumpGame = () => {
    if (gameState === "idle" || gameState === "gameover") {
      setGameState("playing");
      setGameScore(0);
      setBirdPos(50);
      setPipePos(100);
    } else {
      setBirdPos((p) => Math.max(8, p - 18));
    }
    if (soundEnabled) gtaAudio.playGameJump();
  };

  const handleSendDispatch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mailName.trim() || !mailEmail.trim() || !mailMsg.trim()) return;

    setMailLoading(true);
    setMailError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: mailName,
          email: mailEmail,
          message: mailMsg,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMailSent(true);
        setMailName("");
        setMailEmail("");
        setMailMsg("");
        if (soundEnabled) gtaAudio.playMissionPassed();
      } else {
        setMailError(data.error || "Transmission failed.");
      }
    } catch (err: any) {
      setMailError(err.message || "Failed to reach server.");
    } finally {
      setMailLoading(false);
    }
  };

  return (
    <>
      {/* GLOBAL CHEAT CODE VISUAL OVERLAYS */}
      {activeCheatEffect === "NEON_BLAST" && (
        <div className="fixed inset-0 z-[200] pointer-events-none animate-pulse bg-gradient-to-r from-[#ff007f]/20 via-[#00f0ff]/20 to-[#ffcc00]/20 mix-blend-screen" />
      )}

      {activeCheatEffect === "MONEY_RAIN" && (
        <div className="fixed inset-0 z-[200] pointer-events-none flex justify-around overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="text-3xl text-[#55ff55] font-black animate-bounce"
              style={{
                animationDuration: `${1 + (i % 5) * 0.3}s`,
                animationIterationCount: "infinite",
              }}
            >
              $$$ 💵 $$$
            </div>
          ))}
        </div>
      )}

      {/* FLOATING CORNER iFRUIT PHONE TRIGGER */}
      <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-end gap-2 font-mono">
        <button
          id="ifruit-phone-trigger"
          onClick={() => {
            setIsOpen(!isOpen);
            playClick();
          }}
          aria-label="Open interactive iFruit HUD phone"
          aria-expanded={isOpen}
          className="relative w-28 h-44 bg-[#0a0214] border-2 border-[#ff007f] hover:border-[#00f0ff] rounded-3xl p-2 shadow-[0_0_35px_rgba(255,0,127,0.5)] hover:scale-105 transition-all group flex flex-col justify-between overflow-hidden cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
        >

          {/* Top Speaker & Notch */}
          <div className="w-full flex items-center justify-between px-1">
            <div className="w-2 h-2 rounded-full bg-[#55ff55] animate-pulse" />
            <div className="w-8 h-1 bg-white/20 rounded-full" />
            <span className="text-[8px] text-[#00f0ff] font-bold">5G</span>
          </div>

          {/* Minimap Radar Screen */}
          <div className="relative w-full flex-1 my-1.5 bg-[#040108] rounded-2xl overflow-hidden vice-grid flex flex-col items-center justify-center border border-[#00f0ff]/30">
            <div className="absolute inset-0 bg-gradient-to-t from-[#ff007f]/25 via-transparent to-[#00f0ff]/10" />

            {/* Radar Sweep Line */}
            <div className="absolute inset-0 border border-[#00f0ff]/20 rounded-full animate-ping opacity-25" />

            <MapPin
              size={22}
              className="text-[#00f0ff] animate-bounce filter drop-shadow-[0_0_12px_#00f0ff] relative z-10"
            />
            <span className="text-[7px] font-mono text-[#ffcc00] font-black uppercase tracking-widest mt-1 relative z-10">
              iFruit v6.0
            </span>
          </div>

          {/* Bottom Bar Indicator */}
          <div className="w-full flex items-center justify-center">
            <div className="w-10 h-1 bg-[#ff007f] rounded-full group-hover:bg-[#00f0ff] transition-colors" />
          </div>

          {/* Notification Badge */}
          <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#ff007f] text-white text-[9px] font-black flex items-center justify-center shadow-lg animate-bounce">
            5
          </div>
        </button>

        <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase bg-[#080314]/90 px-2 py-0.5 rounded-full border border-white/10">
          Press Ctrl + K
        </span>
      </div>

      {/* FULL EXPANDED INTERACTIVE iFRUIT SMARTPHONE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 60 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-[160] w-[340px] sm:w-[360px] h-[580px] bg-[#0c051a] border-4 border-[#ff007f] rounded-[3rem] shadow-[0_0_80px_rgba(255,0,127,0.6)] flex flex-col overflow-hidden font-mono select-none"
          >
            {/* PHONE TOP NOTCH STATUS BAR */}
            <div className="bg-[#05010d] px-6 py-2.5 flex items-center justify-between border-b border-white/10 text-[10px] text-slate-300">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white">{timeString}</span>
                <span className="text-[9px] text-[#00f0ff] font-bold">5G ⚡</span>
              </div>

              {/* Wanted Level Stars */}
              <div className="flex items-center gap-0.5 text-[#ffcc00]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    fill={i < wantedLevel ? "#ffcc00" : "none"}
                    className={i < wantedLevel ? "text-[#ffcc00]" : "text-slate-700"}
                  />
                ))}
              </div>

              {/* System Action Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setWallpaperIdx((w) => (w + 1) % WALLPAPERS.length);
                    playClick();
                  }}
                  title="Change Wallpaper"
                  className="text-slate-400 hover:text-[#00f0ff] cursor-pointer"
                >
                  <Sliders size={12} />
                </button>

                <button
                  onClick={() => {
                    setSoundEnabled(!soundEnabled);
                    if (!soundEnabled) gtaAudio.playClick();
                  }}
                  className="text-slate-400 hover:text-[#ffcc00] cursor-pointer"
                >
                  {soundEnabled ? <Volume2 size={12} /> : <VolumeX size={12} />}
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    playClick();
                  }}
                  className="text-[#ff007f] hover:text-white cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* SCREEN VIEWPORT WITH DYNAMIC WALLPAPER */}
            <div
              className={`flex-1 ${WALLPAPERS[wallpaperIdx].bg} p-4 flex flex-col justify-between overflow-y-auto relative`}
            >
              {/* HOME SCREEN */}
              {activeApp === "home" && (
                <div className="flex-1 flex flex-col justify-between py-2">
                  {/* Top Profile Card */}
                  <div className="text-center bg-[#070114]/80 p-3 rounded-2xl border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] text-[#00f0ff] font-bold uppercase tracking-widest">
                        SURAT NODE // ONLINE
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#55ff55] animate-pulse" />
                    </div>
                    <h4 className="text-base font-black font-heading text-white uppercase">
                      {DATA.personal.name}
                    </h4>
                    <p className="text-[10px] text-slate-300 font-sans mt-0.5">
                      Next.js Architect • Full Stack
                    </p>
                  </div>

                  {/* APPS 8-GRID */}
                  <div className="grid grid-cols-4 gap-2.5 my-auto">
                    {/* App 1: Missions */}
                    <button
                      onClick={() => {
                        setActiveApp("missions");
                        playClick();
                      }}
                      className="p-2.5 bg-[#0a0214] border border-[#00f0ff]/40 hover:border-[#00f0ff] rounded-2xl flex flex-col items-center gap-1 group transition-all cursor-pointer shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#00f0ff]/15 flex items-center justify-center text-[#00f0ff] group-hover:scale-110 transition-transform">
                        <Folder size={18} />
                      </div>
                      <span className="text-[9px] text-white font-bold uppercase truncate">Missions</span>
                    </button>

                    {/* App 2: Dialer */}
                    <button
                      onClick={() => {
                        setActiveApp("dialer");
                        playClick();
                      }}
                      className="p-2.5 bg-[#0a0214] border border-[#ff007f]/40 hover:border-[#ff007f] rounded-2xl flex flex-col items-center gap-1 group transition-all cursor-pointer shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#ff007f]/15 flex items-center justify-center text-[#ff007f] group-hover:scale-110 transition-transform">
                        <Phone size={18} />
                      </div>
                      <span className="text-[9px] text-white font-bold uppercase truncate">Dialer</span>
                    </button>

                    {/* App 3: Terminal */}
                    <button
                      onClick={() => {
                        setActiveApp("terminal");
                        playClick();
                      }}
                      className="p-2.5 bg-[#0a0214] border border-[#ffcc00]/40 hover:border-[#ffcc00] rounded-2xl flex flex-col items-center gap-1 group transition-all cursor-pointer shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#ffcc00]/15 flex items-center justify-center text-[#ffcc00] group-hover:scale-110 transition-transform">
                        <Terminal size={18} />
                      </div>
                      <span className="text-[9px] text-white font-bold uppercase truncate">Terminal</span>
                    </button>

                    {/* App 4: Radio */}
                    <button
                      onClick={() => {
                        setActiveApp("radio");
                        playClick();
                      }}
                      className="p-2.5 bg-[#0a0214] border border-[#a855f7]/40 hover:border-[#a855f7] rounded-2xl flex flex-col items-center gap-1 group transition-all cursor-pointer shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#a855f7]/15 flex items-center justify-center text-[#a855f7] group-hover:scale-110 transition-transform">
                        <Radio size={18} />
                      </div>
                      <span className="text-[9px] text-white font-bold uppercase truncate">Radio</span>
                    </button>

                    {/* App 5: Cheats */}
                    <button
                      onClick={() => {
                        setActiveApp("cheats");
                        playClick();
                      }}
                      className="p-2.5 bg-[#0a0214] border border-[#55ff55]/40 hover:border-[#55ff55] rounded-2xl flex flex-col items-center gap-1 group transition-all cursor-pointer shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#55ff55]/15 flex items-center justify-center text-[#55ff55] group-hover:scale-110 transition-transform">
                        <Zap size={18} />
                      </div>
                      <span className="text-[9px] text-white font-bold uppercase truncate">Cheats</span>
                    </button>

                    {/* App 6: Snapmatic */}
                    <button
                      onClick={() => {
                        setActiveApp("gallery");
                        playClick();
                      }}
                      className="p-2.5 bg-[#0a0214] border border-[#00f0ff]/40 hover:border-[#00f0ff] rounded-2xl flex flex-col items-center gap-1 group transition-all cursor-pointer shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#00f0ff]/15 flex items-center justify-center text-[#00f0ff] group-hover:scale-110 transition-transform">
                        <Camera size={18} />
                      </div>
                      <span className="text-[9px] text-white font-bold uppercase truncate">Snapmatic</span>
                    </button>

                    {/* App 7: Cyber Game */}
                    <button
                      onClick={() => {
                        setActiveApp("game");
                        playClick();
                      }}
                      className="p-2.5 bg-[#0a0214] border border-[#ff007f]/40 hover:border-[#ff007f] rounded-2xl flex flex-col items-center gap-1 group transition-all cursor-pointer shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#ff007f]/15 flex items-center justify-center text-[#ff007f] group-hover:scale-110 transition-transform">
                        <Gamepad2 size={18} />
                      </div>
                      <span className="text-[9px] text-white font-bold uppercase truncate">Arcade</span>
                    </button>

                    {/* App 8: Dispatch Mail */}
                    <button
                      onClick={() => {
                        setActiveApp("mail");
                        playClick();
                      }}
                      className="p-2.5 bg-[#0a0214] border border-[#ffcc00]/40 hover:border-[#ffcc00] rounded-2xl flex flex-col items-center gap-1 group transition-all cursor-pointer shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#ffcc00]/15 flex items-center justify-center text-[#ffcc00] group-hover:scale-110 transition-transform">
                        <Mail size={18} />
                      </div>
                      <span className="text-[9px] text-white font-bold uppercase truncate">Dispatch</span>
                    </button>
                  </div>

                  {/* Radio Mini Player Widget if playing */}
                  {isRadioPlaying && (
                    <div className="bg-[#070114]/90 border border-[#a855f7]/50 p-2.5 rounded-xl flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Radio size={14} className="text-[#a855f7] animate-spin" />
                        <div>
                          <span className="text-[9px] text-[#a855f7] font-bold block">
                            {RADIO_STATIONS[stationIdx].name}
                          </span>
                          <span className="text-[8px] text-slate-400">PLAYING SYNTHWAVE</span>
                        </div>
                      </div>
                      <button
                        onClick={toggleRadio}
                        className="p-1 rounded bg-[#a855f7] text-white cursor-pointer"
                      >
                        <Pause size={12} />
                      </button>
                    </div>
                  )}

                  <div className="text-center text-[8px] text-slate-500 uppercase tracking-widest">
                    TAP APP OR PRESS HOME BAR
                  </div>
                </div>
              )}

              {/* MISSIONS (PROJECTS LIST) APP */}
              {activeApp === "missions" && (
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                    <span className="text-xs text-[#00f0ff] font-extrabold uppercase">
                      HEIST MISSIONS [{DATA.projects.length}]
                    </span>
                    <span className="text-[9px] text-[#55ff55] font-bold">100% COMPLETE</span>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
                    {DATA.projects.map((p, idx) => (
                      <div
                        key={p.slug}
                        onClick={() => {
                          setSelectedProject(p);
                          setActiveApp("project_detail");
                          playClick();
                        }}
                        className="p-2.5 bg-[#070114]/90 border border-white/10 hover:border-[#00f0ff] rounded-xl flex items-center justify-between group cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#04010a] border border-[#ff007f]/40 shrink-0">
                            {p.image ? (
                              <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-[10px] text-[#ff007f]">
                                0{idx + 1}
                              </div>
                            )}
                          </div>
                          <div className="overflow-hidden">
                            <span className="text-[8px] text-[#ff007f] font-extrabold block">
                              MISSION 0{idx + 1}
                            </span>
                            <h5 className="text-xs font-bold text-white truncate">{p.title}</h5>
                            <span className="text-[8px] text-slate-400 block truncate">
                              {p.tags.slice(0, 3).join(" • ")}
                            </span>
                          </div>
                        </div>
                        <span className="text-[9px] text-[#ffcc00] font-bold group-hover:translate-x-1 transition-transform">
                          INSPECT →
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PROJECT DETAIL VIEW INSIDE PHONE */}
              {activeApp === "project_detail" && selectedProject && (
                <div className="flex-1 flex flex-col justify-between overflow-y-auto pr-1">
                  <div>
                    <button
                      onClick={() => {
                        setActiveApp("missions");
                        playClick();
                      }}
                      className="inline-flex items-center gap-1 text-[10px] text-[#00f0ff] font-bold uppercase mb-2 hover:underline cursor-pointer"
                    >
                      <ArrowLeft size={12} />
                      <span>Back to Missions</span>
                    </button>

                    <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 mb-3 bg-[#04010a]">
                      {selectedProject.image && (
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <h4 className="text-sm font-black font-heading text-white uppercase mb-1">
                      {selectedProject.title}
                    </h4>

                    <p className="text-[11px] text-slate-300 font-sans leading-relaxed mb-3">
                      {selectedProject.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {selectedProject.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#080214] border border-white/10 text-[9px] text-[#00f0ff] font-bold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Challenges Breakdown */}
                    {selectedProject.challenges && (
                      <div className="bg-[#070114] p-2.5 rounded-xl border border-white/10 mb-3">
                        <span className="text-[9px] text-[#ff007f] font-bold uppercase block mb-1">
                          KEY ARCHITECTURAL CHALLENGES:
                        </span>
                        <ul className="text-[10px] text-slate-300 space-y-1">
                          {selectedProject.challenges.slice(0, 2).map((c, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-[#ff007f]">•</span> {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-lg bg-[#ff007f] text-white text-[10px] font-bold uppercase flex items-center justify-center gap-1.5 hover:brightness-110"
                      >
                        <ExternalLink size={12} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-lg bg-[#070114] border border-white/20 text-white text-[10px] font-bold uppercase flex items-center justify-center gap-1.5 hover:border-white"
                      >
                        <GithubIcon />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* DIALER & CONTACTS APP */}
              {activeApp === "dialer" && (
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Display Number */}
                    <div className="bg-[#070114] p-3 rounded-xl border border-white/10 text-center mb-3">
                      <span className="text-base text-[#00f0ff] font-mono font-bold tracking-wider">
                        {dialNumber || "DIAL NUMBER..."}
                      </span>
                    </div>

                    {/* Quick Contacts Speed Dial */}
                    <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                      <button
                        onClick={() => startCall(DATA.personal.name, "+91 98765 43210")}
                        className="px-2.5 py-1 rounded-lg bg-[#ff007f]/20 border border-[#ff007f] text-[9px] text-white font-bold shrink-0 cursor-pointer"
                      >
                        Love (Lead Dev)
                      </button>
                      <button
                        onClick={() => startCall("Lester Crest", "555-0199")}
                        className="px-2.5 py-1 rounded-lg bg-[#ffcc00]/20 border border-[#ffcc00] text-[9px] text-[#ffcc00] font-bold shrink-0 cursor-pointer"
                      >
                        Lester (Heist)
                      </button>
                      <button
                        onClick={() => startCall("Tommy Vercetti", "555-0100")}
                        className="px-2.5 py-1 rounded-lg bg-[#00f0ff]/20 border border-[#00f0ff] text-[9px] text-[#00f0ff] font-bold shrink-0 cursor-pointer"
                      >
                        Vercetti Boss
                      </button>
                    </div>

                    {/* DTMF Keypad Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((k) => (
                        <button
                          key={k}
                          onClick={() => handleDialPress(k)}
                          className="h-10 rounded-xl bg-[#080214] border border-white/10 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 text-white font-mono font-bold text-sm flex items-center justify-center active:scale-95 transition-all cursor-pointer"
                        >
                          {k}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Call Action Bar */}
                  <div className="flex items-center gap-2 pt-2">
                    {dialNumber && (
                      <button
                        onClick={() => setDialNumber((prev) => prev.slice(0, -1))}
                        className="p-3 rounded-xl bg-[#070114] border border-white/10 text-xs text-slate-400 font-bold cursor-pointer"
                      >
                        ⌫
                      </button>
                    )}
                    <button
                      onClick={() => startCall(dialNumber || DATA.personal.name, dialNumber)}
                      className="flex-1 py-3 rounded-xl bg-[#55ff55] text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-110 shadow-lg cursor-pointer"
                    >
                      <Phone size={14} />
                      <span>CALL SIGNAL</span>
                    </button>
                  </div>
                </div>
              )}

              {/* CALL IN PROGRESS SCREEN */}
              {activeApp === "calling" && (
                <div className="flex-1 flex flex-col items-center justify-between py-6 text-center">
                  <div className="space-y-2">
                    <div className="w-20 h-20 rounded-full mx-auto bg-[#ff007f]/20 border-2 border-[#ff007f] flex items-center justify-center shadow-[0_0_25px_rgba(255,0,127,0.5)] animate-pulse">
                      <Phone size={32} className="text-[#ff007f]" />
                    </div>
                    <h4 className="text-base font-black font-heading text-white uppercase">
                      {activeCallTarget}
                    </h4>
                    <p className="text-xs text-[#55ff55] font-bold font-mono">
                      SIGNAL CONNECTED • {String(Math.floor(callDuration / 60)).padStart(2, "0")}:
                      {String(callDuration % 60).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="bg-[#070114] p-4 rounded-2xl border border-white/10 w-full text-xs text-slate-300 font-sans space-y-2">
                    <p>&quot;Hey, Love Ghariwala here! Let&apos;s build something iconic.&quot;</p>
                    <button
                      onClick={() => {
                        setActiveApp("mail");
                        playClick();
                      }}
                      className="inline-block text-[#00f0ff] font-bold underline cursor-pointer"
                    >
                      Open Dispatch Messenger
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setActiveApp("dialer");
                      playClick();
                    }}
                    className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-widest shadow-lg cursor-pointer"
                  >
                    END CALL
                  </button>
                </div>
              )}

              {/* CYBER TERMINAL APP */}
              {activeApp === "terminal" && (
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex-1 overflow-y-auto bg-[#040108] p-2.5 rounded-xl border border-white/10 space-y-1.5 font-mono text-[10px]">
                    {terminalHistory.map((item, idx) => (
                      <div
                        key={idx}
                        className={item.type === "in" ? "text-white font-bold" : ""}
                        style={{ color: item.color }}
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>

                  {/* Suggestion Pills */}
                  <div className="flex gap-1.5 my-2 overflow-x-auto pb-1">
                    {["help", "skills", "projects", "hire", "matrix", "cheat"].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => handleTerminalSubmit(cmd)}
                        className="px-2 py-0.5 rounded bg-[#080214] border border-[#00f0ff]/40 text-[9px] text-[#00f0ff] font-bold shrink-0 hover:bg-[#00f0ff]/20 cursor-pointer"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>

                  {/* Input Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleTerminalSubmit();
                    }}
                    className="flex gap-1"
                  >
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type command..."
                      className="flex-1 p-2 rounded-lg bg-[#070114] border border-[#ff007f] text-xs text-white focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3 rounded-lg bg-[#ff007f] text-white text-xs font-bold cursor-pointer"
                    >
                      &gt;
                    </button>
                  </form>
                </div>
              )}

              {/* VICE CITY RADIO APP */}
              {activeApp === "radio" && (
                <div className="flex-1 flex flex-col items-center justify-between py-4 text-center">
                  <div className="space-y-2">
                    <div className="w-24 h-24 rounded-3xl mx-auto bg-gradient-to-tr from-[#ff007f] to-[#a855f7] flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                      <Radio size={40} className="text-white" />
                    </div>
                    <h4 className="text-base font-black font-heading text-white uppercase">
                      {RADIO_STATIONS[stationIdx].name}
                    </h4>
                    <p className="text-[10px] text-[#00f0ff] font-bold">
                      {RADIO_STATIONS[stationIdx].genre} • {RADIO_STATIONS[stationIdx].freq}
                    </p>
                  </div>

                  {/* Equalizer Wave Visualizer */}
                  <div className="flex items-end justify-center gap-1.5 h-12 w-full px-8">
                    {[12, 28, 44, 32, 48, 20, 38, 48, 16, 30].map((h, i) => (
                      <div
                        key={i}
                        className={`w-2 rounded-full transition-all duration-200 ${
                          isRadioPlaying ? "bg-[#ff007f]" : "bg-slate-700"
                        }`}
                        style={{
                          height: isRadioPlaying
                            ? `${Math.max(8, (h * (radioBeat + 1)) % 48)}px`
                            : "6px",
                        }}
                      />
                    ))}
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={nextStation}
                      className="p-3 rounded-xl bg-[#070114] border border-white/20 text-slate-300 hover:text-white cursor-pointer"
                    >
                      <RotateCcw size={16} />
                    </button>

                    <button
                      onClick={toggleRadio}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#ff007f] to-[#a855f7] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
                    >
                      {isRadioPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>

                    <button
                      onClick={nextStation}
                      className="p-3 rounded-xl bg-[#070114] border border-white/20 text-slate-300 hover:text-white cursor-pointer"
                    >
                      <SkipForward size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* CHEAT CODES APP */}
              {activeApp === "cheats" && (
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                      <span className="text-xs text-[#55ff55] font-black uppercase">
                        VICE CITY CHEAT ENGINE
                      </span>
                      <Sparkles size={14} className="text-[#55ff55]" />
                    </div>

                    <div className="space-y-2">
                      {[
                        { id: "NEON_BLAST", label: "NEON PARTY LASERS", desc: "Pulse cyber neon glow" },
                        { id: "MONEY_RAIN", label: "MAKE IT RAIN $$$", desc: "Rains digital currency" },
                        { id: "SUPER_SPEED", label: "SUPER HYPER SCROLL", desc: "Instant smooth scroll" },
                        { id: "WANTED_LEVEL", label: "+1 WANTED STAR", desc: "Trigger police dispatch" },
                      ].map((cheat) => (
                        <button
                          key={cheat.id}
                          onClick={() => triggerCheat(cheat.id)}
                          className="w-full p-2.5 rounded-xl bg-[#070114] border border-white/10 hover:border-[#55ff55] text-left flex items-center justify-between group transition-all cursor-pointer"
                        >
                          <div>
                            <span className="text-xs font-black text-white group-hover:text-[#55ff55] block">
                              {cheat.label}
                            </span>
                            <span className="text-[9px] text-slate-400 block">{cheat.desc}</span>
                          </div>
                          <span className="text-[10px] text-[#55ff55] font-extrabold group-hover:scale-110">
                            EXECUTE
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#070114] p-2.5 rounded-xl border border-white/10 text-center text-[9px] text-[#ffcc00]">
                    * Triggering cheats applies live visual DOM effects on the page.
                  </div>
                </div>
              )}

              {/* SNAPMATIC GALLERY APP */}
              {activeApp === "gallery" && (
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                    <span className="text-xs text-[#00f0ff] font-extrabold uppercase">
                      SNAPMATIC [{galleryIdx + 1}/{allScreenshots.length}]
                    </span>
                    <Camera size={14} className="text-[#00f0ff]" />
                  </div>

                  {allScreenshots.length > 0 && (
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/20 bg-black shadow-xl relative group">
                        <img
                          src={allScreenshots[galleryIdx].src}
                          alt={allScreenshots[galleryIdx].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/70 p-2 text-center text-[10px] text-white font-bold">
                          {allScreenshots[galleryIdx].title}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Photo Navigation */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => {
                        setGalleryIdx((i) => (i > 0 ? i - 1 : allScreenshots.length - 1));
                        if (soundEnabled) gtaAudio.playCameraShutter();
                      }}
                      className="flex-1 py-2 rounded-xl bg-[#070114] border border-white/20 text-xs text-white font-bold cursor-pointer"
                    >
                      ← PREV
                    </button>
                    <button
                      onClick={() => {
                        setGalleryIdx((i) => (i + 1) % allScreenshots.length);
                        if (soundEnabled) gtaAudio.playCameraShutter();
                      }}
                      className="flex-1 py-2 rounded-xl bg-[#00f0ff] text-black text-xs font-black cursor-pointer"
                    >
                      NEXT →
                    </button>
                  </div>
                </div>
              )}

              {/* CYBER RUNNER ARCADE MINI-GAME */}
              {activeApp === "game" && (
                <div className="flex-1 flex flex-col justify-between select-none">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-1">
                    <span className="text-xs text-[#ff007f] font-black uppercase">
                      DEV RUNNER 2026
                    </span>
                    <span className="text-[10px] text-[#ffcc00] font-bold">
                      SCORE: {gameScore} | HI: {gameHighScore}
                    </span>
                  </div>

                  {/* Game Viewport Canvas Box */}
                  <div
                    onClick={jumpGame}
                    className="relative flex-1 w-full bg-[#020008] border border-[#ff007f]/40 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    {/* Drone / Player */}
                    <div
                      className="absolute left-6 w-6 h-6 rounded-lg bg-[#00f0ff] border border-white flex items-center justify-center text-[10px] font-black text-black transition-all duration-75 shadow-[0_0_10px_#00f0ff]"
                      style={{ top: `${birdPos}%` }}
                    >
                      ⚡
                    </div>

                    {/* Pipe Obstacle Top */}
                    <div
                      className="absolute top-0 w-8 bg-gradient-to-b from-[#ff007f] to-[#a855f7] border-x border-[#ff007f] rounded-b-lg"
                      style={{
                        left: `${pipePos}%`,
                        height: `${Math.max(10, pipeGap - 18)}%`,
                      }}
                    />

                    {/* Pipe Obstacle Bottom */}
                    <div
                      className="absolute bottom-0 w-8 bg-gradient-to-t from-[#ff007f] to-[#a855f7] border-x border-[#ff007f] rounded-t-lg"
                      style={{
                        left: `${pipePos}%`,
                        height: `${Math.max(10, 100 - (pipeGap + 25))}%`,
                      }}
                    />

                    {/* Start / Game Over Overlay */}
                    {gameState !== "playing" && (
                      <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 text-center">
                        <Gamepad2 size={32} className="text-[#ff007f] mb-2 animate-bounce" />
                        <h4 className="text-sm font-black text-white uppercase mb-1">
                          {gameState === "gameover" ? "CRASHED!" : "TAP TO FLY"}
                        </h4>
                        <p className="text-[9px] text-slate-300 mb-3">
                          Tap screen to dodge bugs &amp; firewalls.
                        </p>
                        <span className="px-3 py-1 rounded-full bg-[#55ff55] text-black text-[10px] font-black uppercase">
                          {gameState === "gameover" ? "RETRY" : "START"}
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={jumpGame}
                    className="w-full py-2.5 mt-2 rounded-xl bg-[#ff007f] text-white text-xs font-black uppercase cursor-pointer"
                  >
                    TAP TO JUMP
                  </button>
                </div>
              )}

              {/* DISPATCH MAIL APP (WITH DIRECT NODEMAILER TRANSMISSION) */}
              {activeApp === "mail" && (
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                    <span className="text-xs text-[#ffcc00] font-black uppercase">
                      DIRECT DISPATCH SIGNAL
                    </span>
                    <Mail size={14} className="text-[#ffcc00]" />
                  </div>

                  {mailSent ? (
                    <div className="my-auto text-center p-4 bg-[#070114] rounded-2xl border border-[#55ff55] space-y-2">
                      <CheckCircle2 size={36} className="text-[#55ff55] mx-auto animate-bounce" />
                      <h5 className="text-sm font-black text-white uppercase">
                        TRANSMISSION DELIVERED!
                      </h5>
                      <p className="text-[10px] text-slate-300 font-sans leading-relaxed">
                        Your message has been sent directly to Love Ghariwala via Nodemailer.
                      </p>
                      <button
                        onClick={() => setMailSent(false)}
                        className="px-4 py-1.5 rounded-lg bg-[#00f0ff] hover:bg-[#ff007f] text-black font-bold text-[10px] uppercase transition-colors cursor-pointer"
                      >
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSendDispatch} className="space-y-2 my-auto">
                      <div>
                        <label className="text-[9px] text-slate-400 font-bold uppercase block mb-1">
                          YOUR NAME / AGENCY:
                        </label>
                        <input
                          type="text"
                          required
                          value={mailName}
                          onChange={(e) => setMailName(e.target.value)}
                          placeholder="e.g. Sarah Connor"
                          className="w-full p-2 rounded-lg bg-[#070114] border border-white/20 text-xs text-white focus:outline-none focus:border-[#00f0ff]"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] text-slate-400 font-bold uppercase block mb-1">
                          YOUR EMAIL:
                        </label>
                        <input
                          type="email"
                          required
                          value={mailEmail}
                          onChange={(e) => setMailEmail(e.target.value)}
                          placeholder="sarah@agency.com"
                          className="w-full p-2 rounded-lg bg-[#070114] border border-white/20 text-xs text-white focus:outline-none focus:border-[#00f0ff]"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] text-slate-400 font-bold uppercase block mb-1">
                          BRIEF / MESSAGE:
                        </label>
                        <textarea
                          rows={2}
                          required
                          value={mailMsg}
                          onChange={(e) => setMailMsg(e.target.value)}
                          placeholder="We'd like to discuss a project..."
                          className="w-full p-2 rounded-lg bg-[#070114] border border-white/20 text-xs text-white focus:outline-none focus:border-[#00f0ff]"
                        />
                      </div>

                      {mailError && (
                        <div className="p-2 bg-red-950/60 border border-red-500/50 rounded-lg flex items-center gap-1.5 text-[9px] text-red-200">
                          <AlertCircle size={12} className="text-red-400 shrink-0" />
                          <span className="truncate">{mailError}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={mailLoading}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ff007f] to-[#ff2a85] hover:brightness-110 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50"
                      >
                        {mailLoading ? (
                          <>
                            <Loader2 size={14} className="animate-spin text-white" />
                            <span>TRANSMITTING...</span>
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            <span>TRANSMIT DISPATCH</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* PHYSICAL HOME BAR BUTTON */}
            <button
              onClick={() => {
                setActiveApp("home");
                playClick();
              }}
              className="bg-[#05010d] py-3 flex justify-center border-t border-white/10 hover:bg-[#ff007f]/20 transition-colors cursor-pointer"
            >
              <div className="w-12 h-1.5 bg-[#ff007f] hover:bg-[#00f0ff] rounded-full transition-colors" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
