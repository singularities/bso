import * as React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import {
  Link,
  Divider
} from '@chakra-ui/react'

import Register from '../components/Register'

const RegisterPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Register />
      <Divider mt='4' mb='4'/>
      ¿Ya te has registrado? <Link as={ReactLink} to="/login" color='red.400'>Entrar</Link>
    </>
  )
}

export default RegisterPage
