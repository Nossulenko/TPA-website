/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,css}", // Added css
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css}", // Added css
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}", // Added css
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}", // Added css
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
        grey1: "#ECEBE9",
        greybg: "#F0F0EF",
        blue1: "#134074",
        lightRed: "#ff0000",
        lightWhite: "#EEEADB",
        black: "#0C0C0C",
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "14rem",
        "12xl": "44rem",
      },
      spacing: {},
      translate: {
        30: "7.25rem",
      },
      fontFamily: {
        workSans: ['"Work Sans"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 10px 0 #FECF4F",
        glow1: "0 0 10px 0 #c79d2a",
      },
      position: ["responsive", "sticky"],
      screens: {
        "xs":'321px',
        "k":'1536px',
        "2k": "1921px",
        "2k1": "2000px",
        "2k2": "2299px",
        "2k3": "2500px",
        "2k4": "2800px",
        "2k5": "3100px",
        "2k6": "3500px",
        "2k7": "4000px",
        "2k8": "4400px",
        "2k9": "4800px",
        "4k": "2560px",
        "5k": "3840px",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  purge: [
    "./src/**/*.{js,ts,jsx,tsx,md,mdx,css}", // Replace "content:" with "purge:" 
  ],
};
