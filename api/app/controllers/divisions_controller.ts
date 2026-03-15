import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { DivisionService } from '#services/division_service'
import { InsertDivisionValidator, UpdateDivisionValidator } from '#validators/division'

@inject()
export default class DivisionsController {
  constructor(protected divisionService: DivisionService) {}

  async getAllDivisions() {
    return await this.divisionService.getAllDivisions()
  }

  async getPaginatedDivisions({ request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const limit = Math.min(Number(request.input('limit', 10)), 50)
    const search = request.input('search', undefined)
    return await this.divisionService.getPaginatedDivisions(page, limit, search)
  }

  async getActiveDivisions() {
    return await this.divisionService.getActiveDivisions()
  }

  async getDivisionById({ request }: HttpContext) {
    const id = Number(request.param('id'))
    return await this.divisionService.getDivisionById(id)
  }

  async insertDivision({ request }: HttpContext) {
    const data = await request.validateUsing(InsertDivisionValidator)
    return await this.divisionService.insertDivision(data)
  }

  async updateDivision({ request }: HttpContext) {
    const { params, ...data } = await request.validateUsing(UpdateDivisionValidator)
    const id = Number(request.param('id'))
    return await this.divisionService.updateDivision(id, data)
  }
}
