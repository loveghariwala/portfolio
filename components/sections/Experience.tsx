"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import { Briefcase, Calendar, Building2, GraduationCap } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative gta-vice-gradient-bg font-mono">
      <div className="absolute inset-0 vice-grid opacity-15 pointer-events-none" />
      
      <Container className="relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#00f0ff] font-extrabold uppercase tracking-widest mb-2">
              <Briefcase size={16} className="text-[#ff007f]" />
              <span>// CAREER TRACK RECORD</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white uppercase">
              WORK <span className="gta-vi-logo-text">EXPERIENCE</span>
            </h2>
          </div>
          <p className="text-xs text-slate-300 max-w-md font-sans leading-relaxed">
            Professional background and software development roles.
          </p>
        </div>

        {/* TIMELINE LIST */}
        <div className="relative space-y-8 border-l-2 border-[#ff007f]/40 pl-6 md:pl-8 ml-2">
          {DATA.experience.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] md:-left-[39px] top-6 w-4 h-4 rounded-full bg-[#ff007f] border-2 border-white shadow-[0_0_10px_#ff007f]" />

              <div className="gta-card p-6 md:p-8 relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] text-[#00f0ff] font-extrabold uppercase tracking-widest block mb-1">
                      RECORD 0{idx + 1}
                    </span>
                    <h3 className="text-2xl font-black font-heading text-white uppercase">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-bold mt-1">
                      <Building2 size={14} className="text-[#ff007f]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 bg-[#080314] border border-[#ff007f]/40 text-[#ffcc00] text-xs font-extrabold uppercase rounded-lg flex items-center gap-2">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EDUCATION SECTION */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-[#00f0ff] font-extrabold uppercase tracking-widest mb-6">
            <GraduationCap size={18} className="text-[#ffcc00]" />
            <span>// ACADEMIC EDUCATION</span>
          </div>

          {DATA.education.map((edu) => (
            <div
              key={edu.institution}
              className="gta-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <span className="text-[10px] text-[#00f0ff] font-extrabold uppercase tracking-widest block mb-1">
                  DEGREE // {edu.period}
                </span>
                <h3 className="text-2xl font-black font-heading text-white uppercase">
                  {edu.degree}
                </h3>
                <span className="text-xs text-slate-300 font-bold block mt-1">
                  {edu.institution}
                </span>
              </div>

              <div className="px-4 py-2 bg-[#080314] border border-[#55ff55]/40 text-[#55ff55] text-xs font-black uppercase rounded-lg">
                CGPA: {edu.cgpa} / 10.0
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
