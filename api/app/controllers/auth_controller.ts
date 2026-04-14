import User from '#models/user'
import { SectionService } from '#services/section_service'
import { UserService } from '#services/user_service'
import SectionTransformer from '#transformers/section_transformer'
import { LoginValidator } from '#validators/auth'
import { InsertUserValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login(context: HttpContext) {
    const validatedValues = await context.request.validateUsing(LoginValidator)
    const user = await User.verifyCredentials(validatedValues.username, validatedValues.password)
    if (!user) {
      context.response.notFound()
    }
    if (user.status !== 'A') {
      context.response.badRequest('User is inactive')
    }
    const accessToken = await User.accessTokens.create(user, ['*'], {
      name: 'access_token',
      expiresIn: '10h',
    })

    const token = accessToken.value?.release()

    context.response.encryptedCookie('access_token', token, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      maxAge: '8h',
    })

    return context.response.ok('Success!')
  }

  async verify(context: HttpContext) {
    return context.auth.user
  }

  async verifyToken({ response, auth }: HttpContext) {
    await auth.authenticate()
    response.ok('Success!')
  }

  async logout(context: HttpContext) {
    await context.auth.use('api').invalidateToken()
    context.response.clearCookie('access_token')
    context.response.ok('Logout Successful')
  }

  async logoutAll(context: HttpContext) {
    const user = context.auth.getUserOrFail()
    await User.accessTokens.deleteAll(user)
    context.response.clearCookie('access_token')
    context.response.ok('Logout Successful')
  }

  @inject()
  async register(context: HttpContext, userService: UserService) {
    const data = await context.request.validateUsing(InsertUserValidator)
    return await userService.insertUser(data)
  }

  @inject()
  async sections({ serialize }: HttpContext, sectionService: SectionService) {
    const data = await sectionService.getActiveSections()
    return await serialize(SectionTransformer.transform(data))
  }
}
