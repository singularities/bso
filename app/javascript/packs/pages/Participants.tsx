import * as React from "react"

import MembershipsCollection from '../stores/collections/Memberships'
import Groups from '../components/Groups'
import GrouplessUsers from '../components/GrouplessUsers'

const ParticipantsPage = () => {
  React.useEffect(() => {
    MembershipsCollection.fetch()
  }, [])

  return (
    <>
      <Groups />
      <GrouplessUsers />
    </>
  )
}

export default ParticipantsPage
