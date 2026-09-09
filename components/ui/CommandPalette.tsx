"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Copy,
  ExternalLink,
  Code2,
  Briefcase,
  Layers,
  User,
  Mail,
  Check,
  X,
  Sparkles,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { DATA } from "@/constants/data";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Actions" | "Social";
  icon: any;
  action: () => void;
  shortcut?: string;
  badge?: string;
}

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    setSearch("");
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleOpen();
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText(DATA.personal.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1500);
  };

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openResume = () => {
    setIsOpen(false);
    const trigger = document.getElementById("resume-modal-trigger");
    if (trigger) trigger.click();
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-about",
      title: "About Story & Philosophy",
      category: "Navigation",
      icon: User,
      action: () => scrollTo("about"),
      badge: "Section",
    },
    {
      id: "nav-skills",
      title: "Technical Stack & Arsenal",
      category: "Navigation",
      icon: Layers,
      action: () => scrollTo("skills"),
      badge: "Section",
    },
    {
      id: "nav-projects",
      title: "Featured Production Projects",
      category: "Navigation",
      icon: Code2,
      action: () => scrollTo("projects"),
      badge: "Section",
    },
    {
      id: "nav-experience",
      title: "Career & Work Experience",
      category: "Navigation",
      icon: Briefcase,
      action: () => scrollTo("experience"),
      badge: "Section",
    },
    {
      id: "nav-contact",
      title: "Contact & Collaboration",
      category: "Navigation",
      icon: Mail,
      action: () => scrollTo("contact"),
      badge: "Section",
    },

    // Projects
    ...DATA.projects.map((proj) => ({
      id: `proj-${proj.slug}`,
      title: proj.title,
      category: "Projects" as const,
      icon: Code2,
      action: () => {
        setIsOpen(false);
        window.open(`/projects/${proj.slug}`, "_self");
      },
      badge: proj.tags[0] || "Next.js",
    })),

    // Actions
    {
      id: "act-resume",
      title: "View & Download Resume (PDF)",
      category: "Actions",
      icon: FileText,
      action: openResume,
      shortcut: "⌘R",
    },
    {
      id: "act-copy-email",
      title: copied ? "Email Copied to Clipboard!" : `Copy Email (${DATA.personal.email})`,
      category: "Actions",
      icon: copied ? Check : Copy,
      action: copyEmail,
      shortcut: "⌘C",
    },

    // Social
    {
      id: "soc-github",
      title: "GitHub Profile",
      category: "Social",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open(DATA.social.find((s) => s.name === "GitHub")?.url || "https://github.com/loveghariwala", "_blank");
      },
    },
    {
      id: "soc-linkedin",
      title: "LinkedIn Profile",
      category: "Social",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open(DATA.social.find((s) => s.name === "LinkedIn")?.url || "https://linkedin.com", "_blank");
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleArrowKeys = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Hidden button for programmatic trigger */}
      <button
        id="command-palette-trigger"
        onClick={toggleOpen}
        className="hidden"
        aria-hidden="true"
      />

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl rounded-2xl bg-[#0e0c1a] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 font-sans"
              onKeyDown={handleArrowKeys}
            >
              {/* Search Header */}
              <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
                <Search className="w-5 h-5 text-purple-400 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  placeholder="Type a command or search sections, projects, actions..."
                  className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-slate-400 focus:outline-none"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 rounded border border-white/10">
                  ESC
                </kbd>
                <button
                  onClick={() => setIsOpen(false)}
                  className="sm:hidden text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center text-sm text-slate-400">
                    No results found for &ldquo;{search}&rdquo;
                  </div>
                ) : (
                  filteredCommands.map((cmd, idx) => {
                    const Icon = cmd.icon;
                    const isSelected = idx === selectedIndex;
                    return (
                      <div
                        key={cmd.id}
                        onClick={cmd.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                          isSelected ? "bg-purple-600/20 text-white" : "text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`p-1.5 rounded-lg shrink-0 ${
                              isSelected ? "bg-purple-500 text-white" : "bg-white/5 text-slate-400"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium truncate">{cmd.title}</span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {cmd.badge && (
                            <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-purple-300 border border-purple-500/20">
                              {cmd.badge}
                            </span>
                          )}
                          {cmd.shortcut && (
                            <kbd className="text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                              {cmd.shortcut}
                            </kbd>
                          )}
                          <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-1 text-purple-400" : "opacity-0"}`} />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <div className="flex items-center gap-3">
                  <span>Navigation: ↑↓</span>
                  <span>Select: ↵</span>
                </div>
                <div className="flex items-center gap-1.5 text-purple-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Love Ghariwala Command Center</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
