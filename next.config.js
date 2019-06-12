const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withImages(
  withSass(
    withCSS({
      sassLoaderOptions: {
        includePaths: []
      },
    })
  )
)