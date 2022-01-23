import * as React from 'react'

import UsersCollection, { Users } from '../collections/Users'

export interface CollectionsContextType {
  users: Users
}

const Context = React.createContext<CollectionsContextType>(
  null
)

export const CollectionsProvider = ({
  value,
  children
}: {
  value: CollectionsContextType,
  children: React.ReactNode
}) => <Context.Provider value={value}>{children}</Context.Provider>

export const useCollections = (): CollectionsContextType => {
  const collections = React.useContext(Context)

  if (!collections) {
    throw new Error(
      'users must be used within a CollectionsProvider'
    )
  }

  return collections
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

  const value = { users }

  return <CollectionsProvider value={value}>{children}</CollectionsProvider>
}
