import * as React from 'react'
import { observer } from 'mobx-react'
import { Box, Flex, Heading, ListItem, Spacer, UnorderedList } from '@chakra-ui/react'

import { useAuth } from '../Auth/Provider'
import { useCollections } from '../Collections'
import MembershipsCollection from '../../stores/collections/Memberships'
import AddGroup from './AddGroup'

const GrouplessUsers = () => {
  const auth = useAuth()
  const userId = auth.user().id
  const { users } = useCollections()

  const grouplessUsers = users.filter(user =>
    MembershipsCollection.find(
        { user_id: user.get('id') }
    ) === undefined
  )

  const userIsGroupless =
    grouplessUsers.find(user =>
      user.get('id') === userId
    ) !== undefined

  if (grouplessUsers.length === 0) return null

  return (
    <Box mt='4'>
      <Heading size='lg' color='gray'>
        <Flex alignItems='center'>
          <Box>Otros</Box>
          <Spacer/>
          <AddGroup userIsGroupless={userIsGroupless} />
        </Flex>
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
