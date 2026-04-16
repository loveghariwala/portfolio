"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { DATA } from "@/constants/data";
import { Briefcase, Calendar, Building2, MoveRight } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative pl-12 md:pl-24 mb-12 last:mb-0"
    >
      {/* Timeline Bullet */}
      <div className="absolute left-[20px] md:left-[35px] top-10 flex flex-col items-center">
        <div className="w-6 h-6 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-500 z-10 box-content shadow-glow">
          <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-[3] transition-transform duration-700 opacity-40" />
        </div>
      </div>

      <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 group-hover:border-primary/20 transition-all duration-700 relative overflow-hidden tilt-card">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-6">
              {/* Company Logo Placeholder */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-muted flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-colors shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <span className="text-2xl font-black font-heading text-primary/40 group-hover:text-primary transition-colors select-none tracking-tighter">
                  {exp.company.split(" ").map((n: string) => n[0]).join("")}
                </span>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold font-heading mb-2 group-hover:text-primary transition-colors tracking-tight">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-3 text-secondary font-medium">
                  <Building2 size={16} />
                  <span className="text-lg">{exp.company}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase mb-2">
                <Calendar size={12} />
                {exp.period}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/30">Global Experience</span>
            </div>
          </div>

          <p className="text-lg text-secondary/80 leading-relaxed max-w-4xl mb-10 font-medium group-hover:text-foreground transition-colors duration-500">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-10 border-t border-border/30">
            {/* Dynamic impact tags based on role */}
            <div className="px-5 py-2 rounded-2xl bg-muted/30 border border-border/50 text-xs font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
              Strategic Leadership
            </div>
            <div className="px-5 py-2 rounded-2xl bg-muted/30 border border-border/50 text-xs font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
              Architectural Design
            </div>
            <div className="px-5 py-2 rounded-2xl bg-muted/30 border border-border/50 text-xs font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
              Scalable Systems
            </div>
          </div>
        </div>

        {/* Decorative number */}
        <span className="absolute -bottom-6 -right-4 text-[140px] font-heading font-black text-foreground/[0.02] select-none leading-none group-hover:text-primary/5 transition-colors">
          0{index + 1}
        </span>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-32 relative overflow-hidden section-glow">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full dot-grid opacity-[0.1] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] opacity-40 pointer-events-none" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Briefcase size={20} />
              </div>
              <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase font-mono">// Career</span>
            </div>
            <Heading size="lg" className="mb-8 leading-tight">
              A timeline of <br />
              <span className="gradient-text">growth & impact.</span>
            </Heading>
            <p className="text-xl text-secondary max-w-2xl font-medium">
              Mapping out my professional history, from foundational roles to senior leadership, focusing on solving complex problems.
            </p>
          </div>
          <div className="hidden lg:block text-right pb-4">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">Since</p>
            <p className="text-6xl font-black font-heading tracking-tighter opacity-10">2015</p>
          </div>
        </div>

        <div className="relative">
          {/* Animated Path System */}
          <div className="absolute left-[30px] md:left-[45px] top-0 bottom-0 w-[4px]">
            {/* Background Track */}
            <div className="absolute inset-0 bg-border/30 rounded-full" />
            {/* Growth Line */}
            <motion.div
              style={{ height: pathHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-accent to-primary rounded-full shadow-glow origin-top"
            />
          </div>

          <div className="relative">
            {DATA.experience.map((exp, idx) => (
              <ExperienceCard key={`${exp.company}-${idx}`} exp={exp} index={idx} />
            ))}

            {/* Education Splitter */}
            <div className="pt-24 pb-20 relative">
               <div className="absolute left-[30px] md:left-[45px] top-0 bottom-0 w-[4px] bg-primary/20" />
               <div className="flex items-center gap-8 pl-[60px] md:pl-[95px]">
                  <h2 className="text-2xl font-black font-heading uppercase tracking-widest text-secondary flex items-center gap-4">
                     <div className="w-12 h-px bg-primary/30" />
                     Education
                  </h2>
               </div>
            </div>

            {(DATA as any).education?.map((edu: any, idx: number) => (
              <ExperienceCard 
                key={`${edu.institution}-${idx}`} 
                exp={{
                  company: edu.institution,
                  role: edu.degree,
                  period: edu.period,
                  description: `Graduated with a CGPA of ${edu.cgpa}. Focused on core engineering principles and advanced development methodologies.`
                }} 
                index={idx + DATA.experience.length} 
              />
            ))}
          </div>

          {/* Present Dot Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute bottom-0 left-[24px] md:left-[39px] flex items-center gap-8 pl-12 md:pl-20"
          >
            <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Currently Open to New Projects</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
