import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.verify': { paramsTuple?: []; params?: {} }
    'auth.verify_token': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'auth.logout_all': { paramsTuple?: []; params?: {} }
    'auth.register': { paramsTuple?: []; params?: {} }
    'auth.sections': { paramsTuple?: []; params?: {} }
    'divisions.get_all_divisions': { paramsTuple?: []; params?: {} }
    'divisions.get_active_divisions': { paramsTuple?: []; params?: {} }
    'divisions.get_paginated_divisions': { paramsTuple?: []; params?: {} }
    'divisions.get_division_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'divisions.insert_division': { paramsTuple?: []; params?: {} }
    'divisions.update_division': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sections.get_all_sections': { paramsTuple?: []; params?: {} }
    'sections.get_active_sections': { paramsTuple?: []; params?: {} }
    'sections.get_paginated_sections': { paramsTuple?: []; params?: {} }
    'sections.get_section_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sections.insert_section': { paramsTuple?: []; params?: {} }
    'sections.update_section': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.get_all_users': { paramsTuple?: []; params?: {} }
    'users.get_active_users': { paramsTuple?: []; params?: {} }
    'users.get_paginated_users': { paramsTuple?: []; params?: {} }
    'users.get_user_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.insert_user': { paramsTuple?: []; params?: {} }
    'users.update_user': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.change_password': { paramsTuple?: []; params?: {} }
    'systems.get_all_systems': { paramsTuple?: []; params?: {} }
    'systems.get_paginated_systems': { paramsTuple?: []; params?: {} }
    'systems.insert_system': { paramsTuple?: []; params?: {} }
    'systems.update_system': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.get_all_roles': { paramsTuple?: []; params?: {} }
    'roles.get_roles_by_user': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.get_roles_by_system': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.get_roles_by_auth_user': { paramsTuple?: []; params?: {} }
    'roles.get_auth_user_role_by_system': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.get_paginated_roles': { paramsTuple?: []; params?: {} }
    'roles.insert_user_roles': { paramsTuple?: []; params?: {} }
    'roles.update_user_role': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.delete_user_role': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'auth.logout_all': { paramsTuple?: []; params?: {} }
    'auth.register': { paramsTuple?: []; params?: {} }
    'divisions.insert_division': { paramsTuple?: []; params?: {} }
    'sections.insert_section': { paramsTuple?: []; params?: {} }
    'users.insert_user': { paramsTuple?: []; params?: {} }
    'systems.insert_system': { paramsTuple?: []; params?: {} }
    'roles.insert_user_roles': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'auth.verify': { paramsTuple?: []; params?: {} }
    'auth.verify_token': { paramsTuple?: []; params?: {} }
    'auth.sections': { paramsTuple?: []; params?: {} }
    'divisions.get_all_divisions': { paramsTuple?: []; params?: {} }
    'divisions.get_active_divisions': { paramsTuple?: []; params?: {} }
    'divisions.get_paginated_divisions': { paramsTuple?: []; params?: {} }
    'divisions.get_division_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sections.get_all_sections': { paramsTuple?: []; params?: {} }
    'sections.get_active_sections': { paramsTuple?: []; params?: {} }
    'sections.get_paginated_sections': { paramsTuple?: []; params?: {} }
    'sections.get_section_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.get_all_users': { paramsTuple?: []; params?: {} }
    'users.get_active_users': { paramsTuple?: []; params?: {} }
    'users.get_paginated_users': { paramsTuple?: []; params?: {} }
    'users.get_user_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'systems.get_all_systems': { paramsTuple?: []; params?: {} }
    'systems.get_paginated_systems': { paramsTuple?: []; params?: {} }
    'roles.get_all_roles': { paramsTuple?: []; params?: {} }
    'roles.get_roles_by_user': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.get_roles_by_system': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.get_roles_by_auth_user': { paramsTuple?: []; params?: {} }
    'roles.get_auth_user_role_by_system': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.get_paginated_roles': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'auth.verify': { paramsTuple?: []; params?: {} }
    'auth.verify_token': { paramsTuple?: []; params?: {} }
    'auth.sections': { paramsTuple?: []; params?: {} }
    'divisions.get_all_divisions': { paramsTuple?: []; params?: {} }
    'divisions.get_active_divisions': { paramsTuple?: []; params?: {} }
    'divisions.get_paginated_divisions': { paramsTuple?: []; params?: {} }
    'divisions.get_division_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sections.get_all_sections': { paramsTuple?: []; params?: {} }
    'sections.get_active_sections': { paramsTuple?: []; params?: {} }
    'sections.get_paginated_sections': { paramsTuple?: []; params?: {} }
    'sections.get_section_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.get_all_users': { paramsTuple?: []; params?: {} }
    'users.get_active_users': { paramsTuple?: []; params?: {} }
    'users.get_paginated_users': { paramsTuple?: []; params?: {} }
    'users.get_user_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'systems.get_all_systems': { paramsTuple?: []; params?: {} }
    'systems.get_paginated_systems': { paramsTuple?: []; params?: {} }
    'roles.get_all_roles': { paramsTuple?: []; params?: {} }
    'roles.get_roles_by_user': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.get_roles_by_system': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.get_roles_by_auth_user': { paramsTuple?: []; params?: {} }
    'roles.get_auth_user_role_by_system': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.get_paginated_roles': { paramsTuple?: []; params?: {} }
  }
  PATCH: {
    'divisions.update_division': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sections.update_section': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.update_user': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.change_password': { paramsTuple?: []; params?: {} }
    'systems.update_system': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'roles.update_user_role': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'roles.delete_user_role': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}