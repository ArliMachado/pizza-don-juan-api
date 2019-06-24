'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderAddressSchema extends Schema {
  up () {
    this.create('order_addresses', table => {
      table.increments()
      table.string('cep').notNulabble()
      table.string('street').notNulabble()
      table.decimal('number').notNulabble()
      table.decimal('district').notNulabble()
      table.timestamps()
    })
  }

  down () {
    this.drop('order_addresses')
  }
}

module.exports = OrderAddressSchema
