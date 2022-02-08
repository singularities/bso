import * as React from 'react'
import { Box, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { FaRegComment } from 'react-icons/fa'
import { observer } from 'mobx-react'

import {Comments} from '../../../../stores/collections/Comments'
import Song from '../../../../stores/models/Song'

const CommentsComponent = ({song}: {song: Song}) => {
  const commentsCollection = React.useRef(new Comments())
  const { isOpen, onOpen, onClose } = useDisclosure()

  React.useEffect(() => {
    commentsCollection.current.fetch({data: {song_id: song.id}})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return(
    <>
      <IconButton
        variant='ghost'
        colorScheme={'gray'}
        aria-label='Comentar'
        onClick={onOpen}
        icon={<FaRegComment />} />
      <Box as='span'>
        {commentsCollection.current.length}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Comentarios de {song.get('title')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default observer(CommentsComponent)

