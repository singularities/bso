import * as React from 'react'
import { observer } from 'mobx-react'
import { VStack } from '@chakra-ui/react'

import { useCollections } from '../Collections'

import Song from './Song'

const Songs = () => {
  const { songs } = useCollections()

  return (
    <VStack spacing={8} mt='3'>
      {songs.map(song => (
        <Song key={song.id} song={song} />
      ))}
    </VStack>
  )
}

export default observer(Songs)
