import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep black / charcoal base
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#141414',
        'bg-tertiary': '#1a1a1a',
        
        // Surface colors
        'surface': '#1f1f1f',
        'surface-hover': '#282828',
        
        // Purple/Violet accent
        'accent-purple': '#9333ea',
        'accent-purple-glow': '#a855f7',
        'accent-purple-dark': '#6b21a8',
        
        // Muted colors
        'muted': '#6b7280',
        'muted-dark': '#4b5563',
        
        // Highlight colors
        'highlight': '#f9fafb',
        'highlight-dim': '#e5e7eb',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'Inter', 'sans-serif'],
        'minecraft': ['"Press Start 2P"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #9333ea, 0 0 10px #9333ea' },
          '100%': { boxShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #9333ea' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
