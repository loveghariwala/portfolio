"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Menu, Smartphone, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { DATA } from "@/constants/data";
import { gtaAudio } from "@/lib/gtaAudio";

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

  const openPhone = () => {
    const trigger = document.getElementById("ifruit-phone-trigger");
    if (trigger) {
      trigger.click();
    }
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] font-mono transition-all duration-300">
      {/* GLASSO-MORPHIC GTA 6 VICE CITY HUD NAVBAR */}
      <div
        className={cn(
          "w-full transition-all duration-300 border-b border-[#ff007f]/30",
          isScrolled
            ? "bg-[#060212]/95 backdrop-blur-2xl py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] border-b-[#ff007f]/50"
            : "bg-[#080314]/90 backdrop-blur-xl py-3.5 shadow-lg"
        )}
      >
        <Container className="flex items-center justify-between gap-4">
          
          {/* BRAND LOGO & TITLE */}
          <Link
            href="/"
            onClick={() => gtaAudio.playClick()}
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
            aria-label="Love Ghariwala Portfolio Home"
          >
            {/* GTA 6 LOGO EMBLEM BADGE */}
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-[#ff007f] shadow-[0_0_20px_rgba(255,0,127,0.5)] group-hover:border-[#00f0ff] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all duration-300 bg-[#04010a] flex items-center justify-center shrink-0">
              <img
                src="/logo.png"
                alt="Love Ghariwala GTA VI Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* TYPOGRAPHY TITLE */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg sm:text-xl font-black uppercase text-white tracking-tight leading-none group-hover:text-[#00f0ff] transition-colors">
                  {DATA.personal.name}
                </span>
                <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded bg-[#ff007f]/20 border border-[#ff007f]/60 text-[#ff007f] font-black uppercase">
                  VI
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-[#55ff55] animate-pulse shrink-0" />
                <span className="text-[10px] text-[#00f0ff] tracking-wider uppercase font-bold truncate max-w-[200px] sm:max-w-none">
                  NEXT.JS ARCHITECT // {DATA.personal.location}
                </span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION PILLS */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#04010a]/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md shadow-inner" aria-label="Main Navigation">
            {navItems.map((item, idx) => {
              const sectionId = item.href.replace("/#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => gtaAudio.playClick()}
                  className={cn(
                    "min-h-[38px] text-xs font-mono font-extrabold uppercase tracking-wider px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-1.5 relative focus:outline-none",
                    isActive
                      ? "text-white bg-gradient-to-r from-[#ff007f] via-[#ff2a85] to-[#ff6b00] shadow-[0_0_20px_rgba(255,0,127,0.5)] border border-[#ff007f]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span className={cn("text-[9px] font-black", isActive ? "text-white" : "text-[#ff007f]")}>
                    0{idx + 1}.
                  </span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* RIGHT HUD ACTION BUTTONS */}
          <div className="flex items-center gap-2.5">
            {/* Wanted Level Badge (Medium & Large screens) */}
            <div className="hidden xl:flex items-center gap-2 bg-[#04010a]/90 border border-[#ffcc00]/40 px-3.5 py-1.5 rounded-xl text-xs shadow-inner whitespace-nowrap shrink-0" aria-label="5 Star Wanted Level">
              <span className="text-slate-300 font-bold uppercase text-[9px] tracking-wider whitespace-nowrap">
                RATING:
              </span>
              <span className="text-[#ffcc00] tracking-widest font-black text-xs whitespace-nowrap select-none">
                ★ ★ ★ ★ ★
              </span>
            </div>


            {/* Quick iFruit Phone Trigger Button */}
            <button
              onClick={openPhone}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e0624] border border-[#00f0ff]/50 text-[#00f0ff] hover:bg-[#00f0ff]/15 hover:border-[#00f0ff] text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.25)] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
              title="Open interactive iFruit HUD phone (Ctrl + K)"
              aria-label="Open iFruit mobile phone assistant"
            >
              <Smartphone size={15} className="text-[#ff007f] animate-pulse" />
              <span>iFruit</span>
            </button>

            {/* RESUME DOWNLOAD CTA */}
            <button
              onClick={() => {
                setIsResumeOpen(true);
                gtaAudio.playClick();
              }}
              className="min-h-[42px] flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff007f] via-[#ff5500] to-[#ffcc00] text-white text-xs font-black uppercase tracking-widest transition-all hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,0,127,0.6)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
              aria-label="View and inspect resume"
            >
              <Download size={14} />
              <span>RESUME</span>
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                gtaAudio.playClick();
              }}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[#04010a] border border-white/20 text-slate-200 hover:text-white hover:border-[#ff007f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff007f]"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} className="text-[#ff007f]" /> : <Menu size={20} />}
            </button>
          </div>

        </Container>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#060212]/98 border-b-2 border-[#ff007f] backdrop-blur-2xl px-6 py-6 font-mono shadow-2xl overflow-hidden"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-2.5">
              {navItems.map((item, idx) => {
                const sectionId = item.href.replace("/#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      gtaAudio.playClick();
                    }}
                    className={cn(
                      "min-h-[48px] px-4 py-3 rounded-xl text-xs uppercase font-extrabold flex items-center justify-between transition-all",
                      isActive
                        ? "bg-gradient-to-r from-[#ff007f] to-[#ff6b00] text-white shadow-lg"
                        : "bg-[#0a031a] text-slate-300 border border-white/10 hover:text-white hover:border-[#00f0ff]"
                    )}
                  >
                    <span>0{idx + 1}. {item.name}</span>
                    <span className="text-[10px] text-[#00f0ff] font-bold">➔</span>
                  </Link>
                );
              })}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openPhone();
                }}
                className="min-h-[48px] mt-2 px-4 py-3 rounded-xl bg-[#04010a] border border-[#00f0ff]/50 text-[#00f0ff] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Smartphone size={16} className="text-[#ff007f]" />
                <span>LAUNCH iFRUIT PHONE DOCK</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </header>
  );
};
