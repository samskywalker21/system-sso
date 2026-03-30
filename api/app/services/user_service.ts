import User from '#models/user'
import Role from '#models/role'

interface UserData {
  fname: string
  mname?: string
  lname: string
  username: string
  password: string
  position: string
  sectionId: number
  status?: 'A' | 'I'
}

export class UserService {
  // Your code here
  async getAllUsers() {
    return await User.query()
      .select('*')
      .preload('section', (subquery) => {
        subquery
          .select('section_name', 'section_code', 'division_id')
          .preload('division', (subquery2) => {
            subquery2.select('division_name', 'division_code')
          })
      })
  }

  async getPaginatedUsers(page: number, limit: number, search?: string) {
    const filterQuery = () => {
      const query = User.query().preload('section', (subquery) => {
        subquery.preload('division')
      })

      if (search) {
        query
          .whereILike('fname', `%${search}%`)
          .orWhereILike('mname', `%${search}%`)
          .orWhereILike('lname', `%${search}%`)
          .orWhereILike('username', `%${search}%`)
          .orWhereHas('section', (section) => {
            section
              .whereILike('section_name', `%${search}%`)
              .orWhereILike('section_code', `%${search}%`)
              .orWhereHas('division', (division) => {
                division
                  .whereILike('division_name', `%${search}%`)
                  .orWhereILike('division_code', `%${search}%`)
              })
          })
      }
      return query
    }

    const data = await filterQuery().paginate(page, limit)
    if (data.lastPage < page && data.total > 0) {
      return await filterQuery().paginate(1, limit)
    }
    return data
  }

  async getActiveUsers() {
    return await User.query()
      .preload('section', (subquery) => {
        subquery
          .select('section_name', 'section_code', 'division_id')
          .preload('division', (subquery2) => {
            subquery2.select('division_name', 'division_code')
          })
      })
      .where('status', '=', 'A')
  }

  async getUserById(id: number) {
    return await User.query()
      .preload('section', (subquery) => {
        subquery
          .select('section_name', 'section_code', 'division_id')
          .preload('division', (subquery2) => {
            subquery2.select('division_name', 'division_code')
          })
      })
      .where('id', '=', id)
  }

  async insertUser(data: UserData) {
    const newUser = await User.create(data)
    const { id } = newUser
    const roleExists = await Role.findBy({ systemId: 1, userId: id })
    if (!roleExists) {
      await Role.create({ userId: id, systemId: 1, accessLevel: '4' })
    }
    return newUser
  }

  async updateUser(id: number, data: Partial<UserData>) {
    const user = await User.findOrFail(id)
    const newUser = user.merge(data)
    return newUser.save()
  }
}
