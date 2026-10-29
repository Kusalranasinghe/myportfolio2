import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, MessageSquare, Sparkles, ExternalLink, GraduationCap, Briefcase, Code, User, Rocket } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'kubi-forge', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Education', href: '#education', id: 'education', icon: GraduationCap },
    { label: 'Startup', href: '#kubi-forge', id: 'kubi-forge', icon: Rocket },
    { label: 'Skills', href: '#skills', id: 'skills', icon: Code },
    { label: 'Projects', href: '#projects', id: 'projects', icon: Briefcase },
    { label: 'Contact', href: '#contact', id: 'contact', icon: MessageSquare },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060913]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          onClick={(e) => handleLinkClick(e, '#home')}
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <div className="w-full h-full bg-[#090d1a] rounded-[10px] flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
              KR
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-base tracking-tight group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
              Kusal Ranasinghe
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for projects"></span>
            </span>
            <span className="text-[11px] text-cyan-400/80 font-mono tracking-wider uppercase font-semibold">
              USJ • Kubi Forge
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#0d1322]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-slate-400'} />
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* CLI Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-900/40 hover:border-cyan-500/50 transition-all shadow-sm group"
            title="Open Interactive Terminal"
          >
            <Terminal size={14} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>kusal-cli</span>
            <span className="text-[10px] bg-cyan-900/80 text-cyan-200 px-1.5 py-0.5 rounded">⌘K</span>
          </button>

          {/* WhatsApp Direct Chat */}
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all active:scale-95"
          >
            <MessageSquare size={14} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg text-cyan-300 bg-cyan-950/40 border border-cyan-800/60"
            aria-label="Open Terminal"
          >
            <Terminal size={18} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#090d1a]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-cyan-400' : 'text-slate-400'} />
                <span>{link.label}</span>
              </a>
            );
          })}

          <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp (+94 78 799 6831)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
