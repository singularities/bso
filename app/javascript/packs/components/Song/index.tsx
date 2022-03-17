import * as React from 'react'
import { AspectRatio, Box, Flex, Spacer } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { observer } from 'mobx-react'

import Song from '../../stores/models/Song'
import Comments from '../Comments'
import Likes from '../Likes'
import Video from './Video'
import Thumbnail from './Thumbnail'
import DeleteButton from './DeleteButton'
import { usePlay } from '../PlayProvider'

const REFRESH_INTERVAL = 10000

const SongComponent = ({ song }: {song: Song}) => {
  const hasVideo = song.get('video_url') !== null
  const [ref, inView, entry] = useInView({
    threshold: 1
  })
  const { currentSong, setCurrentSong } = usePlay()

  React.useEffect(() => {
    let interval

    if (!hasVideo) {
      interval = setInterval(() => {
        song.fetch()
      }, REFRESH_INTERVAL)
    }

    return () => {
      clearInterval(interval)
    }
  }, [hasVideo, song])

  React.useEffect(() => {
    if (inView) {
      setCurrentSong(song)
    }
  }, [inView, setCurrentSong, song])

  const isCurrentSong = () => currentSong && currentSong.id === song.id

  return (
    <Box
      mb={4}
      with='100%'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'>
      <AspectRatio maxW='100%' ratio={16 / 9} ref={ref}>
        { hasVideo && isCurrentSong() ? (
          <Video song={song} />
        ) : (
          <Thumbnail song={song} />
        )
        }
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

export default observer(SongComponent)
