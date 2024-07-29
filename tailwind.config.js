/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#151515",
        green: "#4EE1A0",
        "black-light": "#242424",
        gray: "#D9D9D9",
        white: "#D9D9D9",
      },
      backgroundImage: {
        "gradient-to-r-custom": "linear-gradient(to right, #4EE1A0, #A1F3D5)",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
