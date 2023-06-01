/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        xxs: "320px",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Code: [
          "source-code-pro",
          "Menlo",
          "Monaco",
          "Consolas",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        "banner-sm": "clamp( 2.25rem , 8vw + 0.75rem ,  3rem )",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
