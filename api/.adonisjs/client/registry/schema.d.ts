/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.login': {
    methods: ["POST"]
    pattern: '/api/v1/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/auth').LoginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/auth').LoginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['login']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['login']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'auth.verify': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/auth/verify'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['verify']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['verify']>>>
    }
  }
  'auth.verify_token': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/auth/verify_token'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['verifyToken']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['verifyToken']>>>
    }
  }
  'auth.logout': {
    methods: ["POST"]
    pattern: '/api/v1/auth/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logout']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logout']>>>
    }
  }
  'auth.logout_all': {
    methods: ["POST"]
    pattern: '/api/v1/auth/logout_all'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logoutAll']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logoutAll']>>>
    }
  }
  'auth.register': {
    methods: ["POST"]
    pattern: '/api/v1/auth/register'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').InsertUserValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').InsertUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['register']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['register']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'auth.sections': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/auth/sections'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['sections']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['sections']>>>
    }
  }
  'divisions.get_all_divisions': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/division/all'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['getAllDivisions']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['getAllDivisions']>>>
    }
  }
  'divisions.get_active_divisions': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/division/active'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['getActiveDivisions']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['getActiveDivisions']>>>
    }
  }
  'divisions.get_paginated_divisions': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/division/paginated'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['getPaginatedDivisions']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['getPaginatedDivisions']>>>
    }
  }
  'divisions.get_division_by_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/division/id/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['getDivisionById']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['getDivisionById']>>>
    }
  }
  'divisions.insert_division': {
    methods: ["POST"]
    pattern: '/api/v1/division/insert'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/division').InsertDivisionValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/division').InsertDivisionValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['insertDivision']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['insertDivision']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'divisions.update_division': {
    methods: ["PATCH"]
    pattern: '/api/v1/division/update/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/division').UpdateDivisionValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/division').UpdateDivisionValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['updateDivision']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/divisions_controller').default['updateDivision']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'sections.get_all_sections': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/sections/all'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['getAllSections']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['getAllSections']>>>
    }
  }
  'sections.get_active_sections': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/sections/active'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['getActiveSections']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['getActiveSections']>>>
    }
  }
  'sections.get_paginated_sections': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/sections/paginated'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['getPaginatedSections']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['getPaginatedSections']>>>
    }
  }
  'sections.get_section_by_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/sections/id/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['getSectionById']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['getSectionById']>>>
    }
  }
  'sections.insert_section': {
    methods: ["POST"]
    pattern: '/api/v1/sections/insert'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/section').InsertSectionValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/section').InsertSectionValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['insertSection']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['insertSection']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'sections.update_section': {
    methods: ["PATCH"]
    pattern: '/api/v1/sections/update/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/section').UpdateSectionValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/section').UpdateSectionValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['updateSection']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/sections_controller').default['updateSection']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'users.get_all_users': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/users/all'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['getAllUsers']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['getAllUsers']>>>
    }
  }
  'users.get_active_users': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/users/active'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['getActiveUsers']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['getActiveUsers']>>>
    }
  }
  'users.get_paginated_users': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/users/paginated'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['getPaginatedUsers']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['getPaginatedUsers']>>>
    }
  }
  'users.get_user_by_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/users/id/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['getUserById']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['getUserById']>>>
    }
  }
  'users.insert_user': {
    methods: ["POST"]
    pattern: '/api/v1/users/insert'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').InsertUserValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').InsertUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['insertUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['insertUser']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'users.update_user': {
    methods: ["PATCH"]
    pattern: '/api/v1/users/update/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').UpdateUserValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/user').UpdateUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['updateUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['updateUser']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'users.change_password': {
    methods: ["PATCH"]
    pattern: '/api/v1/users/change_password'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').ChangePasswordValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').ChangePasswordValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['changePassword']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['changePassword']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'systems.get_all_systems': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/systems/all'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/systems_controller').default['getAllSystems']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/systems_controller').default['getAllSystems']>>>
    }
  }
  'systems.get_paginated_systems': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/systems/paginated'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/systems_controller').default['getPaginatedSystems']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/systems_controller').default['getPaginatedSystems']>>>
    }
  }
  'systems.insert_system': {
    methods: ["POST"]
    pattern: '/api/v1/systems/insert'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/system').InsertSystemValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/system').InsertSystemValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/systems_controller').default['insertSystem']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/systems_controller').default['insertSystem']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'systems.update_system': {
    methods: ["PATCH"]
    pattern: '/api/v1/systems/update/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/system').UpdateSystemValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/system').UpdateSystemValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/systems_controller').default['updateSystem']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/systems_controller').default['updateSystem']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'roles.get_all_roles': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/roles/all'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getAllRoles']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getAllRoles']>>>
    }
  }
  'roles.get_roles_by_user': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/roles/user/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getRolesByUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getRolesByUser']>>>
    }
  }
  'roles.get_roles_by_system': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/roles/system/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getRolesBySystem']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getRolesBySystem']>>>
    }
  }
  'roles.get_roles_by_auth_user': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/roles/auth'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getRolesByAuthUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getRolesByAuthUser']>>>
    }
  }
  'roles.get_auth_user_role_by_system': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/roles/auth/system/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getAuthUserRoleBySystem']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getAuthUserRoleBySystem']>>>
    }
  }
  'roles.get_paginated_roles': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/roles/paginated'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getPaginatedRoles']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['getPaginatedRoles']>>>
    }
  }
  'roles.insert_user_roles': {
    methods: ["POST"]
    pattern: '/api/v1/roles/insert'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/role').InsertRolesValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/role').InsertRolesValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['insertUserRoles']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['insertUserRoles']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'roles.update_user_role': {
    methods: ["PATCH"]
    pattern: '/api/v1/roles/update/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/role').UpdateRolesValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/role').UpdateRolesValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['updateUserRole']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['updateUserRole']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'roles.delete_user_role': {
    methods: ["DELETE"]
    pattern: '/api/v1/roles/delete/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['deleteUserRole']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/roles_controller').default['deleteUserRole']>>>
    }
  }
}
