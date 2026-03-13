import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .bigInteger('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      table
        .integer('system_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('systems')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      table.enum('access_level', [1, 2, 3, 4]).notNullable().defaultTo(4)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
