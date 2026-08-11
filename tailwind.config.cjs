const { fontFamily } = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: "#3066FF", 500: "#3066FF" },
        yellow: { DEFAULT: "#F19937", 500: "#F19937" },
        red: { DEFAULT: "#EA4E3D", 500: "#EA4E3D" },
        green: { DEFAULT: "#67C23A", 500: "#67C23A" },
        sky: { DEFAULT: "#55A6F8", 500: "#55A6F8" },
        slate: { DEFAULT: "#64748B", 500: "#64748B" },
        dark: { DEFAULT: "#1E293B", 500: "#0F172A" },
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],        // Fuente principal
        roboto: ["Roboto", ...fontFamily.sans],       // Opcional
        barlow: ["Barlow Condensed", ...fontFamily.sans],
        quicksand: ["Quicksand", ...fontFamily.sans],
        bebas: ["Bebas Neue", ...fontFamily.sans],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 6s linear infinite alternate",
      },
    },
  },
  plugins: [],
});
