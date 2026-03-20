import vine from '@vinejs/vine'

export const InsertRolesValidator = vine.create({
  roles: vine.array(
    vine.object({
      userId: vine.number(),
      systemId: vine.number(),
      accessLevel: vine.enum(['1', '2', '3', '4']),
    })
  ),
})

export const UpdateRolesValidator = vine.create({
  userId: vine.number().optional(),
  systemId: vine.number().optional(),
  accessLevel: vine.enum(['1', '2', '3', '4']).optional(),
  params: vine.object({
    id: vine.number().min(1),
  }),
})
