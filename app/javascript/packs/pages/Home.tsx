import * as React from "react"
import {
  Box,
} from "@chakra-ui/react"

import AuthStatus from '../components/Auth/Status'
import SongsContainer from '../components/SongsContainer'
import SearchProvider from "../components/Search/Provider"

const HomePage = () => {
  return (
    <Box p="3">
      <AuthStatus/>
      <SearchProvider>
        <SongsContainer/>
      </SearchProvider>
    </Box>
  )
}

export default HomePage
