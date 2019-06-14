'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class File extends Model {
  static get hidden () {
    return ['file', 'type', 'subtype', 'updated_at', 'created_at']
  }

  products () {
    return this.belongsTo('App/Models/Product')
  }

  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${Env.get('APP_URL')}/files/${id}`
  }
}

module.exports = File
