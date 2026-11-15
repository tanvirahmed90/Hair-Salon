/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          hover: 'hsl(18 48% 60% / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface) / <alpha-value>)',
          raised: 'hsl(var(--surface-raised) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--surface-raised) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        terracotta: 'hsl(18 42% 55%)',
        pearl: 'hsl(38 18% 90%)',
      },
      fontFamily: {
        headline: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.16em',
        wordmark: '0.2em',
      },
      boxShadow: {
        'terracotta-glow': '0 0 18px hsl(18 42% 55% / 0.16)',
        'terracotta-intense': '0 0 28px hsl(18 42% 55% / 0.28)',
      },
    },
  },
  plugins: [],
}
