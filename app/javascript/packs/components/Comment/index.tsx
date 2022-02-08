import * as React from 'react'
import { Box } from '@chakra-ui/react'

import Comment from '../../stores/models/Comment'

const CommentComponent = ({comment}: {comment: Comment}) => {
  return (
    <Box>
      <Box fontWeight='semibold' fontSize='sm'>
        { comment.userName}
      </Box>
      <Box>
        { comment.get('text')}
      </Box>
    </Box>
  )
}

export default CommentComponent

