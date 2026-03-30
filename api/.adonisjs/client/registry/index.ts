/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.login': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'auth.verify': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/auth/verify',
    tokens: [{"old":"/api/v1/auth/verify","type":0,"val":"api","end":""},{"old":"/api/v1/auth/verify","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/verify","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/verify","type":0,"val":"verify","end":""}],
    types: placeholder as Registry['auth.verify']['types'],
  },
  'auth.verify_token': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/auth/verify_token',
    tokens: [{"old":"/api/v1/auth/verify_token","type":0,"val":"api","end":""},{"old":"/api/v1/auth/verify_token","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/verify_token","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/verify_token","type":0,"val":"verify_token","end":""}],
    types: placeholder as Registry['auth.verify_token']['types'],
  },
  'auth.logout': {
    methods: ["POST"],
    pattern: '/api/v1/auth/logout',
    tokens: [{"old":"/api/v1/auth/logout","type":0,"val":"api","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.logout']['types'],
  },
  'auth.logout_all': {
    methods: ["POST"],
    pattern: '/api/v1/auth/logout_all',
    tokens: [{"old":"/api/v1/auth/logout_all","type":0,"val":"api","end":""},{"old":"/api/v1/auth/logout_all","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/logout_all","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/logout_all","type":0,"val":"logout_all","end":""}],
    types: placeholder as Registry['auth.logout_all']['types'],
  },
  'auth.register': {
    methods: ["POST"],
    pattern: '/api/v1/auth/register',
    tokens: [{"old":"/api/v1/auth/register","type":0,"val":"api","end":""},{"old":"/api/v1/auth/register","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/register","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['auth.register']['types'],
  },
  'auth.sections': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/auth/sections',
    tokens: [{"old":"/api/v1/auth/sections","type":0,"val":"api","end":""},{"old":"/api/v1/auth/sections","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/sections","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/sections","type":0,"val":"sections","end":""}],
    types: placeholder as Registry['auth.sections']['types'],
  },
  'divisions.get_all_divisions': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/division/all',
    tokens: [{"old":"/api/v1/division/all","type":0,"val":"api","end":""},{"old":"/api/v1/division/all","type":0,"val":"v1","end":""},{"old":"/api/v1/division/all","type":0,"val":"division","end":""},{"old":"/api/v1/division/all","type":0,"val":"all","end":""}],
    types: placeholder as Registry['divisions.get_all_divisions']['types'],
  },
  'divisions.get_active_divisions': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/division/active',
    tokens: [{"old":"/api/v1/division/active","type":0,"val":"api","end":""},{"old":"/api/v1/division/active","type":0,"val":"v1","end":""},{"old":"/api/v1/division/active","type":0,"val":"division","end":""},{"old":"/api/v1/division/active","type":0,"val":"active","end":""}],
    types: placeholder as Registry['divisions.get_active_divisions']['types'],
  },
  'divisions.get_paginated_divisions': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/division/paginated',
    tokens: [{"old":"/api/v1/division/paginated","type":0,"val":"api","end":""},{"old":"/api/v1/division/paginated","type":0,"val":"v1","end":""},{"old":"/api/v1/division/paginated","type":0,"val":"division","end":""},{"old":"/api/v1/division/paginated","type":0,"val":"paginated","end":""}],
    types: placeholder as Registry['divisions.get_paginated_divisions']['types'],
  },
  'divisions.get_division_by_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/division/id/:id',
    tokens: [{"old":"/api/v1/division/id/:id","type":0,"val":"api","end":""},{"old":"/api/v1/division/id/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/division/id/:id","type":0,"val":"division","end":""},{"old":"/api/v1/division/id/:id","type":0,"val":"id","end":""},{"old":"/api/v1/division/id/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['divisions.get_division_by_id']['types'],
  },
  'divisions.insert_division': {
    methods: ["POST"],
    pattern: '/api/v1/division/insert',
    tokens: [{"old":"/api/v1/division/insert","type":0,"val":"api","end":""},{"old":"/api/v1/division/insert","type":0,"val":"v1","end":""},{"old":"/api/v1/division/insert","type":0,"val":"division","end":""},{"old":"/api/v1/division/insert","type":0,"val":"insert","end":""}],
    types: placeholder as Registry['divisions.insert_division']['types'],
  },
  'divisions.update_division': {
    methods: ["PATCH"],
    pattern: '/api/v1/division/update/:id',
    tokens: [{"old":"/api/v1/division/update/:id","type":0,"val":"api","end":""},{"old":"/api/v1/division/update/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/division/update/:id","type":0,"val":"division","end":""},{"old":"/api/v1/division/update/:id","type":0,"val":"update","end":""},{"old":"/api/v1/division/update/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['divisions.update_division']['types'],
  },
  'sections.get_all_sections': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/sections/all',
    tokens: [{"old":"/api/v1/sections/all","type":0,"val":"api","end":""},{"old":"/api/v1/sections/all","type":0,"val":"v1","end":""},{"old":"/api/v1/sections/all","type":0,"val":"sections","end":""},{"old":"/api/v1/sections/all","type":0,"val":"all","end":""}],
    types: placeholder as Registry['sections.get_all_sections']['types'],
  },
  'sections.get_active_sections': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/sections/active',
    tokens: [{"old":"/api/v1/sections/active","type":0,"val":"api","end":""},{"old":"/api/v1/sections/active","type":0,"val":"v1","end":""},{"old":"/api/v1/sections/active","type":0,"val":"sections","end":""},{"old":"/api/v1/sections/active","type":0,"val":"active","end":""}],
    types: placeholder as Registry['sections.get_active_sections']['types'],
  },
  'sections.get_paginated_sections': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/sections/paginated',
    tokens: [{"old":"/api/v1/sections/paginated","type":0,"val":"api","end":""},{"old":"/api/v1/sections/paginated","type":0,"val":"v1","end":""},{"old":"/api/v1/sections/paginated","type":0,"val":"sections","end":""},{"old":"/api/v1/sections/paginated","type":0,"val":"paginated","end":""}],
    types: placeholder as Registry['sections.get_paginated_sections']['types'],
  },
  'sections.get_section_by_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/sections/id/:id',
    tokens: [{"old":"/api/v1/sections/id/:id","type":0,"val":"api","end":""},{"old":"/api/v1/sections/id/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/sections/id/:id","type":0,"val":"sections","end":""},{"old":"/api/v1/sections/id/:id","type":0,"val":"id","end":""},{"old":"/api/v1/sections/id/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['sections.get_section_by_id']['types'],
  },
  'sections.insert_section': {
    methods: ["POST"],
    pattern: '/api/v1/sections/insert',
    tokens: [{"old":"/api/v1/sections/insert","type":0,"val":"api","end":""},{"old":"/api/v1/sections/insert","type":0,"val":"v1","end":""},{"old":"/api/v1/sections/insert","type":0,"val":"sections","end":""},{"old":"/api/v1/sections/insert","type":0,"val":"insert","end":""}],
    types: placeholder as Registry['sections.insert_section']['types'],
  },
  'sections.update_section': {
    methods: ["PATCH"],
    pattern: '/api/v1/sections/update/:id',
    tokens: [{"old":"/api/v1/sections/update/:id","type":0,"val":"api","end":""},{"old":"/api/v1/sections/update/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/sections/update/:id","type":0,"val":"sections","end":""},{"old":"/api/v1/sections/update/:id","type":0,"val":"update","end":""},{"old":"/api/v1/sections/update/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['sections.update_section']['types'],
  },
  'users.get_all_users': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/users/all',
    tokens: [{"old":"/api/v1/users/all","type":0,"val":"api","end":""},{"old":"/api/v1/users/all","type":0,"val":"v1","end":""},{"old":"/api/v1/users/all","type":0,"val":"users","end":""},{"old":"/api/v1/users/all","type":0,"val":"all","end":""}],
    types: placeholder as Registry['users.get_all_users']['types'],
  },
  'users.get_active_users': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/users/active',
    tokens: [{"old":"/api/v1/users/active","type":0,"val":"api","end":""},{"old":"/api/v1/users/active","type":0,"val":"v1","end":""},{"old":"/api/v1/users/active","type":0,"val":"users","end":""},{"old":"/api/v1/users/active","type":0,"val":"active","end":""}],
    types: placeholder as Registry['users.get_active_users']['types'],
  },
  'users.get_paginated_users': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/users/paginated',
    tokens: [{"old":"/api/v1/users/paginated","type":0,"val":"api","end":""},{"old":"/api/v1/users/paginated","type":0,"val":"v1","end":""},{"old":"/api/v1/users/paginated","type":0,"val":"users","end":""},{"old":"/api/v1/users/paginated","type":0,"val":"paginated","end":""}],
    types: placeholder as Registry['users.get_paginated_users']['types'],
  },
  'users.get_user_by_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/users/id/:id',
    tokens: [{"old":"/api/v1/users/id/:id","type":0,"val":"api","end":""},{"old":"/api/v1/users/id/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/users/id/:id","type":0,"val":"users","end":""},{"old":"/api/v1/users/id/:id","type":0,"val":"id","end":""},{"old":"/api/v1/users/id/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['users.get_user_by_id']['types'],
  },
  'users.insert_user': {
    methods: ["POST"],
    pattern: '/api/v1/users/insert',
    tokens: [{"old":"/api/v1/users/insert","type":0,"val":"api","end":""},{"old":"/api/v1/users/insert","type":0,"val":"v1","end":""},{"old":"/api/v1/users/insert","type":0,"val":"users","end":""},{"old":"/api/v1/users/insert","type":0,"val":"insert","end":""}],
    types: placeholder as Registry['users.insert_user']['types'],
  },
  'users.update_user': {
    methods: ["PATCH"],
    pattern: '/api/v1/users/update/:id',
    tokens: [{"old":"/api/v1/users/update/:id","type":0,"val":"api","end":""},{"old":"/api/v1/users/update/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/users/update/:id","type":0,"val":"users","end":""},{"old":"/api/v1/users/update/:id","type":0,"val":"update","end":""},{"old":"/api/v1/users/update/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['users.update_user']['types'],
  },
  'systems.get_all_systems': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/systems/all',
    tokens: [{"old":"/api/v1/systems/all","type":0,"val":"api","end":""},{"old":"/api/v1/systems/all","type":0,"val":"v1","end":""},{"old":"/api/v1/systems/all","type":0,"val":"systems","end":""},{"old":"/api/v1/systems/all","type":0,"val":"all","end":""}],
    types: placeholder as Registry['systems.get_all_systems']['types'],
  },
  'systems.get_paginated_systems': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/systems/paginated',
    tokens: [{"old":"/api/v1/systems/paginated","type":0,"val":"api","end":""},{"old":"/api/v1/systems/paginated","type":0,"val":"v1","end":""},{"old":"/api/v1/systems/paginated","type":0,"val":"systems","end":""},{"old":"/api/v1/systems/paginated","type":0,"val":"paginated","end":""}],
    types: placeholder as Registry['systems.get_paginated_systems']['types'],
  },
  'systems.insert_system': {
    methods: ["POST"],
    pattern: '/api/v1/systems/insert',
    tokens: [{"old":"/api/v1/systems/insert","type":0,"val":"api","end":""},{"old":"/api/v1/systems/insert","type":0,"val":"v1","end":""},{"old":"/api/v1/systems/insert","type":0,"val":"systems","end":""},{"old":"/api/v1/systems/insert","type":0,"val":"insert","end":""}],
    types: placeholder as Registry['systems.insert_system']['types'],
  },
  'systems.update_system': {
    methods: ["PATCH"],
    pattern: '/api/v1/systems/update/:id',
    tokens: [{"old":"/api/v1/systems/update/:id","type":0,"val":"api","end":""},{"old":"/api/v1/systems/update/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/systems/update/:id","type":0,"val":"systems","end":""},{"old":"/api/v1/systems/update/:id","type":0,"val":"update","end":""},{"old":"/api/v1/systems/update/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['systems.update_system']['types'],
  },
  'roles.get_all_roles': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/roles/all',
    tokens: [{"old":"/api/v1/roles/all","type":0,"val":"api","end":""},{"old":"/api/v1/roles/all","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/all","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/all","type":0,"val":"all","end":""}],
    types: placeholder as Registry['roles.get_all_roles']['types'],
  },
  'roles.get_roles_by_user': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/roles/user/:id',
    tokens: [{"old":"/api/v1/roles/user/:id","type":0,"val":"api","end":""},{"old":"/api/v1/roles/user/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/user/:id","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/user/:id","type":0,"val":"user","end":""},{"old":"/api/v1/roles/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.get_roles_by_user']['types'],
  },
  'roles.get_roles_by_system': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/roles/system/:id',
    tokens: [{"old":"/api/v1/roles/system/:id","type":0,"val":"api","end":""},{"old":"/api/v1/roles/system/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/system/:id","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/system/:id","type":0,"val":"system","end":""},{"old":"/api/v1/roles/system/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.get_roles_by_system']['types'],
  },
  'roles.get_roles_by_auth_user': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/roles/auth',
    tokens: [{"old":"/api/v1/roles/auth","type":0,"val":"api","end":""},{"old":"/api/v1/roles/auth","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/auth","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/auth","type":0,"val":"auth","end":""}],
    types: placeholder as Registry['roles.get_roles_by_auth_user']['types'],
  },
  'roles.get_auth_user_role_by_system': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/roles/auth/system/:id',
    tokens: [{"old":"/api/v1/roles/auth/system/:id","type":0,"val":"api","end":""},{"old":"/api/v1/roles/auth/system/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/auth/system/:id","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/auth/system/:id","type":0,"val":"auth","end":""},{"old":"/api/v1/roles/auth/system/:id","type":0,"val":"system","end":""},{"old":"/api/v1/roles/auth/system/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.get_auth_user_role_by_system']['types'],
  },
  'roles.get_paginated_roles': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/roles/paginated',
    tokens: [{"old":"/api/v1/roles/paginated","type":0,"val":"api","end":""},{"old":"/api/v1/roles/paginated","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/paginated","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/paginated","type":0,"val":"paginated","end":""}],
    types: placeholder as Registry['roles.get_paginated_roles']['types'],
  },
  'roles.insert_user_roles': {
    methods: ["POST"],
    pattern: '/api/v1/roles/insert',
    tokens: [{"old":"/api/v1/roles/insert","type":0,"val":"api","end":""},{"old":"/api/v1/roles/insert","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/insert","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/insert","type":0,"val":"insert","end":""}],
    types: placeholder as Registry['roles.insert_user_roles']['types'],
  },
  'roles.update_user_role': {
    methods: ["PATCH"],
    pattern: '/api/v1/roles/update/:id',
    tokens: [{"old":"/api/v1/roles/update/:id","type":0,"val":"api","end":""},{"old":"/api/v1/roles/update/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/update/:id","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/update/:id","type":0,"val":"update","end":""},{"old":"/api/v1/roles/update/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.update_user_role']['types'],
  },
  'roles.delete_user_role': {
    methods: ["DELETE"],
    pattern: '/api/v1/roles/delete/:id',
    tokens: [{"old":"/api/v1/roles/delete/:id","type":0,"val":"api","end":""},{"old":"/api/v1/roles/delete/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/roles/delete/:id","type":0,"val":"roles","end":""},{"old":"/api/v1/roles/delete/:id","type":0,"val":"delete","end":""},{"old":"/api/v1/roles/delete/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.delete_user_role']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
