/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#000000",
      headerBg: "#222222",
      mainBg: "#161513",
      footerBg: "#191919",
      cardBg: "#2A2A2A",
      whiteSec: "#FDFDFD",
      orange: "#FF8660",
      purple: "#9A33FF",
      orangeDark: "#D5491D",
      blue: "#5BADFF",
      blueDark: "#1373D1",
      secText: "#C5C5C5",
    },
  },
  plugins: [],
};
