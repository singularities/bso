import * as React from 'react'
import { Container, Flex, Icon, Link, Spacer } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'

import Logo from './Logo'
import AuthStatus from '../Auth/Status'

const TopBar = () => {
  return (
    <Container mt='2'>
      <Flex flexDirection='row' alignItems='center'>
        <Logo/>
        <Spacer />
        <Link href='whatsapp://send?text=Nuestra%20banda%20sonora%20con%20Marta%20https://bso.singularities.org/'>
          <Icon as={FaWhatsapp} w='8' h='8' mt='2'/>
        </Link>
        <AuthStatus />
      </Flex>

    </Container>
  )
}

export default TopBar
