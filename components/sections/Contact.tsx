"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import { Send, Mail, MapPin, Check, Loader2, AlertCircle } from "lucide-react";
import { gtaAudio } from "@/lib/gtaAudio";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        gtaAudio.playMissionPassed();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to deliver message.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative gta-vice-gradient-bg font-mono">
      <div className="absolute inset-0 vice-grid opacity-15 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* LEFT: CONTACT INFO (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#00f0ff] font-extrabold uppercase tracking-widest mb-2">
                <Mail size={16} className="text-[#ff007f]" />
                <span>// GET IN TOUCH</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white uppercase mb-4">
                LET&apos;S <span className="gta-vi-logo-text">CONNECT</span>
              </h2>
              <p className="text-xs text-slate-300 font-sans leading-relaxed mb-8">
                {DATA.contact.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="gta-card p-4 flex items-center gap-4 border-l-4 border-l-[#ff007f]">
                <div className="w-10 h-10 rounded-lg bg-[#ff007f]/20 border border-[#ff007f] flex items-center justify-center text-[#ff007f]">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase block">DIRECT EMAIL:</span>
                  <span className="text-xs text-white font-bold">{DATA.personal.email}</span>
                </div>
              </div>

              <div className="gta-card p-4 flex items-center gap-4 border-l-4 border-l-[#00f0ff]">
                <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/20 border border-[#00f0ff] flex items-center justify-center text-[#00f0ff]">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase block">LOCATION:</span>
                  <span className="text-xs text-white font-bold">{DATA.personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM (NODEMAILER INTEGRATED) (7 Cols) */}
          <div className="lg:col-span-7 gta-card rounded-3xl p-8">
            <div className="border-b border-white/10 pb-4 mb-6">
              <h3 className="text-xl font-black font-heading text-white uppercase">
                SEND A MESSAGE
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] text-slate-300 font-bold uppercase tracking-widest block mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3.5 bg-[#060212] border border-white/20 focus:border-[#00f0ff] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-300 font-bold uppercase tracking-widest block mb-2">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3.5 bg-[#060212] border border-white/20 focus:border-[#00f0ff] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-300 font-bold uppercase tracking-widest block mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project or message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3.5 bg-[#060212] border border-white/20 focus:border-[#00f0ff] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Status alerts */}
              {status === "error" && (
                <div className="p-3 bg-red-950/50 border border-red-500/50 rounded-xl flex items-center justify-between gap-3 text-xs text-red-200">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={16} className="text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                  <a
                    href={`mailto:${DATA.personal.email}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                    className="underline text-[#00f0ff] text-[10px] font-bold uppercase shrink-0"
                  >
                    Open Mail App
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff007f] via-[#ff6b00] to-[#00f0ff] hover:brightness-110 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin text-white" />
                    <span>TRANSMITTING VIA NODEMAILER...</span>
                  </>
                ) : status === "success" ? (
                  <>
                    <Check size={18} className="text-[#55ff55]" />
                    <span>MESSAGE TRANSMITTED TO LOVE!</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </Container>
    </section>
  );
};

