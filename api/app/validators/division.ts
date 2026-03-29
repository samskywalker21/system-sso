import vine from '@vinejs/vine'

export const InsertDivisionValidator = vine.create({
  divisionName: vine.string().trim().minLength(3),
  divisionCode: vine.string().trim().maxLength(5),
  status: vine.enum(['A', 'I']).optional(),
})

export const UpdateDivisionValidator = vine.create({
  divisionName: vine.string().trim().minLength(3).optional(),
  divisionCode: vine.string().trim().maxLength(5).optional(),
  status: vine.enum(['A', 'I']).optional(),
  params: vine.object({
    id: vine.number(),
  }),
})
