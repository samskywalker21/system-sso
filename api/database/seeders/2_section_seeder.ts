import Section from '#models/section'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Section.createMany([
      { sectionName: 'Office of the Regional Director', sectionCode: 'ORD', divisionId: 1 },
      {
        sectionName: 'Office of the Assistant Regional Director',
        sectionCode: 'OARD',
        divisionId: 1,
      },
      {
        sectionName: 'Information and Communication Technology Unit',
        sectionCode: 'ICTU',
        divisionId: 1,
      },
    ])
  }
}
