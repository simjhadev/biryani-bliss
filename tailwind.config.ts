import type { Config } from "tailwindcss";
import colors  from "tailwindcss/colors";
//const colors = require('tailwindcss/colors')

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
    },
    colors: {
      'primary': colors.yellow[950],
      'secondary': '#6D2932',
      'primaryLite': colors.gray[50],
      'secondaryLite':'#E8D8C4',
      'primaryText': colors.yellow[600],
      'secondaryText': colors.yellow[800],
      'buttonBg': colors.orange[500],
      'white': colors.white,
      'black': colors.black,
      'gray': colors.gray,
    },
    fontFamily: {
      sans: ['var(--font-barlow-condensed)'],
      mont: ['var(--font-montserrat)'],
    },
  },
  plugins: [],
};
export default config;
