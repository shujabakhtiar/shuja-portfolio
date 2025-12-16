/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        // HERO
        'hero-h1': ['clamp(3rem, 11vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '1000' }],
        
        // NAVBAR
        // Scales from 24px on mobile to 40px on extra large screens
        'nav-logo': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }], 
        'nav-item': ['clamp(0.875rem, 2vw, 1rem)', { lineHeight: '1.2' }],

        // SECTIONS
        // H2: Scales from 56px (3.5rem) to 96px (6rem)
        'section-h2': ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '1' }],
        // H3: Scales from 40px (2.5rem) to 64px (4rem)
        'section-h3': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1' }],
        // H4: Scales from 20px (1.25rem) to 24px (1.5rem)
        'section-h4': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.2' }],

        // BODY TEXT
        'text-xl': ['clamp(1.1rem, 2vw, 1.25rem)', { lineHeight: '1.75' }],
        'text-lg': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.75' }],
        'text-md': ['1rem', { lineHeight: '1.5' }],
        'text-sm': ['0.875rem', { lineHeight: '1.25' }],
      },
      fontWeight: {
        'hero': '1000',
        'section': '700',
        'nav': '600',
        'body': '400',
        'body-strong': '500',
      },
      letterSpacing: {
        'tight-xl': '-0.02em',
        'tight-lg': '-0.01em',
        'normal': '0',
      },
      colors: {
        section: 'var(--bg-section)',
        surface: 'var(--bg-surface)',
        card: 'var(--bg-card)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        accent: {
          DEFAULT: 'var(--accent-primary)',
          soft: 'var(--accent-soft)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        }
      },
    },
  },
  plugins: [],
};
