import * as React from 'react'
import {
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { FaYoutube } from 'react-icons/fa'

import Body from './Body'

const SongAdd = ({onAdd}: {
  onAdd: Function
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const searchInput: React.MutableRefObject<HTMLInputElement> =
    React.useRef<HTMLInputElement>(null)

  const addAndClose = async () => {
    onClose()
    onAdd()
  }

  return (
    <Box mt={2}>
      <Flex direction={'column'} align={'stretch'}>
        <Button onClick={onOpen}>Buscar en&nbsp;<Icon as={FaYoutube} />&nbsp;YouTube</Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={searchInput}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buscar en YouTube</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Body inputRef={searchInput} onAdd={addAndClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default SongAdd

