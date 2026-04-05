import type { HttpContext } from '@adonisjs/core/http'
import { UserService } from '#services/user_service'
import { inject } from '@adonisjs/core'
import { ChangePasswordValidator, InsertUserValidator, UpdateUserValidator } from '#validators/user'
import UserTransformer from '#transformers/user_transformer'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}

  async getAllUsers({ serialize }: HttpContext) {
    const data = await this.userService.getAllUsers()
    return serialize(UserTransformer.transform(data))
  }

  async getPaginatedUsers({ serialize, request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const limit = Math.min(Number(request.input('limit', 10)), 50)
    const search = request.input('search', undefined)
    const data = await this.userService.getPaginatedUsers(page, limit, search)
    const list = data.all()
    const meta = data.getMeta()
    return serialize(UserTransformer.paginate(list, meta))
  }

  async getActiveUsers() {
    return await this.userService.getActiveUsers()
  }

  async getUserById({ request }: HttpContext) {
    const id = Number(request.param('id'))
    return await this.userService.getUserById(id)
  }

  async insertUser({ request }: HttpContext) {
    const data = await request.validateUsing(InsertUserValidator)
    return await this.userService.insertUser(data)
  }

  async updateUser({ request }: HttpContext) {
    const { params, ...data } = await request.validateUsing(UpdateUserValidator)
    const id = params.id
    return await this.userService.updateUser(id, data)
  }

  async changePassword({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(ChangePasswordValidator)
    const { id } = auth.getUserOrFail()
    const result = await this.userService.changePassword(
      Number(id),
      data.oldPassword,
      data.newPassword
    )
    if (result) {
      return response.ok('Password has been changed')
    } else {
      return response.badRequest('Invalid Credentials')
    }
  }
}
