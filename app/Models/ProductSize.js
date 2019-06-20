'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductSize extends Model {
  static get hidden () {
    return ['created_at', 'updated_at', 'file_id', 'product_type_id']
  }
  productType () {
    return this.belongsTo('App/Models/ProductType')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = ProductSize
