"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    company: "",
    timeline: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send message");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="pt-[100px] min-h-screen flex items-center justify-center px-10" aria-live="polite" aria-atomic="true">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8" aria-hidden="true" />
          </div>
          <h1 className="font-display font-bold text-4xl tracking-tight uppercase mb-6">
            Message Sent
          </h1>
          <p className="text-lg font-body text-white/60 leading-relaxed">
             Thank you for reaching out. We&apos;ll review your project details and
            get back to you within 24 hours.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-[100px]">
      <section aria-labelledby="contact-heading" className="py-16 md:py-24 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
                Contact
              </span>
              <h1 id="contact-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-[3.4rem] tracking-tighter uppercase leading-tight mb-6 md:mb-8">
                Start a<br />Conversation
              </h1>
              <p className="text-lg font-body text-white/60 leading-relaxed mb-8">
                We&apos;re selective about the projects we take on. This intake form
                helps us understand if we&apos;re a good fit before we schedule a
                call.
              </p>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">
                    Email
                  </span>
                  <a
                    href="mailto:hello@sliiqque.space"
                    className="text-base font-body text-white/80 hover:text-white transition-colors"
                  >
                    hello@sliiqque.space
                  </a>
                </div>
                <div>
                  <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-2">
                    Location
                  </span>
                  <span className="text-base font-body text-white/80">
                    Lagos, Nigeria · Working globally
                  </span>
                </div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-3">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm font-body text-white focus:border-white focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-3">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm font-body text-white focus:border-white focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-3">
                      Company / Project Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm font-body text-white focus:border-white focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="project-type" className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-3">
                      Project Type *
                    </label>
                    <select
                      id="project-type"
                      name="project"
                      required
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 px-4 py-3 text-sm font-body text-white focus:border-white focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none transition-colors"
                    >
                      <option value="">Select type</option>
                      <option value="website">Website Design & Development</option>
                      <option value="product-build">Product Build</option>
                      <option value="interface-engineering">
                        Interface Engineering
                      </option>
                      <option value="retainer">Studio Retainer</option>
                      <option value="audit">Technical Audit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-3">
                      Target Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 px-4 py-3 text-sm font-body text-white focus:border-white focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="less-than-4">Less than 4 weeks</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="exploratory">Exploratory</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-3">
                      Approximate Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 px-4 py-3 text-sm font-body text-white focus:border-white focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none transition-colors"
                    >
                      <option value="">Select budget</option>
                      <option value="5k-15k">$5k - $15k</option>
                      <option value="15k-40k">$15k - $40k</option>
                      <option value="40k-80k">$40k - $80k</option>
                      <option value="80k+">$80k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-3">
                    What Are You Building? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project: what you're building, who the users are, and what problem you're solving."
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm font-body text-white focus:border-white focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded" role="alert">
                    <p className="text-sm font-body text-red-400">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="group w-full md:w-auto px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
