import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.create({
      fname: 'Admin',
      lname: 'Admin',
      username: 'admin',
      password: 'admin',
      position: 'Administrator',
      sectionId: 3,
      status: 'A',
    })
  }
}
