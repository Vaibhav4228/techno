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
        TechnoSky: "#C3EBFA",
        TechnoSkyLight: "#EDF9FD",
        TechnoPurple: "#CFCEFF",
        TechnoPurpleLight: "#F1F0FF",
        TechnoYellow: "#FAE27C",
        TechnoYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
