'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductType extends Model {
  product () {
    return this.belongsTo('App/Models/Product')
  }

  sizes () {
    return this.hasMany('App/Models/ProductSize')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = ProductType
