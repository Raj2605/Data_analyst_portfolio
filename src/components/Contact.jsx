import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SOCIAL = [
  {
    name: 'GitHub',
    url: 'https://github.com/Raj2605/',
    handle: '@Raj2605',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/raj-jaiswar025/',
    handle: 'raj-jaiswar025',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:jaiswarraj635@gmail.com',
    handle: 'jaiswarraj635@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    // Opens default mail client with pre-filled fields
    const mailto = `mailto:jaiswarraj635@gmail.com?subject=${encodeURIComponent(
      form.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Hi Raj,\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`
    )}`;
    window.location.href = mailto;
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">06 · Let's Talk</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm">
            Start a <span className="text-gradient italic">conversation</span>
          </h2>
          <div className="amber-line w-24 mt-3" />
          <p className="font-body text-muted-lt mt-4 max-w-lg">
            Open to analyst roles, freelance projects, and data consulting. If you have data that needs to make sense — I'd love to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10">

          {/* ── Form ── */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-xs text-muted mb-2 uppercase tracking-widest" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name" name="name" type="text"
                    required
                    placeholder="Your full name"
                    className="form-input"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-muted mb-2 uppercase tracking-widest" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email" name="email" type="email"
                    required
                    placeholder="you@company.com"
                    className="form-input"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-xs text-muted mb-2 uppercase tracking-widest" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject" name="subject" type="text"
                  placeholder="e.g. Analyst Role — Freelance Project"
                  className="form-input"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block font-body text-xs text-muted mb-2 uppercase tracking-widest" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message" name="message"
                  required rows={6}
                  placeholder="Tell me about the project, role, or opportunity…"
                  className="form-input resize-none"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-amber rounded-xl px-7 py-3 text-sm font-body flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity=".3"/>
                      <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    Opening mail…
                  </>
                ) : status === 'sent' ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Message Ready!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

              <p className="font-body text-xs text-muted">
                This opens your mail client with the message pre-filled.
              </p>
            </form>
          </div>

          {/* ── Side: Contact info ── */}
          <div className="reveal reveal-delay-2 space-y-5">
            {/* Quick response card */}
            <div className="bg-surface border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="font-body text-sm text-warm font-medium">Available for opportunities</p>
              </div>
              <p className="font-body text-sm text-muted-lt leading-relaxed">
                Looking for analyst roles, freelance projects, and data consulting work. Response time: typically within 24 hours.
              </p>
            </div>

            {/* Social links */}
            <div className="bg-surface border border-border rounded-2xl p-6 space-y-4">
              <p className="section-label">Find Me Online</p>
              {SOCIAL.map(({ name, url, handle, icon }) => (
                <a
                  key={name}
                  href={url}
                  target={url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:text-amber transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-raised border border-border flex items-center justify-center text-muted group-hover:border-amber/30 group-hover:text-amber transition-all">
                    {icon}
                  </span>
                  <div>
                    <p className="font-body text-warm text-sm font-medium group-hover:text-amber transition-colors">
                      {name}
                    </p>
                    <p className="font-mono text-xs text-muted">{handle}</p>
                  </div>
                  <svg className="ml-auto w-4 h-4 text-muted group-hover:text-amber transition-colors" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Location card */}
            <div className="bg-surface border border-border rounded-2xl p-5 flex items-center gap-4">
              <span className="text-amber flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </span>
              <div>
                <p className="font-body text-warm text-sm font-medium">Pune, Maharashtra</p>
                <p className="font-body text-muted text-xs">India · Open to remote & hybrid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
