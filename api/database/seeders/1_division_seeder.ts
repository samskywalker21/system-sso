import Division from '#models/division'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Division.createMany([
      { divisionName: 'Office of the Regional/Assistant Regional Director', divisionCode: 'ORD' },
      { divisionName: 'Management Support Division', divisionCode: 'MSD' },
      { divisionName: 'Local Health Support Division', divisionCode: 'LHSD' },
      { divisionName: 'Regulations, Licensing and Enforcement Division', divisionCode: 'RLED' },
      { divisionName: 'Provincial/City DOH Office', divisionCode: 'PCDO' },
      { divisionName: 'Others', divisionCode: 'OTH' },
    ])
  }
}
