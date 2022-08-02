import("tailwindcss").Config;
module.exports = {
  darkMode: "media",
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
