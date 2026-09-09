"use client";

import { Container } from "./Container";
import { DATA } from "@/constants/data";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-white/10 relative bg-[#07060c] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/60 shrink-0">
                <Image
                  src={DATA.personal.avatar}
                  alt={DATA.personal.name}
                  fill
                  sizes="32px"
                  className="object-cover object-top"
                />
              </div>
              <span className="text-xl font-heading font-black tracking-tight text-white">
                LOVE<span className="text-purple-400">.</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Architecting high-performance web systems, scalable REST APIs, and applied vector intelligence.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider font-semibold text-slate-400">
            <Link href="/#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="/#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/#experience" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            {DATA.social.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                {item.name === "GitHub" ? (
                  <GithubIcon className="w-4 h-4" />
                ) : (
                  <LinkedinIcon className="w-4 h-4" />
                )}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-10 h-10 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {DATA.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Surat, India (IST) // Available Worldwide</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
