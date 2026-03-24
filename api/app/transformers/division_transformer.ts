import { BaseTransformer } from '@adonisjs/core/transformers'
import type Division from '#models/division'

export default class DivisionTransformer extends BaseTransformer<Division> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'divisionName',
      'divisionCode',
      'createdAt',
      'updatedAt',
      'status',
    ])
  }
}
