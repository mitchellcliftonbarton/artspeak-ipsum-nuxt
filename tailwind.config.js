module.exports = {
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      red: 'red',
      grey: '#cacaca'
    },
    fontFamily: {
      'nm': ['Neue Montreal', 'Helvetica', 'sans-serif'],
      'telegraf': ['Telegraf', 'Helvetica', 'sans-serif'],
    },
    fontSize: {
      'level-body': ['1.2rem', '1.2']
    },
    flex: {
      '0-0': '0 0 auto',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  }
}
