import { SectionSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import Division from '#models/division'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Section extends SectionSchema {
  @belongsTo(() => Division)
  declare division: BelongsTo<typeof Division>
}
