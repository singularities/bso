import * as React from 'react'
import { observer } from 'mobx-react'

import Search from '../Search'
import Songs from '../Songs'
import { useCollections } from '../Collections'

const SongsContainer = () => {
  const { songs } = useCollections()

  return (
    <>
      <Search />
      <Songs songs={songs.toArray()}/>
    </>
  )
}

export default observer(SongsContainer)
