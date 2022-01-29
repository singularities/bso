import { Model } from 'mobx-rest'
import { computed, makeObservable } from 'mobx'

import usersCollection from '../collections/Users'

export default class Song extends Model {
  // constructor (attr: any = {}, defaultAttr: any = {}) {
  //   super(attr, defaultAttr)

  //   makeObservable(this, {
  //     user: computed
  //   })
  // }

  user () {
    return usersCollection.get(this.get('user_id'))
  }

  userName () {
    if (!this.user()) return null

    return this.user().get('name')
  }
}
