"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import { Code2, Server, Layout, CheckCircle2 } from "lucide-react";

const categoryIcons = [Code2, Server, Layout];
const categoryColors = ["#ff007f", "#00f0ff", "#ffcc00"];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative gta-vice-gradient-bg font-mono">
      <div className="absolute inset-0 vice-grid opacity-15 pointer-events-none" />
      
      <Container className="relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#00f0ff] font-extrabold uppercase tracking-widest mb-2">
              <Code2 size={16} className="text-[#ff007f]" />
              <span>// TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white uppercase">
              SKILLS &amp; <span className="gta-vi-logo-text">STACK</span>
            </h2>
          </div>
          <p className="text-xs text-slate-300 max-w-md font-sans leading-relaxed">
            Core technologies and tools I utilize to build modern, high-performance web platforms.
          </p>
        </div>

        {/* SKILLS CATEGORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DATA.skills.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const color = categoryColors[idx % categoryColors.length];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="gta-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: `${color}20`, border: `1px solid ${color}` }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">
                        CATEGORY 0{idx + 1}
                      </span>
                      <h3 className="text-lg font-black font-heading text-white uppercase">
                        {cat.category}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {cat.items.map((skillItem: string) => (
                      <div
                        key={skillItem}
                        className="p-3 bg-[#080314] border border-white/10 hover:border-[#00f0ff] rounded-xl flex items-center justify-between transition-colors"
                      >
                        <span className="text-xs text-white font-bold font-sans">
                          {skillItem}
                        </span>
                        <div className="flex items-center gap-1 text-[#55ff55]">
                          <CheckCircle2 size={14} />
                          <span className="text-[10px] font-extrabold uppercase">PROFICIENT</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
