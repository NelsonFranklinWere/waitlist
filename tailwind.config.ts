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
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config


