import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Role.create({ userId: 1, systemId: 1, accessLevel: '1' })
  }
}
