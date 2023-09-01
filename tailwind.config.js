import("tailwindcss").Config;

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**.{js,ts,jsx,tsx}",
    "./components/**.{js,ts,jsx,tsx}",
    "./components/**/**.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./styles/globals.css",
    "./utils/*.{js,jsx,ts,tsx}",
    "./utils/**.{js,jsx,ts,tsx}",
    "./lib/*.{js,jsx,ts,tsx}",
    "./lib/**.{js,jsx,ts,tsx}",
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
        // ? Color Palettes
        primary: "#31dcff",
        primaryHover: "#4eb1ff",
        cta: "#fde047",
        // ? Light mode https://coolors.co/ffffff-f7f8fa-f3f4f6-10b981
        lightest: "#FFFFFF",
        lighter: "#F7F8FA",
        light: "#F3F4F6",
        medium: "#E5E7EB",
        dark: "#374151",
        darkest: "#1F2937",

        // ! Light mode

        // ? Dark mode https://coolors.co/1f1f1f-121212-0a0a0a-10b981x
        darkLighter: "#4B5563",
        darkMedium: "#1E293B",
        darkDarker: "#0F172A",
        // ! Dark mode

        // ? background colors for booleans

        success: "#16A34A", // green
        danger: "#EF4444", // red
        // ! Color Palettes
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
    ],
  },
};
