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
        "gradient2-to-r-custom": "linear-gradient(to right, #4EE1A0, #00C6FF)",
        "gradient-custom":
          "linear-gradient(180.8deg, rgb(66, 255, 132) -0.8%, rgb(124, 216, 255) 99%)",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
