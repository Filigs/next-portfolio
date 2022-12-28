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
        // // // Palette https://colorhunt.co/palette/7900ff548cff93ffd8cfffdc - light

        // // text

        light: "#ffffff", // White
        dark: "#0f172a", // slate-900

        // // layout

        // Backgrounds

        backgroundLight: "#CFFFDC", // mint(lighter)
        backgroundDark: "",

        // CTA

        ctaLight: "#7900FF", // indigo(medium)
        ctaDark: "#eab308", // yellow-500

        // Borders

        borderLight: "#93FFD8", // mint(darker)
        borderDark: "#075985", // Sky-600

        // // Buttons & CTA

        buttonLight: "#548CFF", // sky(darker)
        buttonDark: "#0ea5e9", // sky-500

        // ::hover

        hoverLight: "#0ea5e9", // sky-300
        hoverDark: "#38bdf8", // sky-400

        // Button ring

        ringLight: "#7900FF", // indigo(medium)
        ringDark: "#7dd3fc", // sky-300

        // background colors for booleans

        success: "#0d9488", // teal-600
        danger: "#be123c", // rose-700
      },
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
  },
};
