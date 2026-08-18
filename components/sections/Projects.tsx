"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import { FolderGit2, ExternalLink, Terminal, Shield, Zap, Sparkles } from "lucide-react";
import { CodeInspectorModal } from "@/components/ui/CodeInspectorModal";
import { gtaAudio } from "@/lib/gtaAudio";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#05010e] font-mono">
      <div className="absolute inset-0 vice-grid opacity-15 pointer-events-none" />

      <Container className="relative z-10">
        {/* GTA 6 HEIST BRIEFING BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border-2 border-[#ff007f]/40 mb-16 shadow-[0_0_50px_rgba(255,0,127,0.25)]"
        >
          <div className="relative aspect-[21/9] sm:aspect-[24/8] w-full overflow-hidden bg-[#060212]">
            <img
              src="/gta6_heist_art.jpg"
              alt="GTA 6 Heist Mission Planning Room"
              className="w-full h-full object-cover object-center filter saturate-125 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05010e] via-[#05010e]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05010e] via-transparent to-[#05010e]/80" />

            {/* Banner Text Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff007f] text-white text-[10px] font-black uppercase tracking-widest mb-2 shadow-lg">
                  <Shield size={12} />
                  <span>PHASE 2 // HEIST MISSION BOARD</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tight drop-shadow-[0_0_20px_rgba(255,0,127,0.5)]">
                  FEATURED <span className="gta-vi-logo-text">OPERATIONS</span>
                </h2>
              </div>
              <p className="text-xs text-slate-200 max-w-md font-sans leading-relaxed bg-[#05010e]/80 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                Battle-tested production applications, e-commerce architectures, streaming media engines, and vector search systems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATA.projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="gta-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-[#00f0ff] transition-all duration-300"
            >
              {/* Project Image Header */}
              <div className="relative aspect-video w-full bg-[#080314] border-b border-white/10 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-black font-heading text-[#ff007f]">
                    {project.title}
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#080314]/90 border border-[#00f0ff] text-[#00f0ff] text-[10px] font-extrabold uppercase px-3 py-1 rounded shadow-lg backdrop-blur-md">
                  {project.tags[0] || "Next.js"}
                </div>

                {/* Score Pill */}
                <div className="absolute top-3 right-3 bg-[#080314]/90 border border-[#55ff55] text-[#55ff55] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded shadow-lg backdrop-blur-md flex items-center gap-1">
                  <Zap size={10} />
                  <span>100% PASS</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-[#ff007f] font-extrabold uppercase">
                      HEIST MISSION 0{idx + 1}
                    </span>
                    <span className="text-[10px] text-[#ffcc00] font-bold tracking-widest">
                      ★ ★ ★ ★ ★
                    </span>
                  </div>

                  <h3 className="text-2xl font-black font-heading text-white uppercase mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills & Actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#080314] border border-white/10 text-[10px] text-slate-300 font-bold uppercase rounded hover:border-[#00f0ff] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        gtaAudio.playClick();
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-[#080314] border border-[#00f0ff]/50 text-[#00f0ff] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-colors cursor-pointer"
                    >
                      <Terminal size={14} />
                      <span>INSPECT CODE</span>
                    </button>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => gtaAudio.playClick()}
                        className="p-2.5 rounded-xl bg-[#ff007f] text-white hover:brightness-110 transition-colors shadow-md"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => gtaAudio.playClick()}
                        className="p-2.5 rounded-xl bg-[#080314] border border-white/20 text-white hover:border-white transition-colors"
                        title="GitHub Code"
                      >
                        <GithubIcon />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <CodeInspectorModal
            project={selectedProject}
            isOpen={Boolean(selectedProject)}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Container>
    </section>
  );
};
