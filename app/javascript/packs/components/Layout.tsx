import * as React from 'react'
import { Outlet, Link as ReactLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'

import AuthStatus from './Auth/Status'


const Layout = () => {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link as={ReactLink} to="/">Home</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default Layout
