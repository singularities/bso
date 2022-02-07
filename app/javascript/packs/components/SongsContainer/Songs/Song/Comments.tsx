import * as React from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { FaRegComment } from 'react-icons/fa'
import { observer } from 'mobx-react'

import {Comments} from '../../../../stores/collections/Comments'

const CommentsComponent = ({songId}: {songId: number}) => {
  const commentsCollection = React.useRef(new Comments())

  React.useEffect(() => {
    commentsCollection.current.fetch({data: {song_id: songId}})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return(
    <>
      <IconButton
        variant='ghost'
        colorScheme={'gray'}
        aria-label='Comentar'
        icon={<FaRegComment />} />
      <Box as='span'>
        {commentsCollection.current.length}
      </Box>
    </>
  )
}

export default observer(CommentsComponent)

