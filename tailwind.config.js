/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "green-bg": "#72BF78",
        "green-text-color": "#fcf47e",
        "green-bg-two": "#A0D683",
        "green-bg-three": "#D3EE98",
      },
      // cursor: {
      //   "custom-cursor": 'url("./assets/hand-pointer.png"), auto',
      // },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
