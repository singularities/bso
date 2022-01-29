import * as React from "react"
import {
  Box,
  Grid,
  VStack,
  Text,
  Code,
  Link
} from "@chakra-ui/react"

import Search from '../components/Search'
import AuthStatus from '../components/Auth/Status'
import Songs from '../components/Songs'

const HomePage = () => {
  return (
    <Box p="3">
      <AuthStatus/>
      <Search />
      <Songs />
    </Box>
  )
}

export default HomePage
