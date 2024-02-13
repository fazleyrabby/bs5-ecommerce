const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    //   'jquery': path.resolve(__dirname, 'node_modules/jquery'),
    //   'owl.carousel': path.resolve(__dirname, 'node_modules/owl.carousel'),
    //   'jquery': 'jquery/dist/jquery.slim.js',
    //   'owl.carousel': 'owl.carousel/dist/owl.carousel.js',
    //   'owl.carousel': 'owl.carousel/dist/owl.carousel.js'
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}