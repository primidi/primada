const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Yeseva One'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: '1.2rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '4.5rem',
        '2xl': '6rem',
        '3xl': '12rem',
      },
      colors: {
        gray: {
          700: '#333',
          600: '#4F4F4F',
          500: '#828282',
          400: '#BDBDBD',
          300: '#E0E0E0',
          200: '#F2F2F2',
        },
      },
      keyframes: {
        'slide-right': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
            filter: 'blur(5px)',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: 1,
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
            filter: 'blur(5px)',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: 1,
          },
        },
      },
      animation: {
        'slide-right': 'slide-right 1.5s ease-in-out',
        'slide-left': 'slide-left 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
