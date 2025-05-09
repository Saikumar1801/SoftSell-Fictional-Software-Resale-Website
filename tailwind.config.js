// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}', // If you were to use a components folder
    './app/**/*.{js,ts,jsx,tsx,mdx}',     // Crucial for App Router
  ],
  darkMode: 'class', // THIS IS CRITICAL for theme toggle
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60A5FA', // blue-400
          DEFAULT: '#3B82F6', // blue-500
          dark: '#2563EB',  // blue-600
        },
        secondary: {
          light: '#34D399', // emerald-400
          DEFAULT: '#10B981', // emerald-500
          dark: '#059669',  // emerald-600
        },
        // Dark mode background and text colors
        darkbg: '#111827', // gray-900
        darkbg2: '#1F2937', // gray-800
        darktext: '#F3F4F6', // gray-100
        darktext2: '#D1D5DB', // gray-300
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};