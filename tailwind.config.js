/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#0b0b12',
        surface:   '#111120',
        raised:    '#181828',
        border:    '#22223a',
        amber:     '#f0a500',
        'amber-lt':'#f9c84a',
        warm:      '#eae4d8',
        muted:     '#5a5a72',
        'muted-lt':'#8888a8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':      'fadeUp 0.7s ease forwards',
        'fade-in':      'fadeIn 0.5s ease forwards',
        'line-grow':    'lineGrow 1s ease forwards',
        'pulse-amber':  'pulseAmber 2s ease-in-out infinite',
        'spin-slow':    'spin 12s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(28px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        lineGrow: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
        pulseAmber: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(240,165,0,0.0)' },
          '50%':      { boxShadow: '0 0 20px 4px rgba(240,165,0,0.15)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(240,165,0,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(240,165,0,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
      },
    },
  },
  plugins: [],
};
