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
  ],
  theme: {
    extend: {
      colors: {
        // // //  Light mode https://coolors.co/ffffff-f8f7fa-f3f2f5-4327ce
        cta: "#4327CE",
        ctaHover: "#5C43DB",
        fillerDark: "#F3F2F5",
        fillerMedium: "#F8F7FA",
        light: "#FFFFFF",
        // ! Light Palete

        // // // Dark mode https://coolors.co/1f1f1f-121212-0a0a0a-4327ce
        darkCta: "#4327CE",
        darkCtaHover: "#5C43DB",
        darkFillerLight: "#1F1F1F",
        darkFillerMedium: "#121212",
        dark: "#0A0A0A",
        // ! Dark Palette

        // background colors for booleans

        success: "#56B389", // green
        danger: "#EB5E55", // red
      },
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
  },
};
