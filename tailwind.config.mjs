/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        purple: {
          DEFAULT: '#9E00FF',
          50: '#5700FF',
          60: '#7833FF',
          70: '#9A66FF',
          80: '#BC99FF',
          90: '#DDCCFF',
          95: '#EEE5FF',
          97: '#F5F0FF',
          99: '#FCFAFF',
        },

        peach: {
          85: '#E1DBD1',
          90: '#EBE7E0',
          92: '#EEEBE5',
          95: '#F5F3F0',
          96: '#F7F6F3',
          97: '#F9F8F6',
          98: '#FBFAF9',
          99: '#FDFDFC',
        },

        gray: {
          10: '#1A1A1A',
          20: '#333333',
          30: '#4D4D4D',
          40: '#666666',
          50: '#808080',
          60: '#999999',
          70: '#B3B3B3',
          80: '#CCCCCC',
        },

        green: '#5EDC11',

        yellow: '#FFCE22',

        orange: '#FF7222',

        pink: '#FF22E9',

        blue: '#2260FF',
      },
    },
  },
  plugins: [],
};
