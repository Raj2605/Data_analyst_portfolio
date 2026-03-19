import React, { useEffect, useRef, useState } from 'react';

const ROLES = ['Data Analyst', 'SQL Developer', 'Power BI Builder', 'Insight Storyteller'];

/* ── tiny SVG data-viz decoration ── */
const DataDecoration = () => (
  <svg
    viewBox="0 0 440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full opacity-80"
    aria-hidden="true"
  >
    {/* Grid lines */}
    {[0,80,160,240,320].map(y => (
      <line key={y} x1="0" y1={y} x2="440" y2={y} stroke="rgba(240,165,0,0.07)" strokeWidth="1"/>
    ))}
    {[0,88,176,264,352,440].map(x => (
      <line key={x} x1={x} y1="0" x2={x} y2="320" stroke="rgba(240,165,0,0.07)" strokeWidth="1"/>
    ))}

    {/* Bar chart */}
    {[
      { x: 32,  h: 120, delay: '0s'   },
      { x: 88,  h: 180, delay: '0.1s' },
      { x: 144, h: 90,  delay: '0.2s' },
      { x: 200, h: 220, delay: '0.3s' },
      { x: 256, h: 150, delay: '0.4s' },
      { x: 312, h: 200, delay: '0.5s' },
      { x: 368, h: 260, delay: '0.6s' },
    ].map(({ x, h, delay }) => (
      <rect
        key={x}
        x={x} y={320 - h} width="40" height={h}
        rx="4"
        fill="url(#barGrad)"
        style={{
          transformOrigin: `${x + 20}px 320px`,
          animation: `growBar 1.2s ease ${delay} both`,
        }}
      />
    ))}

    {/* Line chart overlay */}
    <polyline
      points="52,200 108,140 164,230 220,100 276,170 332,120 388,60"
      stroke="#f0a500"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="500"
      strokeDashoffset="500"
      style={{ animation: 'drawLine 1.8s ease 0.3s forwards' }}
    />

    {/* Dots */}
    {[
      [52,200],[108,140],[164,230],[220,100],[276,170],[332,120],[388,60]
    ].map(([cx,cy], i) => (
      <circle
        key={i} cx={cx} cy={cy} r="4"
        fill="#f0a500"
        style={{ animation: `fadeIn 0.3s ease ${0.3 + i * 0.2}s both` }}
      />
    ))}

    <defs>
      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="rgba(240,165,0,0.5)" />
        <stop offset="100%" stopColor="rgba(240,165,0,0.05)" />
      </linearGradient>
    </defs>

    <style>{`
      @keyframes growBar  { from { transform:scaleY(0); opacity:0; } to { transform:scaleY(1); opacity:1; } }
      @keyframes drawLine { to   { stroke-dashoffset: 0; } }
      @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
    `}</style>
  </svg>
);

export default function Hero() {
  const [roleIdx, setRoleIdx]       = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible]       = useState(false);

  /* Mount fade-in */
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  /* Typewriter effect */
  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIdx]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-100"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">

        {/* ── Left: Text ── */}
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Label */}
          <p className="section-label mb-6">
            <span className="text-amber">▸</span> Available for work · Pune, India
          </p>

          {/* Name */}
          <h1 className="font-display font-bold leading-none mb-4">
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-warm tracking-tight">
              Raj
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-gradient tracking-tight">
              Jaiswar
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="h-9 flex items-center mb-6">
            <span className="font-mono text-lg sm:text-xl text-amber-lt tracking-wider">
              {displayed}
              <span className="cursor-blink text-amber ml-0.5">|</span>
            </span>
          </div>

          {/* Bio */}
          <p className="font-body text-muted-lt text-base sm:text-lg leading-relaxed max-w-lg mb-10">
            Transforming raw data into clear, actionable insights using{' '}
            <span className="text-warm font-medium">SQL</span>,{' '}
            <span className="text-warm font-medium">Power BI</span>, and{' '}
            <span className="text-warm font-medium">Python</span>. I build dashboards that tell stories — not just display numbers.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="btn-amber rounded-xl px-6 py-3 text-sm font-body inline-flex items-center gap-2"
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="mailto:jaiswarraj635@gmail.com"
              className="btn-ghost rounded-xl px-6 py-3 text-sm font-body inline-flex items-center gap-2"
            >
              Contact Me
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M1.5 5l6.5 4.5L14.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://github.com/Raj2605/"
              target="_blank" rel="noopener noreferrer"
              className="text-muted hover:text-warm transition-colors"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/raj-jaiswar025/"
              target="_blank" rel="noopener noreferrer"
              className="text-muted hover:text-warm transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <div className="h-px flex-1 max-w-[60px] bg-border" aria-hidden="true" />
            <span className="font-mono text-xs text-muted">jaiswarraj635@gmail.com</span>
          </div>
        </div>

        {/* ── Right: Data Viz Decoration ── */}
        <div
          className={`hidden md:block transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          aria-hidden="true"
        >
          <div className="relative">
            {/* Card frame */}
            <div className="rounded-2xl border border-border bg-surface/60 p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="font-mono text-xs text-muted ml-auto">fraud_analysis.pbix</span>
              </div>
              <DataDecoration />
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: 'Claims',     value: '1,000' },
                  { label: 'Fraud Rate', value: '24.7%' },
                  { label: 'Loss ($)',   value: '15M'    },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-raised/80 rounded-lg p-3 text-center border border-border">
                    <p className="font-mono text-amber text-lg font-bold">{value}</p>
                    <p className="font-body text-muted text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-amber rounded-xl px-3 py-2 shadow-lg">
              <p className="font-mono text-bg text-xs font-bold">Power BI</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-surface border border-border rounded-xl px-3 py-2 shadow-lg">
              <p className="font-mono text-amber-lt text-xs">SQL + Python</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <span className="font-mono text-muted text-xs tracking-widest">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-amber to-transparent animate-pulse" />
      </div>
    </section>
  );
}
