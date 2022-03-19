import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import Topbar from './TopBar'

const Layout = () => {
  return (
    <>
      <Topbar />
      <Box p="3">
        <Outlet />
      </Box>
    </>
  )
}

export default Layout
