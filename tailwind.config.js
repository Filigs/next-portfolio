import("tailwindcss").Config;

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**.{js,ts,jsx,tsx}",
    "./components/**.{js,ts,jsx,tsx}",
    "./components/**/**.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      keyframes: {
        "rotate-gradient": {
          "0%, 100%": {
            "background-position": "0% 49%",
          },
          "50%": {
            "background-position": "100% 52%",
          },
        },
      },
      animation: {
        "gradient-background": "rotate-gradient 30s ease infinite",
      },
      colors: {
        // Color Palettes
        cta: "#4327CE",
        ctaHover: "#5C43DB",

        //  Light mode https://coolors.co/ffffff-fafafa-f5f5f5-4327ce
        fillerDark: "#F5F5F5",
        fillerMedium: "#FAFAFA",
        light: "#FFFFFF",
        // ! Light mode

        // Dark mode https://coolors.co/1f1f1f-121212-0a0a0a-4327ce
        darkFillerLight: "#334155",
        darkFillerMedium: "#1E293B",
        dark: "#0F172A",
        // ! Dark mode

        // background colors for booleans

        success: "#56B389", // green
        danger: "#EB5E55", // red
        // ! Color Palettes
      },
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
  },
};
