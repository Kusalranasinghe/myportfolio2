import React from 'react';
import { 
  User, 
  Sparkles, 
  Cpu, 
  Layers, 
  Lightbulb, 
  GraduationCap, 
  Code, 
  Compass, 
  CheckCircle,
  Building,
  TerminalSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Strong Academic Rigor",
      desc: "Reading for BSc in Computer Science at University of Sri Jayewardenepura, mastering Computer Science, Mathematics, and Theoretical Physics."
    },
    {
      icon: Cpu,
      title: "Full-Stack & Software Craft",
      desc: "Architecting end-to-end solutions with React, Java Spring Boot, Python, PHP, and SQL with clean modular design patterns."
    },
    {
      icon: Sparkles,
      title: "Modern AI Engineering",
      desc: "Harnessing Claude, ChatGPT, and Gemini for accelerated development workflows, prompt engineering, and intelligent system logic."
    },
    {
      icon: Building,
      title: "Entrepreneurial Spirit",
      desc: "Founder of Kubi Forge, turning real-world problem statements (flood logistics, fuel quota management) into active digital products."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <User size={13} />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Bridging Deep Theory & Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Engineering</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Discover the journey, academic philosophy, and engineering passion of Kusal Ranasinghe.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
            <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                Hello! I'm <strong className="text-white font-semibold">Kusal Ranasinghe</strong>, an undergraduate currently pursuing my{' '}
                <span className="text-cyan-300 font-medium">BSc in Computer Science (2025 - Present)</span> at the prestigious{' '}
                <strong className="text-white">University of Sri Jayewardenepura (USJ)</strong>.
              </p>
              
              <p>
                My university curriculum couples deep computing foundations with intense studies in <strong className="text-cyan-200">Mathematics and Physics</strong>. 
                This tri-fold analytical training equips me to approach software development not just as writing code, but as solving intricate algorithmic challenges with structural elegance and computational efficiency.
              </p>

              <p>
                Prior to university, I completed my <span className="text-emerald-300 font-medium">Diploma in Information Technology</span> at{' '}
                <strong className="text-white">IMBS Green Campus</strong>, graduating in 2025 with an honors <strong className="text-emerald-400">GPA of 3.54</strong>. 
                My primary foundations were laid at <span className="text-slate-200">Kalutara Gnanodaya College</span> (Grade 1–5) and secondary collegiate education at <span className="text-slate-200">Ananda Sastralaya Mathugama</span> (Grade 6–13, O/L & A/L).
              </p>

              <p>
                Beyond academics, I am the founder of <strong className="text-indigo-400">Kubi Forge</strong>—an emerging software and design venture. 
                I actively harness cutting-edge AI technologies including <span className="text-amber-300">Claude, ChatGPT, and Gemini</span> to streamline development cycles, architect robust backends with <strong className="text-slate-100">Java Spring Boot & SQL</strong>, and build dynamic frontends with <strong className="text-slate-100">React & Figma</strong>.
              </p>
            </div>

            {/* Quick Personal Attributes */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[11px] font-mono uppercase text-slate-400">Academic Standing</div>
                <div className="text-sm font-bold text-emerald-300 mt-1">3.54 GPA (IMBS)</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[11px] font-mono uppercase text-slate-400">Undergraduate</div>
                <div className="text-sm font-bold text-cyan-300 mt-1">USJ CS (2025-Pres)</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-[11px] font-mono uppercase text-slate-400">Venture</div>
                <div className="text-sm font-bold text-indigo-300 mt-1">Kubi Forge Founder</div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="glass-card glass-card-hover p-6 rounded-2xl flex items-start gap-4 border border-white/5 group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {h.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
