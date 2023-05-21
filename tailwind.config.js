/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: "Dancing Script",
      },
      backgroundImage: {
        hero:"url(src/assets/img/Hero-bg.jpeg)", 
      },
    },
  },
  plugins: [],
};
