import * as React from 'react'
import { useNavigate, useLocation, Link as ReactLink } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Link
} from '@chakra-ui/react'

import { useAuth } from '../components/Auth/Provider'

const LoginPage = () => {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()

  let from = location.state?.from?.pathname || "/";

  // const [email, setEmail] = React.useState('')
  // const [password, setPassword] = React.useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    let formData = new FormData(event.currentTarget)
    let email = formData.get('email') as string
    let password = formData.get('password') as string

    auth.signin(email, password, () => {
      navigate(from, { replace: true });
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="email">Correo electrónico</FormLabel>
          <Input
            id="email"
            type="email"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <Input
            id="password"
            type="password"
          />
        </FormControl>
        <Button
          width={'full'}
          mt={2}
        >
          Entrar
        </Button>
      </form>
      <Link as={ReactLink} to="/register">Registrarse</Link>
    </>
  )
}

export default LoginPage
