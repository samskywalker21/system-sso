import type { HttpContext } from '@adonisjs/core/http'
import { SystemService } from '#services/system_service'
import { inject } from '@adonisjs/core'
import { InsertSystemValidator, UpdateSystemValidator } from '#validators/system'

@inject()
export default class SystemsController {
  constructor(protected systemService: SystemService) {}

  async getAllSystems() {
    return await this.systemService.getAllSystems()
  }

  async getPaginatedSystems({ request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const limit = Math.min(Number(request.input('limit', 10)), 50)
    const search = request.input('search', undefined)
    return await this.systemService.getPaginatedSystems(page, limit, search)
  }

  async insertSystem({ request }: HttpContext) {
    const data = await request.validateUsing(InsertSystemValidator)
    return await this.systemService.insertSystem(data)
  }

  async updateSystem({ request }: HttpContext) {
    const { params, ...data } = await request.validateUsing(UpdateSystemValidator)
    const id = params.id
    return await this.systemService.updateSystem(id, data)
  }
}
