import * as React from 'react'

import UsersCollection, { Users } from '../collections/Users'
import SongsCollection, { Songs } from '../collections/Songs'

export interface CollectionsContextType {
  users: Users,
  songs: Songs
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
      'collections must be used within a CollectionsProvider'
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
  const songs = React.useRef(SongsCollection).current

  React.useEffect(() => {
    users.fetch()
    songs.fetch()
  })

  const value = { users, songs }

  return <CollectionsProvider value={value}>{children}</CollectionsProvider>
}
