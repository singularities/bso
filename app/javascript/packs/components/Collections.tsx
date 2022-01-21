import * as React from 'react'

import User from '../models/User'
import UsersCollection, { Users } from '../collections/Users'

import { Collection } from 'mobx-rest'

const Context = React.createContext<Users | null | undefined>(
  null
)

export const CollectionsProvider = ({
  users,
  children
}: {
  users: Collection<User>
  children: React.ReactNode
}) => <Context.Provider value={users as any}>{children}</Context.Provider>

export const useCollections = (): Users => {
  const users = React.useContext(Context)

  if (!users) {
    throw new Error(
      'users must be used within a CollectionsProvider'
    )
  }

  return users
}

export const Collections = ({
  children
}: {
  children: React.ReactNode
}) => {
  const users = React.useRef(UsersCollection).current

  React.useEffect(() => {
    users.fetch()
  })

  return <CollectionsProvider users={users}>{children}</CollectionsProvider>
}

