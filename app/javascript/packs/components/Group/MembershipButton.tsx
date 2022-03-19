import * as React from 'react'
import { observer } from 'mobx-react'
import { IconButton } from '@chakra-ui/react'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'

import { useAuth } from "../Auth/Provider"
import MembershipsCollection from '../../stores/collections/Memberships'
import Group from '../../stores/models/Group'
import Membership from '../../stores/models/Membership'

const MembershipButton = (
  {group, memberships}: {
    group: Group,
    memberships: Membership[]
  }
) => {
  const auth = useAuth()
  const userId = auth.user().id
  const membership = memberships.find(
      membership => membership.get('user_id') === userId
    )
  const isMember = membership !== undefined

  const join = () => {
    MembershipsCollection.create({
      group_id: group.id
    }, { optimistic: false })
  }

  const leave = () => {
    membership.destroy()
  }

  return (
    isMember ?
      <IconButton
        variant='outline'
        aria-label='Abandonar grupo'
        onClick={leave}
        icon={<FaUserMinus />}
      />
    :
      <IconButton
        variant='outline'
        aria-label='Unirse al grupo'
        onClick={join}
        icon={<FaUserPlus />}
      />
  )
}

export default observer(MembershipButton)
