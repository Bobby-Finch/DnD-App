/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ["./src//*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {},
  plugins: [require("prettier-plugin-tailwindcss")],
};
