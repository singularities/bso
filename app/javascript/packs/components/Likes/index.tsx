import * as React from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'
import { observer } from 'mobx-react'

import Song from '../../stores/models/Song'
import Like from '../../stores/models/Like'
import { Likes } from '../../stores/collections/Likes'
import { useAuth } from '../Auth/Provider'

const LikesComponent = ({song}: {song: Song}) => {
  let auth = useAuth()
  const likesCollection = React.useRef(new Likes())

  React.useEffect(() => {
    likesCollection.current.fetch({data: {song_id: song.id}})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const currentUserLike = (): Like | null =>
    likesCollection.current.find(
      like => like.get('user_id') === auth.user().id
    )

  const liked = currentUserLike() !== undefined

  const onClick = () => {
    if (liked) {
      currentUserLike().destroy()
    } else {
      likesCollection.current.create({
        song_id: song.id
      }, { optimistic: false })
    }
  }

  return (
    <>
      <IconButton
        variant='ghost'
        colorScheme={liked ? 'red' : 'gray'}
        aria-label='Me gusta'
        onClick={onClick}
        icon={<FaHeart />} />
      <Box as='span'>
        {likesCollection.current.length}
      </Box>
    </>
  )
}

export default observer(LikesComponent)
