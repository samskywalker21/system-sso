import { BaseTransformer } from '@adonisjs/core/transformers'
import type Role from '#models/role'

export default class RoleTransformer extends BaseTransformer<Role> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'systemId', 'userId', 'accessLevel']),
      user: `${this.resource.user?.lname}, ${this.resource.user?.fname} ${this.resource.user?.mname}`,
      systemName: this.resource.system?.systemName,
    }
  }
}
