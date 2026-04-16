"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { DATA } from "@/constants/data";
import { Layers, Server, Paintbrush, Globe, Box, Cpu, HardDrive, Smartphone } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Layers,
  Backend: Server,
  Design: Paintbrush,
};

const SkillOrb = ({ children, x, y, size = "w-16 h-16", delay = 0 }: { children: React.ReactNode; x: string; y: string; size?: string; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      x: [0, 5, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 4,
      delay,
      ease: "easeInOut",
    }}
    style={{ left: x, top: y }}
    className={cn("absolute glass rounded-full flex items-center justify-center p-3 shadow-glow border-white/10 z-20", size)}
  >
    {children}
  </motion.div>
);

export const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="skills" ref={containerRef} className="py-32 relative overflow-hidden section-glow">
      {/* Background Decor */}
      <div className="absolute inset-0 dot-grid opacity-[0.15] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 opacity-60" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-4 sticky top-32">
            <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-6 block font-mono">// Tech Stack</span>
            <Heading size="lg" className="mb-8 leading-tight">
              Crafting with the <br />
              <span className="gradient-text">right tools.</span>
            </Heading>
            <p className="text-lg text-secondary leading-relaxed mb-12 font-medium">
              I select technologies based on their performance, scalability, and ability to deliver exceptional user experiences.
            </p>

            {/* Category selection detail */}
            <div className="space-y-4">
              {DATA.skills.map((skillGroup) => (
                <div 
                  key={skillGroup.category}
                  className={cn(
                    "flex items-center gap-4 transition-all duration-300",
                    hoveredCategory === skillGroup.category ? "opacity-100 translate-x-3" : "opacity-40"
                  )}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-glow" />
                  <span className="text-sm font-black uppercase tracking-[0.2em]">{skillGroup.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: DYNAMIC GRID */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {DATA.skills.map((skillGroup, idx) => {
              const Icon = categoryIcons[skillGroup.category] || Layers;
              
              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredCategory(skillGroup.category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={cn(
                    "group relative glass-card p-10 rounded-[3rem] border border-white/5 transition-all duration-700 tilt-card",
                    idx === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-square"
                  )}
                >
                  {/* Category Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  {/* Decorative Header */}
                  <div className="flex items-center justify-between mb-12">
                     <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-glow">
                        <Icon size={32} />
                     </div>
                     <span className="text-5xl font-black font-heading text-foreground/5">{skillGroup.category.slice(0, 3).toUpperCase()}</span>
                  </div>

                  <h3 className="text-3xl font-bold font-heading mb-4">{skillGroup.category}</h3>
                  <p className="text-secondary/70 mb-10 text-lg font-medium">Mastering the arts of {skillGroup.category.toLowerCase()} development.</p>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-5 py-2.5 rounded-2xl bg-muted/30 border border-border/50 text-sm font-bold tracking-tight hover:border-primary/50 hover:bg-primary/5 hover:next-gen-gradient hover:scale-110 transition-all duration-300 font-heading cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Floating ORBS for first item (Big Card) */}
                  {idx === 0 && (
                    <div className="hidden lg:block">
                       <SkillOrb x="85%" y="15%" delay={0} size="w-14 h-14">
                          <Box size={24} className="text-indigo-400" />
                       </SkillOrb>
                       <SkillOrb x="75%" y="65%" delay={1} size="w-12 h-12">
                          <Cpu size={20} className="text-emerald-400" />
                       </SkillOrb>
                       <SkillOrb x="90%" y="50%" delay={2} size="w-10 h-10">
                          <Globe size={18} className="text-cyan-400" />
                       </SkillOrb>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};
