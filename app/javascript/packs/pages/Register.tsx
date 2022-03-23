import * as React from 'react'
import { useNavigate, useLocation, Link as ReactLink } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  Link,
  FormErrorMessage,
  Container,
  VStack,
  Divider
} from '@chakra-ui/react'

import { useAuth } from '../components/Auth/Provider'

const RegisterPage = () => {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()

  let [errors, setErrors] = React.useState<any>({})

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let from = location.state?.from?.pathname || '/home'

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<any> => {
    event.preventDefault()

    let formData = new FormData(event.currentTarget)
    let name = formData.get('name') as string
    let email = formData.get('email') as string
    let password = formData.get('password') as string

    const result = await auth.register(name, email, password)

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
          <FormControl isRequired isInvalid={errors.name}>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
              id="name"
              name="name"
              type="text"
            />
            <FormHelperText>El nombre con el que quieres aparecer</FormHelperText>
            { errors.name && <FormErrorMessage>{errors.name.join(', ')}</FormErrorMessage> }
          </FormControl>
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
          <Button
            type="submit"
          >
            Registrarse
          </Button>
        </VStack>
      </form>
      <Divider mt='4' mb='4'/>
      ¿Ya te has registrado? <Link as={ReactLink} to="/login" color='red.400'>Entrar</Link>
    </>
  )
}

export default RegisterPage
