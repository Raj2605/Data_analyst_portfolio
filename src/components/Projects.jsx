import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';


const PROJECTS = [
  {
    id: 'insurance',
    title: 'Insurance Claim Risk & Fraud Analysis',
    tagline: 'End-to-end fraud analytics on Azure SQL + Power BI',
    description:
      'Built a full fraud detection pipeline — cleaned CSV data via SQL, migrated to Azure SQL (PaaS), validated in SSMS, and delivered an interactive 4-page Power BI dashboard with DAX-based risk scoring (0–5 scale).',
    highlights: [
      'Fraud risk scoring model (0–5 scale)',
      'State-wise fraud heatmaps + demographic profiling',
      'Transaction-level drill-down investigation view',
      'Executive, Risk, Policy, and Transaction pages',
    ],
    kpis: ['1,000 Claims', '247 Fraud Cases', '24.7% Fraud Rate', '$15M Loss'],
    tech: ['SQL', 'Azure SQL', 'SSMS', 'Power BI', 'DAX', 'Data Modeling'],
    github: 'https://github.com/Raj2605/Insurance-Claims-Risk-Fraud-Analysis',
    images: [
      '/images/Insurance_Project_1.png',
      '/images/Insurance_Project_2.png',
      '/images/Insurance_Project_3.png',
      '/images/Insurance_Project_4.png',
    ],
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNmNmODM5MDQtMmY1Ni00NGM1LTg4N2MtMTEwNzRmNGQxYWI2IiwidCI6IjMzNzRlYzhlLWU5ZDItNGE3MS05MTFjLTY5YmZjN2EzOTIxYiJ9',
    accent: '#4fc3f7',
  },
  {
    id: 'nbfc',
    title: 'NBFCs Loan & Fraud Detection',
    tagline: 'Risk scoring + fraud flagging for loan applications',
    description:
      'Developed a data-driven pipeline to analyze 80K+ loan applications. Applied risk scoring logic to identify high-risk applicants, built customer segmentation models, and delivered interactive dashboards for loan monitoring.',
    highlights: [
      'Risk flag model for 80.9K applications',
      'Income-loan mismatch detection (10.31%)',
      'City-segment and demographic segmentation',
      'Fraud indicator breakdown by age & employment',
    ],
    kpis: ['80.9K Applications', '4.71bn Loan Amount', '9.73% Risk Exposure', '5,975 Mismatches'],
    tech: ['Python', 'SQL', 'Excel', 'Power BI', 'Pandas', 'Data Modeling'],
    github: 'https://github.com/Raj2605/NBFCs-Loan-and-Fraud-Detection',
    images: [
      '/images/Nbfc1.png',
      '/images/NBFC2.png',
      '/images/NBFC3.png',
      '/images/NBFC4.png',
    ],
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYmZmNzQ0YmMtY2Q5OC00MGU1LWFjYTktNGE0N2NkNjQ0YWMzIiwidCI6IjMzNzRlYzhlLWU5ZDItNGE3MS05MTFjLTY5YmZjN2EzOTIxYiJ9',
    accent: '#a78bfa',
  },
  {
    id: 'bechdel',
    title: 'Bechdel Test Data Analysis',
    tagline: 'Gender representation trends across 500 films',
    description:
      'Analyzed gender representation in cinema using the Bechdel Test framework. Processed movie datasets with Python (Pandas, Matplotlib, Seaborn) and built interactive Power BI dashboards revealing diversity trends.',
    highlights: [
      '500 films analyzed across genres & decades',
      'Bechdel pass/fail breakdown by genre & year',
      'IMDB rating comparison for passed vs failed',
      'Yearly trend from 1900–2020',
    ],
    kpis: ['500 Movies', '43.2% Passed', 'Avg 8.20 IMDB', '1900–2020 Range'],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Excel', 'Power BI'],
    github: 'https://github.com/Raj2605/Bechdel-Test-Analysis',
    images: ['/images/Bechdel_Test.png'],
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNzM2N2M5MjUtMDFiNS00MWE4LThiZDAtOWYyNDE3Mjk1ZDBjIiwidCI6IjMzNzRlYzhlLWU5ZDItNGE3MS05MTFjLTY5YmZjN2EzOTIxYiJ9',
    accent: '#34d399',
  },
];

/* ── Screenshot gallery (fallback / default) ── */
function ImageGallery({ images, title }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-video bg-raised overflow-hidden">
        <img
          src={images[active]}
          alt={`${title} screenshot ${active + 1}`}
          className="w-full h-full object-cover object-top transition-opacity duration-300"
          loading="lazy"
          onError={e => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling.style.display = 'flex';
          }}
        />
        <div
          className="absolute inset-0 items-center justify-center bg-raised"
          style={{ display: 'none' }}
        >
          <div className="text-center">
            <svg className="mx-auto text-muted mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6"/>
            </svg>
            <p className="text-muted text-xs font-mono">Dashboard Preview</p>
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-2 px-3 pb-2 overflow-x-auto">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 w-14 h-9 rounded border-2 overflow-hidden transition-all ${
                active === i ? 'border-amber' : 'border-border opacity-50 hover:opacity-80'
              }`}
              aria-label={`View screenshot ${i + 1}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Live Power BI embed ── */
function PowerBIEmbed({ url, accent }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-video bg-raised overflow-hidden">
      {/* Loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-raised z-10">
          <div
            className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: `${accent}44`, borderTopColor: accent }}
          />
          <p className="font-mono text-xs text-muted">Loading Power BI dashboard…</p>
        </div>
      )}
      <iframe
        title="Power BI Dashboard"
        src={url}
        className="w-full h-full border-0"
        allowFullScreen
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
      />
    </div>
  );
}

/* ── Toggle bar (Screenshots ↔ Live Dashboard) ── */
function ViewToggle({ hasEmbed, showEmbed, onToggle, accent }) {
  if (!hasEmbed) return null;

  return (
    <div className="flex items-center gap-1 p-1 bg-bg border border-border rounded-xl w-fit mb-0">
      <button
        onClick={() => onToggle(false)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-medium transition-all ${
          !showEmbed
            ? 'bg-raised text-warm shadow-sm'
            : 'text-muted hover:text-muted-lt'
        }`}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 9h6M9 12h6M9 15h4"/>
        </svg>
        Screenshots
      </button>
      <button
        onClick={() => onToggle(true)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-medium transition-all ${
          showEmbed
            ? 'text-white shadow-sm'
            : 'text-muted hover:text-muted-lt'
        }`}
        style={showEmbed ? { background: accent } : {}}
      >
        {/* Power BI icon */}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 3H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zM8 17H5v-5h3v5zm5 0h-3V7h3v10zm5 0h-3v-8h3v8z"/>
        </svg>
        Live Dashboard
        <span
          className="text-[10px] px-1.5 py-0.5 rounded font-mono"
          style={{ background: `${accent}22`, color: accent }}
        >
          interactive
        </span>
      </button>
    </div>
  );
}

/* ── Main project card ── */
function ProjectCard({ project, idx }) {
  const [showEmbed, setShowEmbed] = useState(false);
  const hasEmbed = Boolean(project.embedUrl);
  const isOdd = idx % 2 === 1;

  return (
    <article
      className="project-card reveal"
      style={{ transitionDelay: `${idx * 0.15}s` }}
    >
      <div className="grid lg:grid-cols-2 gap-0">

        {/* ── Media side ── */}
        <div className={`flex flex-col ${isOdd ? 'lg:order-2' : ''}`}>
          {/* Toggle sits right above the media */}
          {hasEmbed && (
            <div className="px-4 pt-4 pb-2">
              <ViewToggle
                hasEmbed={hasEmbed}
                showEmbed={showEmbed}
                onToggle={setShowEmbed}
                accent={project.accent}
              />
            </div>
          )}

          {showEmbed && hasEmbed ? (
            <PowerBIEmbed url={project.embedUrl} accent={project.accent} />
          ) : (
            <ImageGallery images={project.images} title={project.title} />
          )}

          {/* "Open in Power BI" link when embed is active */}
          {showEmbed && hasEmbed && (
            <div className="px-4 py-2 flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: project.accent }}
              />
              <p className="font-mono text-xs text-muted">
                Live — use slicers, filters & drill-through directly
              </p>
              <a
                href={project.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto font-mono text-xs hover:underline"
                style={{ color: project.accent }}
              >
                Open fullscreen ↗
              </a>
            </div>
          )}
        </div>

        {/* ── Content side ── */}
        <div className={`p-7 flex flex-col justify-between ${isOdd ? 'lg:order-1' : ''}`}>
          <div>
            <div className="w-8 h-0.5 rounded mb-4" style={{ background: project.accent }} />

            <h3 className="font-display text-2xl font-bold text-warm mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="font-mono text-xs mb-4" style={{ color: project.accent }}>
              {project.tagline}
            </p>
            <p className="font-body text-muted-lt text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-5">
              {project.highlights.map(h => (
                <li key={h} className="flex items-start gap-2.5 text-sm font-body text-muted-lt">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                  {h}
                </li>
              ))}
            </ul>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {project.kpis.map(kpi => (
                <div
                  key={kpi}
                  className="bg-bg/60 border border-border rounded-lg px-3 py-2 text-center"
                >
                  <p className="font-mono text-xs font-bold" style={{ color: project.accent }}>
                    {kpi}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map(t => (
                <span key={t} className="skill-tag text-xs">{t}</span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost rounded-xl px-4 py-2.5 text-sm font-body flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              View on GitHub
            </a>

            {/* Show "View Live Dashboard" button if embed exists but toggle is off */}
            {hasEmbed && !showEmbed && (
              <button
                onClick={() => setShowEmbed(true)}
                className="rounded-xl px-4 py-2.5 text-sm font-body flex items-center gap-2 transition-all"
                style={{
                  background: `${project.accent}15`,
                  border: `1px solid ${project.accent}40`,
                  color: project.accent,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zM8 17H5v-5h3v5zm5 0h-3V7h3v10zm5 0h-3v-8h3v8z"/>
                </svg>
                Try Live Dashboard
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-surface/40" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">05 · Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm">
            Projects that <span className="text-gradient italic">prove it</span>
          </h2>
          <div className="amber-line w-24 mt-3" />
          <p className="font-body text-muted-lt mt-4 max-w-xl">
            Each project is a real-world analytics problem solved end-to-end — from raw data to production dashboards.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

        {/* Footer link */}
        <div className="reveal mt-10 text-center">
          <a
            href="https://github.com/Raj2605/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost rounded-xl px-6 py-3 text-sm font-body inline-flex items-center gap-2"
          >
            See All Projects on GitHub
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}