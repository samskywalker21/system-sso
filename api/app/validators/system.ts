import vine from '@vinejs/vine'

export const InsertSystemValidator = vine.create({
  system_name: vine.string().minLength(3).trim(),
  status: vine.enum(['A', 'I']).optional(),
})

export const UpdateSystemValidator = vine.create({
  system_name: vine.string().minLength(3).trim().optional(),
  status: vine.enum(['A', 'I']).optional(),
  params: vine.object({
    id: vine.number(),
  }),
})
