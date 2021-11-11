module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: "#e8b72c",
        myBlack: "#3a3a3a",
        turf: "#AD9D68",
        darkTurf: "#8a7c4e",
        lime: "#bde407",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
