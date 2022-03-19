import * as React from 'react'
import { observer } from 'mobx-react'
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react'

import { useAuth } from '../Auth/Provider'
import { useCollections } from '../Collections'
import MembershipsCollection from '../../stores/collections/Memberships'

const GrouplessUsers = () => {
  const auth = useAuth()
  const userId = auth.user().id
  const { users } = useCollections()

  const grouplessUsers = users.filter(user =>
    MembershipsCollection.find(
        { user_id: user.get('id') }
    ) === undefined
  )

  return (
    <Box mt='4'>
      <Heading size='lg' color='gray'>
        Sin grupo
      </Heading>
      <UnorderedList>
        {grouplessUsers.map(user => (
          <ListItem key={user.get('id')} listStyleType='none'>
            <Box
              as='span'
              paddingX='1'
              bgColor={user.get('id') === userId ? 'red.100' : 'white'}
            >
              {user.get('name')}
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default observer(GrouplessUsers)
