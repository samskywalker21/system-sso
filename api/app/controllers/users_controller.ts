import type { HttpContext } from '@adonisjs/core/http'
import { UserService } from '#services/user_service'
import { inject } from '@adonisjs/core'
import { InsertUserValidator, UpdateUserValidator } from '#validators/user'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}

  async getAllUsers() {
    return await this.userService.getAllUsers()
  }

  async getPaginatedUsers({ request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const limit = Math.min(Number(request.input('limit', 10)), 50)
    const search = request.input('search', undefined)
    return await this.userService.getPaginatedUsers(page, limit, search)
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
}
