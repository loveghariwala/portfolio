"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import {
  Code2,
  Server,
  Layout,
  Database,
  Bot,
  Cloud,
  Search,
  CheckCircle2,
  Sparkles,
  Zap,
  Cpu,
  Layers,
} from "lucide-react";

const getCategoryIcon = (iconName?: string) => {
  switch (iconName) {
    case "layout":
      return Layout;
    case "server":
      return Server;
    case "database":
      return Database;
    case "bot":
      return Bot;
    case "cloud":
      return Cloud;
    default:
      return Code2;
  }
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    return ["ALL", ...DATA.skills.map((s) => s.category)];
  }, []);

  const totalSkillsCount = useMemo(() => {
    return DATA.skills.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  const filteredCategories = useMemo(() => {
    return DATA.skills
      .map((cat) => {
        const matchesCategory =
          selectedCategory === "ALL" || cat.category === selectedCategory;

        if (!matchesCategory) return null;

        const filteredItems = cat.items.filter((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );

        if (searchQuery.trim() && filteredItems.length === 0) {
          return null;
        }

        return {
          ...cat,
          items: filteredItems,
        };
      })
      .filter(Boolean) as typeof DATA.skills;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative gta-vice-gradient-bg font-mono">
      <div className="absolute inset-0 vice-grid opacity-15 pointer-events-none" />

      <Container className="relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#00f0ff] font-extrabold uppercase tracking-widest mb-2">
              <Cpu size={16} className="text-[#ff007f]" />
              <span>// TECH STACK MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white uppercase">
              TECHNICAL <span className="gta-vi-logo-text">ARSENAL</span>
            </h2>
          </div>

          {/* STATS OVERVIEW CHIPS */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-[#0e0624] border border-[#ff007f]/40 flex items-center gap-2">
              <Zap size={14} className="text-[#ff007f]" />
              <span className="text-xs text-slate-300 font-bold">
                <strong className="text-white font-extrabold">{totalSkillsCount}+</strong> TECHNOLOGIES
              </span>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#0e0624] border border-[#00f0ff]/40 flex items-center gap-2">
              <Layers size={14} className="text-[#00f0ff]" />
              <span className="text-xs text-slate-300 font-bold">
                <strong className="text-white font-extrabold">{DATA.skills.length}</strong> CORE DOMAINS
              </span>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#0e0624] border border-[#55ff55]/40 flex items-center gap-2">
              <Sparkles size={14} className="text-[#55ff55]" />
              <span className="text-xs text-[#55ff55] font-extrabold uppercase">
                PRODUCTION READY
              </span>
            </div>
          </div>
        </div>

        {/* CONTROLS: SEARCH & CATEGORY FILTER TABS */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b border-white/10">
          
          {/* CATEGORY SWITCH TABS */}
          <div className="flex flex-wrap gap-2">
            {categories.map((catName) => {
              const isActive = selectedCategory === catName;
              return (
                <button
                  key={catName}
                  onClick={() => setSelectedCategory(catName)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#ff007f] to-[#ff2a85] text-white shadow-[0_0_15px_rgba(255,0,127,0.4)] border border-[#ff007f]"
                      : "bg-[#080314] text-slate-400 border border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {catName}
                </button>
              );
            })}
          </div>

          {/* SEARCH INPUT */}
          <div className="relative min-w-[240px] md:w-72">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack / tools..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#080314] border border-white/10 text-xs text-white placeholder:text-slate-500 font-mono focus:outline-none focus:border-[#00f0ff] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white uppercase font-bold"
              >
                CLEAR
              </button>
            )}
          </div>

        </div>

        {/* SKILLS CATEGORIES GRID */}
        {filteredCategories.length === 0 ? (
          <div className="gta-card p-12 text-center rounded-2xl border border-white/10">
            <p className="text-sm text-slate-300 font-mono mb-3">
              No matching technologies found for &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
              }}
              className="px-4 py-2 rounded-xl bg-[#ff007f] text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((cat, idx) => {
                const Icon = getCategoryIcon(cat.icon);
                const color = cat.color || "#00f0ff";

                return (
                  <motion.div
                    key={cat.category}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="gta-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group border-t-2"
                    style={{ borderTopColor: color }}
                  >
                    {/* Top Glow Ambient */}
                    <div
                      className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
                      style={{ backgroundColor: color }}
                    />

                    <div>
                      {/* CARD HEADER */}
                      <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4 mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg"
                            style={{
                              backgroundColor: `${color}15`,
                              border: `1px solid ${color}60`,
                            }}
                          >
                            <Icon size={20} style={{ color }} />
                          </div>
                          <div>
                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block">
                              DOMAIN 0{idx + 1}
                            </span>
                            <h3 className="text-base font-black font-heading text-white uppercase tracking-tight">
                              {cat.category}
                            </h3>
                          </div>
                        </div>

                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase shrink-0"
                          style={{
                            backgroundColor: `${color}20`,
                            color: color,
                            border: `1px solid ${color}40`,
                          }}
                        >
                          {cat.items.length} SKILLS
                        </span>
                      </div>

                      {/* DESCRIPTION */}
                      {cat.description && (
                        <p className="text-[11px] text-slate-300 font-sans leading-relaxed mb-4">
                          {cat.description}
                        </p>
                      )}

                      {/* SKILL PILLS / ITEMS LIST */}
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((skillItem: string) => (
                          <div
                            key={skillItem}
                            className="px-3 py-1.5 rounded-lg bg-[#080314] border border-white/10 hover:border-[#00f0ff] hover:bg-[#00f0ff]/5 transition-all flex items-center gap-2 group/item cursor-default"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0 group-hover/item:scale-125 transition-transform"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-xs text-slate-200 font-sans font-medium">
                              {skillItem}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CARD FOOTER BADGE */}
                    <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-bold">
                      <span className="uppercase">VALIDATED IN PRODUCTION</span>
                      <div className="flex items-center gap-1 text-[#55ff55]">
                        <CheckCircle2 size={12} />
                        <span>ACTIVE</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </Container>
    </section>
  );
};

