"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, Check, Copy } from "lucide-react";

export const CodeInspectorModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState<"architecture" | "stack">("architecture");
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const architectureCode = `// ${project.title.toUpperCase()} // GTA VI MISSION SPECIFICATION
import { NextServer } from 'next/server';
import { QdrantVectorDB } from '@qdrant/js-client-rest';
import { FastAPIRouter } from 'fastapi-node';

export const MissionConfig = {
  missionId: "${project.slug}",
  targetName: "${project.title}",
  securityLevel: "HIGH_SANDBOXED_IFRAMES",
  vectorEmbeddingDimensions: 384,
  performanceMetrics: {
    ttfb: "< 50ms",
    lighthouseScore: "99/100",
    uptime: "99.99%"
  },
  learnings: ${JSON.stringify(project.learnings || [], null, 2)},
  challenges: ${JSON.stringify(project.challenges || [], null, 2)}
};`;

  const stackJson = `{
  "projectName": "${project.title}",
  "stack": ${JSON.stringify(project.tags || [], null, 2)},
  "liveUrl": "${project.link}",
  "repository": "${project.github}",
  "status": "MISSION_PASSED"
}`;

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-[#05010d]/90 backdrop-blur-xl font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-5xl max-h-[90vh] bg-[#0a0214] border border-[#ff007f] rounded-2xl flex flex-col overflow-hidden shadow-[0_0_50px_rgba(255,0,127,0.4)]"
        >
          {/* HEADER */}
          <div className="bg-[#05010d] border-b border-[#ff007f]/40 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="px-2.5 py-0.5 bg-[#ff007f] text-white text-xs font-black uppercase rounded">
                VI
              </div>
              <span className="text-xs text-[#00f0ff] font-bold uppercase tracking-widest">
                MISSION CODE INSPECTOR // {project.title}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-200 hover:text-[#00f0ff] font-bold"
              >
                <span>LIVE DEMO</span>
                <ExternalLink size={14} />
              </a>
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-[#ff007f] transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* SPLIT VIEW */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
            {/* LEFT PANE */}
            <div className="lg:col-span-5 p-6 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col gap-5 bg-[#05010d]">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#00f0ff]/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xl font-black text-white font-heading uppercase mb-2">
                  {project.title}
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#ff007f]/20 border border-[#ff007f] text-[10px] text-white font-extrabold uppercase rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT PANE: IDE CODE */}
            <div className="lg:col-span-7 flex flex-col bg-[#05010d]">
              <div className="bg-[#0a0214] border-b border-white/10 px-4 flex items-center justify-between text-xs">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-4 py-3 border-b-2 font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === "architecture"
                        ? "border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10"
                        : "border-transparent text-slate-400 hover:text-white"
                    }`}
                  >
                    architecture.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`px-4 py-3 border-b-2 font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === "stack"
                        ? "border-[#ff007f] text-[#ff007f] bg-[#ff007f]/10"
                        : "border-transparent text-slate-400 hover:text-white"
                    }`}
                  >
                    stack.json
                  </button>
                </div>

                <button
                  onClick={() =>
                    copyCode(
                      activeTab === "architecture" ? architectureCode : stackJson
                    )
                  }
                  className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white"
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  <span>{copied ? "COPIED" : "COPY CODE"}</span>
                </button>
              </div>

              <div className="p-6 flex-1 overflow-x-auto text-xs font-mono text-[#00f0ff] leading-relaxed bg-[#05010d]">
                <pre>
                  <code>
                    {activeTab === "architecture" ? architectureCode : stackJson}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
