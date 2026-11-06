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
import { personalInfo, skillsData } from '../data/portfolioData';

const skillOrbitGroups = [
  {
    id: 'languages',
    label: 'Languages',
    logos: [
      { name: 'JavaScript', image: 'js.png' },
      { name: 'Python', image: 'python.png' },
      { name: 'C', image: 'c.png' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend & UI/UX',
    logos: [
      { name: 'React', image: 'react.png' },
      { name: 'HTML5', image: 'html.png' },
      { name: 'CSS3', image: 'css.png' },
      { name: 'Figma', image: 'figma.png' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & DB',
    logos: [
      { name: 'Java', image: 'java.png' },
      { name: 'Spring Boot', image: 'spring-boot-logo.png' },
      { name: 'PHP', image: 'php.png' },
      { name: 'MySQL', image: 'mysql.png' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Modern Tools',
    logos: [
      { name: 'Claude', image: 'claude.png' },
      { name: 'ChatGPT', image: 'chatgpt.jpg' },
      { name: 'Gemini', image: 'gemini.png' },
      { name: 'Cursor', image: 'cursor.png' },
      { name: 'Antigravity', image: 'antigravity.png' },
    ],
  },
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
  const orbitLogoCount = skillOrbitGroups.reduce((total, group) => total + group.logos.length, 0);
  const activeOrbitGroups = activeTab === 'all'
    ? skillOrbitGroups
    : skillOrbitGroups.filter((group) => group.id === activeTab);

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
                {String(orbitLogoCount).padStart(2, '0')} technologies
              </div>
            </div>
          </div>

          <div className="skills-reveal skills-orbit-wrap">
            <div
              className={`skills-orbit-scene ${activeTab !== 'all' ? 'skills-orbit-scene-filtered' : ''}`}
              aria-label={`${activeTab === 'all' ? 'All technology categories' : skillsData.categories.find((category) => category.id === activeTab)?.label} orbiting ${personalInfo.name}'s portrait`}
            >
              <div className="skills-orbit-glow" aria-hidden="true" />
              {activeOrbitGroups.map((group, groupIndex) => (
                <div
                  className={`skills-orbit skills-orbit-${group.id}`}
                  key={group.id}
                  aria-hidden="true"
                >
                  {group.logos.map((logo, logoIndex) => {
                    const angle = (360 / group.logos.length) * logoIndex - 90;
                    return (
                      <span
                        className="skills-orbit-logo"
                        key={logo.name}
                        title={`${logo.name} · ${group.label}`}
                        style={{
                          '--orbit-angle': `${angle}deg`,
                          '--orbit-radius': `${activeTab === 'all' ? [44, 36, 29, 25][groupIndex] : 36}cqw`,
                        }}
                      >
                        <span className="skills-orbit-logo-tile">
                          <SkillLogo image={logo.image} name={logo.name} />
                        </span>
                      </span>
                    );
                  })}
                </div>
              ))}
              <div className="skills-portrait-halo" aria-hidden="true" />
              <div className="skills-portrait">
                <img src="/assets/skills-center-photo.jpg" alt={personalInfo.name} />
              </div>
              <div className="skills-portrait-caption">
                <span className="skills-status-dot" />
                <span>{personalInfo.name}</span>
              </div>
            </div>
            <div className="skills-orbit-legend" aria-label="Technology categories">
              {activeOrbitGroups.map((group) => (
                <span className={`skills-orbit-legend-item skills-orbit-legend-${group.id}`} key={group.id}>
                  <span className="skills-orbit-legend-dot" />
                  {group.label}
                </span>
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                <div className="mb-4 flex items-start justify-between gap-2.5">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="skills-card-icon">
                      <Icon size={17} />
                    </div>
                    <div className="min-w-0">
                      <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
                        {skillsData.categories.find((category) => category.id === skill.category)?.label}
                      </span>
                      <h3 className="truncate text-sm font-bold text-white transition-colors group-hover:text-cyan-200">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  <span className="skills-level">{skill.level}%</span>
                </div>

                <p className="relative z-[1] min-h-[48px] text-[11px] leading-[1.15rem] text-slate-400">
                  {skill.desc}
                </p>

                <div className="relative z-[1] mt-4 flex min-h-8 items-center justify-between gap-2 border-t border-white/[0.07] pt-3">
                  <div className="flex items-center gap-1.5">
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
                <div className="skills-meter mt-3" role="img" aria-label={`${skill.level}% proficiency`}>
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
