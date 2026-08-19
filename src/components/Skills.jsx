import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SKILL_GROUPS = [
  {
    category: 'Data & Analytics',
    color: '#f0a500',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    skills: [
      { name: 'SQL',           level: 90 },
      { name: 'Power BI',      level: 88 },
      { name: 'DAX',           level: 80 },
      { name: 'Excel',         level: 85 },
      { name: 'Data Modeling', level: 78 },
    ],
  },
  {
    category: 'Programming, Cloud & Tools',
    color: '#4ade80',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    skills: [
      { name: 'Azure SQL',     level:80 },
      { name: 'Python',     level: 72 },
      { name: 'SSMS', level: 75 },
      { name: 'pandas',    level: 75 },
      { name: 'NumPy',      level: 70 },
    ],
  },
];

const SOFT_SKILLS = [
  'Critical Thinking', 'Data Storytelling', 'Problem Solving',
  'Attention to Detail', 'Dashboard Design', 'Report Writing',
  'Business Acumen', 'Stakeholder Communication',
];

function SkillBar({ name, level, color, idx }) {
  return (
    <div className="reveal" style={{ transitionDelay: `${idx * 0.08}s` }}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm text-muted-lt">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-none"
          style={{
            width: '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            transition: `width 0.9s ease ${idx * 0.08 + 0.3}s`,
          }}
          ref={el => {
            if (!el) return;
            const obs = new IntersectionObserver(([e]) => {
              if (e.isIntersecting) {
                el.style.width = level + '%';
                obs.disconnect();
              }
            }, { threshold: 0.1 });
            obs.observe(el);
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">02 · Capabilities</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm">
            Tools of the <span className="text-gradient italic">trade</span>
          </h2>
          <div className="amber-line w-24 mt-3" />
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {SKILL_GROUPS.map(({ category, color, icon, skills }) => (
            <div
              key={category}
              className="reveal bg-surface border border-border rounded-2xl p-6 hover:border-opacity-40 transition-all"
              style={{ '--group-color': color }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}15`, color }}
                >
                  {icon}
                </span>
                <h3 className="font-body font-semibold text-warm text-sm">{category}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {skills.map(({ name, level }, i) => (
                  <SkillBar key={name} name={name} level={level} color={color} idx={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className="reveal reveal-delay-3">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <p className="section-label mb-5">Professional Skills</p>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((s) => (
                <span
                  key={s}
                  className="font-body text-sm text-muted-lt border border-border rounded-lg px-4 py-2 hover:text-amber hover:border-amber/30 transition-all cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal reveal-delay-4 mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-raised border border-border rounded-2xl px-6 py-5">
          <div>
            <p className="font-body font-semibold text-warm mb-0.5">Looking for a data analyst?</p>
            <p className="font-body text-sm text-muted">Let's turn your data into your next competitive edge.</p>
          </div>
          <a
            href="mailto:jaiswarraj635@gmail.com"
            className="btn-amber rounded-xl px-5 py-2.5 text-sm font-body whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
