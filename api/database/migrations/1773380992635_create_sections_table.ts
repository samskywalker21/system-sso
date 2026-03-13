import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sections'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('section_name').notNullable()
      table.string('section_code').notNullable()
      table
        .integer('division_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('divisions')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      table.enum('status', ['A', 'I']).notNullable().defaultTo('A')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
