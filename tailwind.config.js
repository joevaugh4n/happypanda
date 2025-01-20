/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/stories/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Rethink Sans",
      },
      backgroundImage: {
        "header-bg": "url('/assets/strawberries.webp')",
      },
      colors: {
        "kfk-red": "rgb(217, 0, 0)",
        black: "#0A0A0A",
        "lucky-yellow": "#ffb200",
        white: "#ffffff",
        platinum: "#e8e8e8",
        blue: "#FAF3E0",
      },
    },
  },
  plugins: [],
};
