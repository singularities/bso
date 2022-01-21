import { Collection } from 'mobx-rest'

import User from '../models/User'

export class Users extends Collection<User> {
  url ()  { return `/users` }
  model () { return User }
}

export default new Users()
