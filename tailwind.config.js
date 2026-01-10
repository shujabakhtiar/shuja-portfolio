/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo", "sans-serif"],
        display: ["Archivo", "sans-serif"],
        hero: ["Archivo", "sans-serif"], 
      },
      fontSize: {
        // HERO
        // Renaming to hero-title to force refresh. Standard clamp syntax.
        'hero-title': ['clamp(2.5rem, 11vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        
        // NAVBAR
        'nav-logo': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }], 
        'nav-item': ['clamp(0.875rem, 2vw, 1rem)', { lineHeight: '1.2' }],

        // SECTIONS
        'section-h2': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '1' }],
        'section-h3': ['clamp(1.75rem, 5vw, 4rem)', { lineHeight: '1' }],
        'section-h4': ['clamp(1.1rem, 2vw, 1.5rem)', { lineHeight: '1.2' }],
       
        // BODY TEXT
        'text-xl': ['clamp(1.1rem, 2vw, 1.25rem)', { lineHeight: '1.75' }],
        'text-base-large':['clamp(1rem,0.8571rem + 0.7143vi,1.5rem)',{lineHeight: '1.75'}],
        'text-base':['clamp(1rem,0.9286rem + 0.3571vi,1.25rem)',{lineHeight: '1.75'}],
        'text-lg':['clamp(1rem,0.9286rem + 0.3571vi,1.25rem)',{lineHeight: '1.75'}],
        'text-md': ['1rem', { lineHeight: '1.5' }],
        'text-sm': ['0.875rem', { lineHeight: '1.25' }],
      },
      fontWeight: {
        'hero': '900', // Adjusted from 1000 to 900 for standard font support
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
