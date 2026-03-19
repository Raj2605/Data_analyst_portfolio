import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EXPERIENCE = [
  {
    role: 'Data Analyst',
    org: 'Divinelane',
    period: 'Mar 2024 – May 2025',
    location: 'Pune, India',
    description:
      'Analysed customer purchase and behavioural data to surface actionable retention and conversion insights, while owning end-to-end dashboard delivery for key business metrics.',
    bullets: [
      'Identified patterns in repeat purchases using Advanced Excel and SQL, improving customer retention tracking by 15%',
      'Designed and maintained Power BI dashboards monitoring retention rate, repeat purchase rate, and activity trends',
      'Performed conversion funnel analysis (product view → add to cart → purchase), improving funnel visibility and tracking efficiency by 20%',
      'Automated recurring reporting with Excel (Pivot Tables, Power Query) and SQL, reducing manual reporting effort by 30%',
      'Conducted cohort and trend analysis to identify high-engagement customer segments over time',
      'Cleaned, validated, and transformed large datasets, improving reporting reliability and decision-making',
    ],
    skills: ['SQL', 'Power BI', 'Advanced Excel', 'Power Query', 'DAX', 'Cohort Analysis'],
  },
  {
    role: 'CAP Associate',
    org: 'Amazon Development Center',
    period: 'Jul 2023 – Feb 2024',
    location: 'Pune, India',
    description:
      'Investigated abuse prevention cases by reviewing transaction and behavioural data, while maintaining high service quality across a large query volume.',
    bullets: [
      'Investigated and analysed abuse prevention cases by reviewing transaction and behaviour data',
      'Maintained 90%+ CSAT score by resolving high-volume queries efficiently while ensuring KPI compliance',
      'Generated reports on recurring issues and escalated insights for process improvements',
      'Collaborated with cross-functional teams, improving first-contact resolution rates',
      'Ensured strict adherence to company policies and compliance requirements',
    ],
    skills: ['Customer Analysis', 'Reporting', 'Process Improvement', 'Excel'],
  },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    institution: 'Savitribai Phule Pune University',
    period: '2019 – 2022',
    note: 'Foundations in programming, databases, and data structures.',
  },
];

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">03 · Journey</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm">
            Experience &amp; <span className="text-gradient italic">education</span>
          </h2>
          <div className="amber-line w-24 mt-3" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* ── Left: Work timeline ── */}
          <div className="lg:col-span-2">
            <p className="section-label mb-8">Work Experience</p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[4px] top-3 bottom-0 w-px bg-border" aria-hidden="true" />

              <div className="space-y-10">
                {EXPERIENCE.map((exp, i) => (
                  <div
                    key={i}
                    className="reveal pl-10 relative"
                    style={{ transitionDelay: `${i * 0.15}s` }}
                  >
                    {/* Dot */}
                    <div className="timeline-dot absolute left-0 top-2" aria-hidden="true" />

                    {/* Card */}
                    <div className="bg-surface border border-border rounded-2xl p-6 hover:border-amber/20 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-display text-xl font-bold text-warm">{exp.role}</h3>
                          <p className="font-body text-amber text-sm font-medium mt-0.5">{exp.org}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-xs text-muted bg-raised border border-border rounded-lg px-3 py-1.5">
                            {exp.period}
                          </p>
                          <p className="font-body text-xs text-muted mt-1">{exp.location}</p>
                        </div>
                      </div>

                      <p className="font-body text-muted-lt text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2.5 mb-5">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2.5 font-body text-sm text-muted-lt">
                            <span className="mt-2 w-1 h-1 rounded-full bg-amber flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map(s => (
                          <span key={s} className="skill-tag">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Education ── */}
          <div>
            <div className="reveal reveal-delay-2">
              <p className="section-label mb-6">Education</p>
              <div className="space-y-4">
                {EDUCATION.map((edu, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-2xl p-5 hover:border-amber/20 transition-colors"
                  >
                    <p className="font-body font-semibold text-warm text-sm">{edu.degree}</p>
                    <p className="font-body text-amber text-xs font-medium mt-0.5">{edu.field}</p>
                    <p className="font-body text-muted-lt text-xs mt-1">{edu.institution}</p>
                    <p className="font-mono text-xs text-muted mt-1">{edu.period}</p>
                    {edu.note && (
                      <p className="font-body text-muted text-xs mt-2 border-t border-border pt-2">
                        {edu.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}