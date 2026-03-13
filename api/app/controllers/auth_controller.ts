import User from '#models/user'
import { LoginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login(context: HttpContext) {
    const validatedValues = await context.request.validateUsing(LoginValidator)
    const user = await User.verifyCredentials(validatedValues.username, validatedValues.password)
    if (!user) {
      context.response.notFound()
    }
    const accessToken = await User.accessTokens.create(user, ['*'], { name: 'access_token' })

    context.response.encryptedCookie('access_token', accessToken.value?.release(), {
      httpOnly: true,
      sameSite: 'lax',
    })
    context.response.ok('Login Successful')
  }

  async verify(context: HttpContext) {
    return context.auth.user
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
}
