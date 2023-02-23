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
    "./utils/*.{js,jsx,ts,tsx}",
    "./utils/**.{js,jsx,ts,tsx}",
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
        primary: "#10B981",
        primaryHover: "#34d399",
        cta: "#fde047",
        //  Light mode https://coolors.co/ffffff-f7f8fa-f3f4f6-10b981
        fillerDark: "#F5F5F5",
        fillerMedium: "#FAFAFA",
        light: "#FFFFFF",
        // ! Light mode

        // Dark mode https://coolors.co/1f1f1f-121212-0a0a0a-10b981x
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
