const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, '/index.html'),
        cart: path.resolve(__dirname, '/cart.html'),
        wishlist: path.resolve(__dirname, '/wishlist.html'),
        login: path.resolve(__dirname, '/login.html'),
        register: path.resolve(__dirname, '/register.html'),
        product: path.resolve(__dirname, '/product.html'),
        products: path.resolve(__dirname, '/products.html'),
        checkout: path.resolve(__dirname, '/checkout.html'),
      },
    },
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}