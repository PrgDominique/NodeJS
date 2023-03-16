const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    docTitle: 'admin',
    path: 'admin/add-product',
  })
}

exports.getAddProducts = (req, res, next) => {
    res.render('admin/product-list', {
      docTitle: 'admin',
      path: 'admin/products',
    })
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/products')
}