import * as React from 'react'
import { observer } from 'mobx-react'

import Search from '../Search'
import Songs from '../Songs'
import { useCollections } from '../Collections'
import SongAdd from '../SongAdd'
import { useSearch } from '../Search/Provider'

const SEARCH_DELAY = 1000

const SongsContainer = () => {
  const { songs } = useCollections()
  const { query } = useSearch()

  const songsArray = songs.toArray()

  const filteredSongs = React.useMemo(() => {
    if (!query.length) return songsArray

    return songsArray
      .filter(
        song => song.get('title')
                    .toLowerCase()
                    .includes(query.toLowerCase())
      )
  }, [query, songsArray])

  return (
    <>
      <Search />
      <Songs songs={filteredSongs}/>
      <SongAdd />
    </>
  )
}

export default observer(SongsContainer)
