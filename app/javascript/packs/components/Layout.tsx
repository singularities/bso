import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'

import Topbar from './TopBar'

const Layout = () => {
  return (
    <Container my={2}>
      <Topbar />
      <Box mt={3}>
        <Outlet />
      </Box>
    </Container>
  )
}

export default Layout
