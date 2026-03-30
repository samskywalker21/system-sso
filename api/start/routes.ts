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
        router.get('verify_token', [controllers.Auth, 'verifyToken']).use(middleware.auth())
        router.post('logout', [controllers.Auth, 'logout']).use(middleware.auth())
        router.post('logout_all', [controllers.Auth, 'logoutAll']).use(middleware.auth())
        router.post('register', [controllers.Auth, 'register'])
        router.get('sections', [controllers.Auth, 'sections'])
      })
      .prefix('auth')
    router
      .group(() => {
        router.get('all', [controllers.Divisions, 'getAllDivisions'])
        router.get('active', [controllers.Divisions, 'getActiveDivisions'])
        router.get('paginated', [controllers.Divisions, 'getPaginatedDivisions'])
        router.get('id/:id', [controllers.Divisions, 'getDivisionById'])
        router.post('insert', [controllers.Divisions, 'insertDivision'])
        router.patch('update/:id', [controllers.Divisions, 'updateDivision'])
      })
      .prefix('division')
      .use(middleware.auth())
    router
      .group(() => {
        router.get('all', [controllers.Sections, 'getAllSections'])
        router.get('active', [controllers.Sections, 'getActiveSections'])
        router.get('paginated', [controllers.Sections, 'getPaginatedSections'])
        router.get('id/:id', [controllers.Sections, 'getSectionById'])
        router.post('insert', [controllers.Sections, 'insertSection'])
        router.patch('update/:id', [controllers.Sections, 'updateSection'])
      })
      .prefix('sections')
      .use(middleware.auth())
    router
      .group(() => {
        router.get('all', [controllers.Users, 'getAllUsers'])
        router.get('active', [controllers.Users, 'getActiveUsers'])
        router.get('paginated', [controllers.Users, 'getPaginatedUsers'])
        router.get('id/:id', [controllers.Users, 'getUserById'])
        router.post('insert', [controllers.Users, 'insertUser'])
        router.patch('update/:id', [controllers.Users, 'updateUser'])
      })
      .prefix('users')
      .use(middleware.auth())
    router
      .group(() => {
        router.get('all', [controllers.Systems, 'getAllSystems'])
        router.get('paginated', [controllers.Systems, 'getPaginatedSystems'])
        router.post('insert', [controllers.Systems, 'insertSystem'])
        router.patch('update/:id', [controllers.Systems, 'updateSystem'])
      })
      .prefix('systems')
      .use(middleware.auth())
    router
      .group(() => {
        router.get('all', [controllers.Roles, 'getAllRoles'])
        router.get('user/:id', [controllers.Roles, 'getRolesByUser'])
        router.get('system/:id', [controllers.Roles, 'getRolesBySystem'])
        router.get('auth', [controllers.Roles, 'getRolesByAuthUser'])
        router.get('auth/system/:id', [controllers.Roles, 'getAuthUserRoleBySystem'])
        router.get('paginated', [controllers.Roles, 'getPaginatedRoles'])
        router.post('insert', [controllers.Roles, 'insertUserRoles'])
        router.patch('update/:id', [controllers.Roles, 'updateUserRole'])
        router.delete('delete/:id', [controllers.Roles, 'deleteUserRole'])
      })
      .prefix('roles')
      .use(middleware.auth())
  })
  .prefix('/api/v1')
