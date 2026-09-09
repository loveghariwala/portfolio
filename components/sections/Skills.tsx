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
  ArrowUpRight,
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
    <section
      id="skills"
      className="py-24 sm:py-32 relative bg-[#07060c] bg-ambient-mesh"
      aria-labelledby="skills-heading"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-mono font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>// TECHNICAL ARSENAL</span>
            </div>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight"
            >
              Technologies & <span className="title-gradient">Tooling Matrix</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Production-grade frontend frameworks, backend microservices, vector similarity engines, and relational databases.
            </p>
          </div>

          {/* Quick Counter Stats */}
          <div className="flex items-center gap-4 font-mono text-xs">
            <div className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300">
              <span className="text-purple-400 font-bold">{totalSkillsCount}</span> Total Technologies
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300">
              <span className="text-cyan-400 font-bold">5</span> Core Domains
            </div>
          </div>
        </div>

        {/* CONTROLS: CATEGORY TABS & SEARCH INPUT */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b border-white/10">
          {/* Categories Pill Bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? "btn-primary text-white"
                      : "bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. Next.js, Qdrant)..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500/60 transition-colors"
            />
          </div>
        </div>

        {/* SKILLS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => {
              const Icon = getCategoryIcon(category.icon);
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bento-card p-6 sm:p-7 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold font-heading text-white">
                            {category.category}
                          </h3>
                          <span className="text-[10px] font-mono text-slate-400">
                            {category.items.length} TECHNOLOGIES
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Tags List */}
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] hover:bg-purple-500/15 text-slate-200 hover:text-purple-300 border border-white/5 hover:border-purple-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
