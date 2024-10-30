/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '3xs': "200px",
      '2xs': "350px",
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

