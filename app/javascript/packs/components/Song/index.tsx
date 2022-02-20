import * as React from 'react'
import { AspectRatio, Box, Flex, Spacer } from '@chakra-ui/react'

import Song from '../../stores/models/Song'
import Comments from '../Comments'
import Likes from '../Likes'
import DeleteButton from './DeleteButton'

const SongComponent = ({ song }: {song: Song}) => {
  return (
    <Box with='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <AspectRatio maxW='100%' ratio={16 / 9}>
        <iframe
          width='100%'
          src={song.embedUrl}
          title={`song ${song.get('youtube_id')}`}
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </AspectRatio>
      <Box p='3'>
        <Flex alignItems='center'>
          <Box
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {song.get('title')}
          </Box>
          <Spacer/>
          <DeleteButton song={song} />
        </Flex>
        <Flex mt='1' alignItems={'center'}>
          <Box as='span' color='gray.600' fontSize='sm'>
            Añadida por &nbsp;
          </Box>
          <Box as='span'>
            {song.userName}
          </Box>
          <Spacer />
          <Comments song={song}/>
          <Likes song={song}/>
        </Flex>
      </Box>
    </Box>
  )
}

export default SongComponent
