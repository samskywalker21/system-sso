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
      {
        sectionName: 'Health Facility Development Unit',
        sectionCode: 'HFDU',
        divisionId: 1,
      },
      {
        sectionName: 'Infra',
        sectionCode: 'Infra',
        divisionId: 1,
      },
      {
        sectionName: 'Research, Epidemiology, Surveillance, and Disaster Response Unit',
        sectionCode: 'RESDRU',
        divisionId: 1,
      },
      {
        sectionName: 'Communication Management Unit',
        sectionCode: 'CMU',
        divisionId: 1,
      },
      {
        sectionName: 'Health Education and Promotions Unit',
        sectionCode: 'HEPU',
        divisionId: 1,
      },
      {
        sectionName: 'Legal Unit',
        sectionCode: 'LEGAL',
        divisionId: 1,
      },
      {
        sectionName: 'Public Assistance and Complaints Desk',
        sectionCode: 'PACD',
        divisionId: 1,
      },
      {
        sectionName: 'Office of the Chief Administrative Officer',
        sectionCode: 'CAO',
        divisionId: 2,
      },
      {
        sectionName: 'Procurement Unit',
        sectionCode: 'PROC',
        divisionId: 2,
      },
      {
        sectionName: 'Planning and Statistics Unit',
        sectionCode: 'PSU',
        divisionId: 2,
      },
      {
        sectionName: 'Human Resource Development Unit',
        sectionCode: 'HRDU',
        divisionId: 2,
      },
      {
        sectionName: 'Cashier Section',
        sectionCode: 'CASH',
        divisionId: 2,
      },
      {
        sectionName: 'Budget Section',
        sectionCode: 'BDGT',
        divisionId: 2,
      },
      {
        sectionName: 'Accounting Section',
        sectionCode: 'ACCGT',
        divisionId: 2,
      },
      {
        sectionName: 'Personnel Section',
        sectionCode: 'PS',
        divisionId: 2,
      },
      {
        sectionName: 'Records Section',
        sectionCode: 'REC',
        divisionId: 2,
      },
      {
        sectionName: 'Supply Section',
        sectionCode: 'SPPLY',
        divisionId: 2,
      },
      {
        sectionName: 'General Services/Transport Section',
        sectionCode: 'GSTS',
        divisionId: 2,
      },
      {
        sectionName: 'Office of the Local Health Support Division Chief',
        sectionCode: 'LHSD',
        divisionId: 3,
      },
      {
        sectionName: 'Family Health Cluster',
        sectionCode: 'FHC',
        divisionId: 3,
      },
      {
        sectionName: 'Local Health Systems Development Cluster',
        sectionCode: 'LHSDC',
        divisionId: 3,
      },
      {
        sectionName: 'Non-Communicable Diseases Cluster',
        sectionCode: 'NCDC',
        divisionId: 3,
      },
      {
        sectionName: 'Infectious Diseases Cluster',
        sectionCode: 'IDC',
        divisionId: 3,
      },
      {
        sectionName: 'Environmental and Occupational Health Cluster',
        sectionCode: 'EOH',
        divisionId: 3,
      },
      {
        sectionName: 'Development Management Unit',
        sectionCode: 'DMU',
        divisionId: 3,
      },
      {
        sectionName: 'Regulations, Licensing, and Enforcement Division',
        sectionCode: 'RLED',
        divisionId: 4,
      },
      {
        sectionName: 'PDOHO Bukidnon',
        sectionCode: 'PBUK',
        divisionId: 5,
      },
      {
        sectionName: 'PDOHO Camiguin',
        sectionCode: 'PCAM',
        divisionId: 5,
      },
      {
        sectionName: 'PDOHO Lanao del Norte',
        sectionCode: 'PLDN',
        divisionId: 5,
      },
      {
        sectionName: 'PDOHO Misamis Occidental',
        sectionCode: 'PMOC',
        divisionId: 5,
      },
      {
        sectionName: 'PDOHO Misamis Oriental',
        sectionCode: 'PMOR',
        divisionId: 5,
      },
      {
        sectionName: 'CDOHO Cagayan de Oro',
        sectionCode: 'CCDO',
        divisionId: 5,
      },
      {
        sectionName: 'CDOHO Iligan',
        sectionCode: 'CILG',
        divisionId: 5,
      },
      {
        sectionName: 'Regional Blood Center',
        sectionCode: 'RBC',
        divisionId: 6,
      },
      {
        sectionName: 'Water Laboratory',
        sectionCode: 'WL',
        divisionId: 6,
      },
      {
        sectionName: 'TB/Covid Laboratory',
        sectionCode: 'TBRC',
        divisionId: 6,
      },
      {
        sectionName: 'Philippine Multi-Sectorial Nutrition Project',
        sectionCode: 'PMNP',
        divisionId: 6,
      },
    ])
  }
}
