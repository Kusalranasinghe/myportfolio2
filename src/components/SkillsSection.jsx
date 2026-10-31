import React, { useEffect, useRef, useState } from 'react';
import {
  Code,
  Terminal,
  Database,
  Sparkles,
  Figma,
  Cpu,
  Server,
  FileCode,
  Layout,
  Atom,
  Coffee,
  Layers,
  ArrowUpRight,
  Command,
  WandSparkles,
  Workflow,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const skillLogos = [
  { name: 'Git', image: 'git.png', category: 'Version control' },
  { name: 'HTML5', image: 'html.png', category: 'Markup' },
  { name: 'Java', image: 'java.png', category: 'Backend' },
  { name: 'JavaScript', image: 'js.png', category: 'Language' },
  { name: 'MySQL', image: 'mysql.png', category: 'Database' },
  { name: 'PHP', image: 'php.png', category: 'Backend' },
  { name: 'React', image: 'react.png', category: 'Frontend' },
  { name: 'Spring Boot', image: 'spring-boot-logo.png', category: 'Framework' },
  { name: 'C', image: 'c.png', category: 'Language' },
  { name: 'CSS3', image: 'css.png', category: 'Styling' },
  { name: 'Figma', image: 'figma.png', category: 'Design' },
  { name: 'Python', image: 'python.png', category: 'Language' },
];

const aiAssistants = [
  { name: 'Claude', image: 'claude.png', detail: 'Reasoning & writing' },
  { name: 'ChatGPT', image: 'chatgpt.jpg', detail: 'Ideas & problem solving' },
  { name: 'Gemini', image: 'gemini.png', detail: 'Research & exploration' },
];

const codingEnvironments = [
  {
    name: 'Cursor',
    image: 'cursor.png',
    label: 'AI CODE EDITOR',
    description: 'An AI-first editor for moving from a focused code change to a polished implementation.',
    accent: 'cursor',
    icon: Command,
  },
  {
    name: 'Antigravity',
    image: 'antigravity.png',
    label: 'AGENTIC DEVELOPMENT',
    description: 'An agent-driven workspace for exploring ideas and coordinating multi-step development.',
    accent: 'antigravity',
    icon: WandSparkles,
  },
];

const cardLogos = {
  'Java (Spring Boot)': ['java.png', 'spring-boot-logo.png'],
  'React.js': ['react.png'],
  'JavaScript (ES6+)': ['js.png'],
  'C & C#': ['c.png'],
  PHP: ['php.png'],
  'SQL & Databases': ['mysql.png'],
  'HTML5 & CSS3': ['html.png', 'css.png'],
  'Figma (UI/UX)': ['figma.png'],
  Python: ['python.png'],
  'Claude, ChatGPT, Gemini': ['claude.png', 'chatgpt.jpg', 'gemini.png'],
};

const iconComponents = {
  Coffee,
  Code2: Code,
  FileCode,
  Terminal,
  Cpu,
  Server,
  Database,
  Layout,
  Figma,
  Sparkles,
  Layers,
  Atom,
};

function SkillLogo({ image, name, className = '' }) {
  return (
    <img
      src={`/assets/skills/${image}`}
      alt={name}
      className={`skills-logo ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef(null);

  const filteredSkills = activeTab === 'all'
    ? skillsData.items
    : skillsData.items.filter((skill) => skill.category === activeTab);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const revealItems = section.querySelectorAll('.skills-reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section id="skills" ref={sectionRef} className="skills-section relative overflow-hidden py-24 sm:py-28">
      <div className="skills-orb skills-orb-one" aria-hidden="true" />
      <div className="skills-orb skills-orb-two" aria-hidden="true" />
      <div className="skills-ambient-grid" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="skills-heading mb-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="skills-reveal mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[0.18em] text-cyan-300">
              <span className="skills-status-dot h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
              WHAT I BUILD WITH
              <span className="text-slate-500">/ 01</span>
            </div>
            <h2 className="skills-reveal max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Good ideas.
              <br />
              <span className="text-slate-300">Great tools.</span>{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Real impact.
              </span>
            </h2>
            <p className="skills-reveal mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              From shaping a concept to shipping a full-stack product, here is my creative
              toolkit for turning ambitious ideas into useful experiences.
            </p>
            <div className="skills-reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
                {String(skillsData.items.length).padStart(2, '0')} skill areas
              </div>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_#c4b5fd]" />
                {String(skillLogos.length).padStart(2, '0')} technologies
              </div>
            </div>
          </div>

          <div className="skills-reveal skills-console-wrap">
            <div className="skills-console-glow" aria-hidden="true" />
            <div className="skills-console">
              <div className="skills-console-bar">
                <span className="skills-console-dot skills-console-dot-red" />
                <span className="skills-console-dot skills-console-dot-yellow" />
                <span className="skills-console-dot skills-console-dot-green" />
                <span className="ml-3 font-mono text-[10px] text-slate-500">kusal@workbench ~ skills</span>
                <span className="ml-auto font-mono text-[9px] text-slate-600">LIVE PREVIEW</span>
              </div>
              <div className="skills-console-body">
                <div className="skills-console-gutter">01<br />02<br />03<br />04<br />05<br />06</div>
                <div className="skills-console-code">
                  <p><span className="console-purple">const</span> <span className="console-cyan">developer</span> = {'{'}</p>
                  <p className="console-indent"><span className="console-blue">builds</span>: <span className="console-green">'for people'</span>,</p>
                  <p className="console-indent"><span className="console-blue">stack</span>: [<span className="console-green">'React'</span>, <span className="console-green">'Java'</span>],</p>
                  <p className="console-indent"><span className="console-blue">mindset</span>: <span className="console-green">'always learning'</span>,</p>
                  <p className="console-indent"><span className="console-blue">ai</span>: <span className="console-orange">true</span></p>
                  <p>{'}'}<span className="console-caret" aria-hidden="true" /></p>
                </div>
              </div>
              <div className="skills-console-footer">
                <span className="flex items-center gap-2"><span className="skills-status-dot h-1.5 w-1.5 rounded-full bg-emerald-400" /> BUILDING SOMETHING GOOD</span>
                <span>UTF-8 · JSX</span>
              </div>
            </div>
            <div className="skills-float-chip skills-float-chip-react">
              <SkillLogo image="react.png" name="React" />
              <span>React</span>
            </div>
            <div className="skills-float-chip skills-float-chip-spring">
              <SkillLogo image="spring-boot-logo.png" name="Spring Boot" />
              <span>Spring Boot</span>
            </div>
          </div>
        </div>

        <div className="skills-reveal skills-logo-rail mb-14 rounded-3xl border border-white/[0.08] bg-slate-950/40 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Technologies in my workflow
              </p>
            </div>
            <span className="hidden items-center gap-1.5 text-[11px] text-slate-500 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Always learning
            </span>
          </div>
          <div className="skills-marquee" aria-label="Technology logos">
            <div className="skills-marquee-track">
              {[...skillLogos, ...skillLogos].map((logo, index) => (
                <div
                  className="skills-logo-chip group"
                  key={`${logo.name}-${index}`}
                  title={`${logo.name} · ${logo.category}`}
                  aria-hidden={index >= skillLogos.length}
                >
                  <span className="skills-logo-frame">
                    <SkillLogo image={logo.image} name={logo.name} />
                  </span>
                  <span className="whitespace-nowrap text-xs font-medium text-slate-300">{logo.name}</span>
                  <ArrowUpRight size={13} className="ml-auto shrink-0 text-slate-600 transition-colors group-hover:text-cyan-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-reveal mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
              Capability index
            </p>
            <p className="mt-1 text-sm text-slate-500">Explore by discipline</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter skills by category">
            {skillsData.categories.map((category) => {
              const isActive = activeTab === category.id;
              const count = category.id === 'all'
                ? skillsData.items.length
                : skillsData.items.filter((skill) => skill.category === category.id).length;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveTab(category.id)}
                  aria-pressed={isActive}
                  className={`skills-filter ${isActive ? 'skills-filter-active' : ''}`}
                >
                  {category.label}
                  <span className="skills-filter-count">{String(count).padStart(2, '0')}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredSkills.map((skill, index) => {
            const Icon = iconComponents[skill.icon] || Code;
            const logos = cardLogos[skill.name] || [];

            return (
              <article
                key={`${activeTab}-${skill.name}`}
                className="skills-card skills-reveal group"
                style={{ '--skill-delay': `${index * 45}ms` }}
              >
                <div className="skills-card-topline" />
                <div className="skills-card-halo" aria-hidden="true" />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="skills-card-icon">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
                        {skillsData.categories.find((category) => category.id === skill.category)?.label}
                      </span>
                      <h3 className="truncate text-base font-bold text-white transition-colors group-hover:text-cyan-200">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  <span className="skills-level">{skill.level}%</span>
                </div>

                <p className="relative z-[1] min-h-[42px] text-xs leading-5 text-slate-400 sm:text-[13px]">
                  {skill.desc}
                </p>

                <div className="relative z-[1] mt-5 flex min-h-9 items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
                  <div className="flex items-center gap-2">
                    {logos.length > 0 ? logos.map((image) => (
                      <span className="skills-card-logo" key={image}>
                        <SkillLogo image={image} name={image.replace('.png', '')} />
                      </span>
                    )) : (
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        Applied practice
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">
                    {String(index + 1).padStart(2, '0')} <span className="text-slate-700">/</span> {String(filteredSkills.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="skills-meter mt-4" role="img" aria-label={`${skill.level}% proficiency`}>
                  <span style={{ '--meter-level': `${skill.level}%` }} />
                </div>
              </article>
            );
          })}
        </div>

        <section className="skills-workbench skills-reveal mt-14" aria-labelledby="workbench-heading">
          <div className="skills-reveal mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">
                <Workflow size={14} />
                AI-powered workbench
              </p>
              <h3 id="workbench-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                The tools behind the build.
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                AI coding environments for creating, paired with AI assistants for thinking through the details.
              </p>
            </div>
            <span className="w-fit rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-violet-200">
              Human-led · AI-assisted
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {codingEnvironments.map((environment) => {
                const EnvironmentIcon = environment.icon;
                return (
                  <article className={`workbench-tool-card skills-reveal workbench-${environment.accent}`} key={environment.name}>
                    <div className="flex items-start justify-between gap-3">
                      <span className="workbench-tool-logo">
                        <SkillLogo image={environment.image} name={`${environment.name} logo`} />
                      </span>
                      <span className="workbench-tool-mark">
                        <EnvironmentIcon size={16} />
                      </span>
                    </div>
                    <p className="mt-6 font-mono text-[9px] font-semibold tracking-[0.2em] text-slate-400">
                      {environment.label}
                    </p>
                    <h4 className="mt-1 text-xl font-bold text-white">{environment.name}</h4>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{environment.description}</p>
                    <div className="workbench-tool-footer">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>Creative coding environment</span>
                      <ArrowUpRight size={14} className="ml-auto" />
                    </div>
                  </article>
                );
              })}
            </div>

            <aside className="workbench-assistants skills-reveal">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.08] text-emerald-300">
                  <Sparkles size={19} />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300/80">
                    Thinking partners
                  </p>
                  <h4 className="mt-0.5 text-sm font-bold text-white">AI assistants</h4>
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-400">
                A flexible set of assistants for brainstorming, research and problem-solving.
              </p>
              <div className="mt-4 space-y-2">
                {aiAssistants.map((assistant) => (
                  <div className="workbench-assistant-row" key={assistant.name}>
                    <span className="workbench-assistant-logo">
                      <SkillLogo image={assistant.image} name={`${assistant.name} logo`} />
                    </span>
                    <span className="text-xs font-semibold text-slate-200">{assistant.name}</span>
                    <span className="ml-auto text-right text-[10px] text-slate-500">{assistant.detail}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
          <div className="skills-ai-banner mt-4 flex flex-col gap-4 rounded-2xl border border-emerald-300/15 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
                <Sparkles size={19} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">AI-augmented, human-led development</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Use AI to accelerate exploration; keep engineering judgment in the driver’s seat.
                </p>
              </div>
            </div>
            <span className="flex w-fit items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Curiosity → Craft
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}
