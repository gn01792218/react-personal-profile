/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      dropShadow:{
        'hero':'-5px -5px 1px #535d5b',
      },
      colors: {
        'primary': {
          DEFAULT: '#202a28',
          'light': '#d4d6d6',
          100: '#d4d6d6',
          200: '#a9aead',
          300: '#7e8584',
          400: '#535d5b',
          500: '#283432',
          600: '#202a28',
          700: '#181f1e',
          800: '#101514',
          900: '#080a0a',
          'dark': '#080a0a',
        },
        'secondary': {
          DEFAULT:'#0d283b',
          'light':'#cfd4d8',
          100:'#cfd4d8',
          200:'#9ea9b1',
          300:'#6e7e89',
          400:'#3d5362',
          500:'#0d283b',
          600:'#0a202f',
          700:'#081823',
          800:'#051018',
          900:'#03080c',
          'dark':'#03080c'
        },
        'success': {
          DEFAULT:'#26b96d',
          'light':'#d4f1e2',
          100:'#d4f1e2',
          200:'#a8e3c5',
          300:'#7dd5a7',
          400:'#51c78a',
          500:'#26b96d',
          600:'#1e9457',
          700:'#176f41',
          800:'#0f4a2c',
          900:'#082516'
        },
        'acent': {
          DEFAULT:'#f4d594',
          'light':'#fdf7ea',
          100:'#fdf7ea',
          200:'#fbeed4',
          300:'#f8e6bf',
          400:'#f6dda9',
          500:'#f4d594',
          600:'#c3aa76',
          700:'#928059',
          800:'#62553b',
          900:'#312b1e',
          'dark':'#312b1e'
        },
        'alert':'#d518aa',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode:"class"
}
