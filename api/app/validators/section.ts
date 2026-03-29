import vine from '@vinejs/vine'

export const InsertSectionValidator = vine.create({
  sectionName: vine.string().minLength(3).trim(),
  sectionCode: vine.string().maxLength(5).trim(),
  status: vine.enum(['A', 'I']).optional(),
  divisionId: vine.number(),
})

export const UpdateSectionValidator = vine.create({
  sectionName: vine.string().minLength(3).trim().optional(),
  sectionCode: vine.string().maxLength(5).trim().optional(),
  status: vine.enum(['A', 'I']).optional(),
  divisionId: vine.number().optional(),
  params: vine.object({
    id: vine.number(),
  }),
})
