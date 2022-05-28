const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./constants/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        xs: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      ...defaultTheme.screens,
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      // '3xl': '1536px',
      // '4xl': '1920px',
    },
    fontFamily: {
      "sans-thin": ['Gilroy-Light', 'sans-serif', 'system-ui'],
      "sans-regular": ['Gilroy-Regular', 'sans-serif', 'system-ui'],
      "sans-medium": ['Gilroy-Medium', 'sans-serif', 'system-ui'],
      "sans-semibold": ['Gilroy-SemiBold', 'sans-serif', 'system-ui'],
      "sans-bold": ['Gilroy-Bold', 'sans-serif', 'system-ui'],
      "sans-extrabold": ['Gilroy-ExtraBold', 'sans-serif', 'system-ui'],
      "sans-black": ['Gilroy-Black', 'sans-serif', 'system-ui']
    },
    extend: {
      height: {
        '0.25': '1px'
      },
      width: {
        '0.25': '1px'
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '17': '17px',
        '18': '18px',
        '19': '19px',
        '20': '20px',
        '24': '24px'
      },
      colors: colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    // styled: false,
    base: false,
    themes: [
      {
        'mytheme': {
          ...colors
        }
      }
    ],
  },
}
