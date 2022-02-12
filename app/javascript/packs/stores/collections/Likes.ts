import { Collection } from 'mobx-rest'

import Like from '../models/Like'

export class Likes extends Collection<Like> {
  url ()  { return `/likes` }
  model () { return Like }
}

export default new Likes()
