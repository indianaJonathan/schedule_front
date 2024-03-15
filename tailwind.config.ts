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
        scheduler: {
          50: "#EFEFEF",
          100: "#D9D9D9",
          200: "#909090",
          300: "#797979",
          400: "#404040",
          500: "#303030",
          600: "#222222",
          blue: {
            500: "#2E7DF3",
            200: "#5FCEF1",
          },
          red: "#EC8585",
          yellow: "#C19A6B",
        }
      }
    },
  },
  plugins: [],
};
export default config;
