import { Collection, Model } from 'mobx-rest'
import { computed, makeObservable } from 'mobx'

import commentsCollection from '../collections/Comments'
import usersCollection from '../collections/Users'

export default class Comment extends Model {
  collection: Collection<Comment> = commentsCollection

  constructor (attributes: any = {}, defaultAttributes: any = {}) {
    super(attributes, defaultAttributes)

    makeObservable(this, {
      user: computed,
      userName: computed
    })
  }

  get user () {
    return usersCollection.get(this.get('user_id'))
  }

  get userName () {
    if (!this.user) return null

    return this.user.get('name')
  }
}
