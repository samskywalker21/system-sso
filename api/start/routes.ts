/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router
  .group(() => {
    router
      .group(() => {
        router.post('login', [controllers.Auth, 'login'])
        router.get('verify', [controllers.Auth, 'verify']).use(middleware.auth())
        router.post('logout', [controllers.Auth, 'logout']).use(middleware.auth())
        router.post('logout_all', [controllers.Auth, 'logoutAll']).use(middleware.auth())
      })
      .prefix('auth')
  })
  .prefix('/api/v1')
