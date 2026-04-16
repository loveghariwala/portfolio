"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 200) {
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
    <nav
      className={cn(
        "fixed top-8 left-0 right-0 z-[100] transition-all duration-700 pointer-events-none",
        isScrolled ? "top-4" : "top-8"
      )}
    >
      <Container className="flex justify-center">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "pointer-events-auto relative flex items-center gap-8 px-8 py-3 rounded-[2.5rem] transition-all duration-700 border shadow-2xl overflow-hidden",
            isScrolled 
              ? "glass border-primary/20 bg-background/40 backdrop-blur-[20px] scale-95" 
              : "bg-background/10 backdrop-blur-sm border-white/5"
          )}
        >
          {/* Animated Background Glow */}
          {isScrolled && (
            <div className="absolute inset-0 z-[-1] opacity-20">
               <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent blur-[40px]" />
            </div>
          )}

          <Link href="/" className="text-xl font-heading font-black tracking-tighter group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xs text-white shadow-glow group-hover:rotate-[360deg] transition-all duration-700 overflow-hidden border border-white/10">
               {DATA.personal.avatar ? (
                  <img src={DATA.personal.avatar} alt="LG" className="w-full h-full object-cover" />
               ) : (
                  "LG"
               )}
            </div>
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300 uppercase">
               {DATA.personal.name.split(' ')[0]}
               <span className="text-primary group-hover:text-white transition-colors">.</span>
            </span>
          </Link>

          <div className="w-px h-6 bg-white/10 hidden md:block" />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-2xl transition-all duration-500 group",
                    isActive ? "text-primary" : "text-foreground/40 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-2xl -z-10 shadow-glow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-2xl -z-10 transition-opacity" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="w-px h-6 bg-white/10 hidden md:block" />

          {/* Actions */}
          <div className="flex items-center gap-4">
             <Button
               onClick={() => setIsResumeOpen(true)}
               variant="primary"
               className="hidden md:flex h-10 px-6 rounded-xl text-[10px] uppercase font-black tracking-widest gap-2 group/res"
             >
                <Download size={14} className="group-hover/res:-translate-y-0.5 transition-transform" /> 
                Resume
             </Button>

             <motion.button
               whileHover={{ scale: 1.1, rotate: 180 }}
               whileTap={{ scale: 0.9 }}
               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
               className="p-2 rounded-xl hover:text-primary transition-colors text-foreground/60"
             >
               {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
             </motion.button>

             <button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="md:hidden p-2 text-foreground/60"
             >
               {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>
        </motion.div>
      </Container>

      {/* Mobile Menu - Futuristic Reveal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute top-full left-4 right-4 mt-6 glass rounded-[3rem] p-4 border border-primary/20 md:hidden z-[101]"
          >
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-5 px-8 rounded-3xl hover:bg-primary/10 group transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-primary/40 group-hover:text-primary transition-colors">0{idx + 1}</span>
                    <span className="text-sm font-black uppercase tracking-widest">{item.name}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </nav>
  );
};
