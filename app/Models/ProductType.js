'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductType extends Model {
  static get hidden () {
    return ['created_at', 'updated_at', 'file_id']
  }
  product () {
    return this.belongsTo('App/Models/Product')
  }

  productSize () {
    return this.hasMany('App/Models/ProductSize')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = ProductType
