import type { HttpContext } from '@adonisjs/core/http'
import { RoleService } from '#services/role_service'
import RoleTransformer from '#transformers/role_transformer'
import { InsertRolesValidator, UpdateRolesValidator } from '#validators/role'
import { inject } from '@adonisjs/core'

@inject()
export default class RolesController {
  constructor(protected rolesService: RoleService) {}

  async getAllRoles({ serialize }: HttpContext) {
    const data = await this.rolesService.getAllRoles()
    return await serialize(RoleTransformer.transform(data))
  }

  async getPaginatedRoles({ serialize, request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const limit = Math.min(Number(request.input('limit', 10)), 50)
    const search = request.input('search', undefined)
    const data = await this.rolesService.getPaginatedRoles(page, limit, search)
    const list = data.all()
    const meta = data.getMeta()
    return await serialize(RoleTransformer.paginate(list, meta))
  }

  async getRolesByUser({ serialize, request }: HttpContext) {
    const id = request.param('id')
    const data = await this.rolesService.getRolesByUser(id)
    return await serialize(RoleTransformer.transform(data))
  }

  async getRolesBySystem({ serialize, request }: HttpContext) {
    const id = request.param('id')
    const data = await this.rolesService.getRolesBySystem(id)
    return serialize(RoleTransformer.transform(data))
  }

  async getRolesByAuthUser({ serialize, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    const data = await this.rolesService.getRolesByUser(Number(user.id))
    return serialize(RoleTransformer.transform(data))
  }

  async getAuthUserRoleBySystem({ auth, request, serialize }: HttpContext) {
    const systemId = request.param('id')
    const { id } = auth.getUserOrFail()
    const data = await this.rolesService.getAuthUserRoleBySystem(Number(id), systemId)
    return serialize(RoleTransformer.transform(data))
  }

  async insertUserRoles({ request }: HttpContext) {
    const data = await request.validateUsing(InsertRolesValidator)
    return await this.rolesService.insertUserRoles(data.roles)
  }

  async updateUserRole({ request }: HttpContext) {
    const { params, ...data } = await request.validateUsing(UpdateRolesValidator)
    return await this.rolesService.updateUserRole(params.id, data)
  }

  async deleteUserRole({ request }: HttpContext) {
    return await this.rolesService.deleteUserRole(request.param('id'))
  }
}
