import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ onTriggerToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onTriggerToast) {
      onTriggerToast(`Copied ${fieldName} to clipboard!`);
    }
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      if (onTriggerToast) onTriggerToast("Please fill in your name, email, and message.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
      if (onTriggerToast) {
        onTriggerToast("Message sent successfully! Kusal will get back to you promptly.");
      }
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <MessageSquare size={13} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Kusal</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Have an exciting project, internship opportunity, or want to collaborate with Kubi Forge? Reach out directly via WhatsApp, email, or through the contact form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Fast Action Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* WhatsApp Quick Direct Card */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-500/30 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Instant Chat
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    WhatsApp Message
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    +94 78 799 6831 (0787996831)
                  </div>
                </div>
              </div>
              <ExternalLink size={18} className="text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Email Card with Copy button */}
            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Replies usually within 24 hours
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'Email')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-300 transition-colors"
                title="Copy Email Address"
              >
                {copiedField === 'Email' ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                    Professional Network
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    LinkedIn Profile
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Connect for collaborations & career
                  </div>
                </div>
              </div>
              <ExternalLink size={18} className="text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Location & Timezone info */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-rose-400" />
                <span>Sri Lanka (UTC+05:30)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-emerald-400" />
                <span>Active & Online</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Send a Direct Message</span>
                  <Sparkles size={18} className="text-cyan-400" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out the form below to reach Kusal immediately.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    <Check size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank you for reaching out!</h4>
                  <p className="text-sm text-slate-300 mt-2">
                    Your message has been captured. Kusal Ranasinghe will review your inquiry and connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Kasun Perera"
                        className="w-full px-4 py-3 rounded-xl bg-[#090d1a] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="kasun@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#090d1a] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity / Kubi Forge Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#090d1a] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project, idea, or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090d1a] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
