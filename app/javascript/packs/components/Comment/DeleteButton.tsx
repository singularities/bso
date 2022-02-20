import * as React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, IconButton } from '@chakra-ui/react'

import { useAuth } from '../Auth/Provider'
import Comment from '../../stores/models/Comment'

const DeleteButton = ({comment}: {comment: Comment}) => {
  const auth = useAuth()
  const [isOpen, setIsOpen] = React.useState(false)
  const cancelRef = React.useRef()

  const onClick = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  const onDelete = async () => {
    await comment.destroy({optimistic: false})

    setIsOpen(false)
  }

  if (comment.get('user_id') !== auth.user().id) return null

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
            <AlertDialogBody>
              ¿Borrar este comentario?
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
