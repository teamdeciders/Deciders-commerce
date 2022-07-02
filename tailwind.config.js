/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
     "primary":"#46BCF2",
     "success":"#16C79A",
     "danger":"#ef4f4f",
     "warning":"#F6C065",
     "info":"#008891",
     "textHeading":"#1b1b1b",
     "textBody":"#7e7e7e",
     "brandColor1":"#81B13D",
     "brandColor2":"#FDC040",
     "brand1":"#5B9D34",
     "scale1":"#81B13D",
     "scale2":"#3A882B",
     "scale3":"#227226",
     "scale4":"#1A5D2C",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ["Open Sans"],
      'lato':["lato"]
    }
  },
  plugins: [],
  
}
