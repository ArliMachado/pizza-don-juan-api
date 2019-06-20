'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  static get hidden () {
    return ['created_at', 'updated_at', 'file_id']
  }
  file () {
    return this.belongsTo('App/Models/File')
  }
  productTypes () {
    return this.hasMany('App/Models/ProductType')
  }
}

module.exports = Product
