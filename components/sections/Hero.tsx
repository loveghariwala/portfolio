"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import {
  ArrowRight,
  Mail,
  Sparkles,
  Code2,
  Globe,
  Cpu,
  Terminal,
  Activity,
  CheckCircle2,
  Layers,
  ChevronDown,
} from "lucide-react";

export const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 sm:pt-36 pb-20 flex flex-col justify-between overflow-hidden bg-[#07060c] bg-ambient-mesh"
    >
      {/* SUBTLE BACKGROUND GRID & GLOWS */}
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
      
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HEADLINE & ACTIONS (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="uppercase tracking-widest text-[11px] font-semibold text-emerald-400">
                {DATA.personal.availability}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-6">
              Turning bits <br />
              into{" "}
              <span className="title-gradient">
                Masterpieces.
              </span>
            </h1>

            {/* Sub-headline / Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal mb-8">
              I am <strong className="text-white font-semibold">{DATA.personal.name}</strong>, a specialized{" "}
              <span className="text-purple-300 font-semibold">{DATA.personal.role}</span>. I build scalable, high-performance web applications using Next.js, robust backend APIs, and applied Generative AI systems.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold tracking-wide cursor-pointer w-full sm:w-auto"
              >
                <span>View My Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold cursor-pointer w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* QUICK STATS METRICS ROW */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  5+
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                  Production Apps
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-heading">
                  100K+
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                  Monthly Pageviews
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-heading">
                  99.9%
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                  Uptime & Reliability
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE PROFILE CARD WITH PHOTO & TELEMETRY (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] p-3 bg-gradient-to-b from-white/15 to-white/5 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              
              {/* Inner Card Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#0c0a18] border border-white/10">
                
                {/* macOS Style Window Controls in Top-Left */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>

                {/* Code badge in Top-Right */}
                <div className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-slate-300">
                  <Code2 className="w-4 h-4 text-purple-400" />
                </div>

                {/* Portrait Photo */}
                <Image
                  src="/profile/love_ghariwala.jpg"
                  alt="Love Ghariwala - Full Stack Next.js & Backend Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter contrast-[1.03] brightness-95"
                />

                {/* Subtle bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a18] via-transparent to-transparent opacity-80" />

                {/* FLOATING TELEMETRY: BUILD STATUS WIDGET */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-4 right-4 z-20 p-3.5 rounded-2xl bg-[#120f24]/90 border border-purple-500/30 backdrop-blur-xl shadow-xl font-mono text-left"
                >
                  <div className="flex items-center gap-1.5 text-[10px] text-purple-300 font-bold uppercase tracking-wider mb-2">
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span>BUILD STATUS</span>
                  </div>
                  <div className="flex items-end gap-1 h-5">
                    <span className="w-1.5 h-3 bg-purple-500 rounded-sm" />
                    <span className="w-1.5 h-4 bg-purple-400 rounded-sm" />
                    <span className="w-1.5 h-2 bg-purple-600 rounded-sm" />
                    <span className="w-1.5 h-5 bg-cyan-400 rounded-sm" />
                    <span className="w-1.5 h-3.5 bg-purple-400 rounded-sm" />
                    <span className="w-1.5 h-4.5 bg-emerald-400 rounded-sm" />
                  </div>
                  <span className="text-[9px] text-slate-400 block mt-1">100% PRODUCTION READY</span>
                </motion.div>

                {/* FLOATING LOCATION / NODE BADGE */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 p-2.5 rounded-xl bg-[#120f24]/90 border border-white/10 backdrop-blur-xl text-xs text-slate-200">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[11px] font-medium">{DATA.personal.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* BOTTOM TICKER & SCROLL INDICATOR */}
      <div className="relative z-10 pt-12">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 font-mono">
            {/* Left standard tag */}
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-purple-400">
                <Code2 className="w-3.5 h-3.5" />
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              </span>
              <span className="uppercase tracking-widest text-[11px] font-semibold text-slate-300">
                Global Standard Engineering
              </span>
            </div>

            {/* Center Scroll Prompt */}
            <button
              onClick={() => scrollTo("about-story")}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
            >
              <span className="uppercase tracking-widest text-[10px]">Scroll Down</span>
              <ChevronDown className="w-3.5 h-3.5 text-purple-400 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* Right stack highlights */}
            <div className="hidden md:flex items-center gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Next.js 16</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">React 19</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">FastAPI</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Qdrant Vector</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
