import type User from '#models/user'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class UserTransformer extends BaseTransformer<User> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'fname',
        'mname',
        'lname',
        'position',
        'username',
        'createdAt',
        'updatedAt',
        'status',
        'sectionId',
      ]),

      sectionName: this.resource.section?.sectionName,
      sectionCode: this.resource.section?.sectionCode,
      divisionId: this.resource.section?.divisionId,
      divisionName: this.resource.section?.division?.divisionName,
      divisionCode: this.resource.section?.division?.divisionCode,
    }
  }
}
