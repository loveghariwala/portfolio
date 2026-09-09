"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ExternalLink, Check, Copy, Terminal, Code2, Layers } from "lucide-react";

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const architectureCode = `// ${project.title.toUpperCase()} // SYSTEM ARCHITECTURE SPECIFICATION
import { NextServer } from 'next/server';
import { QdrantVectorDB } from '@qdrant/js-client-rest';
import { FastAPIRouter } from 'fastapi';

export const SystemArchitecture = {
  projectId: "${project.slug}",
  platformName: "${project.title}",
  runtime: "Next.js 16 (App Router, Turbopack, SSR)",
  securityLevel: "SANDBOXED_MEDIA_IFRAMES_&_CORS_POLICIES",
  vectorEmbeddingDimensions: 384,
  performanceMetrics: {
    responseTime: "Real-time instant queries",
    lighthouseScore: "99/100",
    availability: "99.99%"
  },
  keyLearnings: ${JSON.stringify(project.learnings || [], null, 2)},
  engineeringChallenges: ${JSON.stringify(project.challenges || [], null, 2)}
};`;

  const stackJson = `{
  "projectName": "${project.title}",
  "technologies": ${JSON.stringify(project.tags || [], null, 2)},
  "productionUrl": "${project.link}",
  "sourceCode": "${project.github}",
  "deployment": "Vercel Edge & Cloudflare CDN",
  "buildStatus": "PRODUCTION_OPTIMIZED"
}`;

  const currentContent = activeTab === "architecture" ? architectureCode : stackJson;

  const copyCode = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-4xl max-h-[85vh] bg-[#0c0a18] border border-white/15 rounded-2xl flex flex-col overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          {/* HEADER */}
          <div className="bg-[#080612] border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-xs text-purple-300 font-bold uppercase tracking-wider">
                TECHNICAL SPECIFICATIONS // {project.title}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Inspector Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* TAB CONTROLS & COPY ACTION */}
          <div className="bg-[#0e0c1e] border-b border-white/10 px-6 py-2.5 flex items-center justify-between text-xs">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  activeTab === "architecture"
                    ? "bg-purple-600/30 text-purple-300 border border-purple-500/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                architecture.ts
              </button>
              <button
                onClick={() => setActiveTab("stack")}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  activeTab === "stack"
                    ? "bg-purple-600/30 text-purple-300 border border-purple-500/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                stack.json
              </button>
            </div>

            <button
              onClick={copyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* CODE EDITOR BODY */}
          <div className="p-6 overflow-y-auto max-h-[55vh] bg-[#070510] text-xs text-slate-300 leading-relaxed selection:bg-purple-500/40 selection:text-white font-mono">
            <pre className="whitespace-pre-wrap">{currentContent}</pre>
          </div>

          {/* FOOTER */}
          <div className="bg-[#080612] border-t border-white/10 px-6 py-3 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Type-Safe TypeScript Contract</span>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300"
              >
                <span>Open Live Platform</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
