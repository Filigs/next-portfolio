import("tailwindcss").Config;
module.exports = {
  content: ["./pages/**.js", "./components/**.js"],
  theme: {
    extend: {
      spacing: {
        "50p": "50%",
      },
    },
  },
  plugins: [],
};
