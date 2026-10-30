import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Building2,
  ChevronRight
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationTimeline() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const getBadgeStyle = (color) => {
    switch (color) {
      case 'cyan':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40';
      case 'emerald':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40';
      case 'purple':
        return 'bg-purple-950/80 text-purple-300 border-purple-500/40';
      default:
        return 'bg-blue-950/80 text-blue-300 border-blue-500/40';
    }
  };

  return (
    <section id="education" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <GraduationCap size={14} />
            <span>ACADEMIC MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400">Journey</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            From formative school years to reading for BSc in Computer Science at University of Sri Jayewardenepura.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Glowing Connector Line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500 via-emerald-500 to-indigo-500/30 shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

          <div className="space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative flex flex-col lg:flex-row items-center gap-8 group"
                >
                  {/* Timeline Center Node (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#070b16] border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 items-center justify-center text-cyan-400 z-20 group-hover:scale-125 transition-transform duration-300">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
                  </div>

                  {/* Left Column (for even items) or Empty / Spacer */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:order-2 lg:pl-12 lg:text-left'}`}>
                    <div className="glass-card glass-card-hover p-7 sm:p-8 rounded-3xl border border-white/10 group-hover:border-cyan-500/40 transition-all">
                      
                      {/* Top Badges */}
                      <div className={`flex flex-wrap items-center gap-2 mb-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeStyle(edu.badgeColor)}`}>
                          {edu.badge}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-white/5 border border-white/10">
                          <Calendar size={12} className="text-cyan-400" />
                          {edu.period}
                        </span>
                      </div>

                      {/* Institution Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {edu.institution}
                      </h3>
                      
                      {/* Degree & Fields */}
                      <div className="mt-1 font-semibold text-cyan-400 text-sm sm:text-base">
                        {edu.degree}
                      </div>
                      <div className="text-xs font-mono text-slate-400 mt-1">
                        {edu.fields}
                      </div>

                      {/* Location & Status */}
                      <div className={`flex items-center gap-3 text-xs text-slate-400 mt-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-rose-400" />
                          {edu.location}
                        </span>
                        <span>•</span>
                        <span className="text-emerald-400 font-medium">{edu.status}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs sm:text-sm text-slate-300/90 leading-relaxed text-left">
                        {edu.description}
                      </p>

                      {/* Key Achievements Bullet list */}
                      <div className="mt-4 pt-4 border-t border-white/5 space-y-2 text-left">
                        {edu.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Right Column (for odd items) or Spacer */}
                  <div className={`hidden lg:block lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`} />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
