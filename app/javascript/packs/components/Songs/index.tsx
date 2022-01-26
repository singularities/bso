import * as React from 'react'
import { observer } from 'mobx-react'

import { useCollections } from '../Collections'

import Song from './Song'

const Songs = () => {
  const { songs } = useCollections()

  return (
    <>
      {songs.map(song => (
        <Song key={song.id} song={song} />
      ))}
    </>
  )
}

export default observer(Songs)
