"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import { ArrowRight, Mail, Heart, Shield, Star, MapPin, Code2 } from "lucide-react";

export const Hero = () => {
  return (
    <section id="about" className="relative min-h-[90vh] pt-36 pb-20 flex items-center overflow-hidden gta-vice-gradient-bg">
      
      {/* 3D WATERMARK BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[42vw] font-black gta-vi-numeral select-none leading-none">
          VI
        </span>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 vice-grid opacity-15" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT COLUMN: TYPOGRAPHY & DATA (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start font-sans"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0e0624] border border-[#ff007f]/40 font-mono text-xs text-[#00f0ff] font-bold uppercase tracking-widest mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#55ff55] animate-pulse" />
              <span>{DATA.personal.availability}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.95] uppercase mb-4 gta-hero-title">
              {DATA.personal.name}
            </h1>

            {/* Role Title */}
            <p className="text-lg sm:text-2xl font-mono text-[#00f0ff] font-extrabold uppercase tracking-wider mb-6">
              {DATA.personal.role}
            </p>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl font-normal mb-8">
              {DATA.personal.bio}
            </p>

            {/* STAT CARDS (CLEAN REAL DATA, NO Anton FONT) */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mb-8 font-mono">
              <div className="gta-card p-4 text-center border-t-2 border-t-[#ff007f]">
                <span className="text-3xl sm:text-4xl text-white block font-heading tech-number-stat mb-1">
                  5+ YRS
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest block">
                  EXPERIENCE
                </span>
              </div>

              <div className="gta-card p-4 text-center border-t-2 border-t-[#00f0ff]">
                <span className="text-3xl sm:text-4xl block font-heading tech-number-cyan mb-1">
                  40+
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest block">
                  PROJECTS
                </span>
              </div>

              <div className="gta-card p-4 text-center border-t-2 border-t-[#ffcc00]">
                <span className="text-3xl sm:text-4xl block font-heading tech-number-gold mb-1">
                  99/100
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest block">
                  LIGHTHOUSE
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl font-mono">
              <a href="#projects" className="flex-1">
                <button className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#ff007f] to-[#ff2a85] text-white text-xs uppercase font-extrabold tracking-widest flex items-center justify-center gap-3 transition-all hover:brightness-110 cursor-pointer">
                  <span>EXPLORE PROJECTS</span>
                  <ArrowRight size={16} />
                </button>
              </a>

              <a href={`mailto:${DATA.personal.email}`} className="flex-1">
                <button className="w-full py-4 px-6 rounded-xl bg-[#0e0624] border border-[#00f0ff]/50 text-[#00f0ff] text-xs uppercase font-extrabold tracking-widest flex items-center justify-center gap-3 hover:bg-[#00f0ff]/10 transition-all cursor-pointer">
                  <Mail size={16} />
                  <span>CONTACT EMAIL</span>
                </button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: PROFILE POSTER CARD (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="gta-card rounded-3xl p-6 relative overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 font-mono text-xs">
                <div className="flex items-center gap-2 text-white font-bold uppercase">
                  <Code2 size={16} className="text-[#ff007f]" />
                  <span>DEVELOPER PROFILE</span>
                </div>
                <div className="flex items-center gap-1 text-[#00f0ff] text-[10px]">
                  <MapPin size={12} />
                  <span>SURAT [IN]</span>
                </div>
              </div>

              {/* Avatar Image */}
              <div className="relative aspect-square max-w-[300px] mx-auto rounded-2xl overflow-hidden border border-[#00f0ff]/40 bg-[#080314] mb-5 shadow-xl">
                {DATA.personal.avatar ? (
                  <img
                    src={DATA.personal.avatar}
                    alt={DATA.personal.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl font-black font-heading text-[#ff007f]">
                    LG
                  </div>
                )}

                {/* Tech Pills */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap gap-1.5 font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#080314]/90 border border-[#ff007f] text-[10px] text-white font-bold">
                    Next.js 16
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#080314]/90 border border-[#00f0ff] text-[10px] text-[#00f0ff] font-bold">
                    React 19
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#080314]/90 border border-[#ffcc00] text-[10px] text-[#ffcc00] font-bold">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* GTA Meters */}
              <div className="font-mono space-y-3">
                <div className="bg-[#080314] border border-white/10 p-3 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1 text-[#55ff55]">
                      <Heart size={14} fill="#55ff55" /> HEALTH:
                    </span>
                    <span className="text-[#55ff55]">100%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-[#55ff55] w-full" />
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold pt-1">
                    <span className="flex items-center gap-1 text-[#00f0ff]">
                      <Shield size={14} fill="#00f0ff" /> ARMOR:
                    </span>
                    <span className="text-[#00f0ff]">100%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00f0ff] w-full" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="bg-[#080314] border border-[#ff007f]/40 p-3 rounded-xl flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                    SKILL RATING:
                  </span>
                  <div className="text-[#ffcc00] text-base font-bold tracking-widest">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
