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
        light: "#ffffff", // White
        dark: "#0f172a", // slate-900
        borderLight: "#eef2ff", // indigo-50 - borders
        borderDark: "#075985", // Sky-600 - borders
        secondaryLight: "#4338ca", // indigo-700 - buttons and cta text
        secondaryDark: "#0ea5e9", // sky-500 - buttons and cta
        hoverLight: "#4f46e5", // indigo-600 - button:hover
        hoverDark: "#38bdf8", // sky-400 - button:hover
        ringLight: "#a5b4fc", // indigo-300 - button ring (border)
        ringDark: "#7dd3fc", // sky-300 - button ring (border)
        success: "#0d9488", // teal-600
        danger: "#be123c", // rose-700
      },
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
  },
};
