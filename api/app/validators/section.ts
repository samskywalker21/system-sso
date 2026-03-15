import vine from '@vinejs/vine'

export const InsertSectionValidator = vine.create({
  section_name: vine.string().minLength(3).trim(),
  section_code: vine.string().maxLength(5).trim(),
  status: vine.enum(['A', 'I']).optional(),
  division_id: vine.number(),
})

export const UpdateSectionValidator = vine.create({
  section_name: vine.string().minLength(3).trim().optional(),
  section_code: vine.string().maxLength(5).trim().optional(),
  status: vine.enum(['A', 'I']).optional(),
  division_id: vine.number().optional(),
  params: vine.object({
    id: vine.number(),
  }),
})
