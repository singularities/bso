import * as React from "react"
import { Box, Flex, Icon } from "@chakra-ui/react"
import { FaGift } from "react-icons/fa"

import MembershipsCollection from '../stores/collections/Memberships'
import Groups from '../components/Groups'
import GrouplessUsers from '../components/GrouplessUsers'

const ParticipantsPage = () => {
  React.useEffect(() => {
    MembershipsCollection.fetch()
  }, [])

  return (
    <>
      <Flex
        borderColor='teal.200'
        borderWidth={1}
        backgroundColor='teal.50'
        p={3}
        borderRadius={5}
        mb={3}
      >
        <Icon as={FaGift} h={8} w={8} color='teal.300' />
        <Box ml={3} color='gray.600'>
          Este regalo solo tiene sentido gracias a vuestra participación.
          Sois quienes traéis los recuerdos y las emociones.
          ¡Gracias por participar!
        </Box>
      </Flex>
      <Groups />
      <GrouplessUsers />
    </>
  )
}

export default ParticipantsPage
