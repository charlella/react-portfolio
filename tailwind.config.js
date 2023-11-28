/** @type {import('tailwindcss').Config} */
module.exports = {
  // React : add jsx
  content: ["./src/**/*.{html,js,jsx}"],
  //  jit or just-in-time compiler for Tailwind CSS that generates your styles on-demand as you author your templates instead of generating everything in advance at initial build time.
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        // Custom colors
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
        person1small: "url('./assets/person-1-small.png')",
        person2small: "url('./assets/person-2-small.png')",
        person3small: "url('./assets/person-3-small.png')",
      },
    },
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
      xl: "2560px"
    },
  },
  plugins: [],
};
