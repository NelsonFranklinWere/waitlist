import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // OCH brand colors
        och: {
          blue: '#1e3a8a', // Navy Blue (primary)
          'blue-light': '#3b82f6', // Light Blue
          'blue-dark': '#1e3a8a', // Navy Blue (same as primary)
        },
        // Cybersecurity theme colors - Navy Blue, White, Black
        cyber: {
          dark: '#000000',
          'dark-2': '#0a0a0a',
          'dark-3': '#1a1a1a',
          navy: '#1e3a8a',
          'navy-light': '#3b82f6',
          'navy-dark': '#1e40af',
          white: '#ffffff',
          'white-dim': '#e5e7eb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'glow-pulse-slow': 'glow-pulse 3s ease-in-out infinite',
        'scan-line': 'scan-line 3s linear infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'grid-pulse': 'grid-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'grid-pulse': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
export default config


