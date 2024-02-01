/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-orange': '#e9ab53',
        'soft-red': '#f15e50',
        'off-white': '#fffdfa',
        'very-dark-blue': '#00001a',
        'dark-gray-blue': '#5d5f79',
        'grayish-blue': '#c5c6ce',
      },
    },
  },
  plugins: [],
};
