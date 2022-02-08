import * as React from 'react'
import { AspectRatio, Box, Button, Flex, Textarea, VStack } from '@chakra-ui/react'

import SearchResult from '../../../stores/models/SearchResult'
import Song from '../../../stores/models/Song'
import Comment from '../../../stores/models/Comment'
import { useSearch } from '../../Search/Provider'

const Add = ({ result, onAdd }: { result: SearchResult, onAdd: Function }) => {
  const {setQuery} = useSearch()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<any> => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const commentText = formData.get('comment') as string

    const song = new Song({
      title: result.title,
      youtube_id: result.id
    })

    await song.save({}, { optimistic: false})

    const comment = new Comment({
      text: commentText,
      song_id: song.id
    })

    await comment.save({}, { optimistic: true})

    setQuery('')

    onAdd()
  }

  return (
    <Box with='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <form onSubmit={onSubmit}>
        <AspectRatio maxW='100%' ratio={16 / 9}>
          <iframe
            width='100%'
            src={result.embedUrl}
            title={`song ${result.id}`}
            frameBorder="0"
            allowFullScreen>
          </iframe>
        </AspectRatio>
        <VStack p='3' align='stretch'>
          <Textarea
            id='comment'
            name='comment'
            placeholder='Añadir un comentario' />
          <Flex mt='3' justify='right'>
            <Button
              type='submit'
              colorScheme='red'
            >
              Añadir
            </Button>
          </Flex>

        </VStack>
      </form>
    </Box>
  )
}

export default Add
