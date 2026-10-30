import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Terminal, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  ExternalLink,
  Code2,
  Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

function HeroProfile() {
  return (
    <div className="relative w-full max-w-[17rem] sm:max-w-xs">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-indigo-500/20 blur-2xl opacity-70 animate-pulse"></div>
      <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-cyan-500/30 via-slate-800/50 to-indigo-500/30 border border-white/15 shadow-2xl backdrop-blur-xl">
        <div className="relative m-1 rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 group">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#090d1a]/90 backdrop-blur-md border border-white/10 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Kusal Ranasinghe
                  <CheckCircle2 size={14} className="text-cyan-400" />
                </h4>
                <p className="text-[11px] text-cyan-300 font-mono">Full-Stack Software Engineer</p>
              </div>
              <div className="text-right">
                <span className="inline-block text-[10px] font-semibold text-indigo-300 uppercase tracking-wider bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-700/50">
                  Kubi Forge
                </span>
                <p className="text-[10px] text-slate-400 mt-0.5">Co-Founder & Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#0c1222]/95 border border-cyan-500/30 rounded-2xl p-3 shadow-xl backdrop-blur-md items-center gap-3 animate-float-reverse">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
          <Cpu size={18} />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">University</div>
          <div className="text-xs font-bold text-cyan-300">Sri Jayewardenepura</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onOpenTerminal, onTriggerToast }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Typewriter effect for roles
  useEffect(() => {
    const roles = personalInfo.roles;
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        if (currentText === currentRole) {
          // Pause at end
          setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        // Deleting
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleHireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (onTriggerToast) {
      onTriggerToast("Thank you for your interest! Connecting to WhatsApp...");
    }
    setTimeout(() => {
      window.open(personalInfo.whatsappUrl, '_blank');
    }, 400);
  };

  const handleDownloadCV = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });
    if (onTriggerToast) {
      onTriggerToast("CV overview prepared! Reaching out directly is fastest.");
    }
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none animate-glow-pulse" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 text-glow">
                Kusal Ranasinghe
              </span>
            </h1>

            <div className="w-full flex justify-center mb-8 lg:hidden">
              <HeroProfile />
            </div>

            {/* Dynamic Rotating Roles */}
            <div className="h-12 sm:h-14 flex items-center mb-6">
              <span className="text-lg sm:text-2xl font-semibold text-slate-300 font-mono flex items-center">
                <span className="text-cyan-400 mr-2">&gt;</span>
                <span>{currentText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 ml-1 inline-block animate-pulse"></span>
              </span>
            </div>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              Co-Founder of <span className="text-indigo-300 font-semibold">Kubi Forge</span>.
              {' '}I specialize in full-stack architectures (React, Java Spring Boot, SQL), UI/UX craft, and AI-accelerated workflows.
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={handleHireConfetti}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#10172a] hover:bg-[#1a233d] border border-cyan-500/30 hover:border-cyan-400/60 shadow-md transition-all duration-200 active:scale-95"
              >
                <MessageSquare size={16} className="text-emerald-400" />
                <span>Let's Talk</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-300 hover:text-cyan-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                title="Launch interactive shell"
              >
                <Terminal size={14} className="text-cyan-400" />
                <span>Interactive CLI</span>
              </button>
            </div>

            {/* Location & Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono border-t border-white/10 pt-6 w-full">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-cyan-400" />
                <span>Kalutara / Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span className="text-slate-300">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300">WhatsApp:</span>
                <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  +94 78 799 6831
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Profile Image in High-Tech Frame */}
            <div className="hidden lg:col-span-5 lg:flex lg:justify-end">
              <HeroProfile />
            </div>

        </div>

        {/* Bottom Hero Stats Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#0d1322]/60 border border-white/5 backdrop-blur-md hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center justify-between">
                <span>{stat.label}</span>
                <span className="text-[10px] text-cyan-400 font-semibold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  {stat.highlight}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-baseline gap-1 group-hover:text-cyan-300 transition-colors">
                <span>{stat.value}</span>
                <span className="text-sm font-normal text-slate-400">{stat.suffix}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
