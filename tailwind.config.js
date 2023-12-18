/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "my-color-orange": "#E8B872",
        "my-color-lime": "#8DA959",
        "my-color-green": "#4AAE51",
      },
    },
  },
  plugins: [],
};
