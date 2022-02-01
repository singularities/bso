import { Collection } from 'mobx-rest'

import Song from '../models/Song'

export class Songs extends Collection<Song> {
  url ()  { return `/songs` }
  model () { return Song }
}

export default new Songs()
