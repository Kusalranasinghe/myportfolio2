import React from 'react';
import { ArrowUp, Github, Linkedin, MessageSquare, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#04060d] relative pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px]">
                <div className="w-full h-full bg-[#080c18] rounded-[10px] flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200 text-sm">
                  KR
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Kusal Ranasinghe
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              BSc Computer Science Undergraduate at University of Sri Jayewardenepura. Co-Founder of Kubi Forge. Dedicated to engineering robust full-stack software systems and intuitive digital platforms.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-white/5 hover:border-emerald-500/30 transition-all"
                title="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all"
                title="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-500/20 text-slate-300 hover:text-blue-300 border border-white/5 hover:border-blue-500/30 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/5 transition-all"
                title="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">About Me</a></li>
              <li><a href="#education" className="hover:text-cyan-300 transition-colors">Education & Timeline</a></li>
              <li><a href="#kubi-forge" className="hover:text-cyan-300 transition-colors">Kubi Forge Venture</a></li>
              <li><a href="#skills" className="hover:text-cyan-300 transition-colors">Tech Stack & Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-300 transition-colors">Projects & Case Studies</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          {/* Education & Venture Summary */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Affiliations
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="font-semibold text-white block">University of Sri Jayewardenepura</span>
                <span className="text-cyan-400">BSc Computer Science UG (2025-Pres)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="font-semibold text-white block">Kubi Forge</span>
                <span className="text-indigo-300">Co-Founder & Lead Software Architect</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Kusal Ranasinghe. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Built with React, Tailwind &</span>
            <Sparkles size={12} className="text-cyan-400" />
            <span>Kubi Forge Engineering</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
