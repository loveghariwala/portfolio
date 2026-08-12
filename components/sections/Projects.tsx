"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import { FolderGit2, ExternalLink, Terminal } from "lucide-react";
import { CodeInspectorModal } from "@/components/ui/CodeInspectorModal";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="py-24 relative gta-vice-gradient-bg font-mono">
      <div className="absolute inset-0 vice-grid opacity-15 pointer-events-none" />

      <Container className="relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#00f0ff] font-extrabold uppercase tracking-widest mb-2">
              <FolderGit2 size={16} className="text-[#ff007f]" />
              <span>// FEATURED PORTFOLIO WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white uppercase">
              FEATURED <span className="gta-vi-logo-text">PROJECTS</span>
            </h2>
          </div>
          <p className="text-xs text-slate-300 max-w-md font-sans leading-relaxed">
            Real production applications, e-commerce platforms, and vector search systems.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATA.projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="gta-card rounded-2xl overflow-hidden flex flex-col justify-between group"
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
                <div className="absolute top-3 left-3 bg-[#080314]/90 border border-[#00f0ff] text-[#00f0ff] text-[10px] font-extrabold uppercase px-3 py-1 rounded">
                  {project.tags[0] || "Next.js"}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-[#ff007f] font-extrabold uppercase">
                      PROJECT 0{idx + 1}
                    </span>
                    <span className="text-[10px] text-[#55ff55] font-bold">
                      PRODUCTION
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
                        className="px-2.5 py-1 bg-[#080314] border border-white/10 text-[10px] text-slate-300 font-bold uppercase rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2.5 rounded-lg bg-[#080314] border border-[#00f0ff]/50 text-[#00f0ff] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#00f0ff]/10 transition-colors cursor-pointer"
                    >
                      <Terminal size={14} />
                      <span>INSPECT CODE</span>
                    </button>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-[#ff007f] text-white hover:brightness-110 transition-colors"
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
                        className="p-2.5 rounded-lg bg-[#080314] border border-white/20 text-white hover:border-white transition-colors"
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
