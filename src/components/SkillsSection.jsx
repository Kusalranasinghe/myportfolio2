import React, { useState } from 'react';
import { 
  Code, 
  Layers, 
  Terminal, 
  Database, 
  Sparkles, 
  Figma, 
  CheckCircle2, 
  Cpu, 
  Server, 
  FileCode,
  Layout,
  Atom,
  Coffee
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData.items
    : skillsData.items.filter(s => s.category === activeTab);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Coffee': return <Coffee size={22} className="text-amber-400" />;
      case 'Code2': return <Code size={22} className="text-cyan-400" />;
      case 'FileCode': return <FileCode size={22} className="text-yellow-400" />;
      case 'Terminal': return <Terminal size={22} className="text-emerald-400" />;
      case 'Cpu': return <Cpu size={22} className="text-purple-400" />;
      case 'Server': return <Server size={22} className="text-indigo-400" />;
      case 'Database': return <Database size={22} className="text-teal-400" />;
      case 'Layout': return <Layout size={22} className="text-rose-400" />;
      case 'Figma': return <Figma size={22} className="text-pink-400" />;
      case 'Sparkles': return <Sparkles size={22} className="text-amber-300" />;
      case 'Layers': return <Layers size={22} className="text-sky-400" />;
      case 'Atom': return <Atom size={22} className="text-violet-400" />;
      default: return <Code size={22} className="text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Code size={13} />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Tech Stack</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of programming languages, enterprise frameworks, database engineering, UI/UX design, and AI tools I leverage to build software.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsData.categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-[#0d1322]/80 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 relative group overflow-hidden"
            >
              {/* Subtle accent hover indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                  {getIcon(skill.icon)}
                </div>
                <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/40">
                  {skill.level}%
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h3>
              
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed min-h-[36px]">
                {skill.desc}
              </p>

              {/* Animated Progress Bar */}
              <div className="mt-5">
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* AI & Workflow Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-indigo-950/40 border border-cyan-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-300">
              <Sparkles size={28} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                AI-Augmented Development Methodology
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Experienced in leveraging <span className="text-emerald-300 font-semibold">Claude</span>, <span className="text-cyan-300 font-semibold">ChatGPT</span>, and <span className="text-sky-300 font-semibold">Gemini</span> for rapid architectural prototyping, test automation, and building intelligent agent-driven software workflows.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 bg-cyan-900/40 border border-cyan-700/50 px-4 py-2 rounded-xl whitespace-nowrap">
            <span>Modern Engineering Velocity</span>
          </div>
        </div>

      </div>
    </section>
  );
}
