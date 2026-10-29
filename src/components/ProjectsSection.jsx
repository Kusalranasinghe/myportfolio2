import React, { useState } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  X,
  ShieldAlert,
  Fuel,
  Film,
  Rocket
} from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const getProjectIcon = (id) => {
    switch (id) {
      case 'flood-relief': return <ShieldAlert size={28} className="text-cyan-400" />;
      case 'fuelgo': return <Fuel size={28} className="text-amber-400" />;
      case 'cineru-26': return <Film size={28} className="text-purple-400" />;
      case 'kubi-forge-core': return <Rocket size={28} className="text-emerald-400" />;
      default: return <Layers size={28} className="text-cyan-400" />;
    }
  };

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : activeFilter === 'featured'
      ? projectsData.filter(p => p.featured)
      : projectsData;

  return (
    <section id="projects" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Briefcase size={13} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Engineering Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Real-world systems tackling disaster relief logistics, smart fuel quota management, and modern digital community platforms.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                : 'bg-[#0d1322]/80 text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            onClick={() => setActiveFilter('featured')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'featured'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                : 'bg-[#0d1322]/80 text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            Featured Highlights
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Header Banner */}
              <div className={`p-7 sm:p-8 bg-gradient-to-br ${project.imageBg} border-b border-white/5 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-md border border-white/15">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors relative z-10">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 relative z-10">
                  {project.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Architecture & Details</span>
                    <ArrowRight size={14} />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Detail View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#090d1a] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                {getProjectIcon(selectedProject.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Real World Impact */}
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 mb-6">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Real-World Impact
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mt-1">
                {selectedProject.impact}
              </p>
            </div>

            {/* Complete Key Features */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3">
                Core Architectural Capabilities:
              </h4>
              <div className="space-y-2.5">
                {selectedProject.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Breakdown */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
              >
                <Github size={16} />
                <span>View on GitHub</span>
              </a>

              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hi%20Kusal,%20I%20would%20love%20to%20learn%20more%20about%20your%20project:%20${encodeURIComponent(selectedProject.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>Discuss System Architecture</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
