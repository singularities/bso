import * as React from 'react'
import { observer } from 'mobx-react'

import Search from '../Search'
import Songs from '../Songs'
import { useCollections } from '../Collections'
import SongAdd from '../SongAdd'
import { useSearch } from '../Search/Provider'
import Mute from '../Mute'
import PlayProvider from '../PlayProvider'

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

  const onAdd = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 2000)
  }

  return (
    <PlayProvider>
      <Search />
      <Songs songs={filteredSongs}/>
      <SongAdd onAdd={onAdd}/>
      <Mute />
    </PlayProvider>
  )
}

export default observer(SongsContainer)
