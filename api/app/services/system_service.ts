import System from '#models/system'

interface SystemData {
  system_name: string
  status?: string
}

export class SystemService {
  // Your code here
  async getAllSystems() {
    return await System.all()
  }

  async getPaginatedSystems(page: number, limit: number, search?: string) {
    const filterQuery = () => {
      const query = System.query()
      if (search) {
        query.whereILike('system_name', `%${search}%`)
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

  async insertSystem(data: SystemData) {
    const newSystem = await System.create(data)
    return newSystem.save()
  }

  async updateSystem(id: number, data: Partial<SystemData>) {
    const system = await System.findOrFail(id)
    const newSystem = system.merge(data)
    return await newSystem.save()
  }
}
