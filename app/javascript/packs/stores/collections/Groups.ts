import { Collection } from 'mobx-rest'

import Group from '../models/Group'

export class Groups extends Collection<Group> {
  url ()  { return `/groups` }
  model () { return Group }
}

export default new Groups()
