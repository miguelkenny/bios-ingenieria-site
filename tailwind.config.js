import flowbitePlugin from 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte}",
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        clashg: ['Clash Grotesk', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        DarkBlue: '#070978',
        Blue: '#05A1E8',
        LightBlue: '#DFF1FF',
        Gray: '#808080',
        Black: '#202020',
        LightGray: '#D5EEFF',
      }
    },
  },
  plugins: [flowbitePlugin],
}

