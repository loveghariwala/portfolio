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
   const resumeProjects = DATA.projects.slice(0, 3);

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
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
@page { size: A4; margin: 0; }
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Plus Jakarta Sans',sans-serif;color:#1e293b;background:#fff;font-size:7.6pt;line-height:1.35;-webkit-print-color-adjust:exact;print-color-adjust:exact;}

.page{max-width:210mm;margin:0 auto;padding:18px 24px 10px;}

/* HEADER */
.hdr{text-align:center;padding-bottom:8px;border-bottom:2px solid #4f46e5;margin-bottom:8px;}
.hdr h1{font-size:22pt;font-weight:800;color:#0f172a;letter-spacing:-1px;line-height:1;}
.hdr .subtitle{font-size:8.5pt;font-weight:700;color:#4f46e5;letter-spacing:1.5px;text-transform:uppercase;margin:3px 0 6px;}
.hdr .contact{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;font-size:7.2pt;color:#64748b;}
.hdr .contact a{color:#4f46e5;text-decoration:none;font-weight:600;}
.hdr .sep{color:#cbd5e1;}

/* SECTIONS */
.sec{margin-bottom:8px;}
.sec-title{font-size:8.2pt;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:#0f172a;border-bottom:1.2px solid #e2e8f0;padding-bottom:3.5px;margin-bottom:6px;display:block;}
.indicator{display:inline-block;width:3px;height:9px;background:#4f46e5;border-radius:1px;margin-right:6px;vertical-align:middle;margin-top:-2.5px;}

/* SKILLS CATEGORIZED */
.skills-grid{display:block;}
.skills-cat{font-size:7.6pt;color:#334155;margin-bottom:3px;line-height:1.35;}
.skills-cat b{color:#4f46e5;font-weight:700;}

/* EXPERIENCE */
.exp{margin-bottom:5px;}
.exp-co{font-size:7.2pt;color:#64748b;font-weight:500;margin-bottom:1px;}
.exp ul{margin-left:12px;margin-top:1px;}
.exp li{font-size:7.6pt;color:#334155;margin-bottom:1.5px;line-height:1.35;}
.exp li b{color:#0f172a;}
.exp li::marker{color:#4f46e5;}

/* PROJECTS */
.proj{margin-bottom:5px;padding-bottom:3px;}
.proj-desc{font-size:7.6pt;color:#475569;margin:2px 0;line-height:1.35;}
.proj-meta{font-size:6.8pt;color:#64748b;margin-top:1px;line-height:1.25;}
.proj-meta b{color:#334155;font-weight:700;}
.proj-link{font-size:6.2pt;color:#ffffff !important;background-color:#4f46e5 !important;font-weight:800;text-decoration:none;padding:2px 5px 3.5px;border-radius:3px;display:inline-block;line-height:1.2;vertical-align:middle;border:none !important;}

/* EDUCATION */
.edu-inst{font-size:7.2pt;color:#64748b;}

/* FOOTER */
.foot{margin-top:5px;padding-top:4px;border-top:1px solid #e2e8f0;text-align:center;font-size:5.8pt;color:#cbd5e1;letter-spacing:1px;text-transform:uppercase;}
</style>
</head>
<body>
<div class="page">
<div class="hdr">
   <h1>${DATA.personal.name}</h1>
   <div class="subtitle">Full Stack Developer — Next.js & FastAPI Specialist</div>
   <div class="contact">
      <span>${DATA.personal.email}</span><span class="sep">•</span>
      <span>${DATA.personal.location}</span><span class="sep">•</span>
      <span>8200834970</span><span class="sep">•</span>
      <a href="https://linkedin.com/in/love-ghariwala-66477133a">linkedin.com/in/love-ghariwala</a><span class="sep">•</span>
      <a href="https://github.com/loveghariwala">github.com/loveghariwala</a>
   </div>
</div>

<div class="sec">
   <div class="sec-title"><span class="indicator"></span>Professional Summary</div>
   <p style="font-size:7.6pt;color:#334155;line-height:1.35;">Results-driven Full Stack Developer with production experience building high-performance web applications using <b>JavaScript, TypeScript, Next.js, React.js, Node.js, FastAPI, Supabase, PostgreSQL, and MongoDB</b>. Skilled in RESTful API development, database architecture, responsive UI implementation, and <b>SEO optimization</b>. Consistently delivers clean, scalable code with a focus on performance, accessibility, and user experience.</p>
</div>

<div class="sec">
   <div class="sec-title"><span class="indicator"></span>Technical Skills</div>
   <div class="skills-grid">
      <div class="skills-cat"><b>Frontend:</b> Next.js, React.js, TypeScript, Tailwind CSS, Framer Motion, HTML5, CSS3</div>
      <div class="skills-cat"><b>Backend & APIs:</b> FastAPI, Node.js, Express.js, REST APIs</div>
      <div class="skills-cat"><b>Databases & DevOps:</b> MongoDB, PostgreSQL, Supabase, Git, GitHub, Vercel, SEO</div>
   </div>
</div>

<div class="sec">
   <div class="sec-title"><span class="indicator"></span>Work Experience</div>
   <div class="exp" style="margin-bottom: 6px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2px;">
         <tr>
            <td style="font-size: 8.8pt; font-weight: 800; color: #0f172a; text-align: left; padding: 0; vertical-align: middle;">Full Stack Developer Intern</td>
            <td style="font-size: 6.8pt; font-weight: 700; color: #4f46e5; text-align: right; padding: 0; white-space: nowrap; vertical-align: middle;">SEP 2025 — PRESENT</td>
         </tr>
      </table>
      <div class="exp-co">DivTech System · Surat, Gujarat, India</div>
      <ul style="margin-left: 12px; margin-top: 1px;">
         <li><b>Architected</b> and deployed 3+ production web applications using <b>Next.js, Supabase, TypeScript, and PostgreSQL</b>, handling end-to-end development from database schema design to UI implementation.</li>
         <li><b>Engineered</b> RESTful API endpoints and optimized complex database queries, reducing response times and ensuring seamless integration of payment gateways and real-time inventory systems.</li>
         <li><b>Implemented</b> SEO best practices including sitemap generation, meta tag optimization, and structured data, increasing organic search visibility across deployed projects.</li>
      </ul>
   </div>
   <div class="exp">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2px;">
         <tr>
            <td style="font-size: 8.8pt; font-weight: 800; color: #0f172a; text-align: left; padding: 0; vertical-align: middle;">Web Development Intern</td>
            <td style="font-size: 6.8pt; font-weight: 700; color: #4f46e5; text-align: right; padding: 0; white-space: nowrap; vertical-align: middle;">MAR 2025 — MAY 2025</td>
         </tr>
      </table>
      <div class="exp-co">iTact Solutions · Surat, Gujarat, India</div>
      <ul style="margin-left: 12px; margin-top: 1px;">
         <li><b>Developed</b> full-stack applications using the <b>MERN Stack</b> (MongoDB, Express.js, React.js, Node.js), contributing to internal and client-facing production projects.</li>
         <li><b>Collaborated</b> with cross-functional teams to deliver responsive, accessible web interfaces meeting business requirements.</li>
      </ul>
   </div>
</div>

<div class="sec">
   <div class="sec-title"><span class="indicator"></span>Key Projects</div>
   ${resumeProjects.map((p: any, idx: number) => `
   <div class="proj">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2px; table-layout: fixed;">
         <tr>
            <td style="width: 35%; font-size: 8.8pt; font-weight: 800; color: #0f172a; text-align: left; padding: 0; vertical-align: middle; white-space: nowrap;">${p.title}</td>
            <td style="width: 53%; text-align: right; padding: 0 8px 0 0; vertical-align: middle; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 6.5pt; color: #64748b; font-weight: 600;">
               ${p.tags.join(' · ')}
            </td>
            <td style="width: 12%; text-align: right; padding: 0; vertical-align: middle; white-space: nowrap;">
               ${p.link && p.link !== '#' ? `<a class="proj-link" href="${p.link}" target="_blank">LIVE ↗</a>` : ''}
            </td>
         </tr>
      </table>
      <div class="proj-desc">${p.description}</div>
      ${p.challenges?.length ? `<div class="proj-meta"><b>Challenges:</b> ${p.challenges.join('; ')}.</div>` : ''}
      ${p.impact ? `<div class="proj-meta"><b>Impact:</b> ${p.impact}</div>` : ''}
      ${idx < resumeProjects.length - 1 ? `<div style="height: 1px; border-top: 1px dashed #e2e8f0; margin: 6px 0; font-size: 1px; line-height: 1px;"></div>` : ''}
   </div>
   `).join('')}
</div>

<div class="sec">
   <div class="sec-title"><span class="indicator"></span>Education</div>
   <table style="width: 100%; border-collapse: collapse; margin-bottom: 2px;">
      <tr>
         <td style="font-size: 8.8pt; font-weight: 800; color: #0f172a; text-align: left; padding: 0; vertical-align: middle;">Bachelor of Technology in Computer Science & Engineering</td>
         <td style="font-size: 6.8pt; font-weight: 700; color: #4f46e5; text-align: right; padding: 0; white-space: nowrap; vertical-align: middle;">2021 — 2025</td>
      </tr>
   </table>
   <div class="edu-inst">Parul Institute of Technology · Vadodara, Gujarat, India · CGPA: 7.78</div>
</div>

<div class="foot">Generated from portfolio · Love Ghariwala</div>
</div>
</body>
</html>`;

   const handleDownload = async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      // Dynamically import html2pdf on the client side only to prevent Next.js SSR crashes
      const html2pdf = (await import('html2pdf.js')).default;

      const element = document.createElement('div');
      element.innerHTML = generateResumeHTML();

      const opt = {
         margin: 0,
         filename: `${DATA.personal.name}_Resume.pdf`,
         image: { type: 'jpeg' as const, quality: 0.98 },
         html2canvas: { scale: 2, useCORS: true },
         jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
      };

      // New way: Direct download
      html2pdf().from(element).set(opt).save();
   };

   // Reusable section title for preview
   const SectionTitle = ({ children }: { children: string }) => (
      <h2 className="text-[8.2px] font-extrabold uppercase tracking-[2px] pb-0.5 mb-1 flex items-center gap-1.5" style={{ color: '#0f172a', borderBottom: '1.2px solid #e2e8f0' }}>
         <span className="inline-block w-[3.0px] h-[10px] rounded-sm" style={{ backgroundColor: '#4f46e5' }} />
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
                        className="max-w-[850px] mx-auto bg-white shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] px-6 md:px-10 py-8 rounded-sm relative overflow-hidden"
                        style={{ fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif" }}
                     >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                        {/* HEADER */}
                        <div className="text-center pb-2 mb-2" style={{ borderBottom: '2.0px solid #4f46e5' }}>
                           <h1 className="text-2xl md:text-3xl font-black tracking-tight" style={{ lineHeight: 1, color: '#0f172a' }}>{DATA.personal.name}</h1>
                           <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[1.5px] mt-0.5" style={{ color: '#4f46e5' }}>Full Stack Developer — Next.js & FastAPI Specialist</p>
                           <div className="flex justify-center flex-wrap gap-1.5 mt-1.5 text-[8.5px]" style={{ color: '#64748b' }}>
                              <span>{DATA.personal.email}</span>
                              <span style={{ color: '#cbd5e1' }}>•</span>
                              <span>{DATA.personal.location}</span>
                              <span style={{ color: '#cbd5e1' }}>•</span>
                              <span>8200834970</span>
                              <span style={{ color: '#cbd5e1' }}>•</span>
                              <a href="https://linkedin.com/in/love-ghariwala-66477133a" target="_blank" className="font-semibold animate-pulse" style={{ color: '#4f46e5' }}>LinkedIn</a>
                              <span style={{ color: '#cbd5e1' }}>•</span>
                              <a href="https://github.com/loveghariwala" target="_blank" className="font-semibold animate-pulse" style={{ color: '#4f46e5' }}>GitHub</a>
                           </div>
                        </div>

                        {/* SUMMARY */}
                        <div className="mb-2">
                           <SectionTitle>Professional Summary</SectionTitle>
                           <p className="text-[8.5px] leading-[1.35]" style={{ color: '#334155' }}>
                              Results-driven Full Stack Developer with production experience building high-performance web applications using <b>JavaScript, TypeScript, Next.js, React.js, Node.js, FastAPI, Supabase, PostgreSQL, and MongoDB</b>. Skilled in RESTful API development, database architecture, responsive UI implementation, and <b>SEO optimization</b>. Consistently delivers clean, scalable code with a focus on performance, accessibility, and user experience.
                           </p>
                        </div>

                        {/* SKILLS */}
                        <div className="mb-2">
                           <SectionTitle>Technical Skills</SectionTitle>
                           <div className="grid grid-cols-1 gap-1 text-[8.5px] leading-[1.35]" style={{ color: '#334155' }}>
                              <div><b style={{ color: '#4f46e5' }}>Frontend:</b> Next.js, React.js, TypeScript, Tailwind CSS, Framer Motion, HTML5, CSS3</div>
                              <div><b style={{ color: '#4f46e5' }}>Backend & APIs:</b> FastAPI, Node.js, Express.js, REST APIs</div>
                              <div><b style={{ color: '#4f46e5' }}>Databases & DevOps:</b> MongoDB, PostgreSQL, Supabase, Git, GitHub, Vercel, SEO</div>
                           </div>
                        </div>

                        {/* EXPERIENCE */}
                        <div className="mb-2">
                           <SectionTitle>Work Experience</SectionTitle>

                           <div className="mb-1.5">
                              <div className="flex justify-between items-baseline">
                                 <h3 className="font-extrabold text-[9.5px]" style={{ color: '#0f172a' }}>Full Stack Developer Intern</h3>
                                 <span className="text-[7.5px] font-bold" style={{ color: '#4f46e5' }}>SEP 2025 — PRESENT</span>
                              </div>
                              <p className="text-[7.5px]" style={{ color: '#64748b' }}>DivTech System · Surat, Gujarat, India</p>
                              <ul className="list-disc ml-3.5 mt-0.5 text-[8.5px] space-y-0.5" style={{ color: '#334155' }}>
                                 <li><b>Architected</b> and deployed 3+ production web apps using <b>Next.js, Supabase, TypeScript & PostgreSQL</b>, handling end-to-end development.</li>
                                 <li><b>Engineered</b> RESTful APIs and optimized complex database queries, ensuring seamless payment gateway integration.</li>
                                 <li><b>Implemented</b> SEO best practices including sitemap generation, meta tag optimization, and structured data.</li>
                              </ul>
                           </div>

                           <div className="mb-1">
                              <div className="flex justify-between items-baseline">
                                 <h3 className="font-extrabold text-[9.5px]" style={{ color: '#0f172a' }}>Web Development Intern</h3>
                                 <span className="text-[7.5px] font-bold" style={{ color: '#4f46e5' }}>MAR 2025 — MAY 2025</span>
                              </div>
                              <p className="text-[7.5px]" style={{ color: '#64748b' }}>iTact Solutions · Surat, Gujarat, India</p>
                              <ul className="list-disc ml-3.5 mt-0.5 text-[8.5px]" style={{ color: '#334155' }}>
                                 <li><b>Developed</b> full-stack applications using the <b>MERN Stack</b> for internal and client-facing production projects.</li>
                                 <li><b>Collaborated</b> with cross-functional teams to deliver responsive, accessible web interfaces.</li>
                              </ul>
                           </div>
                        </div>

                        {/* PROJECTS */}
                        <div className="mb-2">
                           <SectionTitle>Key Projects</SectionTitle>
                           {resumeProjects.map((project: any, i: number) => (
                              <div key={i} className="mb-1.5 pb-1" style={{ borderBottom: i < resumeProjects.length - 1 ? '1px dashed #e2e8f0' : 'none' }}>
                                 <table className="w-full border-collapse mb-0.5" style={{ tableLayout: 'fixed' }}>
                                    <tbody>
                                       <tr>
                                          <td className="font-extrabold text-[9.5px]" style={{ width: '35%', color: '#0f172a', textAlign: 'left', padding: 0, verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
                                             {project.title}
                                          </td>
                                          <td className="text-[7px] font-semibold" style={{ width: '53%', color: '#64748b', textAlign: 'right', padding: '0 8px 0 0', verticalAlign: 'middle', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                             {project.tags.join(' · ')}
                                          </td>
                                          <td style={{ width: '12%', textAlign: 'right', padding: 0, verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
                                             {project.link && project.link !== '#' && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[6.2px] font-bold px-1.5 py-0.5 rounded text-white transition-colors inline-block align-middle" style={{ backgroundColor: '#4f46e5', textDecoration: 'none' }}>LIVE ↗</a>
                                             )}
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <p className="text-[8.5px] mt-0.5" style={{ color: '#475569' }}>{project.description}</p>
                                 {project.challenges?.length > 0 && (
                                    <p className="text-[7.5px] mt-0.5" style={{ color: '#64748b' }}><b style={{ color: '#334155' }}>Challenges:</b> {project.challenges.join('; ')}.</p>
                                 )}
                                 {project.impact && (
                                    <p className="text-[7.5px] mt-0.5" style={{ color: '#64748b' }}><b style={{ color: '#334155' }}>Impact:</b> {project.impact}</p>
                                 )}
                              </div>
                           ))}
                        </div>

                        {/* EDUCATION */}
                        <div>
                           <SectionTitle>Education</SectionTitle>
                           <div className="flex justify-between items-baseline">
                              <h3 className="font-extrabold text-[9.5px]" style={{ color: '#0f172a' }}>Bachelor of Technology in Computer Science & Engineering</h3>
                              <span className="text-[7.5px] font-bold" style={{ color: '#4f46e5' }}>2021 — 2025</span>
                           </div>
                           <p className="text-[7.5px]" style={{ color: '#64748b' }}>Parul Institute of Technology · Vadodara, Gujarat · CGPA: 7.78</p>
                        </div>

                     </motion.div>
                  </div>
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
};
