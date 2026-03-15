import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { SectionService } from '#services/section_service'
import { InsertSectionValidator, UpdateSectionValidator } from '#validators/section'

@inject()
export default class SectionsController {
  constructor(protected sectionService: SectionService) {}

  async getAllSections() {
    return await this.sectionService.getAllSections()
  }

  async getPaginatedSections({ request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const limit = Math.min(Number(request.input('limit', 10)), 50)
    const search = request.input('search', undefined)
    return await this.sectionService.getPaginatedSections(page, limit, search)
  }

  async getActiveSections() {
    return await this.sectionService.getActiveSections()
  }

  async getSectionById({ request }: HttpContext) {
    const id = Number(request.param('id'))
    return await this.sectionService.getSectionById(id)
  }

  async insertSection({ request }: HttpContext) {
    const data = await request.validateUsing(InsertSectionValidator)
    return await this.sectionService.insertSection(data)
  }

  async updateSection({ request }: HttpContext) {
    const { params, ...data } = await request.validateUsing(UpdateSectionValidator)
    const id = request.param('id')
    return await this.sectionService.updateSection(id, data)
  }
}
