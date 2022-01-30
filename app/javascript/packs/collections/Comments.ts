import { Collection } from 'mobx-rest'

import Comment from '../models/Comment'

export class Comments extends Collection<Comment> {
  url ()  { return `/comments` }
  model () { return Comment }
}

export default new Comments()
