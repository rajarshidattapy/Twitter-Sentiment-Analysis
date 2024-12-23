/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-green-500',
    'text-red-500',
    'text-green-600',
    'text-red-600',
    'bg-green-500',
    'bg-red-500',
  ],
};