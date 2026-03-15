import { RoleService } from '#services/role_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class RolesController {
  constructor(protected rolesService: RoleService) {}

  async getAllRoles() {
    return await this.rolesService.getAllRoles()
  }

  async getPaginatedRoles({ request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const limit = Math.min(Number(request.input('limit', 10)), 50)
    const search = request.input('search', undefined)
    return await this.rolesService.getPaginatedRoles(page, limit, search)
  }

  async getRolesByUser({ request }: HttpContext) {
    const id = request.param('id')
    return await this.rolesService.getRolesByUser(id)
  }

  async getRolesBySystem({ request }: HttpContext) {
    const id = request.param('id')
    return await this.rolesService.getRolesBySystem(id)
  }

  async getRolesByAuthUser({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    return await this.rolesService.getRolesByUser(Number(user.id))
  }

  async insertUserRoles({ request }: HttpContext) {}

  async updateUserRole({ request }: HttpContext) {}
}
