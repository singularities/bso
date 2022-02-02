import * as React from 'react'
import { observer } from 'mobx-react'
import { Spinner, VStack } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'

import Song from '../../stores/models/Song'
import SongComponent from './Song'

const InitialSongCount = 3

const Songs = ({songs}: {songs: Array<Song>}) => {
  const sortedSongs =
    songs.sort((a, b) => (a.get('created_at') > b.get('created_at') ? -1 : 1))
  const [hasMore, setHasMore] = React.useState(true)
  const [displayedSongsCount, setDisplayedSongsCount] = React.useState(InitialSongCount)
  const [displayedSongs, setDisplayedSongs] = React.useState([])

  const fetchMoreSongs = () => {
    if (sortedSongs.length <= displayedSongsCount) {
      setHasMore(false)
      return
    }

    displayedSongs.push(sortedSongs[displayedSongsCount])
    setDisplayedSongs(displayedSongs)
    setDisplayedSongsCount(displayedSongsCount + 1)
  }

  if (!displayedSongs.length && sortedSongs.length) {
    setDisplayedSongs(sortedSongs.slice(0, displayedSongsCount))
  } else if (displayedSongs.length && displayedSongs[0] !== sortedSongs[0]) {
    setDisplayedSongs(sortedSongs.slice(0, displayedSongsCount))
    setDisplayedSongsCount(InitialSongCount)
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
