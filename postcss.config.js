const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './**/*.njk',
    './**/*.11ty.js',
    './**/*.html'
  ]
})

module.exports = {
  plugins: [
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ],
}