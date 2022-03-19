import * as React from 'react'
import { observer } from 'mobx-react'
import { VStack } from '@chakra-ui/react'

import GroupsCollection from '../../stores/collections/Groups'
import MembershipsCollection from '../../stores/collections/Memberships'
import Group from '../Group'

const Groups = () => {
  React.useEffect(() => {
    GroupsCollection.fetch()
  }, [])

  const memberships = (group_id: number) => {
    return MembershipsCollection.filter(
      membership => membership.get('group_id') === group_id
    )
  }

  return (
    <VStack spacing='4' align='stretch'>
      {GroupsCollection.toArray().map(group => (
        <Group
          key={group.id}
          group={group}
          memberships={memberships(group.get('id'))}
        />
      ))}
    </VStack>
  )
}

export default observer(Groups)
