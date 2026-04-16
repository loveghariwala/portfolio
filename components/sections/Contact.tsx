"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { DATA } from "@/constants/data";
import { Send, Mail, MapPin, ArrowUpRight, CheckCircle2, Sparkles, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { cn } from "@/lib/utils";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

export const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setIsSubmitted(true);
          resetForm();
          // Reset success state after 10 seconds
          setTimeout(() => setIsSubmitted(false), 10000);
        } else {
          const data = await response.json();
          alert(data.error || "Failed to send message. Please try again later.");
        }
      } catch (err) {
        console.error("Submission error:", err);
        alert("An error occurred. Please check your connection and try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-primary/5 blur-[150px] rounded-full translate-x-1/2 -rotate-12 pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[40%] h-[80%] bg-accent/5 blur-[120px] rounded-full -translate-x-1/2 rotate-12 pointer-events-none" />
         <div className="absolute inset-0 dot-grid opacity-[0.15] mix-blend-overlay" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: CTA & INFO */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-glow">
                    <MessageSquare size={20} />
                 </div>
                 <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase font-mono">Get in Touch</span>
              </div>
              <Heading size="xl" className="leading-[0.95] mb-8">
                Ready to make <br />
                <span className="gradient-text">history?</span>
              </Heading>
              <p className="text-xl text-secondary max-w-md font-medium leading-relaxed">
                {DATA.contact.description} I’m currently available for selective freelance opportunities and leadership roles.
              </p>
            </div>

            <div className="space-y-4">
               {/* Contact Cards */}
               <motion.a 
                 href={`mailto:${DATA.personal.email}`}
                 whileHover={{ x: 10 }}
                 className="flex items-center gap-6 p-6 rounded-[2.5rem] glass-card border-white/5 hover:border-primary/20 transition-all duration-500 group"
               >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-glow">
                     <Mail size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Send an Email</p>
                     <p className="text-xl font-bold font-heading">{DATA.personal.email}</p>
                  </div>
                  <ArrowUpRight size={20} className="ml-auto text-secondary/30 group-hover:text-primary transition-colors" />
               </motion.a>

               <motion.div 
                 whileHover={{ x: 10 }}
                 className="flex items-center gap-6 p-6 rounded-[2.5rem] glass-card border-white/5 transition-all duration-500 group"
               >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-glow">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Base Location</p>
                     <p className="text-xl font-bold font-heading">{DATA.personal.location}</p>
                  </div>
               </motion.div>

               <div className="pt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary/30">Connect</span>
               </div>
               
               <div className="flex gap-3">
                  {DATA.social.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="flex-1 py-4 rounded-2xl glass border border-white/5 text-center text-xs font-black uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all duration-300"
                    >
                      {item.name}
                    </motion.a>
                  ))}
               </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7 relative">
             {/* Decorative Frame */}
             <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[4rem] blur-[30px] opacity-20" />
             
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative glass-card p-8 md:p-16 rounded-[4rem] border border-white/10 shadow-3xl min-h-[600px] flex flex-col justify-center"
             >
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center space-y-8 py-12"
                    >
                      <div className="relative inline-block">
                         <motion.div 
                           animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                           transition={{ repeat: Infinity, duration: 4 }}
                           className="w-32 h-32 rounded-full border-2 border-dashed border-emerald-500/30" 
                         />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                               <CheckCircle2 size={40} />
                            </div>
                         </div>
                      </div>
                      <div>
                        <h3 className="text-4xl font-black font-heading tracking-tight mb-4">Transmission Received!</h3>
                        <p className="text-xl text-secondary max-w-sm mx-auto font-medium">
                          Thanks for reaching out! I've received your message and will respond within 24 hours.
                        </p>
                      </div>
                      <Button variant="ghost" className="h-14 px-10 rounded-2xl hover:bg-primary/5 border border-border/50" onClick={() => setIsSubmitted(false)}>
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onSubmit={formik.handleSubmit} 
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name Field */}
                        <div className="relative group">
                          <motion.label 
                            animate={{ 
                              top: focusedField === 'name' || formik.values.name ? -12 : 24,
                              scale: focusedField === 'name' || formik.values.name ? 0.8 : 1,
                              color: focusedField === 'name' ? "#7c3aed" : "#94a3b8"
                            }}
                            className="absolute left-0 pointer-events-none font-bold uppercase tracking-widest origin-left z-10"
                          >
                            Name <span className="text-red-500">*</span>
                          </motion.label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="off"
                            onChange={formik.handleChange}
                            onBlur={(e) => { formik.handleBlur(e); setFocusedField(null); }}
                            onFocus={() => setFocusedField('name')}
                            value={formik.values.name}
                            className={cn(
                              "w-full bg-transparent border-b-2 py-6 outline-none transition-all duration-500 font-bold text-xl",
                              formik.touched.name && formik.errors.name ? "border-red-500/50" : focusedField === 'name' ? "border-primary" : "border-border/50"
                            )}
                          />
                          {formik.touched.name && formik.errors.name && (
                            <p className="text-[10px] text-red-500 mt-2 font-black uppercase tracking-widest">{formik.errors.name}</p>
                          )}
                        </div>

                        {/* Email Field */}
                        <div className="relative group">
                          <motion.label 
                            animate={{ 
                              top: focusedField === 'email' || formik.values.email ? -12 : 24,
                              scale: focusedField === 'email' || formik.values.email ? 0.8 : 1,
                              color: focusedField === 'email' ? "#7c3aed" : "#94a3b8"
                            }}
                            className="absolute left-0 pointer-events-none font-bold uppercase tracking-widest origin-left z-10"
                          >
                            Email <span className="text-red-500">*</span>
                          </motion.label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="off"
                            onChange={formik.handleChange}
                            onBlur={(e) => { formik.handleBlur(e); setFocusedField(null); }}
                            onFocus={() => setFocusedField('email')}
                            value={formik.values.email}
                            className={cn(
                              "w-full bg-transparent border-b-2 py-6 outline-none transition-all duration-500 font-bold text-xl",
                              formik.touched.email && formik.errors.email ? "border-red-500/50" : focusedField === 'email' ? "border-primary" : "border-border/50"
                            )}
                          />
                          {formik.touched.email && formik.errors.email && (
                            <p className="text-[10px] text-red-500 mt-2 font-black uppercase tracking-widest">{formik.errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="relative group">
                        <motion.label 
                          animate={{ 
                            top: focusedField === 'subject' || formik.values.subject ? -12 : 24,
                            scale: focusedField === 'subject' || formik.values.subject ? 0.8 : 1,
                            color: focusedField === 'subject' ? "#7c3aed" : "#94a3b8"
                          }}
                          className="absolute left-0 pointer-events-none font-bold uppercase tracking-widest origin-left z-10"
                        >
                          Subject <span className="text-red-500">*</span>
                        </motion.label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          autoComplete="off"
                          onChange={formik.handleChange}
                          onBlur={(e) => { formik.handleBlur(e); setFocusedField(null); }}
                          onFocus={() => setFocusedField('subject')}
                          value={formik.values.subject}
                          className={cn(
                            "w-full bg-transparent border-b-2 py-6 outline-none transition-all duration-500 font-bold text-xl",
                            formik.touched.subject && formik.errors.subject ? "border-red-500/50" : focusedField === 'subject' ? "border-primary" : "border-border/50"
                          )}
                        />
                        {formik.touched.subject && formik.errors.subject && (
                          <p className="text-[10px] text-red-500 mt-2 font-black uppercase tracking-widest">{formik.errors.subject}</p>
                        )}
                      </div>

                      <div className="relative group">
                        <motion.label 
                          animate={{ 
                            top: focusedField === 'message' || formik.values.message ? -12 : 24,
                            scale: focusedField === 'message' || formik.values.message ? 0.8 : 1,
                            color: focusedField === 'message' ? "#7c3aed" : "#94a3b8"
                          }}
                          className="absolute left-0 pointer-events-none font-bold uppercase tracking-widest origin-left z-10"
                        >
                          Message <span className="text-red-500">*</span>
                        </motion.label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          onChange={formik.handleChange}
                          onBlur={(e) => { formik.handleBlur(e); setFocusedField(null); }}
                          onFocus={() => setFocusedField('message')}
                          value={formik.values.message}
                          className={cn(
                            "w-full bg-transparent border-b-2 py-6 outline-none transition-all duration-500 font-bold text-xl resize-none",
                            formik.touched.message && formik.errors.message ? "border-red-500/50" : focusedField === 'message' ? "border-primary" : "border-border/50"
                          )}
                        />
                        {formik.touched.message && formik.errors.message && (
                          <p className="text-[10px] text-red-500 mt-2 font-black uppercase tracking-widest">{formik.errors.message}</p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-20 rounded-[2rem] text-xl font-black gap-4 group shadow-glow active:scale-95 transition-all"
                        disabled={formik.isSubmitting}
                      >
                        {formik.isSubmitting ? "Transmitting..." : "Send Message"}
                        <Send size={24} className={cn("transition-transform duration-500", formik.isSubmitting ? "opacity-50" : "group-hover:translate-x-2 group-hover:-translate-y-2")} />
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
             </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
