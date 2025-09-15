

/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        alyermook: ["AlYermook", "sans-serif"],
        arabic: ["Arabic", "serif"],
        kosans: ["KoSans", "sans-serif"],
        logirent: ["Logirent", "sans-serif"],
        cortoba: ["Cortoba", "serif"],
      },
      colors: {
        darkGray: "#393C3D",
        green: "#016938",
        customBlack: "#070808",
      }
    }
  },
  plugins: [],
};
