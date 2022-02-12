import { Collection, Model } from 'mobx-rest'
import { computed, makeObservable } from 'mobx'

import likesCollection from '../collections/Likes'
import usersCollection from '../collections/Users'

export default class Like extends Model {
  collection: Collection<Like> = likesCollection

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
