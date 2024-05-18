import heropatterns from "tailwindcss-hero-patterns";
import { topography } from "tailwindcss-hero-patterns/src/patterns";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    heroPatternsShades: ["400"],
    heroPatternsColors: ["blue"],
    heroPatternsOpacities: ["0", "100", "35", "50", "75"],
    heroPatterns: {
      topography: topography,
    },
    extend: {
      colors: {
        lgreen: "#606C38",
        dgreen: "#283618",
        primary: "#FEFAE0",
        dark: "#242424",
        lorage: "#DDA15E",
        dorange: "#DDA15E",
      },
      fontFamily: {
        RobotoSlab: ["Archivo Black", "sans-serif"],
      },
    },
  },
  plugins: [heropatterns, typography],
};
