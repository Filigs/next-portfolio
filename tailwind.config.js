import("tailwindcss").Config;
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**.js",
    "./components/**.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
