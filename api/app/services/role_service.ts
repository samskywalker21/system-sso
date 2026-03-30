import Role from '#models/role'

interface RoleData {
  userId: number
  systemId: number
  accessLevel: '1' | '2' | '3' | '4'
}
export class RoleService {
  // Your code here
  async getAllRoles() {
    return await Role.query()
      .select('*')
      .preload('user', (subquery) => {
        subquery.select('fname', 'mname', 'lname')
      })
      .preload('system', (subquery2) => {
        subquery2.select('system_name')
      })
  }

  async getPaginatedRoles(page: number, limit: number, search?: string) {
    const filterQuery = () => {
      const query = Role.query()
        .select('*')
        .preload('user', (subquery) => {
          subquery.select('fname', 'mname', 'lname')
        })
        .preload('system', (subquery2) => {
          subquery2.select('system_name')
        })
      if (search) {
        query
          .whereHas('user', (user) => {
            user
              .whereILike('fname', `%${search}%`)
              .orWhereILike('mname', `%${search}%`)
              .orWhereILike('lname', `%${search}%`)
          })
          .orWhereHas('system', (system) => {
            system.whereILike('system_name', `%${search}%`)
          })
      }
      return query
    }

    const data = await filterQuery().paginate(page, limit)
    const container = data.toJSON()
    if (container.meta.lastPage < page && container.meta.total > 0) {
      return await filterQuery().paginate(1, limit)
    }
    return data
  }

  async getRolesByUser(user_id: number) {
    return await Role.query()
      .select('*')
      .preload('user', (subquery) => {
        subquery.select('fname', 'mname', 'lname')
      })
      .preload('system', (subquery2) => {
        subquery2.select('system_name')
      })
      .whereHas('user', (user) => {
        user.where('id', '=', user_id)
      })
  }

  async getRolesBySystem(system_id: number) {
    return await Role.query()
      .select('*')
      .preload('user', (subquery) => {
        subquery.select('fname', 'mname', 'lname')
      })
      .preload('system', (subquery2) => {
        subquery2.select('system_name')
      })
      .whereHas('system', (user) => {
        user.where('id', '=', system_id)
      })
  }

  async getAuthUserRoleBySystem(userId: number, systemId: number) {
    return await Role.findBy({ userId, systemId })
  }

  async insertUserRoles(roles: RoleData[]) {
    const roleMap = roles.map(async (role) => {
      const doesExist = await Role.findBy({ systemId: role.systemId, userId: role.userId })
      if (!doesExist) {
        const newRole = await Role.create({
          userId: role.userId,
          systemId: role.systemId,
          accessLevel: String(role.accessLevel),
        })
        return newRole
      }
    })

    return roleMap
  }

  async updateUserRole(id: number, data: Partial<RoleData>) {
    const role = await Role.findOrFail(id)
    const newRole = role.merge(data)
    return newRole.save()
  }

  async deleteUserRole(id: number) {
    const role = await Role.findOrFail(id)
    return await role.delete()
  }
}
