import * as React from 'react'
import { useNavigate, useLocation, Link as ReactLink } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Link,
  Text,
  Divider,
  Container,
  VStack
} from '@chakra-ui/react'

import { useAuth } from '../components/Auth/Provider'

const LoginPage = () => {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()

  let from = location.state?.from?.pathname || '/home'

  const [errors, setErrors] = React.useState<any>({})

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<any> => {
    event.preventDefault()

    setErrors({})

    let formData = new FormData(event.currentTarget)
    let email = formData.get('email') as string
    let password = formData.get('password') as string

    const result = await auth.signin(email, password)

    if (auth.isAuthenticated()) {
      navigate(from, { replace: true });

      return
    }

    setErrors(result)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <VStack spacing='4'>
          { errors.base && <FormErrorMessage>{errors.base.join(', ')}</FormErrorMessage> }
          <FormControl isRequired isInvalid={errors.email}>
            <FormLabel htmlFor="email">Correo electrónico</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
            />
            { errors.email && <FormErrorMessage>{errors.email.join(', ')}</FormErrorMessage> }
          </FormControl>
          <FormControl isRequired isInvalid={errors.password}>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
            />
            { errors.password && <FormErrorMessage>{errors.password.join(', ')}</FormErrorMessage> }
          </FormControl>
          <Text fontSize='sm' mt={4} color='red'>{errors.base }</Text>
          <Button
            type="submit"
            mt={2}
          >
            Entrar
          </Button>
        </VStack>
      </form>
      <Divider mt='4' mb='4'/>
      ¿Aún no te has registrado? <Link as={ReactLink} to="/register" color='red.400'>Registrarse</Link>
    </>
  )
}

export default LoginPage
