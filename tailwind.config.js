const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "passion-one": ["var(--font-passion-one)", ...fontFamily.sans],
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
