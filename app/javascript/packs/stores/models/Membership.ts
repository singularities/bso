import { Collection, Model } from 'mobx-rest'
import { computed, makeObservable } from 'mobx'

import usersCollection from '../collections/Users'
import groupsCollection from '../collections/Groups'
import membershipsCollection from '../collections/Memberships'

export default class Membership extends Model {
  collection: Collection<Membership> = membershipsCollection

  constructor (attributes: any = {}, defaultAttributes: any = {}) {
    super(attributes, defaultAttributes)

    makeObservable(this, {
      user: computed,
      group: computed
    })
  }

  get user () {
    return usersCollection.get(this.get('user_id'))
  }
  get group () {
    return groupsCollection.get(this.get('group_id'))
  }
}
