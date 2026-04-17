"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { DATA } from "@/constants/data";
import { ArrowRight, Sparkles, Code2, Globe, Cpu } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } },
};

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={ref} className="relative min-h-[100vh] lg:min-h-[110vh] flex items-center overflow-hidden">
      {/* BACKGROUND DESIGN ELEMENTS */}
      <div className="absolute inset-0 z-0">
        {/* Main Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.08),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(6,182,212,0.1),transparent_40%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(124,58,237,0.1),transparent_40%)]" />

        {/* Animated Orbs */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-2000"
        />

        {/* Grid & Noise */}
        <div className="absolute inset-0 dot-grid opacity-[0.4] mix-blend-overlay" />
        <div className="absolute inset-0 noise-bg opacity-[0.03] pointer-events-none" />

        {/* Light Ray Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[120%] bg-primary/5 blur-[120px] rotate-[35deg] pointer-events-none" />
      </div>

      <Container className="relative z-10 pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-xs font-bold tracking-[0.15em] uppercase mb-8 text-primary shadow-glow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                {DATA.personal.availability}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-[0.95] mb-8">
                Turning bits into <br />
                <span className="next-gen-gradient">Masterpieces.</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-secondary max-w-xl font-medium leading-relaxed mb-12"
            >
              I am <span className="next-gen-gradient font-black font-heading">{DATA.personal.name}</span>, a professional <span className="next-gen-gradient font-black font-heading">{DATA.personal.role}</span>. {DATA.personal.bio.split(".")[0]}. I specialize in crafting high-end, scalable digital products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              <a href="#projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-16 px-10 rounded-2xl text-lg font-bold group relative overflow-hidden shadow-glow">
                  <span className="relative z-10 flex items-center gap-3">
                    View My Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto h-16 px-10 rounded-2xl text-lg font-bold border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all">
                  <Sparkles size={18} className="mr-3 text-primary animate-pulse" />
                  Contact Me
                </Button>
              </a>
            </motion.div>

            {/* Tech Stack Mini List */}
            <motion.div variants={fadeUp} className="mt-16 flex items-center gap-8 opacity-40">
              <div className="flex gap-6">
                <Code2 size={24} />
                <Globe size={24} />
                <Cpu size={24} />
              </div>
              <div className="h-4 w-px bg-border" />
              <p className="text-xs font-black uppercase tracking-widest">Global Standard Engineering</p>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative hidden lg:block"
          >
            {/* Decorative Background for Image */}
            <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-[80px] -rotate-6 scale-95 animate-pulse-glow" />

            {/* THE MAIN IMAGE CONTAINER */}
            <div className="relative z-10 aspect-square w-full max-w-[550px] ml-auto">
              {/* Glass Layer 1 (Bottom) */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [2, 4, 2] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -inset-4 glass border-white/20 rounded-[3.5rem] -rotate-3 z-0 shadow-2xl"
              />

              {/* Main Content Card */}
              <div className="relative w-full h-full glass-card rounded-[3.5rem] border border-white/10 overflow-hidden shadow-2xl group">
                {/* Actual Profile Image Container */}
                <div className="absolute inset-0 bg-zinc-900 group">
                  <div className="absolute inset-0 dot-grid opacity-20 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 mix-blend-overlay z-10" />

                  {DATA.personal.avatar ? (
                    <motion.img
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] as any }}
                      src={DATA.personal.avatar}
                      alt={DATA.personal.name}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-8xl font-black font-heading text-white/10 uppercase">LG.</span>
                    </div>
                  )}

                  {/* Generative UI Overlay Elements */}
                  <div className="absolute top-10 left-10 p-4 glass rounded-2xl border border-white/20 animate-float z-20">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="mt-3 w-16 h-1.5 rounded-full bg-white/20" />
                    <div className="mt-2 w-10 h-1.2 rounded-full bg-white/10" />
                  </div>

                  <div className="absolute bottom-12 right-10 p-5 glass rounded-2xl border border-white/20 animate-float animation-delay-2000">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Build Status</p>
                    <div className="flex items-end gap-1 h-8">
                      {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [`${h * 100}%`, `${(h * 0.5) * 100}%`, `${h * 100}%`] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                          className="w-1.5 bg-primary/40 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>

              {/* Floating Tech Orbs */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-24 h-24 glass rounded-full flex items-center justify-center shadow-glow border-white/20 z-20"
              >
                <Code2 className="text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-20 h-20 glass rounded-full flex items-center justify-center shadow-glow border-white/20 z-20"
              >
                <Globe className="text-secondary" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Hero Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-secondary/40">Scroll Down</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white/40"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
