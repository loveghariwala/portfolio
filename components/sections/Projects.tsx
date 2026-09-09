"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import {
  ExternalLink,
  Code2,
  Zap,
  ArrowUpRight,
  Terminal,
  ShieldCheck,
  Sparkles,
  Layers,
} from "lucide-react";
import { CodeInspectorModal } from "@/components/ui/CodeInspectorModal";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative bg-[#07060c] bg-ambient-mesh"
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-mono font-semibold uppercase tracking-wider mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>// FEATURED CASE STUDIES</span>
            </div>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight"
            >
              Production-Grade Systems & <span className="title-gradient">Platforms</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Battle-tested applications spanning streaming media engines, vector similarity search, glassmorphic e-commerce, and high-SEO corporate sites.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>4 Shipped Production Implementations</span>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATA.projects.map((project, idx) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bento-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full bg-[#0c0a18] border-b border-white/10 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} Preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold font-heading text-purple-400">
                    {project.title}
                  </div>
                )}

                {/* Top Badge: Primary Tech */}
                <div className="absolute top-3.5 left-3.5 bg-black/75 border border-white/15 text-purple-300 text-[11px] font-mono font-semibold uppercase px-3 py-1 rounded-full shadow-lg backdrop-blur-md">
                  {project.tags[0] || "Next.js"}
                </div>

                {/* Top Right: View Project Badge */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/75 border border-white/15 text-white hover:text-purple-300 hover:scale-110 transition-all backdrop-blur-md"
                  aria-label={`View ${project.title} Case Study`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Project Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact Highlight Box */}
                  {project.impact && (
                    <div className="p-3.5 rounded-xl bg-purple-500/[0.06] border border-purple-500/20 mb-6 flex items-start gap-2.5">
                      <Zap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-purple-200 font-medium leading-relaxed">
                        <strong className="text-white font-semibold">Impact: </strong>
                        {project.impact}
                      </p>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Live App</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
                      >
                        <GithubIcon />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-purple-400 hover:text-purple-300 cursor-pointer"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Inspect Specs</span>
                    </button>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>

      {/* CODE INSPECTOR MODAL */}
      <CodeInspectorModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
