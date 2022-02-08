import * as React from 'react'
import { observer } from 'mobx-react'
import { Spinner, VStack } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'

import Song from '../../stores/models/Song'
import SongComponent from '../Song'

const InitialSongCount = 3

function arraysEqual(a: Array<Song>, b: Array<Song>) {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length !== b.length) return false

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

const Songs = ({songs}: {songs: Array<Song>}) => {
  const [displayedSongs, setDisplayedSongs] = React.useState([])
  const [displayedSongsCount, setDisplayedSongsCount] = React.useState(InitialSongCount)
  const [hasMore, setHasMore] = React.useState(true)

  const sortedSongs =
    songs.sort((a, b) => (a.get('created_at') > b.get('created_at') ? -1 : 1))

  React.useEffect(() => {
    setDisplayedSongsCount(InitialSongCount)
    setDisplayedSongs(sortedSongs.slice(0, InitialSongCount))
    setHasMore(true)
  }, [sortedSongs])

  if (!sortedSongs.length) return null

  const fetchMoreSongs = () => {
    if (sortedSongs.length <= displayedSongsCount) {
      setHasMore(false)
      return
    }

    displayedSongs.push(sortedSongs[displayedSongsCount])
    setDisplayedSongs(displayedSongs)
    setDisplayedSongsCount(displayedSongsCount + 1)
  }

  return (
    <VStack spacing={8} mt='3' align='stretch'>
      <InfiniteScroll
        dataLength={displayedSongs.length}
        next={fetchMoreSongs}
        hasMore={hasMore}
        loader={<Spinner />} >
        {displayedSongs.map(song => (
          <SongComponent key={song.id} song={song} />
        ))}
      </InfiniteScroll>
    </VStack>
  )
}

export default observer(Songs)
