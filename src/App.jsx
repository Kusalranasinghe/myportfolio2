import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import KubiForgeBanner from './components/KubiForgeBanner';
import EducationTimeline from './components/EducationTimeline';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import { MessageSquare, Terminal, CheckCircle2, X } from 'lucide-react';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Keyboard shortcut Ctrl+K or Cmd+K to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Interactive Mesh & Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none" />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#090d1a]/95 border border-cyan-500/40 text-white shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white ml-2"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenTerminal={() => setIsTerminalOpen(true)} 
          onTriggerToast={showToast}
        />
        <About />
        <KubiForgeBanner />
        <EducationTimeline />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection onTriggerToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp & Terminal) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="p-3.5 rounded-full bg-[#0d1322]/90 border border-cyan-500/40 text-cyan-400 hover:text-white hover:bg-cyan-950/80 shadow-xl backdrop-blur-md transition-all group"
          title="Open Developer Terminal (Ctrl+K)"
        >
          <Terminal size={20} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      <div className="fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8">
        <a
          href={personalInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all group"
          title="Direct WhatsApp Chat with Kusal"
        >
          <MessageSquare size={18} className="fill-slate-950" />
          <span className="hidden md:inline font-semibold">Chat with Kusal</span>
        </a>
      </div>

      {/* Interactive Terminal Shell Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

    </div>
  );
}
