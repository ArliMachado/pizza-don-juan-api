'use strict'

const Database = use('Database')
const Order = use('App/Models/Order')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with orders
 */
class OrderController {
  /**
   * Show a list of all orders.
   * GET orders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const orders = await Order.query()
      .with('user')
      .with('address')
      .with('products')
      .fetch()
    return orders
  }

  /**
   * Create/save a new order.
   * POST orders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(['observation'])
    data.user_id = auth.user.id
    const address = request.input('address')
    const products = request.input('products')

    const trx = await Database.beginTransaction()

    const order = await Order.create(data, trx)

    await order.address().create(address, trx)

    await order.products().createMany(products, trx)

    await trx.commit()

    return order
  }

  /**
   * Display a single order.
   * GET orders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async getByUser ({ request, auth }) {
    const orders = await Order.query()
      .where('user_id', auth.user.id)
      .with('user')
      .with('address')
      .with('products')
      .fetch()
    return orders
  }
}

module.exports = OrderController
