import * as React from 'react'
import { Box, Button, Flex, Textarea } from '@chakra-ui/react'

import {Comments} from '../../stores/collections/Comments'
import Song from '../../stores/models/Song'

const CommentAdd = ({comments, song}: { comments: Comments, song: Song}) => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<any> => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const commentText = formData.get('text') as string

    await comments.create({
      text: commentText,
      song_id: song.id
    }, { optimistic: false })

    form.reset()
  }

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Textarea
          id='text'
          name='text'
          placeholder='Añadir un comentario' />
        <Flex mt='3' justify='right'>
          <Button
            type='submit'
            colorScheme='red'
          >
            Añadir
          </Button>
        </Flex>
      </form>
    </Box>
  )
}

export default CommentAdd

