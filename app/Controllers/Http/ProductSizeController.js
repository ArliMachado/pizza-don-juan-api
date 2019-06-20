'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with productsizes
 */

const Productsize = use('App/Models/ProductSize')

class ProductSizeController {
  async index ({ params }) {
    const types = await Productsize.query()
      .where('product_type_id', params.types_id)
      .with('file')
      .fetch()

    return types
  }

  async store ({ params, request }) {
    const data = request.only(['title', 'price', 'file_id'])

    const productSize = await Productsize.create({
      ...data,
      product_type_id: params.types_id
    })
    return productSize
  }

  async show ({ params, request, response, view }) {
    const productSize = await Productsize.findOrFail(params.id)
    return productSize
  }
}

module.exports = ProductSizeController
