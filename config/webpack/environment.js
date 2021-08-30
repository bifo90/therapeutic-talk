const { environment } = require('@rails/webpacker')


environment.loaders.append('scss', {
    test: /\.scss/,
    use: [{loader: 'import-glob-loader'}]
  })
  module.exports = environment