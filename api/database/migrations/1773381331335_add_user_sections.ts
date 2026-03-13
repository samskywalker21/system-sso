import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('section_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('sections')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('section_id')
      table.dropColumn('section_id')
    })
  }
}
