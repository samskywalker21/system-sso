/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    login: typeof routes['auth.login']
    verify: typeof routes['auth.verify']
    logout: typeof routes['auth.logout']
    logoutAll: typeof routes['auth.logout_all']
  }
}
