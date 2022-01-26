import * as React from 'react'
import { Box } from '@chakra-ui/react'

import Song from '../../models/Song'

const SongComponent = ({ song }: {song: Song}) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <iframe
        src={`https://www.youtube.com/embed/${song.get('youtube_id')}`}
        title={`song ${song.get('youtube_id')}`}
        frameBorder="0"
        allowFullScreen>
      </iframe>
      <Box p='6'>
        {song.user().get('name')}
      </Box>
    </Box>
  )
}

export default SongComponent
