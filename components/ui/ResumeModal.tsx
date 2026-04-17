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
     if (isOpen) document.body.style.overflow = 'hidden';
     else document.body.style.overflow = 'unset';
     return () => { document.body.style.overflow = 'unset'; };
   }, [isOpen]);

   const generateResumeHTML = () => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${DATA.personal.name} - Resume</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
@page { size: A4; margin: 0; }
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Inter',sans-serif;color:#1e293b;background:#fff;font-size:8.5pt;line-height:1.45;-webkit-print-color-adjust:exact;print-color-adjust:exact;}

.page{max-width:210mm;margin:0 auto;padding:20px 28px 16px;}

/* HEADER */
.hdr{text-align:center;padding-bottom:12px;border-bottom:2.5px solid #0f172a;margin-bottom:10px;}
.hdr h1{font-size:26pt;font-weight:900;color:#0f172a;letter-spacing:-1px;line-height:1;}
.hdr .subtitle{font-size:8.5pt;font-weight:600;color:#2563eb;letter-spacing:2px;text-transform:uppercase;margin:4px 0 8px;}
.hdr .contact{display:flex;justify-content:center;flex-wrap:wrap;gap:6px;font-size:7.5pt;color:#64748b;}
.hdr .contact a{color:#2563eb;text-decoration:none;font-weight:600;}
.hdr .sep{color:#cbd5e1;}

/* SECTIONS */
.sec{margin-bottom:9px;}
.sec-title{font-size:8pt;font-weight:800;text-transform:uppercase;letter-spacing:2.5px;color:#0f172a;border-bottom:1.5px solid #e2e8f0;padding-bottom:3px;margin-bottom:6px;display:flex;align-items:center;gap:6px;}
.sec-title::before{content:'';display:inline-block;width:3px;height:12px;background:#2563eb;border-radius:1px;}

/* SKILLS */
.skills-row{display:flex;flex-wrap:wrap;gap:4px;}
.skill{font-size:7pt;font-weight:600;padding:2.5px 8px;border:1px solid #2563eb;border-radius:20px;color:#2563eb;background:#eff6ff;}

/* EXPERIENCE */
.exp{margin-bottom:7px;}
.exp-top{display:flex;justify-content:space-between;align-items:baseline;}
.exp-role{font-size:9.5pt;font-weight:800;color:#0f172a;}
.exp-date{font-size:7pt;font-weight:700;color:#2563eb;white-space:nowrap;}
.exp-co{font-size:7.5pt;color:#64748b;margin-bottom:2px;}
.exp ul{margin-left:14px;margin-top:2px;}
.exp li{font-size:8pt;color:#334155;margin-bottom:1.5px;line-height:1.4;}
.exp li b{color:#0f172a;}
.exp li::marker{color:#2563eb;}

/* PROJECTS */
.proj{margin-bottom:7px;padding-bottom:5px;border-bottom:1px dashed #e2e8f0;}
.proj:last-child{border-bottom:none;padding-bottom:0;}
.proj-top{display:flex;justify-content:space-between;align-items:baseline;gap:4px;}
.proj-name{font-size:9pt;font-weight:800;color:#0f172a;}
.proj-right{display:flex;align-items:center;gap:6px;flex-shrink:0;}
.proj-tags{font-size:6.5pt;color:#94a3b8;font-weight:500;}
.proj-link{font-size:6.5pt;color:#2563eb;font-weight:700;text-decoration:none;border:1px solid #2563eb;padding:1px 5px;border-radius:3px;}
.proj-desc{font-size:8pt;color:#475569;margin:1px 0;}
.proj-meta{font-size:7pt;color:#64748b;margin-top:1px;}
.proj-meta b{color:#334155;font-weight:700;}

/* EDUCATION */
.edu-top{display:flex;justify-content:space-between;align-items:baseline;}
.edu-deg{font-size:9pt;font-weight:800;color:#0f172a;}
.edu-year{font-size:7pt;font-weight:700;color:#2563eb;}
.edu-inst{font-size:7.5pt;color:#64748b;}

/* FOOTER */
.foot{margin-top:8px;padding-top:6px;border-top:1px solid #e2e8f0;text-align:center;font-size:6pt;color:#cbd5e1;letter-spacing:1px;text-transform:uppercase;}
</style>
</head>
<body>
<div class="page">
<div class="hdr">
   <h1>${DATA.personal.name}</h1>
   <div class="subtitle">Full Stack Developer — Next.js & MERN Specialist</div>
   <div class="contact">
      <span>${DATA.personal.email}</span><span class="sep">•</span>
      <span>${DATA.personal.location}</span><span class="sep">•</span>
      <span>8200834970</span><span class="sep">•</span>
      <a href="https://linkedin.com/in/love-ghariwala-66477133a">linkedin.com/in/love-ghariwala</a><span class="sep">•</span>
      <a href="https://github.com/loveghariwala">github.com/loveghariwala</a>
   </div>
</div>

<div class="sec">
   <div class="sec-title">Professional Summary</div>
   <p style="font-size:8pt;color:#334155;">Results-driven Full Stack Developer with production experience building high-performance web applications using <b>JavaScript, TypeScript, Next.js, React.js, Node.js, Supabase, PostgreSQL, and MongoDB</b>. Skilled in RESTful API development, database architecture, responsive UI implementation, and <b>SEO optimization</b>. Consistently delivers clean, scalable code with a focus on performance, accessibility, and user experience.</p>
</div>

<div class="sec">
   <div class="sec-title">Technical Skills</div>
   <div class="skills-row">
      ${['JavaScript', 'TypeScript', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Supabase', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs', 'Git', 'GitHub', 'MERN Stack', 'Responsive Design', 'SEO', 'Framer Motion', 'Vercel'].map(s => `<span class="skill">${s}</span>`).join('')}
   </div>
</div>

<div class="sec">
   <div class="sec-title">Work Experience</div>
   <div class="exp">
      <div class="exp-top">
         <span class="exp-role">Full Stack Developer Intern</span>
         <span class="exp-date">SEP 2025 — PRESENT</span>
      </div>
      <div class="exp-co">DivTech System · Surat, Gujarat, India</div>
      <ul>
         <li><b>Architected</b> and deployed 3+ production web applications using <b>Next.js, Supabase, TypeScript, and PostgreSQL</b>, handling end-to-end development from database schema design to UI implementation.</li>
         <li><b>Engineered</b> RESTful API endpoints and optimized complex database queries, reducing response times and ensuring seamless integration of payment gateways and real-time inventory systems.</li>
         <li><b>Implemented</b> SEO best practices including sitemap generation, meta tag optimization, and structured data, increasing organic search visibility across deployed projects.</li>
      </ul>
   </div>
   <div class="exp">
      <div class="exp-top">
         <span class="exp-role">Web Development Intern</span>
         <span class="exp-date">MAR 2025 — MAY 2025</span>
      </div>
      <div class="exp-co">iTact Solutions · Surat, Gujarat, India</div>
      <ul>
         <li><b>Developed</b> full-stack applications using the <b>MERN Stack</b> (MongoDB, Express.js, React.js, Node.js), contributing to internal and client-facing production projects.</li>
         <li><b>Collaborated</b> with cross-functional teams to deliver responsive, accessible web interfaces meeting business requirements.</li>
      </ul>
   </div>
</div>

<div class="sec">
   <div class="sec-title">Key Projects</div>
   ${DATA.projects.map((p: any) => `
   <div class="proj">
      <div class="proj-top">
         <span class="proj-name">${p.title}</span>
         <div class="proj-right">
            <span class="proj-tags">${p.tags.join(' · ')}</span>
            ${p.link && p.link !== '#' ? `<a class="proj-link" href="${p.link}" target="_blank">LIVE ↗</a>` : ''}
         </div>
      </div>
      <div class="proj-desc">${p.description}</div>
      ${p.challenges?.length ? `<div class="proj-meta"><b>Challenges:</b> ${p.challenges.join('; ')}.</div>` : ''}
      ${p.impact ? `<div class="proj-meta"><b>Impact:</b> ${p.impact}</div>` : ''}
   </div>
   `).join('')}
</div>

<div class="sec">
   <div class="sec-title">Education</div>
   <div class="edu-top">
      <span class="edu-deg">Bachelor of Technology in Computer Science & Engineering</span>
      <span class="edu-year">2021 — 2025</span>
   </div>
   <div class="edu-inst">Parul Institute of Technology · Vadodara, Gujarat, India · CGPA: 7.78</div>
</div>

<div class="foot">Generated from portfolio · Love Ghariwala</div>
</div>
</body>
</html>`;

   const handleDownload = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const w = window.open('', '_blank', 'width=900,height=700');
      if (!w) { alert('Please allow popups to download PDF.'); return; }
      w.document.write(generateResumeHTML());
      w.document.close();
      setTimeout(() => { w.focus(); w.print(); }, 400);
   };

   // Reusable section title for preview
   const SectionTitle = ({ children }: { children: string }) => (
      <h2 className="text-[9px] font-extrabold uppercase tracking-[2.5px] pb-1 mb-1.5 flex items-center gap-1.5" style={{ color: '#0f172a', borderBottom: '1.5px solid #e2e8f0' }}>
         <span className="inline-block w-[3px] h-3 rounded-sm" style={{ backgroundColor: '#2563eb' }} />
         {children}
      </h2>
   );

   return (
      <AnimatePresence>
         {isOpen && (
            <>
               <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={onClose}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] cursor-zoom-out"
               />
               <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-x-24 xl:inset-x-44 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 z-[201] rounded-[2.5rem] overflow-hidden shadow-3xl flex flex-col pointer-events-auto border border-white/10"
               >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between px-6 md:px-10 py-5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border-b border-zinc-200 dark:border-white/5 shrink-0">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                           <FileText size={20} />
                        </div>
                        <div className="flex flex-col">
                           <span className="font-black uppercase tracking-widest text-[10px] text-primary">Resume</span>
                           <span className="font-bold text-sm hidden sm:block">Professional Preview</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 md:gap-4">
                        <Button onClick={handleDownload} variant="primary" className="gap-2 h-11 px-6 rounded-xl shadow-glow">
                           <Download size={18} /> <span className="hidden sm:block">Download PDF</span>
                        </Button>
                        <button 
                           onClick={onClose} 
                           className="w-11 h-11 flex items-center justify-center bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 rounded-xl transition-all border border-zinc-200 dark:border-white/10"
                        >
                           <X size={20} />
                        </button>
                     </div>
                  </div>

                  {/* Preview */}
                  <div className="flex-1 overflow-y-auto bg-zinc-200 dark:bg-zinc-900/50 min-h-0 p-4 md:p-12" ref={resumeRef}>
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-[850px] mx-auto bg-white shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] px-8 md:px-12 py-10 rounded-sm relative overflow-hidden" 
                        style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
                     >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                        {/* HEADER */}
                        <div className="text-center pb-3 mb-3" style={{ borderBottom: '2.5px solid #0f172a' }}>
                           <h1 className="text-3xl md:text-4xl font-black tracking-tight next-gen-gradient" style={{ lineHeight: 1 }}>{DATA.personal.name}</h1>
                           <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[2px] mt-1 next-gen-gradient">Full Stack Developer — Next.js & MERN Specialist</p>
                           <div className="flex justify-center flex-wrap gap-1.5 mt-2 text-[9px]" style={{ color: '#64748b' }}>
                              <span>{DATA.personal.email}</span>
                              <span style={{ color: '#cbd5e1' }}>•</span>
                              <span>{DATA.personal.location}</span>
                              <span style={{ color: '#cbd5e1' }}>•</span>
                              <span>8200834970</span>
                              <span style={{ color: '#cbd5e1' }}>•</span>
                              <a href="https://linkedin.com/in/love-ghariwala-66477133a" target="_blank" className="font-semibold" style={{ color: '#2563eb' }}>LinkedIn</a>
                              <span style={{ color: '#cbd5e1' }}>•</span>
                              <a href="https://github.com/loveghariwala" target="_blank" className="font-semibold" style={{ color: '#2563eb' }}>GitHub</a>
                           </div>
                        </div>

                        {/* SUMMARY */}
                        <div className="mb-2.5">
                           <SectionTitle>Professional Summary</SectionTitle>
                           <p className="text-[10px] leading-[1.45]" style={{ color: '#334155' }}>
                              Results-driven Full Stack Developer with production experience building high-performance web applications using <b>JavaScript, TypeScript, Next.js, React.js, Node.js, Supabase, PostgreSQL, and MongoDB</b>. Skilled in RESTful API development, database architecture, responsive UI implementation, and <b>SEO optimization</b>. Consistently delivers clean, scalable code with a focus on performance, accessibility, and user experience.
                           </p>
                        </div>

                        {/* SKILLS */}
                        <div className="mb-2.5">
                           <SectionTitle>Technical Skills</SectionTitle>
                           <div className="flex flex-wrap gap-1">
                              {['JavaScript', 'TypeScript', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Supabase', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs', 'Git', 'GitHub', 'MERN Stack', 'Responsive Design', 'SEO', 'Framer Motion', 'Vercel'].map(s => (
                                 <span key={s} className="text-[7.5px] font-semibold px-2 py-0.5 rounded-full border" style={{ color: '#2563eb', borderColor: '#2563eb', backgroundColor: '#eff6ff' }}>{s}</span>
                              ))}
                           </div>
                        </div>

                        {/* EXPERIENCE */}
                        <div className="mb-2.5">
                           <SectionTitle>Work Experience</SectionTitle>

                           <div className="mb-2">
                              <div className="flex justify-between items-baseline">
                                 <h3 className="font-extrabold text-[11px]" style={{ color: '#0f172a' }}>Full Stack Developer Intern</h3>
                                 <span className="text-[8px] font-bold" style={{ color: '#2563eb' }}>SEP 2025 — PRESENT</span>
                              </div>
                              <p className="text-[8px]" style={{ color: '#64748b' }}>DivTech System · Surat, Gujarat, India</p>
                              <ul className="list-disc ml-4 mt-0.5 text-[9px] space-y-0.5" style={{ color: '#334155' }}>
                                 <li><b>Architected</b> and deployed 3+ production web apps using <b>Next.js, Supabase, TypeScript & PostgreSQL</b>, handling end-to-end development.</li>
                                 <li><b>Engineered</b> RESTful APIs and optimized complex database queries, ensuring seamless payment gateway integration.</li>
                                 <li><b>Implemented</b> SEO best practices including sitemap generation, meta tag optimization, and structured data.</li>
                              </ul>
                           </div>

                           <div className="mb-1">
                              <div className="flex justify-between items-baseline">
                                 <h3 className="font-extrabold text-[11px]" style={{ color: '#0f172a' }}>Web Development Intern</h3>
                                 <span className="text-[8px] font-bold" style={{ color: '#2563eb' }}>MAR 2025 — MAY 2025</span>
                              </div>
                              <p className="text-[8px]" style={{ color: '#64748b' }}>iTact Solutions · Surat, Gujarat, India</p>
                              <ul className="list-disc ml-4 mt-0.5 text-[9px]" style={{ color: '#334155' }}>
                                 <li><b>Developed</b> full-stack applications using the <b>MERN Stack</b> for internal and client-facing production projects.</li>
                                 <li><b>Collaborated</b> with cross-functional teams to deliver responsive, accessible web interfaces.</li>
                              </ul>
                           </div>
                        </div>

                        {/* PROJECTS */}
                        <div className="mb-2.5">
                           <SectionTitle>Key Projects</SectionTitle>
                           {DATA.projects.map((project: any, i: number) => (
                              <div key={i} className="mb-2 pb-1.5" style={{ borderBottom: i < DATA.projects.length - 1 ? '1px dashed #e2e8f0' : 'none' }}>
                                 <div className="flex justify-between items-baseline flex-wrap gap-x-2">
                                    <h3 className="font-extrabold text-[10px]" style={{ color: '#0f172a' }}>{project.title}</h3>
                                    <div className="flex items-center gap-1.5">
                                       <span className="text-[7px]" style={{ color: '#94a3b8' }}>{project.tags.join(' · ')}</span>
                                       {project.link && project.link !== '#' && (
                                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[7px] font-bold px-1.5 py-px rounded border" style={{ color: '#2563eb', borderColor: '#2563eb', textDecoration: 'none' }}>LIVE ↗</a>
                                       )}
                                    </div>
                                 </div>
                                 <p className="text-[9px] mt-0.5" style={{ color: '#475569' }}>{project.description}</p>
                                 {project.challenges?.length > 0 && (
                                    <p className="text-[8px] mt-0.5" style={{ color: '#64748b' }}><b style={{ color: '#334155' }}>Challenges:</b> {project.challenges.join('; ')}.</p>
                                 )}
                                 {project.impact && (
                                    <p className="text-[8px] mt-0.5" style={{ color: '#64748b' }}><b style={{ color: '#334155' }}>Impact:</b> {project.impact}</p>
                                 )}
                              </div>
                           ))}
                        </div>

                        {/* EDUCATION */}
                        <div>
                           <SectionTitle>Education</SectionTitle>
                           <div className="flex justify-between items-baseline">
                              <h3 className="font-extrabold text-[10px]" style={{ color: '#0f172a' }}>Bachelor of Technology in Computer Science & Engineering</h3>
                              <span className="text-[8px] font-bold" style={{ color: '#2563eb' }}>2021 — 2025</span>
                           </div>
                           <p className="text-[8px]" style={{ color: '#64748b' }}>Parul Institute of Technology · Vadodara, Gujarat · CGPA: 7.78</p>
                        </div>

                      </motion.div>
                   </div>
                </motion.div>
            </>
         )}
      </AnimatePresence>
   );
};
