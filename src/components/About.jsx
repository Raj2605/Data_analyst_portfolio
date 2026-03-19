import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STATS = [
  {  value: '1.5+',   label: 'Years of Experience' },
  { value: '30%',  label: 'Reporting Effort Reduced'  },
  { value: '100%',  label: 'Passion for Data'   },
  { value: 'Pune',  label: 'Based In'            },
];

const VALUES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Data-Driven',
    desc: 'Every insight backed by clean data and solid methodology.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
    title: 'Visual Clarity',
    desc: 'Dashboards designed so decisions are immediate and obvious.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Impact Focused',
    desc: 'Obsessed with the "so what" — turning numbers into action.',
  },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-surface/40" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">01 · Who I Am</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm">
            Turning chaos into <span className="text-gradient italic">clarity</span>
          </h2>
          <div className="amber-line w-24 mt-3" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Bio ── */}
          <div>
            <div className="reveal reveal-delay-1 space-y-5 text-muted-lt font-body leading-relaxed text-base">
              <p>
                I'm a <span className="text-warm font-semibold">Data Analyst</span> based in Pune, India,
                with hands-on experience in the full data lifecycle — from raw CSV imports and SQL
                transformations to cloud migrations and interactive Power BI dashboards.
              </p>
              <p>
                My work focuses on <span className="text-warm font-medium">fraud detection</span>,{' '}
                <span className="text-warm font-medium">risk analysis</span>, and{' '}
                <span className="text-warm font-medium">business intelligence</span>. I've built
                end-to-end analytics pipelines using Azure SQL, DAX-powered KPI models, and
                Python-based exploratory analysis.
              </p>
              <p>
                I believe great analysis doesn't stop at a number — it tells a story that compels
                the right decision. Whether it's a fraud heatmap or a gender-representation trend,
                I want the insight to be <em className="text-amber-lt">unmistakable</em>.
              </p>
            </div>

            {/* Values */}
            <div className="reveal reveal-delay-2 mt-8 space-y-4">
              {VALUES.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 bg-raised/60 border border-border rounded-xl p-4 hover:border-amber/20 transition-colors"
                >
                  <span className="mt-0.5 text-amber flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-body font-semibold text-warm text-sm mb-1">{title}</p>
                    <p className="font-body text-muted text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Stats + Mini CTA ── */}
          <div className="reveal reveal-delay-3">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {STATS.map(({ value, label }) => (
                <div key={label} className="stat-card">
                  <p className="font-display text-3xl font-bold text-amber mb-1">{value}</p>
                  <p className="font-body text-muted text-sm">{label}</p>
                </div>
              ))}
            </div>

            {/* Tools row */}
            <div className="bg-raised border border-border rounded-xl p-5">
              <p className="section-label mb-4">Current Toolbox</p>
              <div className="flex flex-wrap gap-2">
                {['SQL','Power BI','Python','Excel','Azure SQL','SSMS','DAX','Pandas','Seaborn','Matplotlib'].map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Social proof links */}
            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="https://github.com/Raj2605/"
                target="_blank" rel="noopener noreferrer"
                className="btn-ghost rounded-lg px-4 py-2.5 text-sm font-body flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/raj-jaiswar025/"
                target="_blank" rel="noopener noreferrer"
                className="btn-ghost rounded-lg px-4 py-2.5 text-sm font-body flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
