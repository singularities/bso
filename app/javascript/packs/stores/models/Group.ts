import { Collection, Model } from 'mobx-rest'

import groupsCollection from '../collections/Groups'

export default class Group extends Model {
  collection: Collection<Group> = groupsCollection
}
