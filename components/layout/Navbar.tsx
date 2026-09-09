"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, Menu, Command, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { DATA } from "@/constants/data";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = ["about", "skills", "projects", "experience", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 300) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCommandPalette = () => {
    const trigger = document.getElementById("command-palette-trigger");
    if (trigger) trigger.click();
  };

  if (!mounted) return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-5 px-4 sm:px-6 pointer-events-none">
        <Container className="max-w-6xl">
          {/* FLOATING PILL NAVBAR */}
          <div
            className={cn(
              "pointer-events-auto mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300",
              isScrolled
                ? "bg-[#0c0a18]/85 backdrop-blur-2xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                : "bg-[#0d0b1a]/70 backdrop-blur-xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            )}
          >
            {/* BRAND LOGO & MONOGRAM */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
              aria-label="Love Ghariwala Portfolio"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/60 shadow-[0_0_12px_rgba(139,92,246,0.35)] group-hover:border-purple-400 transition-all shrink-0">
                <Image
                  src={DATA.personal.avatar}
                  alt={DATA.personal.name}
                  fill
                  sizes="32px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="flex items-baseline font-heading tracking-tight text-white font-extrabold text-base sm:text-lg">
                <span>LOVE</span>
                <span className="text-purple-400">.</span>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("/#", "");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200",
                      isActive
                        ? "text-white bg-white/10 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-2">
              {/* CMD+K SEARCH TRIGGER */}
              <button
                onClick={openCommandPalette}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                title="Open Command Palette (Cmd+K)"
              >
                <Command className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] text-slate-400">⌘K</span>
              </button>

              {/* RESUME BUTTON */}
              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider btn-primary"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              {/* SOCIAL ICONS */}
              <div className="hidden lg:flex items-center gap-1 pl-1 border-l border-white/10">
                <a
                  href={DATA.social.find((s) => s.name === "GitHub")?.url || "https://github.com/loveghariwala"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={DATA.social.find((s) => s.name === "LinkedIn")?.url || "https://linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto md:hidden mt-2 mx-auto max-w-sm rounded-3xl bg-[#0e0c1c]/95 border border-white/15 backdrop-blur-2xl p-5 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-purple-400" />
                  </Link>
                ))}

                <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openCommandPalette();
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 text-xs text-slate-300 font-mono"
                  >
                    <Command className="w-3.5 h-3.5 text-purple-400" />
                    <span>Search (⌘K)</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={DATA.social.find((s) => s.name === "GitHub")?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={DATA.social.find((s) => s.name === "LinkedIn")?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hidden button for CommandPalette to open Resume */}
      <button
        id="resume-modal-trigger"
        onClick={() => setIsResumeOpen(true)}
        className="hidden"
        aria-hidden="true"
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};
