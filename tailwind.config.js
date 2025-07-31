/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // ✅ enables dark mode using `class="dark"`
  theme: {
    extend: {
      colors: {
        dark: '#1e1e2f',
        surface: '#2a2a3b',
        primary: '#6366F1', // indigo-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
