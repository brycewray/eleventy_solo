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
      blue: colors.blue
    },
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'Noto Sans', 'Segoe UI', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times', 'Times New Roman', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
  },
  variants: {},
  plugins: [], // if we add forms, do it here
}
