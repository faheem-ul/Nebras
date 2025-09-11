

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        alyermook: ["AlYermook", "sans-serif"], 
        arabic: ["Arabic", "sans-serif"],
        kosans: ["KoSans", "sans-serif"],
        logirent: ["Logirent", "sans-serif"],
        cortoba: ["Cortoba", "sans-serif"],
      },
    },
  },
  plugins: [],
}
