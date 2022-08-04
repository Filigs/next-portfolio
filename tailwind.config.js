import("tailwindcss").Config;

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**.js",
    "./components/**.js",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
