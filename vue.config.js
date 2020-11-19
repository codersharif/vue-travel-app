/*module.exports = {
  pwa: {
      workboxOptions: {
        exclude: [/_redirects/]
      }
    }
}*/

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-travel-app/'
    : '/'
}
