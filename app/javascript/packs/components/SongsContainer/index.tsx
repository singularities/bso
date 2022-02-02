import * as React from 'react'
import { observer } from 'mobx-react'

import Search from '../Search'
import Songs from '../Songs'
import { useCollections } from '../Collections'

const SongsContainer = () => {
  const { songs } = useCollections()
  const [query, setQuery] = React.useState('')
  const [filteredSongs, setFilteredSongs] = React.useState([])

  if (!filteredSongs.length && songs.length && !query.length) {
    setFilteredSongs(songs.toArray())
  }

  const handleSearch = (q: string) => {
    setQuery(q.toLowerCase())

    const filtered = songs
        .toArray()
        .filter(song => song.get('title').toLowerCase().includes(q))

    setFilteredSongs(filtered)
  }

  return (
    <>
      <Search handleChange={handleSearch} />
      <Songs songs={filteredSongs}/>
    </>
  )
}

export default observer(SongsContainer)
