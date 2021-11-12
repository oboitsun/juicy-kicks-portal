module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myBlack: "#3a3a3a",
        orange: "#FF8413",
        lime: "#bde407",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
