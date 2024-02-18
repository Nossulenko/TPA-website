/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, #FECF4F 48%, rgba(255, 255, 255, 0))",
      }),
      colors: {
        yellow: "#FECF4F",
        darkYellow: "#c79d2a",
        lightYellow: "#fada82",
        grey1:"#ECEBE9"
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "14rem",
        "12xl": "44rem",
      },
    },
  },
  plugins: [],
};
