import * as React from 'react'
import { Box, Flex, Heading, ListItem, Spacer, UnorderedList } from '@chakra-ui/react'

import { useAuth } from '../Auth/Provider'
import Group from '../../stores/models/Group'
import Membership from '../../stores/models/Membership'
import MembershipButton from './MembershipButton'

const GroupComponent = (
  {group, memberships}:
  { group: Group, memberships: Membership[] }
  ) => {
  const auth = useAuth()
  const userId = auth.user().id

  return (
    <Box>
      <Heading size='lg' color='red.400'>
        <Flex alignItems='center'>
          <Box>{group.get('name')}</Box>
          <Spacer/>
          <MembershipButton
            group={group}
            memberships={memberships}
          />
        </Flex>
      </Heading>
      <UnorderedList>
        {memberships.map(membership => (
          <ListItem
            key={membership.get('id')}
            listStyleType='none'
          >
            <Box
              as='span'
              paddingX='1'
              bgColor={membership.get('user_id') === userId ? 'red.100' : 'white'}
            >
              {membership.user?.get('name')}
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )

}

export default GroupComponent
