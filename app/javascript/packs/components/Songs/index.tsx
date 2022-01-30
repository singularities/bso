import * as React from 'react'
import { observer } from 'mobx-react'
import { VStack } from '@chakra-ui/react'

import { useCollections } from '../Collections'

import Song from './Song'

const Songs = () => {
  const { songs } = useCollections()

  const sortedSongs =
    songs
      .toArray()
      .sort((a, b) => (a.get('created_at') > b.get('created_at') ? -1 : 1))

  return (
    <VStack spacing={8} mt='3' align='stretch'>
      {sortedSongs.map(song => (
        <Song key={song.id} song={song} />
      ))}
    </VStack>
  )
}

export default observer(Songs)
