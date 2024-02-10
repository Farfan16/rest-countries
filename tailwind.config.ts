import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        DarkBlueDM: "hsl(209, 23%, 22%)",
        VeryDarkBlueDM: "hsl(207, 26%, 17%)",
        VeryDarkBlueLM: "hsl(200, 15%, 8%)",
        DarkGrayLM: "hsl(0, 0%, 52%)",
        VeryLightGrayLM: "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)",
      },
      keyframes: {
        "spin-disolve": {
          "0%": { transform: "rotate(0deg)", opacity: "1" },
          "30%": { transform: "rotate(10deg)", opacity: "1" },
          "100%": { transform: "rotate(180deg)", opacity: "0" },
        },
        "spin-appear": {
          "0%": { transform: "rotate(180deg)", opacity: "0" },
          "30%": { transform: "rotate(170deg)", opacity: "0" },
          "100%": { transform: "rotate(0deg)", opacity: "1" },
        },
        dissolve: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "spin-dissolve": "spin-disolve .1s ease-in 1 forwards",
        "spin-appear": "spin-appear .1s ease-in 1 forwards",
        dissolve: "dissolve .1s ease-in 1 forwards",
        appear: "appear .1s ease-in 1 forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
