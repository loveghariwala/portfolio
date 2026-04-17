"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { DATA } from "@/constants/data";
import { Zap, Code, Palette, Rocket, Target, Heart } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const highlights = [
  { icon: Zap, label: "Performance", value: "100%", color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: Code, label: "Clean Code", value: "Strict", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Palette, label: "Pixel Perfect", value: "Obsessive", color: "text-pink-500", bg: "bg-pink-500/10" },
];

const StatCard = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="group glass-card p-6 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all duration-500"
  >
    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", item.bg)}>
      <item.icon size={24} className={item.color} />
    </div>
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/50 mb-1">{item.label}</p>
    <p className="text-xl font-bold font-heading">{item.value}</p>
  </motion.div>
);

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full dot-grid opacity-[0.2] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />

      <Container>
        {/* Large Decorative Header */}
        <div className="mb-24 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.05, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute -top-16 -left-4 text-[12vw] font-black font-heading text-foreground pointer-events-none uppercase select-none leading-none"
          >
            AESTHETIC
          </motion.div>
          <div className="relative z-10">
            <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-4 block font-mono">// The Story</span>
            <Heading size="xl" className="leading-[0.95] max-w-4xl">
              I code with <span className="gradient-text">precision</span>,<br />
              I design with <span className="text-foreground/40">emotion.</span>
            </Heading>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left: Image Reveal Area */}
          <motion.div
            style={{ opacity: imageOpacity }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl bg-zinc-900 tilt-card">
              <motion.div
                style={{ scale: imageScale }}
                className="w-full h-full relative"
              >
                {/* Actual Profile Image */}
                <div className="absolute inset-0 bg-zinc-900">
                  {DATA.personal.avatar ? (
                     <>
                        <img 
                           src={DATA.personal.avatar} 
                           alt={DATA.personal.name}
                           className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                     </>
                  ) : (
                     <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[140px] font-black font-heading text-white/[0.03] select-none uppercase">LG</span>
                     </div>
                  )}
                </div>

                {/* Personal Info floating over image */}
                <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-[2.5rem] border border-white/20 translate-y-10 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Rocket size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-white">Passion Driven</p>
                      <p className="text-xs text-secondary">Creative Engineer</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Achievement Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 glass p-6 rounded-[2rem] border border-white/20 shadow-glow z-20"
            >
              <div className="text-center">
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Impact</p>
                <p className="text-4xl font-black font-heading tracking-tighter">120%</p>
                <p className="text-[10px] text-secondary/60 mt-1 uppercase font-bold tracking-widest">Growth rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content Section */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-medium leading-normal text-foreground/90">
                Hello, I’m <span className="next-gen-gradient font-black font-heading">{DATA.personal.name}</span>. A visionary developer based in <span className="underline decoration-accent decoration-4 underline-offset-8">{DATA.personal.location}</span>.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-border via-border/20 to-transparent" />
              <p className="text-xl text-secondary leading-relaxed">
                {DATA.personal.bio} I believe that every line of code should contribute to a better, more beautiful digital landscape.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, idx) => (
                <StatCard key={item.label} item={item} index={idx} />
              ))}
            </div>

            {/* Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-primary/5 border border-primary/10 relative overflow-hidden group"
            >
              <Target size={120} className="absolute -bottom-10 -right-10 text-primary/5 transform rotate-12 transition-transform group-hover:rotate-45 duration-1000" />
              <div className="relative z-10">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-3">
                  <Heart size={14} fill="currentColor" />
                  My Philosophy
                </p>
                <p className="text-2xl md:text-3xl font-heading font-black italic tracking-tight leading-snug">
                  "Style is a way to say who you are <span className="text-primary/60">without having to speak.</span>"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
