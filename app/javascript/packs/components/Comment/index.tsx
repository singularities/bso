import * as React from 'react'
import { Box, Flex, IconButton, Spacer } from '@chakra-ui/react'

import Comment from '../../stores/models/Comment'
import DeleteButton from './DeleteButton'

const CommentComponent = ({comment}: {comment: Comment}) => {

  return (
    <Box>
      <Flex fontWeight='semibold' fontSize='sm' alignItems='center'>
        { comment.userName}
        <Spacer />
        <DeleteButton comment={comment}/>
      </Flex>
      <Box>
        { comment.get('text')}
      </Box>
    </Box>
  )
}

export default CommentComponent

