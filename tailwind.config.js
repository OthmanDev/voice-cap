export default {
  darkMode: 'class',
  content: ['./src/**/*.{vue,js}'],
  theme: {
    fontFamily: {
      main: ['Space Grotesk', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#321CA4',
        },
        white: {
          100: '#FFF',
        },
        heading: {
          100: '#111',
        },
        border: {
          100: '#E4E4E7',
        },
        danger: {
          100: '#FB323F',
        },
        info: {
          100: '#03A9F4',
        },
        warning: {
          100: '#FFAB00',
        },
        success: {
          100: '#00AB66',
        },
      },
    },
  },
  plugins: [],
}
