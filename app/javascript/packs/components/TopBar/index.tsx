import * as React from 'react'
import { Container, Flex, Spacer } from '@chakra-ui/react'

import Logo from './Logo'
import AuthStatus from '../Auth/Status'

const TopBar = () => {
  return (
    <Container mt='2'>
      <Flex flexDirection='row'>
        <Logo/>
        <Spacer />
        <AuthStatus />
      </Flex>

    </Container>
  )
}

export default TopBar
