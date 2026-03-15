import vine from '@vinejs/vine'

export const InsertDivisionValidator = vine.create({
  division_name: vine.string().trim().minLength(3),
  division_code: vine.string().trim().maxLength(5),
  status: vine.enum(['A', 'I']).optional(),
})

export const UpdateDivisionValidator = vine.create({
  division_name: vine.string().trim().minLength(3).optional(),
  division_code: vine.string().trim().maxLength(5).optional(),
  status: vine.enum(['A', 'I']).optional(),
  params: vine.object({
    id: vine.number(),
  }),
})
