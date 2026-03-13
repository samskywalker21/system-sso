import System from '#models/system'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await System.create({ systemName: 'auth-service' })
  }
}
