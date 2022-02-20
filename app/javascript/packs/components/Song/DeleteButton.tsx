import * as React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, IconButton } from '@chakra-ui/react'

import { useAuth } from '../Auth/Provider'
import Song from '../../stores/models/Song'

const DeleteButton = ({song}: {song: Song}) => {
  const auth = useAuth()
  const [isOpen, setIsOpen] = React.useState(false)
  const cancelRef = React.useRef()

  const onClick = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  const onDelete = async () => {
    await song.destroy({optimistic: false})

    setIsOpen(false)
  }

  if (song.get('user_id') !== auth.user().id) return null

  return (
    <>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='Borrar'
        onClick={onClick}
        icon={<FaTrashAlt />} />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Borrar canción
            </AlertDialogHeader>
            <AlertDialogBody>
              ¿Borrar esta canción? Todos los comentarios se perderán
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme='gray' ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button onClick={onDelete} ml={3}>
                Borrar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteButton
