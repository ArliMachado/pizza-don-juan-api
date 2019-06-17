'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSizeSchema extends Schema {
  up () {
    this.create('product_sizes', table => {
      table.increments()
      table.string('title').notNullable()
      table.decimal('price').notNullable()
      table
        .integer('product_type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('product_types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_sizes')
  }
}

module.exports = ProductSizeSchema
