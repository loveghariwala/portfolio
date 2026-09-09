"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Download, Award, Globe, ExternalLink, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { DATA } from "@/constants/data";
import { useState, useRef, useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [activePage, setActivePage] = useState<1 | 2>(1);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const generateResumeHTML = () => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${DATA.personal.name} - Resume</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@page { size: A4; margin: 0; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1f2937;
  background: #ffffff;
  font-size: 8pt;
  line-height: 1.35;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.page {
  width: 210mm;
  min-height: 297mm;
  padding: 18mm 18mm 14mm;
  margin: 0 auto;
  position: relative;
  background: #ffffff;
}

.page-break {
  page-break-after: always;
}

/* HEADER */
.header {
  border-bottom: 1.5px solid #2563eb;
  padding-bottom: 12px;
  margin-bottom: 14px;
}
.header h1 {
  font-size: 24pt;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  line-height: 1;
}
.header .role {
  font-size: 11pt;
  font-weight: 600;
  color: #2563eb;
  margin-top: 4px;
  margin-bottom: 8px;
}
.header .info-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  font-size: 7.5pt;
  color: #4b5563;
  margin-bottom: 3px;
}
.header .info-row span b {
  color: #111827;
  font-weight: 600;
}
.header .info-row a {
  color: #2563eb;
  text-decoration: none;
}

/* 2-COLUMN LAYOUT */
.columns {
  display: flex;
  gap: 20px;
}
.col-left {
  flex: 1.45;
  min-width: 0;
}
.col-right {
  flex: 1;
  min-width: 0;
}

/* SECTION TITLES */
.sec-title {
  font-size: 9.5pt;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #111827;
  border-bottom: 1.5px solid #2563eb;
  padding-bottom: 4px;
  margin-bottom: 10px;
}

/* EXPERIENCE & EDUCATION */
.item-block {
  margin-bottom: 12px;
}
.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2px;
}
.item-title {
  font-size: 9pt;
  font-weight: 700;
  color: #111827;
}
.item-title span {
  color: #2563eb;
  font-weight: 600;
}
.item-meta {
  font-size: 7.5pt;
  font-weight: 600;
  color: #2563eb;
  background: #eff6ff;
  padding: 1px 6px;
  border-radius: 4px;
  white-space: nowrap;
}
.item-sub {
  font-size: 7.5pt;
  color: #6b7280;
  margin-bottom: 4px;
}
.item-bullets {
  padding-left: 14px;
  margin-top: 3px;
}
.item-bullets li {
  font-size: 7.5pt;
  color: #374151;
  margin-bottom: 3px;
  line-height: 1.35;
}
.item-bullets li b {
  color: #111827;
}

/* SKILLS PILLS */
.skill-category {
  margin-bottom: 9px;
}
.skill-category-title {
  font-size: 7.5pt;
  font-weight: 700;
  text-transform: uppercase;
  color: #374151;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}
.pill-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.pill {
  font-size: 6.8pt;
  font-weight: 500;
  color: #1e293b;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
}

/* PROJECT CARDS */
.project-block {
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #e2e8f0;
}
.project-block:last-child {
  border-bottom: none;
}
.project-title {
  font-size: 9.5pt;
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
}
.project-title a {
  font-size: 7pt;
  font-weight: 600;
  color: #2563eb;
  text-decoration: none;
}
.project-sub {
  font-size: 7.5pt;
  color: #64748b;
  margin-bottom: 5px;
}

/* ACHIEVEMENTS BOX */
.achievement-box {
  background: #fefce8;
  border: 1px solid #fef08a;
  border-left: 3px solid #eab308;
  padding: 8px 10px;
  border-radius: 6px;
  margin-top: 12px;
}
.achievement-box p {
  font-size: 7.5pt;
  color: #854d0e;
  line-height: 1.35;
}

/* LANGUAGES LIST */
.lang-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 7.5pt;
  margin-bottom: 4px;
  color: #374151;
}
.lang-dots {
  color: #2563eb;
  letter-spacing: 2px;
}
</style>
</head>
<body>

<!-- PAGE 1 -->
<div class="page page-break">
  <div class="header">
    <h1>${DATA.personal.name}</h1>
    <div class="role">${DATA.personal.role}</div>
    <div class="info-row">
      <span><b>EMAIL:</b> <a href="mailto:${DATA.personal.email}">${DATA.personal.email}</a></span>
      <span><b>PHONE:</b> ${DATA.personal.phone || "+91 8200834970"}</span>
      <span><b>LOCATION:</b> ${DATA.personal.location}</span>
    </div>
    <div class="info-row">
      <span><b>PORTFOLIO:</b> <a href="https://${DATA.personal.portfolio}">${DATA.personal.portfolio}</a></span>
      <span><b>LINKEDIN:</b> <a href="https://linkedin.com/in/loveghariwala">linkedin.com/in/loveghariwala</a></span>
      <span><b>GITHUB:</b> <a href="https://github.com/loveghariwala">github.com/loveghariwala</a></span>
    </div>
  </div>

  <div class="columns">
    <!-- LEFT COLUMN -->
    <div class="col-left">
      <div class="sec-title">Professional Experience</div>
      ${DATA.experience.map(exp => `
        <div class="item-block">
          <div class="item-header">
            <div class="item-title">${exp.role} <span>— ${exp.company}</span></div>
            <div class="item-meta">${exp.period}</div>
          </div>
          <div class="item-sub">${exp.location || "Surat, Gujarat, India"}</div>
          <ul class="item-bullets">
            ${exp.bullets?.map(bullet => `<li>${bullet}</li>`).join('') || `<li>${exp.description}</li>`}
          </ul>
        </div>
      `).join('')}

      <div class="sec-title" style="margin-top: 14px;">Education</div>
      ${DATA.education.map(edu => `
        <div class="item-block">
          <div class="item-title">${edu.degree}</div>
          <div class="item-sub">${edu.institution}, ${edu.location}</div>
          <div style="font-size: 7.5pt; color: #4b5563; margin-top: 2px;">
            <b>${edu.period}</b> &nbsp;|&nbsp; <b>CGPA: ${edu.cgpa}</b>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- RIGHT COLUMN -->
    <div class="col-right">
      <div class="sec-title">Professional Summary</div>
      <p style="font-size: 7.5pt; color: #374151; line-height: 1.4; margin-bottom: 14px;">
        ${DATA.personal.bio}
      </p>

      <div class="sec-title">Technical Skills</div>
      ${DATA.skills.map(cat => `
        <div class="skill-category">
          <div class="skill-category-title">${cat.category}</div>
          <div class="pill-wrap">
            ${cat.items.map(skill => `<span class="pill">${skill}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</div>

<!-- PAGE 2 -->
<div class="page">
  <div class="columns">
    <!-- LEFT COLUMN: PROJECTS -->
    <div class="col-left">
      <div class="sec-title">Key Projects</div>
      ${DATA.projects.slice(0, 3).map(proj => `
        <div class="project-block">
          <div class="project-title">
            <span>${proj.title} <span style="font-size: 7.5pt; color: #6b7280; font-weight: 500;">— ${proj.subtitle || ""}</span></span>
            ${proj.link ? `<a href="${proj.link}" target="_blank">${proj.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} ↗</a>` : ''}
          </div>
          <div class="pill-wrap" style="margin-bottom: 6px;">
            ${proj.tags.map(t => `<span class="pill" style="font-size: 6.5pt;">${t}</span>`).join('')}
          </div>
          <ul class="item-bullets">
            ${proj.bullets?.map(b => `<li>${b}</li>`).join('') || `<li>${proj.description}</li>`}
          </ul>
        </div>
      `).join('')}
    </div>

    <!-- RIGHT COLUMN: CERTIFICATIONS, LANGUAGES, ACHIEVEMENTS -->
    <div class="col-right">
      <div class="sec-title">Certifications</div>
      ${DATA.certifications.map(cert => `
        <div style="margin-bottom: 8px;">
          <div style="font-size: 8pt; font-weight: 700; color: #111827;">${cert.name}</div>
          <div style="font-size: 7.5pt; color: #6b7280;">${cert.issuer} — ${cert.year}</div>
        </div>
      `).join('')}

      <div class="sec-title" style="margin-top: 16px;">Languages</div>
      ${DATA.languages.map(lang => `
        <div class="lang-row">
          <span><b>${lang.name}</b> <span style="color: #6b7280;">${lang.level}</span></span>
          <span class="lang-dots">${"●".repeat(lang.rating || 5)}${"○".repeat(5 - (lang.rating || 5))}</span>
        </div>
      `).join('')}

      <div class="sec-title" style="margin-top: 16px;">Key Achievements</div>
      <div class="achievement-box">
        <p>🏆 <b>Surpassed 100,000 pageviews</b> on neocinematv.com in a single month on Cloudflare — a first-time milestone for the domain.</p>
      </div>
    </div>
  </div>
</div>

</body>
</html>`;

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.createElement("div");
    element.innerHTML = generateResumeHTML();

    const opt = {
      margin: 0,
      filename: `Love_Ghariwala_Resume.pdf`,
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm" as const, format: "a4" as const, orientation: "portrait" as const },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200] cursor-zoom-out"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-2 sm:inset-4 md:inset-6 lg:inset-x-20 xl:inset-x-40 bg-[#0e0c1a] text-slate-100 z-[201] rounded-[2rem] overflow-hidden shadow-3xl flex flex-col pointer-events-auto border border-white/15"
          >
            {/* TOP ACTION BAR */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#120f24] border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
                    Official Resume
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    Love Ghariwala — Full Stack Developer
                  </h3>
                </div>
              </div>

              {/* Page Switcher Tabs */}
              <div className="hidden sm:flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setActivePage(1)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    activePage === 1 ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Page 1 (Experience & Skills)
                </button>
                <button
                  onClick={() => setActivePage(2)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    activePage === 2 ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Page 2 (Projects & Achievements)
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={handleDownload}
                  className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                  aria-label="Close Resume Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PREVIEW CONTAINER */}
            <div className="flex-1 overflow-y-auto bg-[#070510] p-4 sm:p-8 flex justify-center" ref={resumeRef}>
              <div className="w-full max-w-[850px] space-y-8">
                
                {/* PAGE 1 PREVIEW */}
                <div
                  className={`bg-white text-slate-800 p-8 sm:p-12 rounded-xl shadow-2xl font-sans relative ${
                    activePage === 2 ? "hidden sm:block" : "block"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {/* Header */}
                  <div className="border-b-2 border-blue-600 pb-3 mb-5">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                      {DATA.personal.name}
                    </h1>
                    <div className="text-sm font-semibold text-blue-600 mt-1 mb-2">
                      {DATA.personal.role}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                      <span><strong className="text-slate-900">EMAIL:</strong> {DATA.personal.email}</span>
                      <span><strong className="text-slate-900">PHONE:</strong> {DATA.personal.phone}</span>
                      <span><strong className="text-slate-900">LOCATION:</strong> {DATA.personal.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-blue-600 mt-1">
                      <span><strong className="text-slate-900">PORTFOLIO:</strong> {DATA.personal.portfolio}</span>
                      <a href="https://linkedin.com/in/loveghariwala" target="_blank" rel="noopener noreferrer">linkedin.com/in/loveghariwala</a>
                      <a href="https://github.com/loveghariwala" target="_blank" rel="noopener noreferrer">github.com/loveghariwala</a>
                    </div>
                  </div>

                  {/* 2-Column Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left Column (7 cols) */}
                    <div className="md:col-span-7">
                      <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-blue-600 pb-1 mb-3">
                        Professional Experience
                      </h2>
                      <div className="space-y-4">
                        {DATA.experience.map((exp, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between items-baseline gap-2">
                              <h3 className="text-xs font-bold text-slate-900">
                                {exp.role} <span className="text-blue-600 font-semibold">— {exp.company}</span>
                              </h3>
                              <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded shrink-0">
                                {exp.period}
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-500">{exp.location}</div>
                            <ul className="list-disc pl-4 text-[11px] text-slate-700 space-y-1 leading-snug">
                              {exp.bullets?.map((b, bIdx) => (
                                <li key={bIdx}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-blue-600 pb-1 mb-3 mt-6">
                        Education
                      </h2>
                      {DATA.education.map((edu, idx) => (
                        <div key={idx} className="space-y-1">
                          <h3 className="text-xs font-bold text-slate-900">{edu.degree}</h3>
                          <div className="text-[11px] text-slate-600">{edu.institution}, {edu.location}</div>
                          <div className="text-[10px] text-slate-600">
                            <strong>{edu.period}</strong> &nbsp;|&nbsp; <strong>CGPA: {edu.cgpa}</strong>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right Column (5 cols) */}
                    <div className="md:col-span-5">
                      <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-blue-600 pb-1 mb-3">
                        Professional Summary
                      </h2>
                      <p className="text-[11px] text-slate-700 leading-relaxed mb-6">
                        {DATA.personal.bio}
                      </p>

                      <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-blue-600 pb-1 mb-3">
                        Technical Skills
                      </h2>
                      <div className="space-y-3">
                        {DATA.skills.map((cat, idx) => (
                          <div key={idx}>
                            <div className="text-[10px] font-bold uppercase text-slate-700 tracking-wider mb-1">
                              {cat.category}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {cat.items.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-2 border-t border-slate-100 flex justify-between text-[9px] text-slate-400 font-mono">
                    <span>Love Ghariwala — Resume</span>
                    <span>Page 1 of 2</span>
                  </div>
                </div>

                {/* PAGE 2 PREVIEW */}
                <div
                  className={`bg-white text-slate-800 p-8 sm:p-12 rounded-xl shadow-2xl font-sans relative ${
                    activePage === 1 ? "hidden sm:block" : "block"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left Column (7 cols): Projects */}
                    <div className="md:col-span-7">
                      <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-blue-600 pb-1 mb-3">
                        Key Projects
                      </h2>
                      <div className="space-y-5">
                        {DATA.projects.slice(0, 3).map((proj, idx) => (
                          <div key={idx} className="space-y-1.5 pb-4 border-b border-slate-100 last:border-0">
                            <div className="flex justify-between items-baseline gap-2">
                              <h3 className="text-xs font-bold text-slate-900">
                                {proj.title} <span className="text-slate-500 font-normal">— {proj.subtitle}</span>
                              </h3>
                              {proj.link && (
                                <a
                                  href={proj.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] font-semibold text-blue-600 hover:underline"
                                >
                                  {proj.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} ↗
                                </a>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {proj.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[9px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <ul className="list-disc pl-4 text-[11px] text-slate-700 space-y-1 leading-snug">
                              {proj.bullets?.map((bullet, bIdx) => (
                                <li key={bIdx}>{bullet}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column (5 cols): Certs, Languages, Achievements */}
                    <div className="md:col-span-5 space-y-6">
                      <div>
                        <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-blue-600 pb-1 mb-3">
                          Certifications
                        </h2>
                        <div className="space-y-2.5">
                          {DATA.certifications.map((cert, idx) => (
                            <div key={idx} className="text-[11px]">
                              <div className="font-bold text-slate-900">{cert.name}</div>
                              <div className="text-slate-500 text-[10px]">{cert.issuer} — {cert.year}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-blue-600 pb-1 mb-3">
                          Languages
                        </h2>
                        <div className="space-y-1.5 text-[11px]">
                          {DATA.languages.map((lang, idx) => (
                            <div key={idx} className="flex justify-between items-center text-slate-700">
                              <span><strong>{lang.name}</strong> <span className="text-slate-500 font-normal">{lang.level}</span></span>
                              <span className="text-blue-600 font-mono tracking-widest text-[9px]">
                                {"●".repeat(lang.rating || 5)}{"○".repeat(5 - (lang.rating || 5))}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-blue-600 pb-1 mb-3">
                          Key Achievements
                        </h2>
                        <div className="p-3 bg-amber-50 border border-amber-200 border-l-4 border-l-amber-500 rounded-lg text-[11px] text-amber-900 leading-relaxed">
                          🏆 <strong>Surpassed 100,000 pageviews</strong> on neocinematv.com in a single month on Cloudflare — a first-time milestone for the domain.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-2 border-t border-slate-100 flex justify-between text-[9px] text-slate-400 font-mono">
                    <span>Love Ghariwala — Resume</span>
                    <span>Page 2 of 2</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
