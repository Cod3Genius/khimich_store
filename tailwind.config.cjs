/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
/*module.exports = {
  content: ["./src.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};*/


module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        'custom-pink': '#ffb5ca', // Define un color rosa personalizado
      },
      backgroundImage: {
        'gradient-pink-white': 'linear-gradient(to bottom, #ffffff, theme("colors.custom-pink"))', // Usa el color personalizado en el degradado
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};