import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { terminalCommands, personalInfo } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Kusal Ranasinghe v2.5 Interactive Terminal Shell.' },
    { type: 'system', text: "Type 'help' to inspect available system commands, or 'clear' to reset." }
  ]);
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cmd === 'sudo hire') {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }

    const response = terminalCommands[cmd] || `command not found: "${cmd}". Type 'help' for available commands.`;

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `$ ${inputVal}` },
      { type: 'output', text: response }
    ]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#070b16] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
        
        {/* Terminal Header Bar */}
        <div className="bg-[#0b1224] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity"
              title="Close"
            />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-slate-400 text-xs flex items-center gap-1.5">
              <Terminal size={13} className="text-cyan-400" />
              kusal@kubiforge: ~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-cyan-400/80 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
              bash 5.2
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3 text-slate-300">
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'user' && (
                <div className="text-cyan-300 font-semibold">{item.text}</div>
              )}
              {item.type === 'system' && (
                <div className="text-emerald-400/90">{item.text}</div>
              )}
              {item.type === 'output' && (
                <div className="text-slate-300 whitespace-pre-wrap pl-2 border-l-2 border-cyan-500/30">
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input */}
        <form
          onSubmit={handleCommand}
          className="bg-[#090e1d] p-3 border-t border-white/10 flex items-center gap-2"
        >
          <span className="text-cyan-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'contact'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-slate-600 text-xs sm:text-sm"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
          >
            <CornerDownLeft size={14} />
          </button>
        </form>

        {/* Quick Suggestion Chips */}
        <div className="bg-[#050811] px-4 py-2 border-t border-white/5 flex flex-wrap gap-1.5 text-[10px] text-slate-400">
          <span className="text-slate-500">Quick run:</span>
          {['help', 'skills', 'projects', 'edu', 'startup', 'contact', 'sudo hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInputVal(cmd);
                inputRef.current?.focus();
              }}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors font-mono"
            >
              {cmd}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
