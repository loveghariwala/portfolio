"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { DATA } from "@/constants/data";
import { ArrowUpRight, ExternalLink, Sparkles, MoveRight } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  const imageReveal = useTransform(scrollYProgress, [0, 0.3], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={cardRef}
      layoutId={`project-${project.slug}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      viewport={{ once: true }}
      style={{ y: contentY }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="group perspective-2000 cursor-pointer mb-32 last:mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[4rem] overflow-hidden bg-muted/30 border border-white/5 group-hover:border-primary/20 transition-all duration-700 relative z-10">
          
          {/* Left: Image Section */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden group/img"
          >
             <motion.div 
               style={{ 
                 clipPath: imageReveal,
                 rotateX,
                 rotateY,
                 transformStyle: "preserve-3d"
               }}
               className="w-full h-full relative"
             >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover/img:bg-transparent transition-colors duration-700" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
                {/* Inner Shadow to integrate bright images */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] opacity-40 group-hover/img:opacity-20 transition-opacity" />
             </motion.div>
             
             {/* Custom Cursor for Project */}
             <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                <motion.div 
                  style={{ x: useSpring(useTransform(x, [-0.5, 0.5], [-200, 200])), y: useSpring(useTransform(y, [-0.5, 0.5], [-200, 200])) }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 glass rounded-full flex items-center justify-center border border-white/20 shadow-glow pointer-events-none"
                >
                   <span className="text-xs font-black uppercase tracking-[0.3em] text-white">View Project</span>
                </motion.div>
             </div>
          </div>

          {/* Right: Content Section */}
          <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center relative bg-zinc-950/50">
             {/* Background number */}
             <span className="absolute top-10 right-10 text-[180px] font-black font-heading text-foreground/[0.03] select-none leading-none">
                0{index + 1}
             </span>

             <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-10">
                   {project.tags.map((tag: string) => (
                     <span key={tag} className="px-4 py-1.5 rounded-xl glass border border-white/5 text-[10px] font-black uppercase tracking-widest text-primary/80">
                        {tag}
                     </span>
                   ))}
                </div>

                <h3 className="text-4xl md:text-6xl font-bold font-heading mb-8 group-hover:text-primary transition-colors tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-xl text-secondary leading-relaxed mb-12 font-medium">
                  {project.description}
                </p>

                 <div className="flex items-center gap-10">
                   <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white group/link">
                      View Details 
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/link:border-primary group-hover/link:bg-primary transition-all duration-500">
                         <MoveRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                      </div>
                   </div>
                   <a 
                     href={project.github} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     onClick={(e) => e.stopPropagation()}
                     className="text-secondary/40 hover:text-white transition-colors relative z-20"
                   >
                      <GithubIcon />
                   </a>
                </div>
             </div>
          </div>
        </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative section-glow overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-30" />
      
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-40">
           <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-glow">
                    <Sparkles size={24} />
                 </div>
                 <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase font-mono">// Portfolio</span>
              </div>
              <Heading size="xl" className="leading-[0.9] mb-12">
                Engineering <br />
                <span className="gradient-text">Masterpieces.</span>
              </Heading>
              <p className="text-2xl text-secondary max-w-2xl font-medium leading-relaxed">
                A selection of high-end digital products that demonstrate a deep understanding of architecture, design, and user psychology.
              </p>
           </div>
           
           <div className="hidden lg:block">
              <div className="p-10 glass rounded-[3rem] border border-white/5">
                 <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs">
                       <div className="w-2 h-2 rounded-full bg-primary" />
                       Quality Obsessed
                    </div>
                    <div className="flex items-center gap-4 text-secondary/40 font-black uppercase tracking-widest text-xs">
                       <div className="w-2 h-2 rounded-full bg-secondary/20" />
                       Performant focus
                    </div>
                    <div className="flex items-center gap-4 text-secondary/40 font-black uppercase tracking-widest text-xs">
                       <div className="w-2 h-2 rounded-full bg-secondary/20" />
                       Scalable First
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-0">
          {DATA.projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-40 text-center"
        >
           <h4 className="text-[10vw] font-black font-heading text-foreground/5 leading-none select-none uppercase mb-12">More Work</h4>
           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-block group">
              <div className="flex items-center gap-8 glass px-12 py-8 rounded-[2.5rem] border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all duration-700">
                 <div className="text-left">
                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Archive</p>
                    <p className="text-xl font-bold font-heading">Explore more on GitHub</p>
                 </div>
                 <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform">
                    <GithubIcon />
                 </div>
              </div>
           </a>
        </motion.div>
      </Container>
    </section>
  );
};
