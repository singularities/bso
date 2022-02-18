import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { VStack, Text, Button, Container } from '@chakra-ui/react'

import Logo from './Logo'

const Front = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/register')
  }

  return (
    <Container textAlign="center" fontSize="xl">
      <VStack spacing={8} mt='8' mb='8'>
        <Text fontSize="2xl" color="red.500">
          Nuestra banda sonora con Marta
        </Text>
        <Logo h="40vmin" pointerEvents="none" />
        <Text color="gray.500">
          Marta cumple 40 años y reunir las canciones que nos han acompañado

        </Text>
        <Button size='lg' onClick={onClick}>Empezar</Button>
      </VStack>
    </Container>
  )
}

export default Front
