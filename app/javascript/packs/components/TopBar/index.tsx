import * as React from 'react'
import { useLocation, Link as ReactLink } from 'react-router-dom'
import { Container, Flex, Icon, Link, Spacer } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'

import Logo from './Logo'
import AuthStatus from '../Auth/Status'

const TopBar = () => {
  const location = useLocation()

  const isCurrentLocation = (path: string) => {
    return location.pathname === path
  }
  const pathColor = (path: string) => {
    return isCurrentLocation(path) ? 'gray' : 'red.400'
  }

  return (
    <Container mt='2' borderBottomWidth='1px'>
      <Flex flexDirection='row' alignItems='center'>
        <Link as={ReactLink} to="/home">
          <Logo/>
        </Link>
        <Link
          as={ReactLink}
          to="/home"
          ml='4'
          color={pathColor('/home')}>
          Canciones
        </Link>
        <Link
          as={ReactLink}
          to="/participants"
          ml='3'
          color={pathColor('/participants')}>
          Participantes
        </Link>
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
