import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').notNullable()
      table.string('fname').notNullable()
      table.string('mname').nullable()
      table.string('lname').notNullable()
      table.string('position').notNullable()
      table.string('username').notNullable().unique()
      table.string('password').notNullable()
      table.enum('status', ['A', 'I']).notNullable().defaultTo('I')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
