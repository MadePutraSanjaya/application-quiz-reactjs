/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { padding: { DEFAULT: "15px" } },
    screens: {
      xs: "420px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: { DEFAULT: "#07E666" },
        secondary: { DEFAULT: "#DFFFC1" },
        accent: { DEFAULT: "#108A39" },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: { darkTheme: false },
};
