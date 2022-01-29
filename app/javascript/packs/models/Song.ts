import { Model } from 'mobx-rest'
import { computed, makeObservable } from 'mobx'

import usersCollection from '../collections/Users'

export default class Song extends Model {
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
