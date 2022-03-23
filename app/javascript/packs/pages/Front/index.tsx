import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { VStack, Text, Button, Container, Box } from '@chakra-ui/react'

import Logo from './Logo'

const Front = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/register')
  }

  return (
    <Box textAlign="center" fontSize="xl">
      <VStack spacing={8} mt='8' mb='8'>
        <Text fontSize="2xl" color="red.500">
          Nuestra banda sonora con Marta
        </Text>
        <Logo h="40vmin" pointerEvents="none" />
        <Box color="gray.500">
          <Box>
            ¡Marta cumple 40 años!
          </Box>
          <Box>
            Vamos a reunir las canciones que nos han acompañado.
          <Box>
          </Box>
            Cuando piensas en Marta, ¿qué canción recuerdas?
          </Box>
        </Box>
        <Button size='lg' onClick={onClick}>Participar</Button>
      </VStack>
    </Box>
  )
}

export default Front
