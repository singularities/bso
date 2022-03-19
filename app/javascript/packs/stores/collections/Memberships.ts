import { Collection } from 'mobx-rest'

import Membership from '../models/Membership'

export class Memberships extends Collection<Membership> {
  get indexes(): string[] {
    return ['user_id', 'group_id']
  }

  url ()  { return `/memberships` }
  model () { return Membership }
}

export default new Memberships()
