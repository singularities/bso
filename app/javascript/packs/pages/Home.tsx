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
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  )
}

export default HomePage
