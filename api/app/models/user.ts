import { UserSchema } from '#database/schema'
import Section from '#models/section'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { type AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class User extends compose(
  UserSchema,
  withAuthFinder(hash, {
    uids: ['username'],
    passwordColumnName: 'password',
  })
) {
  static accessTokens = DbAccessTokensProvider.forModel(User, { expiresIn: '1d' })
  declare currentAccessToken?: AccessToken

  @belongsTo(() => Section)
  declare section: BelongsTo<typeof Section>
}
