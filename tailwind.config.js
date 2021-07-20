const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.11ty.js',
      './src/**/*.njk',
      './src/**/*.html'
    ],
  },
  darkMode: 'media',
  theme: {
    fontWeight: {
      normal: 400,
      bold: 625, // not default of 700
      black: 900,
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      blueGray: colors.blueGray,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      green: colors.green,
      teal: colors.teal,
      sky: colors.sky,
      blue: {
        '50': '#e6f9ff',
        '100': '#bbeeff',
        '200': '#00aaff',
        '300': '#0088ff',
        '400': '#0033ff',
        '500': '#0000ff',
        '600': '#0000bb',
        '700': '#0000aa',
        '800': '#000088',
        '900': '#000066',
      },
    },
    fontFamily: {
      'sans': ['Public Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'Noto Sans', 'Segoe UI', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times', 'Times New Roman', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
  },
  variants: {},
  plugins: [], // if we add forms, do it here
}
