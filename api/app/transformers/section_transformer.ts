import { BaseTransformer } from '@adonisjs/core/transformers'
import type Section from '#models/section'

export default class SectionTransformer extends BaseTransformer<Section> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'sectionName',
        'sectionCode',
        'divisionId',
        'status',
        'createdAt',
        'updatedAt',
      ]),
      divisionName: this.resource.division.divisionName,
      divisionCode: this.resource.division.divisionCode,
    }
  }
}
