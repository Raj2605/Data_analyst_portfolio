import React, { useState, useEffect, useCallback } from 'react';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');

  /* Scroll listener */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);

    // Highlight active section
    const sections = NAV_LINKS.map(l => l.href.slice(1));
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group"
          aria-label="Raj Jaiswar - Home"
        >
          <span className="w-8 h-8 rounded bg-amber flex items-center justify-center text-bg font-display font-bold text-sm select-none group-hover:scale-105 transition-transform">
            RJ
          </span>
          <span className="font-display font-semibold text-warm text-lg hidden sm:block tracking-wide">
            Raj Jaiswar
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={e => scrollTo(e, href)}
                className={`font-body text-sm font-medium transition-colors duration-200 relative pb-1 ${
                  active === href.slice(1)
                    ? 'text-amber'
                    : 'text-muted-lt hover:text-warm'
                }`}
              >
                {label}
                {active === href.slice(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-amber rounded" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:jaiswarraj635@gmail.com"
          className="hidden md:inline-flex btn-amber rounded-lg px-4 py-2 text-sm font-body"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 border-b border-border' : 'max-h-0'
        } bg-surface/95 backdrop-blur-md`}
      >
        <ul className="flex flex-col py-4 px-6 gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={e => scrollTo(e, href)}
                className={`block py-3 text-sm font-medium transition-colors ${
                  active === href.slice(1) ? 'text-amber' : 'text-muted-lt hover:text-warm'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="mailto:jaiswarraj635@gmail.com"
              className="block btn-amber rounded-lg px-4 py-2 text-sm text-center font-body"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
