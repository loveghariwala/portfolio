"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
  Terminal,
  BrainCircuit,
  ArrowRight,
  Search,
} from "lucide-react";

export const About = () => {
  return (
    <section
      id="about-story"
      className="py-24 sm:py-32 relative bg-[#07060c] bg-ambient-mesh"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-mono font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>// ABOUT ME</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4"
          >
            Building web apps that{" "}
            <span className="title-gradient">solve real problems.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I work across the full stack — from crafting clean, responsive user interfaces to engineering reliable backend APIs, databases, and smart search features.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* BENTO CARD 1: CORE PHILOSOPHY & CAPABILITIES (8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-12 lg:col-span-8 bento-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
                  Full Stack Development
                </span>
                <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  Next.js + FastAPI + Postgres
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-4">
                End-to-End Web Applications
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {DATA.personal.bio}
              </p>

              {/* Three Core Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-xs mb-1 font-mono">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Fast & Snappy</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    Quick page loads, smooth navigation, and optimized frontend performance.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs mb-1 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Safe & Secure</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    Secure user logins, payment integrations (Razorpay, Stripe), and protected APIs.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1 font-mono">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Clean Code</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    Modular components and organized backend routes that are easy to maintain.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle background gradient splash */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* BENTO CARD 2: APPLIED AI & SMART SEARCH (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-12 lg:col-span-4 bento-card bento-card-cyan p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-6">
                <BrainCircuit className="w-4 h-4" />
                <span>Smart Search & AI</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white mb-3">
                Context-Aware Discovery
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Using tools like Hugging Face and Qdrant vector databases to help users find what they are looking for based on meaning and context, not just exact keywords.
              </p>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-slate-400">Embedding Dim:</span>
                  <span className="text-cyan-400 font-bold">384 (all-MiniLM-L6)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-slate-400">Index Type:</span>
                  <span className="text-purple-400 font-bold">HNSW Cosine</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-slate-400">Experience:</span>
                  <span className="text-emerald-400 font-bold">Instant & Smooth</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Production Live in NeoCinemaTV</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </div>
          </motion.div>

          {/* BENTO CARD 3: SYSTEM DESIGN & DATABASE MODELING (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-6 lg:col-span-4 bento-card p-6 sm:p-8"
          >
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-4 text-purple-400">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              Databases & Storage
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Working with PostgreSQL, Supabase, and MongoDB. Experienced in organizing product catalogs, managing user data, and caching to keep everything running fast.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className="px-2 py-0.5 rounded bg-white/5 text-purple-300">PostgreSQL</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-purple-300">Supabase</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-purple-300">MongoDB</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-purple-300">Redis</span>
            </div>
          </motion.div>

          {/* BENTO CARD 4: SEAMLESS DEVELOPER TOOLING & CI/CD (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:col-span-6 lg:col-span-4 bento-card p-6 sm:p-8"
          >
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4 text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              Deployment & Tools
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Setting up smooth deployments using Git, GitHub, Vercel, and Docker. Making sure web apps deploy automatically and run reliably without downtime.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className="px-2 py-0.5 rounded bg-white/5 text-cyan-300">Git & GitHub</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-cyan-300">Vercel</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-cyan-300">Docker</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-cyan-300">CI/CD</span>
            </div>
          </motion.div>

          {/* BENTO CARD 5: GLOBAL COLLABORATION & TIMEZONE (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="md:col-span-12 lg:col-span-4 bento-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-fit mb-4 text-emerald-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2">
                Worldwide Collaboration
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Based in <strong className="text-white">Surat, Gujarat, India</strong>. Comfortable collaborating across different timezones and open to remote positions, freelance projects, or on-site relocation.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for new roles
              </span>
              <span className="text-slate-400">Remote / Relocation</span>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
