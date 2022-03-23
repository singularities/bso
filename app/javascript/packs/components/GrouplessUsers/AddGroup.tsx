import * as React from 'react'
import { observer } from 'mobx-react'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'

import GroupsCollection from '../../stores/collections/Groups'
import MembershipsCollection from '../../stores/collections/Memberships'

const AddGroup = (
  { userIsGroupless }:
  { userIsGroupless: Boolean }
) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<any> => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const groupName = formData.get('name') as string

    const group = await GroupsCollection.create({
      name: groupName
    }, { optimistic: false }
    )

    await MembershipsCollection.create({
      group_id: group.id
    }, { optimistic: false })

    onClose()
  }

  return (
    <>
      <Button
        variant={ userIsGroupless ? 'solid' : 'outline' }
        size='sm'
        onClick={onOpen}
      >
        Añadir grupo
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={onSubmit}>
            <ModalHeader>Añadir grupo</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                id='name'
                name='name'
                placeholder='Nombre del grupo' />
            </ModalBody>
            <ModalFooter>
              <Button type='submit'>
                Añadir
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default observer(AddGroup)
