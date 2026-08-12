"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Menu, Star, MapPin } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
  const [activeSection, setActiveSection] = useState("");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = navItems.map((item) => item.href.replace("/#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 250) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] font-mono">
      {/* TOP HUD BAR */}
      <div className="w-full bg-[#080314] border-b border-[#ff007f]/30 px-4 py-2 flex items-center justify-between gap-4 select-none">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="px-3 py-1 bg-gradient-to-r from-[#ff007f] via-[#ff6b00] to-[#00f0ff] text-white font-black tracking-widest text-base rounded">
            VI
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-base font-extrabold uppercase text-white tracking-wider leading-none">
              {DATA.personal.name}
            </span>
            <span className="text-[10px] text-[#00f0ff] tracking-widest uppercase font-bold mt-0.5">
              NEXT.JS ARCHITECT // {DATA.personal.location}
            </span>
          </div>
        </Link>

        {/* Center: Rating Stars */}
        <div className="hidden md:flex items-center gap-2 bg-[#0e0624] border border-[#ff007f]/40 px-3.5 py-1 rounded-full text-xs">
          <span className="text-slate-300 font-bold uppercase text-[10px] tracking-wider">
            SKILL RATING:
          </span>
          <span className="text-[#ffcc00] tracking-widest font-bold">
            ★ ★ ★ ★ ★
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsResumeOpen(true)}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#ff007f] to-[#ff6b00] text-white text-xs font-black uppercase tracking-widest transition-all hover:brightness-110 cursor-pointer"
          >
            <Download size={14} />
            <span>RESUME</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-200"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* NAVIGATION DOCK BAR */}
      <nav className="w-full bg-[#080314]/90 border-b border-white/10 py-2 hidden md:block">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {navItems.map((item, idx) => {
              const sectionId = item.href.replace("/#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-xs font-mono font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-colors flex items-center gap-2",
                    isActive
                      ? "text-[#00f0ff] bg-[#ff007f]/15 border border-[#ff007f]/40"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span className="text-[9px] text-[#ff007f]">0{idx + 1}.</span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs text-[#55ff55] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#55ff55] animate-pulse" />
            <span>{DATA.personal.availability}</span>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#0e0624] border-b border-[#ff007f]/40 p-5 flex flex-col gap-3 font-mono"
          >
            {navItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-lg bg-white/5 text-xs text-slate-200 uppercase font-bold hover:bg-[#ff007f]/20 hover:text-[#00f0ff]"
              >
                0{idx + 1}. {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </header>
  );
};
