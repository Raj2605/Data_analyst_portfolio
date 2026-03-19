import React from 'react';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded bg-amber flex items-center justify-center text-bg font-display font-bold text-sm select-none">
                RJ
              </span>
              <span className="font-display font-semibold text-warm text-lg tracking-wide">Raj Jaiswar</span>
            </div>
            <p className="font-body text-sm text-muted leading-relaxed">
              Data Analyst · Pune, India<br />
              Turning data into decisions.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={e => scrollTo(e, href)}
                    className="font-body text-sm text-muted-lt hover:text-amber transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Connect</p>
            <div className="space-y-2">
              <a href="mailto:jaiswarraj635@gmail.com" className="block font-body text-sm text-muted-lt hover:text-amber transition-colors">
                jaiswarraj635@gmail.com
              </a>
              <a href="https://github.com/Raj2605/" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-muted-lt hover:text-amber transition-colors">
                github.com/Raj2605
              </a>
              <a href="https://www.linkedin.com/in/raj-jaiswar025/" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-muted-lt hover:text-amber transition-colors">
                linkedin.com/in/raj-jaiswar025
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted">
            © {year} Raj Jaiswar · All rights reserved
          </p>
          <p className="font-mono text-xs text-muted">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
