const Product = require('../models/product')


exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/index', {
        prods: products,
        docTitle: 'Shop',
        path: '/',
      })
    })
  }
  
  exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/product-list', {
        prods: products,
        docTitle: 'All Products',
        path: '/products',
      })
    })
  }
  
  exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
      docTitle: 'Your Cart',
      path: '/cart',
    })
  }
  
  exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
      docTitle: 'Your Checkout',
      path: '/checkout',
    })
  }
  