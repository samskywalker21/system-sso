/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    login: typeof routes['auth.login']
    verify: typeof routes['auth.verify']
    verifyToken: typeof routes['auth.verify_token']
    logout: typeof routes['auth.logout']
    logoutAll: typeof routes['auth.logout_all']
    register: typeof routes['auth.register']
    sections: typeof routes['auth.sections']
  }
  divisions: {
    getAllDivisions: typeof routes['divisions.get_all_divisions']
    getActiveDivisions: typeof routes['divisions.get_active_divisions']
    getPaginatedDivisions: typeof routes['divisions.get_paginated_divisions']
    getDivisionById: typeof routes['divisions.get_division_by_id']
    insertDivision: typeof routes['divisions.insert_division']
    updateDivision: typeof routes['divisions.update_division']
  }
  sections: {
    getAllSections: typeof routes['sections.get_all_sections']
    getActiveSections: typeof routes['sections.get_active_sections']
    getPaginatedSections: typeof routes['sections.get_paginated_sections']
    getSectionById: typeof routes['sections.get_section_by_id']
    insertSection: typeof routes['sections.insert_section']
    updateSection: typeof routes['sections.update_section']
  }
  users: {
    getAllUsers: typeof routes['users.get_all_users']
    getActiveUsers: typeof routes['users.get_active_users']
    getPaginatedUsers: typeof routes['users.get_paginated_users']
    getUserById: typeof routes['users.get_user_by_id']
    insertUser: typeof routes['users.insert_user']
    updateUser: typeof routes['users.update_user']
    changePassword: typeof routes['users.change_password']
  }
  systems: {
    getAllSystems: typeof routes['systems.get_all_systems']
    getPaginatedSystems: typeof routes['systems.get_paginated_systems']
    insertSystem: typeof routes['systems.insert_system']
    updateSystem: typeof routes['systems.update_system']
  }
  roles: {
    getAllRoles: typeof routes['roles.get_all_roles']
    getRolesByUser: typeof routes['roles.get_roles_by_user']
    getRolesBySystem: typeof routes['roles.get_roles_by_system']
    getRolesByAuthUser: typeof routes['roles.get_roles_by_auth_user']
    getAuthUserRoleBySystem: typeof routes['roles.get_auth_user_role_by_system']
    getPaginatedRoles: typeof routes['roles.get_paginated_roles']
    insertUserRoles: typeof routes['roles.insert_user_roles']
    updateUserRole: typeof routes['roles.update_user_role']
    deleteUserRole: typeof routes['roles.delete_user_role']
  }
}
