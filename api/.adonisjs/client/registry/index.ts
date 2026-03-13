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
