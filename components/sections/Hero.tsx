"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import { ArrowRight, Mail, Heart, Shield, MapPin, Code2, Sparkles, Terminal } from "lucide-react";
import { gtaAudio } from "@/lib/gtaAudio";

export const Hero = () => {
  return (
    <section id="about" className="relative min-h-[92vh] pt-36 pb-24 flex items-center overflow-hidden bg-[#060212]">

      {/* GTA 6 VICE CITY CINEMATIC BACKDROP */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/gta6_hero_bg.jpg"
          alt="GTA 6 Vice City Sunset"
          className="w-full h-full object-cover object-center opacity-35 scale-105 filter saturate-150 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060212] via-[#060212]/80 to-[#060212]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060212] via-transparent to-[#060212]/90" />
        <div className="absolute inset-0 vice-grid opacity-20" />
      </div>

      {/* 3D GTA VI WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[38vw] font-black gta-vi-numeral select-none leading-none opacity-20">
          VI
        </span>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT COLUMN: TYPOGRAPHY & DATA (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start font-sans"
          >
            {/* Mission Live Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#090317]/90 border border-[#ff007f]/50 shadow-[0_0_20px_rgba(255,0,127,0.3)] font-mono text-xs text-[#00f0ff] font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#55ff55] animate-pulse" />
              <span>VICE CITY NODE // {DATA.personal.availability}</span>
            </div>

            {/* Main Headline with GTA 6 styling */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.92] uppercase mb-4 gta-hero-title drop-shadow-[0_0_35px_rgba(255,0,127,0.4)]">
              {DATA.personal.name}
            </h1>

            {/* Role Title */}
            <p className="text-lg sm:text-2xl font-mono text-[#00f0ff] font-extrabold uppercase tracking-wider mb-6 flex items-center gap-2 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">
              <Sparkles size={20} className="text-[#ff007f] animate-spin" />
              <span>{DATA.personal.role}</span>
            </p>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed max-w-2xl font-normal mb-8 bg-[#060212]/60 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              {DATA.personal.bio}
            </p>

            {/* STAT CARDS (HUD METRICS) */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mb-8 font-mono">
              <div className="gta-card p-4 text-center border-t-2 border-t-[#ff007f] hover:scale-105 transition-transform">
                <span className="text-3xl sm:text-4xl text-white block font-heading tech-number-stat mb-1">
                  2+ YRS
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest block">
                  EXPERIENCE
                </span>
              </div>

              <div className="gta-card p-4 text-center border-t-2 border-t-[#00f0ff] hover:scale-105 transition-transform">
                <span className="text-3xl sm:text-4xl block font-heading tech-number-cyan mb-1">
                  10+
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest block">
                  MISSIONS
                </span>
              </div>

              <div className="gta-card p-4 text-center border-t-2 border-t-[#ffcc00] hover:scale-105 transition-transform">
                <span className="text-3xl sm:text-4xl block font-heading tech-number-gold mb-1">
                  99/100
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest block">
                  PERFORMANCE
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl font-mono">
              <a
                href="#projects"
                onClick={() => gtaAudio.playClick()}
                className="flex-1"
              >
                <button className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#ff007f] via-[#ff2a85] to-[#ff6b00] hover:brightness-110 text-white text-xs uppercase font-extrabold tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(255,0,127,0.5)] cursor-pointer">
                  <span>VIEW HEIST MISSIONS</span>
                  <ArrowRight size={16} />
                </button>
              </a>

              <a
                href="#contact"
                onClick={() => gtaAudio.playClick()}
                className="flex-1"
              >
                <button className="w-full py-4 px-6 rounded-xl bg-[#090317]/90 border-2 border-[#00f0ff]/60 text-[#00f0ff] text-xs uppercase font-extrabold tracking-widest flex items-center justify-center gap-3 hover:bg-[#00f0ff]/20 hover:border-[#00f0ff] transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer">
                  <Mail size={16} />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: GTA 6 CHARACTER POSTER CARD (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="gta-card rounded-3xl p-6 relative overflow-hidden border-2 border-[#ff007f]/50 shadow-[0_0_50px_rgba(255,0,127,0.35)] backdrop-blur-xl group">

              {/* Rockstar Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 font-mono text-xs">
                <div className="flex items-center gap-2 text-white font-bold uppercase">
                  <Code2 size={16} className="text-[#ff007f]" />
                  <span>GTA VI // PROTAGONIST</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#00f0ff] text-[10px] font-bold">
                  <MapPin size={12} />
                  <span>LEONIDA / SURAT</span>
                </div>
              </div>

              {/* Character Poster Image */}
              <div className="relative aspect-[4/5] max-w-[340px] mx-auto rounded-2xl overflow-hidden border-2 border-[#00f0ff]/50 bg-[#04010a] mb-5 shadow-2xl group-hover:border-[#ff007f] transition-colors duration-500">
                <img
                  src={DATA.personal.avatar}
                  alt="Love Ghariwala GTA 6 Character Poster"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                />

                {/* Vice City Neon Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060212] via-transparent to-transparent opacity-80" />

                {/* Watermark Tag */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-[#060212]/90 border border-[#ffcc00] font-mono text-[9px] text-[#ffcc00] font-black uppercase tracking-widest shadow-lg">
                  WANTED ★★★★★
                </div>

                {/* Tech Pills */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap gap-1.5 font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-[#060212]/95 border border-[#ff007f] text-[10px] text-white font-black shadow-md">
                    Next.js 16
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#060212]/95 border border-[#00f0ff] text-[10px] text-[#00f0ff] font-black shadow-md">
                    Full Stack
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#060212]/95 border border-[#ffcc00] text-[10px] text-[#ffcc00] font-black shadow-md">
                    AI Search
                  </span>
                </div>
              </div>

              {/* GTA HUD METERS */}
              <div className="font-mono space-y-3">
                <div className="bg-[#04010a]/90 border border-white/10 p-3.5 rounded-xl space-y-2.5 shadow-inner">
                  {/* Health Bar */}
                  <div className="flex items-center justify-between text-xs font-black">
                    <span className="flex items-center gap-1.5 text-[#55ff55]">
                      <Heart size={14} fill="#55ff55" /> HEALTH:
                    </span>
                    <span className="text-[#55ff55] font-mono">100%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-white/10">
                    <div className="h-full bg-gradient-to-r from-[#55ff55] to-[#22c55e] w-full shadow-[0_0_10px_#55ff55]" />
                  </div>

                  {/* Armor Bar */}
                  <div className="flex items-center justify-between text-xs font-black pt-1">
                    <span className="flex items-center gap-1.5 text-[#00f0ff]">
                      <Shield size={14} fill="#00f0ff" /> ARMOR:
                    </span>
                    <span className="text-[#00f0ff] font-mono">100%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-white/10">
                    <div className="h-full bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] w-full shadow-[0_0_10px_#00f0ff]" />
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="bg-[#04010a]/90 border border-[#ff007f]/40 p-3 rounded-xl flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                    OPERATOR CLASS:
                  </span>
                  <span className="text-[#ff007f] font-mono font-extrabold text-xs tracking-wider">
                    LEVEL 99 ARCHITECT
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
