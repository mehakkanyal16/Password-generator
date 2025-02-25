/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",       // If using plain HTML
    "./src/**/*.{js,ts,jsx,tsx}", // If using React/Vite
    "./components/**/*.{js,ts,jsx,tsx}", // If using Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
