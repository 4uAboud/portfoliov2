import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'Georgia', 'serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        sand:  { DEFAULT: '#f7f3ee', 2: '#f0ebe3', 3: '#e8e0d4' },
        terra: { DEFAULT: '#c17d52', light: 'rgba(193,125,82,0.12)', dim: '#b36e43' },
        ink:   { DEFAULT: '#2b2520', 2: '#4a3f38', 3: '#7a6e66', 4: '#a89e97' },
        cream: '#fdfaf7',
      },
    },
  },
  plugins: [],
}
export default config
