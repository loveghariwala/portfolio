"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { DATA } from "@/constants/data";
import {
  Send,
  Mail,
  MapPin,
  Check,
  Copy,
  Loader2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText(DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative bg-[#07060c] bg-ambient-mesh"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS & AVAILABILITY (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-mono font-semibold uppercase tracking-wider mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>// COLLABORATE & CONNECT</span>
              </div>

              <h2
                id="contact-heading"
                className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4"
              >
                Let&apos;s build something <span className="title-gradient">exceptional.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {DATA.contact.description}
              </p>

              {/* Direct Email Card */}
              <div className="bento-card p-5 mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 block">DIRECT EMAIL</span>
                    <a
                      href={`mailto:${DATA.personal.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors truncate block"
                    >
                      {DATA.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & Timezone Card */}
              <div className="bento-card p-5 mb-8 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">BASED IN</span>
                  <p className="text-sm font-semibold text-white">
                    {DATA.personal.location} <span className="text-xs text-slate-400 font-normal font-mono">(IST / UTC+5:30)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Response Promise */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Typically replies within 24 hours. Open to remote roles & relocation.</span>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM (7 COLS) */}
          <div className="lg:col-span-7">
            <div className="bento-card p-8 sm:p-10 relative">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your details below and I will get back to you promptly.
              </p>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3 mb-6">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Your message has been received! I will review it and get in touch soon.</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-center gap-3 mb-6">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/60 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/60 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Project Details or Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or open role..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
