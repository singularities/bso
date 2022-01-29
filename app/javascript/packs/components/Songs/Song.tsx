import * as React from 'react'
import { AspectRatio, Box } from '@chakra-ui/react'

import Song from '../../models/Song'

const SongComponent = ({ song }: {song: Song}) => {
  return (
    <Box with='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <AspectRatio maxW='100%' ratio={16 / 9}>
        <iframe
          width='100%'
          src={`https://www.youtube.com/embed/${song.get('youtube_id')}`}
          title={`song ${song.get('youtube_id')}`}
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </AspectRatio>
      <Box p='3'>
        <Box
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {song.get('title')}
          </Box>
        <Box mt='1'>
          <Box as='span' color='gray.600' fontSize='sm'>
            Añadida por &nbsp;
          </Box>
          {song.userName()}
        </Box>
      </Box>
    </Box>
  )
}

export default SongComponent
