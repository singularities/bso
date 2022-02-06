import * as React from "react"
import {
  Box,
} from "@chakra-ui/react"

import AuthStatus from '../components/Auth/Status'
import SongsContainer from '../components/SongsContainer'

const HomePage = () => {
  return (
    <Box p="3">
      <AuthStatus/>
      <SongsContainer/>
    </Box>
  )
}

export default HomePage
