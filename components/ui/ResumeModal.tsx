"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Download } from "lucide-react";
import { DATA } from "@/constants/data";
import { Button } from "./Button";
import { useRef, useEffect } from "react";

interface ResumeModalProps {
   isOpen: boolean;
   onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
   const resumeRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
     if (isOpen) {
       document.body.style.overflow = 'hidden';
     } else {
       document.body.style.overflow = 'unset';
     }
     return () => { document.body.style.overflow = 'unset'; };
   }, [isOpen]);

   const handleDownload = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      window.print();
   };

   // Gather all skills into a single flat list
   const allSkills = DATA.skills.flatMap(cat => cat.items);

   return (
      <AnimatePresence>
         {isOpen && (
            <>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={onClose}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] cursor-zoom-out"
               />
               <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-x-32 xl:inset-x-56 bg-white text-zinc-900 z-[201] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col pointer-events-auto"
               >
                  {/* Header / Actions Bar */}
                  <div className="flex items-center justify-between px-6 md:px-8 py-4 bg-zinc-100 border-b border-zinc-200 shrink-0 no-print">
                     <div className="flex items-center gap-3">
                        <FileText className="text-primary" size={20} />
                        <span className="font-bold uppercase tracking-widest text-xs hidden sm:block">Resume Preview</span>
                     </div>
                     <div className="flex items-center gap-2 md:gap-4">
                        <Button
                           onClick={handleDownload}
                           variant="primary"
                           className="gap-2"
                        >
                           <Download size={18} /> <span className="hidden sm:block">Download PDF</span>
                        </Button>
                        <button onClick={onClose} className="p-2 bg-white hover:bg-zinc-200 rounded-full transition-colors border border-zinc-200 ml-2">
                           <X size={20} />
                        </button>
                     </div>
                  </div>

                  {/* Resume Content - Scrollable */}
                  <div className="flex-1 overflow-y-auto bg-white relative min-h-0" id="resume-print-area" ref={resumeRef}>
                     <style jsx global>{`
                        @media print {
                           body * {
                              visibility: hidden;
                           }
                           #resume-print-area, #resume-print-area * {
                              visibility: visible;
                           }
                           #resume-print-area {
                              position: absolute;
                              left: 0;
                              top: 0;
                              width: 100%;
                              padding: 0.5in !important;
                              margin: 0 !important;
                              color: #000 !important;
                              background: #fff !important;
                              font-size: 11pt !important;
                           }
                           .no-print {
                              display: none !important;
                           }
                           .resume-header {
                              background: #1a3c6e !important;
                              -webkit-print-color-adjust: exact;
                              print-color-adjust: exact;
                           }
                           .resume-section-title {
                              background: #1a3c6e !important;
                              color: #fff !important;
                              -webkit-print-color-adjust: exact;
                              print-color-adjust: exact;
                           }
                        }
                     `}</style>

                     <div className="max-w-[800px] mx-auto bg-white" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
                        
                        {/* ====== HEADER ====== */}
                        <div className="resume-header text-center py-5 px-6" style={{ backgroundColor: '#1a3c6e', color: '#fff' }}>
                           <h1 className="text-3xl md:text-4xl font-bold tracking-wide" style={{ fontFamily: "'Times New Roman', Georgia, serif", marginBottom: '4px' }}>
                              {DATA.personal.name}
                           </h1>
                           <p className="text-xs md:text-sm opacity-90 mt-1" style={{ letterSpacing: '0.5px' }}>
                              ✉ {DATA.personal.location} ✉ {DATA.personal.email} ☎ 8200834970 ☐ in/love-ghariwala-66477133a
                           </p>
                        </div>

                        {/* ====== BODY ====== */}
                        <div className="px-6 md:px-10 py-6 space-y-5 text-[13px] md:text-sm leading-relaxed text-zinc-800" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>

                           {/* --- SUMMARY --- */}
                           <section>
                              <h2 className="resume-section-title font-bold text-sm md:text-base px-3 py-1.5 mb-3" style={{ backgroundColor: '#1a3c6e', color: '#fff', letterSpacing: '1px' }}>
                                 SUMMARY
                              </h2>
                              <p className="leading-relaxed text-zinc-700 px-1">
                                 Motivated and detail-oriented Software Developer with experience in both frontend and backend development. Skilled in building modern web applications using technologies such as JavaScript, Next.js, MERN Stack, Supabase, TypeScript, and PostgreSQL. Experienced in developing APIs, managing databases, and implementing core features for real-world applications with <b>GIT</b>.
                              </p>
                              <p className="leading-relaxed text-zinc-700 px-1 mt-2">
                                 I enjoy working on practical projects where I can solve real problems and improve my development skills. During my work on different projects, I have gained hands-on experience in building scalable features, handling database operations, and adapting to changing project requirements. I am always eager to learn new technologies, improve my problem-solving abilities, and grow as a full-stack developer while contributing to meaningful software products.
                              </p>
                           </section>

                           {/* --- EXPERIENCE --- */}
                           <section>
                              <h2 className="resume-section-title font-bold text-sm md:text-base px-3 py-1.5 mb-3" style={{ backgroundColor: '#1a3c6e', color: '#fff', letterSpacing: '1px' }}>
                                 EXPERIENCE
                              </h2>

                              {/* DivTech */}
                              <div className="px-1 mb-4">
                                 <div className="flex items-start justify-between flex-wrap gap-1">
                                    <div>
                                       <h3 className="font-bold text-base text-zinc-900">Front-end & Back-end Developer (Intern)</h3>
                                       <p className="text-zinc-600 text-[13px]">DivTech System</p>
                                    </div>
                                    <p className="text-zinc-600 text-[13px] font-semibold whitespace-nowrap">September 2025 - Present, India</p>
                                 </div>
                                 <ul className="list-disc ml-5 mt-2 space-y-1 text-zinc-700">
                                    <li>Developed full-stack web applications using <b>Next.js, Supabase, TypeScript, and PostgreSQL</b>, contributing to both frontend and backend across multiple projects.</li>
                                    <li>Built and optimized APIs, managed database operations, and implemented SEO best practices for production-ready applications.</li>
                                 </ul>
                              </div>

                              {/* iTact Solutions */}
                              <div className="px-1 mb-3">
                                 <div className="flex items-start justify-between flex-wrap gap-1">
                                    <div>
                                       <h3 className="font-bold text-base text-zinc-900">Web Development Intern</h3>
                                       <p className="text-zinc-600 text-[13px]">iTact Solutions</p>
                                    </div>
                                    <p className="text-zinc-600 text-[13px] font-semibold whitespace-nowrap">March 2025 - May 2025, Surat</p>
                                 </div>
                                 <ul className="list-disc ml-5 mt-2 space-y-1 text-zinc-700">
                                    <li>Worked as a <b>MERN Stack</b> developer, building full-stack applications and contributing to internal and client-facing web projects.</li>
                                    <li>Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js in a production environment.</li>
                                 </ul>
                              </div>
                           </section>

                           {/* --- KEY PROJECTS --- */}
                           <section>
                              <h2 className="resume-section-title font-bold text-sm md:text-base px-3 py-1.5 mb-3" style={{ backgroundColor: '#1a3c6e', color: '#fff', letterSpacing: '1px' }}>
                                 KEY PROJECTS
                              </h2>

                              {DATA.projects.map((project: any, i: number) => (
                                 <div key={i} className="px-1 mb-5">
                                    <div className="flex items-start justify-between flex-wrap gap-1">
                                       <div>
                                          <h3 className="font-bold text-base text-zinc-900">{project.title}</h3>
                                          <p className="text-zinc-500 text-[12px]">{project.tags.join(' • ')}</p>
                                       </div>
                                       {project.link && project.link !== '#' && (
                                          <a 
                                             href={project.link} 
                                             target="_blank" 
                                             rel="noopener noreferrer"
                                             className="text-[12px] font-bold uppercase tracking-wider"
                                             style={{ color: '#1a3c6e', textDecoration: 'underline' }}
                                          >
                                             View Live ↗
                                          </a>
                                       )}
                                    </div>

                                    <p className="text-zinc-700 mt-1.5 leading-relaxed">{project.description}</p>

                                    {/* Hurdles */}
                                    {project.challenges && project.challenges.length > 0 && (
                                       <div className="mt-2">
                                          <p className="font-bold text-[12px] text-zinc-800">‣ Hurdles Overcome:</p>
                                          <ul className="list-disc ml-5 mt-1 space-y-1 text-zinc-700">
                                             {project.challenges.map((ch: string, idx: number) => (
                                                <li key={idx}>{ch}</li>
                                             ))}
                                          </ul>
                                       </div>
                                    )}

                                    {/* Success & Impact */}
                                    {(project.impact || (project.learnings && project.learnings.length > 0)) && (
                                       <div className="mt-2">
                                          <p className="font-bold text-[12px] text-zinc-800">‣ Success & Impact:</p>
                                          {project.impact && (
                                             <p className="ml-5 text-zinc-700 mt-0.5">{project.impact}</p>
                                          )}
                                          {project.learnings && project.learnings.length > 0 && (
                                             <ul className="list-disc ml-5 mt-1 space-y-1 text-zinc-700">
                                                {project.learnings.map((l: string, idx: number) => (
                                                   <li key={idx}>{l}</li>
                                                ))}
                                             </ul>
                                          )}
                                       </div>
                                    )}
                                 </div>
                              ))}
                           </section>

                           {/* --- EDUCATION --- */}
                           <section>
                              <h2 className="resume-section-title font-bold text-sm md:text-base px-3 py-1.5 mb-3" style={{ backgroundColor: '#1a3c6e', color: '#fff', letterSpacing: '1px' }}>
                                 EDUCATION
                              </h2>
                              <div className="px-1">
                                 <h3 className="font-bold text-base text-zinc-900">Bachelor of Technology in Computer Science and Engineering</h3>
                                 <p className="text-zinc-600 text-[13px]">
                                    Parul Institute of Technology · Vadodara, Gujarat, India · 2025 · 7.78
                                 </p>
                              </div>
                           </section>

                           {/* --- SKILLS --- */}
                           <section>
                              <h2 className="resume-section-title font-bold text-sm md:text-base px-3 py-1.5 mb-3" style={{ backgroundColor: '#1a3c6e', color: '#fff', letterSpacing: '1px' }}>
                                 SKILLS
                              </h2>
                              <p className="px-1 text-zinc-700">
                                 HTML, CSS, JavaScript, MERN Stack, Next.js, Supabase, TypeScript, C++, GIT, {allSkills.filter(s => !['JavaScript', 'Next.js', 'TypeScript'].includes(s)).join(', ')}
                              </p>
                           </section>

                        </div>
                     </div>
                  </div>
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
};
