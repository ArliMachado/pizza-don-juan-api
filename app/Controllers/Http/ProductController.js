'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index ({ request, response, view }) {
    const products = await Product.query()
      .with('file')
      .fetch()
    return products
  }

  async store ({ request, response }) {
    const data = request.only([
      'title',
      'description',
      'estimated_time',
      'file_id'
    ])
    const product = await Product.create(data)
    return product
  }
}

module.exports = ProductController
