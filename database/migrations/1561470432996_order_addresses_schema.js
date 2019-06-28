'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderAddressSchema extends Schema {
  up () {
    this.create('order_addresses', table => {
      table.increments()
      table
        .integer('order_id')
        .unsigned()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('cep').notNullable()
      table.string('street').notNullable()
      table.decimal('number').notNullable()
      table.string('city').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('order_addresses')
  }
}

module.exports = OrderAddressSchema
