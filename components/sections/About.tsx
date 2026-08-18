"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import { Zap, Code2, Sparkles, Heart, Shield, ShieldAlert, Cpu, Award } from "lucide-react";

const highlights = [
  { icon: Zap, label: "Performance", value: "Sub-50ms SSR", color: "#00f0ff" },
  { icon: Code2, label: "Architecture", value: "Clean & Modular", color: "#ff007f" },
  { icon: Sparkles, label: "Design System", value: "Pixel Perfect", color: "#ffcc00" },
];

export const About = () => {
  return (
    <section id="about-story" className="py-24 relative gta-vice-gradient-bg font-mono" aria-labelledby="about-heading">
      <div className="absolute inset-0 vice-grid opacity-15 pointer-events-none" />

      <Container className="relative z-10">
        {/* SECTION HEADING (ACCESSIBLE H2) */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs text-[#00f0ff] font-extrabold uppercase tracking-widest mb-2">
            <Award size={16} className="text-[#ff007f]" aria-hidden="true" />
            <span>// DEVELOPER DOSSIER</span>
          </div>
          <h2 id="about-heading" className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white uppercase">
            CRAFTING <span className="gta-vi-logo-text">DIGITAL PRODUCTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: GTA CHARACTER SPECIFICATION CARD (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="gta-card rounded-3xl p-6 relative overflow-hidden border border-[#ff007f]/40">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs">
                <div className="flex items-center gap-2 text-white font-extrabold uppercase">
                  <Cpu size={16} className="text-[#ff007f]" aria-hidden="true" />
                  <span>CHARACTER SPECIFICATION</span>
                </div>
                <span className="text-[10px] text-[#00f0ff] font-bold">VICE CITY // SURAT</span>
              </div>

              {/* Character Details Box with Small Top-Right GTA 6 Avatar */}
              <div className="bg-[#060212] border border-white/10 p-5 rounded-2xl mb-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-3">
                    <div>
                      <span className="text-[9px] text-[#00f0ff] font-extrabold uppercase tracking-widest block">
                        AGENT NAME
                      </span>
                      <div className="text-2xl font-black font-heading text-white uppercase">
                        {DATA.personal.name}
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] text-slate-300 font-bold uppercase tracking-widest block">
                        PRIMARY ROLE
                      </span>
                      <p className="text-xs text-[#ff007f] font-bold font-sans">
                        {DATA.personal.role}
                      </p>
                    </div>
                  </div>

                  {/* SMALL GTA 6 CHARACTER ARTWORK IN TOP RIGHT CORNER */}
                  <div className="relative w-16 h-16 rounded-xl border-2 border-[#ff007f] overflow-hidden shadow-[0_0_15px_rgba(255,0,127,0.4)] shrink-0 bg-[#060212]">
                    <Image
                      src="/profile/gta_character_love_ghariwala.png"
                      alt="GTA 6 Character Love Ghariwala"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-slate-300 font-bold uppercase">VALUATION:</span>
                  <span className="gta-cash-text text-sm font-black">$40,000,000</span>
                </div>
              </div>

              {/* GTA Status Meters (Health, Armor, Wanted Rating) */}
              <div className="space-y-3">
                <div className="bg-[#060212] border border-white/10 p-3.5 rounded-xl space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-[#55ff55]">
                      <Heart size={14} fill="#55ff55" aria-hidden="true" /> HEALTH:
                    </span>
                    <span className="text-[#55ff55]">100%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-white/10" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} aria-label="Agent Health">
                    <div className="h-full bg-[#55ff55] w-full" />
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold pt-1">
                    <span className="flex items-center gap-1.5 text-[#00f0ff]">
                      <Shield size={14} fill="#00f0ff" aria-hidden="true" /> ARMOR:
                    </span>
                    <span className="text-[#00f0ff]">100%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-white/10" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} aria-label="Agent Armor">
                    <div className="h-full bg-[#00f0ff] w-full" />
                  </div>
                </div>

                {/* Wanted Level 5 Stars */}
                <div className="bg-[#060212] border border-[#ff007f]/40 p-3.5 rounded-xl flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-bold uppercase tracking-wider flex items-center gap-2">
                    <ShieldAlert size={16} className="text-[#ffcc00]" aria-hidden="true" />
                    SKILL RATING:
                  </span>
                  <div className="text-[#ffcc00] text-base font-bold tracking-widest whitespace-nowrap select-none">
                    ★ ★ ★ ★ ★
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: STORY CONTENT (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed mb-6 font-normal">
                Hello, I&apos;m <span className="text-white font-bold">{DATA.personal.name}</span>, a Frontend &amp; Backend Developer based in <span className="text-[#00f0ff] font-bold">{DATA.personal.location}</span>.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-8">
                {DATA.personal.bio} I specialize in engineering high-speed Next.js web platforms, custom REST APIs, dynamic state management, and responsive Vice City aesthetic interfaces.
              </p>
            </div>

            {/* HIGHLIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((h) => {
                const HIcon = h.icon;
                return (
                  <div
                    key={h.label}
                    className="gta-card p-4 text-center border-t-2"
                    style={{ borderTopColor: h.color }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center"
                      style={{ backgroundColor: `${h.color}20`, border: `1px solid ${h.color}` }}
                    >
                      <HIcon size={16} style={{ color: h.color }} aria-hidden="true" />
                    </div>
                    <span className="text-[10px] text-slate-300 font-bold uppercase block mb-1">
                      {h.label}
                    </span>
                    <span className="text-xs text-white font-extrabold block">
                      {h.value}
                    </span>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
};
