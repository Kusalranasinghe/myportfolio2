import React from 'react';
import { 
  User, 
  Sparkles, 
  Cpu, 
  GraduationCap, 
  Building
} from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Strong Academic Rigor",
      desc: "Studying Computer Science, Mathematics, and Physics at USJ."
    },
    {
      icon: Cpu,
      title: "Full-Stack & Software Craft",
      desc: "Building full-stack apps with React, Spring Boot, Python, and SQL."
    },
    {
      icon: Sparkles,
      title: "Modern AI Engineering",
      desc: "Using AI tools to support development and solve problems."
    },
    {
      icon: Building,
      title: "Entrepreneurial Spirit",
      desc: "Co-founding Kubi Forge and creating practical digital products."
    }
  ];

  return (
    <section id="about" className="py-16 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <User size={13} />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            A little about me and what I do.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Column: Narrative Card */}
          <div className="glass-card p-6 sm:p-7 rounded-3xl">
            <div className="space-y-3 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I'm <strong className="text-white font-semibold">Kusal Ranasinghe</strong>, a Computer Science undergraduate at the{' '}
                <strong className="text-white">University of Sri Jayewardenepura</strong>.
              </p>
              
              <p>
                I'm also Co-Founder of <strong className="text-indigo-400">Kubi Forge</strong>, where I build full-stack software and digital products using modern web technologies and AI tools.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs">Computer Science @ USJ</span>
              <span className="px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-xs">Co-Founder @ Kubi Forge</span>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="glass-card glass-card-hover p-4 rounded-2xl flex items-start gap-3 border border-white/5 group"
                >
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
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
