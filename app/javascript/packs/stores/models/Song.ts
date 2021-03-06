import { Collection, Model } from 'mobx-rest'
import { computed, makeObservable } from 'mobx'

import usersCollection from '../collections/Users'
import songsCollection from '../collections/Songs'

export default class Song extends Model {
  collection: Collection<Song> = songsCollection

  constructor (attributes: any = {}, defaultAttributes: any = {}) {
    super(attributes, defaultAttributes)

    makeObservable(this, {
      user: computed,
      userName: computed,
      thumbnailUrl: computed
    })
  }

  get user () {
    return usersCollection.get(this.get('user_id'))
  }

  get userName () {
    if (!this.user) return null

    return this.user.get('name')
  }

  get thumbnailUrl () {
    return this.get('thumbnail_url') || ''
  }
}
