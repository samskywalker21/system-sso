import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class CookieToHeaderMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    const token = (ctx.request.encryptedCookie('access_token') ?? '').trim()

    if (token) {
      ctx.request.request.headers.authorization = `Bearer ${token}`
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
