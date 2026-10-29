import React from 'react';
import { 
  Rocket, 
  Sparkles, 
  Code, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  ShieldCheck,
  Zap,
  MessageSquare
} from 'lucide-react';
import { startupData, personalInfo } from '../data/portfolioData';

export default function KubiForgeBanner() {
  return (
    <section id="kubi-forge" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Glowing Container */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500 via-indigo-600 to-emerald-500 shadow-2xl shadow-cyan-500/10">
          <div className="rounded-[22px] bg-[#080d1b] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            
            {/* Background cyber grid & glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Info & Vision */}
              <div className="lg:col-span-7 flex flex-col items-start">
                
                {/* Venture Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-semibold mb-6 shadow-sm">
                  <Rocket size={14} className="text-cyan-400 animate-bounce" />
                  <span>STARTUP VENTURE & TECH LAB</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Engineering the Future at{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                    Kubi Forge
                  </span>
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  {startupData.description}
                </p>

                {/* Key Pillars Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
                  {startupData.services.map((svc, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                      <Zap size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">{svc.title}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{svc.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hi%20Kusal,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Kubi%20Forge!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
                  >
                    <MessageSquare size={16} />
                    <span>Inquire with Kubi Forge</span>
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}?subject=Kubi%20Forge%20Partnership%20Inquiry`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <span>Email Founder</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

              </div>

              {/* Right Column: High-Tech Stats / Terminal Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#050811]/90 border border-white/10 p-6 shadow-2xl relative">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">kubi-forge-status.json</span>
                  </div>

                  {/* JSON Code snippet */}
                  <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto p-3 rounded-xl bg-black/40 border border-white/5">
{`{
  "organization": "Kubi Forge",
  "founder": "Kusal Ranasinghe",
  "status": "Operational & Building",
  "domains": [
    "Enterprise Fullstack",
    "Smart Logistics & Queues",
    "Disaster Management Tech",
    "UI/UX Design Systems"
  ],
  "leadStack": {
    "frontend": "React.js + Tailwind",
    "backend": "Java Spring Boot",
    "database": "MySQL / Relational",
    "design": "Figma",
    "aiWorkflow": "Claude & Gemini"
  },
  "openFor": "Client Projects & Partnerships"
}`}
                  </pre>

                  {/* Highlights Strip */}
                  <div className="mt-5 grid grid-cols-3 gap-2 text-center pt-4 border-t border-white/5">
                    <div className="p-2 rounded-lg bg-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Founding</div>
                      <div className="text-xs font-bold text-cyan-300 mt-0.5">Active</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Methodology</div>
                      <div className="text-xs font-bold text-emerald-300 mt-0.5">Agile & AI</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Quality</div>
                      <div className="text-xs font-bold text-indigo-300 mt-0.5">Production</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
