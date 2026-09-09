"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import {
  Briefcase,
  Calendar,
  Building2,
  GraduationCap,
  CheckCircle2,
  Award,
  Globe,
  Trophy,
  Sparkles,
} from "lucide-react";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative bg-[#07060c] bg-ambient-mesh"
      aria-labelledby="experience-heading"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 max-w-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-mono font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>// CAREER & MILESTONES</span>
            </div>
            <h2
              id="experience-heading"
              className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight"
            >
              Work Experience & <span className="title-gradient">Credentials</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Production engineering roles, verified certifications, and core milestones.
            </p>
          </div>
        </div>

        {/* TIMELINE LIST */}
        <div className="relative space-y-8 border-l-2 border-purple-500/30 pl-6 sm:pl-10 ml-3 sm:ml-4 mb-16">
          {/* EXPERIENCE ITEMS */}
          {DATA.experience.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-purple-600 border-2 border-black shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

              <div className="bento-card p-6 sm:p-8 relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-300">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 mb-3">{exp.location}</div>

                {exp.bullets ? (
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-3 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {/* EDUCATION ITEM */}
          {DATA.education.map((edu, idx) => (
            <motion.div
              key={`${edu.institution}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot (Cyan) */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-cyan-500 border-2 border-black shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

              <div className="bento-card bento-card-cyan p-6 sm:p-8 relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                        {edu.institution}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                    CGPA: <strong className="text-cyan-400">{edu.cgpa}</strong>
                  </span>
                  <span className="text-slate-400">{edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXTRA CREDENTIALS ROW: CERTIFICATIONS, ACHIEVEMENTS & LANGUAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Certifications Card */}
          <div className="bento-card p-6">
            <div className="flex items-center gap-2.5 mb-4 text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </div>
            <div className="space-y-3">
              {DATA.certifications.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-sm font-bold text-white leading-snug">{cert.name}</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">{cert.issuer} — {cert.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievement Card */}
          <div className="bento-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-4 h-4" />
                <span>Milestone Milestone</span>
              </div>
              <div className="p-4 rounded-xl bg-amber-500/[0.08] border border-amber-500/20">
                <p className="text-xs sm:text-sm text-amber-200 leading-relaxed font-medium">
                  {DATA.achievements[0]?.description}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Production Traffic Milestone</span>
            </div>
          </div>

          {/* Languages Card */}
          <div className="bento-card p-6">
            <div className="flex items-center gap-2.5 mb-4 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>Languages</span>
            </div>
            <div className="space-y-3">
              {DATA.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <div>
                    <span className="font-bold text-white block">{lang.name}</span>
                    <span className="text-slate-400 text-[11px]">{lang.level}</span>
                  </div>
                  <span className="font-mono text-cyan-400 text-xs tracking-widest">
                    {"●".repeat(lang.rating || 5)}{"○".repeat(5 - (lang.rating || 5))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
