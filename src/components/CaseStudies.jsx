import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CASE_STUDIES = [
  {
    number: '01',
    problem: 'How do you detect fraud patterns in 1,000 insurance claims without domain expertise?',
    approach:
      'I designed a DAX-based risk scoring model (0–5) combining incident severity, state-level fraud rates, and claim amounts. Migration to Azure SQL enabled scalable querying, while the 4-page Power BI dashboard surfaces insights across executive, risk, policy, and transaction dimensions.',
    result: '247 confirmed fraud cases isolated. Major Damage incidents flagged as 60%+ fraud probability. South Carolina identified as the highest-exposure state ($4M+).',
    metric: '24.7%',
    metricLabel: 'Overall Fraud Rate Detected',
    color: '#4fc3f7',
  },
  {
    number: '02',
    problem: 'How do you assess loan risk for 80,900 applications at a non-banking financial company?',
    approach:
      'Applied feature engineering on income, employment history, city rating, and vehicle ownership data. Built fraud flags — income mismatch (loan > 8× income) and short employment — then segmented applicants into risk tiers using Python and Power BI.',
    result: '9.73% of applicants flagged as risky. 5,975 income-loan mismatches detected. Service sector employees (4,027 flags) identified as the highest-risk employment group.',
    metric: '9.73%',
    metricLabel: 'Risk Exposure Rate Identified',
    color: '#a78bfa',
  },
  {
    number: '03',
    problem: 'Can data reveal whether gender representation in cinema has meaningfully improved?',
    approach:
      'Processed 500-film Bechdel Test dataset using Pandas. Engineered decade buckets, genre groupings, and IMDB rating comparison splits. Power BI dashboards visualized pass/fail trends from 1900–2020 across genres, countries, and rating categories.',
    result: 'Only 43.2% of analyzed films passed the Bechdel Test. Drama dominates pass counts but no genre exceeds 60% consistently. Post-2000 trend shows modest improvement.',
    metric: '43.2%',
    metricLabel: 'Films That Passed the Test',
    color: '#34d399',
  },
];

export default function CaseStudies() {
  const sectionRef = useScrollReveal();

  return (
    <section id="case-studies" className="py-24 bg-surface/40" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">05 · Methodology</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm">
            Problem → <span className="text-gradient italic">Solution</span>
          </h2>
          <div className="amber-line w-24 mt-3" />
          <p className="font-body text-muted-lt mt-4 max-w-xl">
            The thinking behind the work — how I approach analytics problems from first principles.
          </p>
        </div>

        <div className="space-y-6">
          {CASE_STUDIES.map((cs, i) => (
            <div
              key={cs.number}
              className="reveal bg-surface border border-border rounded-2xl overflow-hidden hover:border-opacity-30 transition-all"
              style={{ transitionDelay: `${i * 0.15}s`, '--accent': cs.color }}
            >
              <div className="grid md:grid-cols-[80px_1fr_160px] gap-0">

                {/* Number column */}
                <div
                  className="flex items-center justify-center p-6 md:border-r border-border"
                  style={{ borderRightColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span
                    className="font-display text-5xl font-bold opacity-20 select-none"
                    style={{ color: cs.color }}
                  >
                    {cs.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Problem */}
                  <div className="mb-5">
                    <p className="font-mono text-xs mb-2" style={{ color: cs.color }}>Problem</p>
                    <p className="font-display text-lg font-semibold text-warm italic leading-snug">
                      "{cs.problem}"
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Approach */}
                    <div>
                      <p className="font-mono text-xs text-muted mb-2 uppercase tracking-widest">My Approach</p>
                      <p className="font-body text-sm text-muted-lt leading-relaxed">{cs.approach}</p>
                    </div>
                    {/* Result */}
                    <div>
                      <p className="font-mono text-xs text-muted mb-2 uppercase tracking-widest">Key Findings</p>
                      <p className="font-body text-sm text-muted-lt leading-relaxed">{cs.result}</p>
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div
                  className="flex flex-col items-center justify-center p-6 md:border-l border-border bg-bg/40"
                  style={{ borderLeftColor: 'rgba(255,255,255,0.06)' }}
                >
                  <p
                    className="font-display text-4xl font-bold"
                    style={{ color: cs.color }}
                  >
                    {cs.metric}
                  </p>
                  <p className="font-body text-muted text-xs text-center mt-1 leading-tight">
                    {cs.metricLabel}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
