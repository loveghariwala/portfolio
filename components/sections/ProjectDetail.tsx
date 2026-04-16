"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { DATA } from "@/constants/data";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb,
  ArrowUpRight,
  Sparkle
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const GithubIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
 );

interface ProjectDetailProps {
  project: any;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.1]);

  const nextProject = DATA.projects[(DATA.projects.findIndex(p => p.slug === project.slug) + 1) % DATA.projects.length];

  return (
    <div ref={containerRef} className="min-h-screen relative selection:bg-primary/20 selection:text-primary">
       {/* Cinematic Hero Section */}
       <section className="h-[110vh] relative overflow-hidden sticky top-0 z-0">
          {/* Background Mesh & Noise */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-background/20" />
             <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-[120px]" />
             <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none noise-bg" />
          </div>

          <motion.div 
            style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover grayscale-[0.3] brightness-[0.4]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </motion.div>

          {/* Top-aligned Content to fill space */}
          <Container className="absolute inset-0 z-10 flex flex-col pt-40 pb-32">
             <div className="flex justify-between items-start">
                <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="hidden md:flex items-center gap-6"
                >
                   <span className="text-6xl font-black font-heading text-primary/20">#0{DATA.projects.indexOf(project) + 1}</span>
                   <div className="w-12 h-px bg-primary/20" />
                   <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary/40">Premium Case Study</span>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, x: 30 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, delay: 0.3 }}
                   className="flex flex-col items-end gap-2"
                >
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Live Now</span>
                   </div>
                   <p className="text-[9px] font-bold text-secondary/30 uppercase tracking-[0.2em]">{project.tags.join(" • ")}</p>
                </motion.div>
             </div>

             <div className="mt-auto">
                <motion.div
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, ease: "easeOut" }}
                >
                   <div className="flex items-center gap-4 mb-10">
                      <Link 
                        href="/#projects" 
                        className="w-14 h-14 rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all text-white group shadow-2xl"
                      >
                         <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                      </Link>
                      <div className="px-8 py-3 rounded-full bg-primary/10 backdrop-blur-3xl border border-primary/30 text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                         Architecture & Design
                      </div>
                   </div>

                   <h1 className="text-[10vw] md:text-[14vw] font-black font-heading leading-[0.8] tracking-tighter mb-16 text-white text-shadow-xl">
                      {project.title.split(" ").map((word: string, i: number) => (
                         <span key={i} className="block first:gradient-text last:text-white uppercase drop-shadow-2xl">{word}</span>
                      ))}
                   </h1>

                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                      <p className="text-xl md:text-3xl text-white/50 max-w-2xl font-medium leading-relaxed">
                         {project.description}
                      </p>
                      
                      <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="hidden lg:flex flex-col items-center gap-6"
                      >
                         <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary/40 vertical-text h-32">Scroll to explore</span>
                         <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                      </motion.div>
                   </div>
                </motion.div>
             </div>
          </Container>
       </section>

       {/* Project Content */}
       <div className="relative z-10 bg-background/30 backdrop-blur-[80px] pt-32 pb-64 rounded-t-[5rem] shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
          <Container>
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                
                {/* LEFT: INFO STICKY */}
                <div className="lg:col-span-4 space-y-12">
                   <div className="sticky top-32 space-y-12">
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">// Project Metrics</p>
                         <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-border/50 pb-4">
                               <span className="text-secondary font-medium uppercase tracking-widest text-[10px]">Client</span>
                               <span className="font-bold">{project.title}</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-border/50 pb-4">
                               <span className="text-secondary font-medium uppercase tracking-widest text-[10px]">Role</span>
                               <span className="font-bold">Full Stack</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-border/50 pb-4">
                               <span className="text-secondary font-medium uppercase tracking-widest text-[10px]">Year</span>
                               <span className="font-bold">2026</span>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <a 
                           href={project.link} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center justify-between w-full h-20 rounded-[2rem] bg-primary text-white font-black uppercase tracking-widest px-10 group shadow-glow"
                         >
                            Live Site <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </a>
                         <a 
                           href={project.github} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center justify-between w-full h-20 rounded-[2rem] glass border border-white/10 hover:border-primary/30 transition-all font-black uppercase tracking-widest px-10"
                         >
                            Source Code <GithubIcon />
                         </a>
                      </div>
                   </div>
                </div>

                {/* RIGHT: STORY & DETAILS */}
                <div className="lg:col-span-8 space-y-32">
                   
                   {/* Challenges & Learning */}
                   <section>
                      <h4 className="text-6xl font-black font-heading mb-16 tracking-tight">The <span className="text-primary italic">Process</span></h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {/* CHALLENGES */}
                         <motion.div 
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           className="p-10 rounded-[3rem] glass border border-red-500/10 hover:border-red-500/20 transition-all"
                         >
                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-8">
                               <AlertCircle size={24} />
                            </div>
                            <h5 className="text-2xl font-bold mb-6">Execution Hurdles</h5>
                            <ul className="space-y-4">
                               {project.challenges?.map((item: string, i: number) => (
                                  <li key={i} className="flex gap-4 text-secondary leading-relaxed font-medium">
                                     <span className="text-red-500 font-mono text-xs mt-1">0{i+1}</span>
                                     {item}
                                  </li>
                               ))}
                            </ul>
                         </motion.div>

                         {/* LEARNINGS */}
                         <motion.div 
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           className="p-10 rounded-[3rem] glass border border-emerald-500/10 hover:border-emerald-500/20 transition-all"
                         >
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8">
                               <Lightbulb size={24} />
                            </div>
                            <h5 className="text-2xl font-bold mb-6">Technical Growth</h5>
                            <ul className="space-y-4">
                               {project.learnings?.map((item: string, i: number) => (
                                  <li key={i} className="flex gap-4 text-secondary leading-relaxed font-medium">
                                     <span className="text-emerald-500 font-mono text-xs mt-1">0{i+1}</span>
                                     {item}
                                  </li>
                               ))}
                            </ul>
                         </motion.div>
                      </div>
                   </section>

                   {/* Impact / Success */}
                   <section 
                     className="relative p-12 md:p-20 rounded-[4rem] bg-muted/30 border border-white/5 overflow-hidden group"
                   >
                      <div className="absolute top-0 right-0 p-10 opacity-5">
                         <Sparkle size={200} className="text-primary animate-pulse" />
                      </div>
                      
                      <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                         <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                            <CheckCircle2 size={40} />
                         </div>
                         <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">// Project Impact</p>
                            <h4 className="text-4xl md:text-5xl font-black font-heading mb-8 tracking-tight">The Result.</h4>
                            <p className="text-2xl text-secondary font-medium leading-relaxed italic">
                               "{project.impact}"
                            </p>
                         </div>
                      </div>
                   </section>

                   {/* Gallery Section - Cinematic Bento Grid */}
                   {project.screenshots && (
                     <section className="relative">
                        {/* Interactive Left-side Anchor with Complex Infinite Animations */}
                        <div className="absolute -left-[calc(33.33%+8rem)] top-0 hidden lg:block h-full w-64">
                           <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center">
                              {/* Morphing Blob & Pulse System */}
                              <div className="relative w-48 h-48 flex items-center justify-center">
                                 {/* Pulse Ring 1 */}
                                 <motion.div 
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 border border-primary/30 rounded-full"
                                 />
                                 {/* Pulse Ring 2 */}
                                 <motion.div 
                                    animate={{ scale: [1.2, 1.8, 1.2], opacity: [0.2, 0.05, 0.2] }}
                                    transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 border border-primary/20 rounded-full"
                                 />
                                 
                                 {/* Morphing Background Blob */}
                                 <motion.div 
                                    animate={{ 
                                       borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "50% 50% 20% 80% / 30% 80% 20% 70%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
                                       rotate: [0, 90, 180, 270, 360]
                                    }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 bg-primary/5 backdrop-blur-3xl border border-primary/10 shadow-glow"
                                 />

                                 {/* Floating Particles */}
                                 {[...Array(3)].map((_, i) => (
                                    <motion.div
                                       key={i}
                                       animate={{ 
                                          x: [0, i * 20 - 20, 0],
                                          y: [0, i * -30 + 30, 0],
                                          opacity: [0, 1, 0]
                                       }}
                                       transition={{ duration: 3 + i, repeat: Infinity, delay: i }}
                                       className="absolute w-1.5 h-1.5 bg-primary rounded-full blur-[1px]"
                                    />
                                 ))}

                                 <div className="relative z-10 text-center">
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">DNA</p>
                                    <div className="w-8 h-px bg-primary/40 my-2 mx-auto" />
                                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-secondary/40">Active</p>
                                 </div>
                              </div>

                              <div className="mt-20 flex flex-col items-center gap-8">
                                 <div className="w-px h-24 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
                                 <p className="text-[10px] font-black uppercase tracking-[1em] text-secondary/20 vertical-text h-64 leading-none select-none">ARCHITECTURE</p>
                              </div>
                           </div>
                        </div>

                        <div className="flex items-center gap-6 mb-16">
                           <div className="w-16 h-px bg-primary/30" />
                           <h4 className="text-5xl md:text-7xl font-black font-heading tracking-tighter uppercase">Visual <span className="text-primary italic">Deep-dive</span></h4>
                        </div>
                        {/* ... rest of gallery grid ... */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                           {project.screenshots.map((src: string, i: number) => {
                              const isWide = i % 3 === 0;
                              return (
                                 <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className={cn(
                                       "group relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl bg-muted/20",
                                       isWide ? "md:col-span-2 aspect-[21/10]" : "aspect-[4/3]"
                                    )}
                                 >
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    
                                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2">Internal View 0{i+1}</span>
                                       <p className="text-xl font-bold">{project.title} Interface</p>
                                    </div>

                                    <motion.img 
                                       src={src} 
                                       alt={`Screenshot ${i+1}`} 
                                       className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110" 
                                    />

                                    {/* Overlay Glow */}
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                 </motion.div>
                              );
                           })}
                        </div>
                        
                        {/* Decorative background element */}
                        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                     </section>
                   )}

                </div>
             </div>
          </Container>
       </div>

       {/* Next Project Footer CTA */}
       <footer className="py-64 bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-[0.1]" />
          <Container className="text-center relative z-10">
             <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12">Continue Exploring</p>
             <h4 className="text-[10vw] font-black font-heading leading-none mb-16 tracking-tighter opacity-10">NEXT CREATION</h4>
             
             <Link 
               href={`/projects/${nextProject.slug}`}
               className="inline-flex items-center gap-12 group"
             >
                <div className="text-left">
                   <p className="text-sm font-bold text-secondary mb-2">Up Next</p>
                   <p className="text-4xl md:text-6xl font-black font-heading group-hover:text-primary transition-colors">
                      {nextProject.title}
                   </p>
                </div>
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-glow">
                   <ArrowUpRight size={40} />
                </div>
             </Link>
          </Container>
       </footer>
    </div>
  );
};
