'use strict'

const ProductType = use('App/Models/ProductType')

class ProductTypeController {
  async index ({ params }) {
    const types = await ProductType.query()
      .where('product_id', params.product_id)
      .with('file')
      .fetch()

    return types
  }

  async store ({ params, request }) {
    const data = request.only(['title', 'file_id'])

    const productType = await ProductType.create({
      ...data,
      product_id: params.product_id
    })
    return productType
  }

  async show ({ params, request, response, view }) {
    const productType = await ProductType.findOrFail(params.id)
    return productType
  }
}

module.exports = ProductTypeController
