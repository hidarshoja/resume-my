/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'system-ui', 'sans-serif'],
        space: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: '#0a0a0f',
        darker: '#050508',
        light: '#f8f8fc',
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
        },
        accent: {
          DEFAULT: '#22d3ee',
          2: '#f472b6',
        },
        gold: '#fbbf24',
      },
    },
  },
  plugins: [],
}
