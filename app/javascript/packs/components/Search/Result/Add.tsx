import * as React from 'react'
import { AspectRatio, Box, Button, Flex } from '@chakra-ui/react'

import SearchResult from '../../../models/SearchResult'
import Song from '../../../models/Song'
import { useAuth } from '../../Auth/Provider'

const Add = ({ result, onAdd }: { result: SearchResult, onAdd: Function }) => {
  const auth = useAuth()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<any> => {
    event.preventDefault()

    const song = new Song({
      title: result.title,
      youtube_id: result.id
    })

    await song.save({}, { optimistic: false})

    onAdd()
  }

  return (
    <Box with='100%' borderWidth='1px' borderRadius='lg' overflow='hidden' mb='3'>
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
        <Flex p='3' justify='right'>
          <Button
            type='submit'
            colorScheme='red'
            mt={2}
          >
            Añadir
          </Button>
        </Flex>
      </form>
    </Box>
  )
}

export default Add
