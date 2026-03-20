import Division from '#models/division'

interface DivisionData {
  division_name: string
  division_code: string
  status?: 'A' | 'I'
}

export class DivisionService {
  async getAllDivisions() {
    return await Division.all()
  }

  async getPaginatedDivisions(page: number, limit: number, search?: string) {
    const filterQuery = () => {
      const query = Division.query()
      if (search) {
        query
          .whereILike('division_name', `%${search}%`)
          .orWhereILike('division_code', `%${search}%`)
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

  async getActiveDivisions() {
    return await Division.findManyBy({ status: 'A' })
  }

  async getDivisionById(id: number) {
    return await Division.findOrFail(id)
  }

  async insertDivision(data: DivisionData) {
    const newDivision = await Division.create(data)
    return newDivision
  }

  async updateDivision(id: number, data: Partial<DivisionData>) {
    const division = await Division.findOrFail(id)
    const newDivision = division.merge(data)
    return await newDivision.save()
  }
}
