import Section from '#models/section'

interface SectionData {
  section_name: string
  section_code: string
  status?: 'A' | 'I'
  division_id: number
}

export class SectionService {
  // Your code here
  async getAllSections() {
    return await Section.query()
      .select('*')
      .preload('division', (subquery) => {
        subquery.select('division_name')
      })
  }

  async getPaginatedSections(page: number, limit: number, search?: string) {
    const filterQuery = () => {
      const query = Section.query().preload('division', (subquery) => {
        subquery.select('division_name')
      })
      if (search) {
        query
          .whereILike('section_name', `%${search}%`)
          .orWhereILike('section_code', `%${search}%`)
          .orWhereHas('division', (division) => {
            division
              .whereILike('division_name', `%${search}%`)
              .orWhereILike('division_code', `%${search}%`)
          })
      }
      return query
    }

    const data = await filterQuery().paginate(page, limit)
    const container = data.toJSON()
    if (container.meta.lastPage < page && container.meta.total > 0) {
      return await filterQuery().paginate(1, limit)
    }
    return data
  }

  async getActiveSections() {
    return await Section.query()
      .select('*')
      .preload('division', (subquery) => {
        subquery.select('division_name')
      })
      .where('status', '=', 'A')
  }

  async getSectionById(id: number) {
    return await Section.query()
      .select('*')
      .preload('division', (subquery) => {
        subquery.select('division_name')
      })
      .where('id', '=', id)
  }

  async insertSection(data: SectionData) {
    const newSection = await Section.create(data)
    return await newSection.save()
  }

  async updateSection(id: number, data: Partial<SectionData>) {
    const section = await Section.findOrFail(id)
    const newSection = section.merge(data)
    return newSection.save()
  }
}
