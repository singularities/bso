import * as React from "react"
import {
  Box,
} from "@chakra-ui/react"

import TopBar from '../components/TopBar'
import SongsContainer from '../components/SongsContainer'
import SearchProvider from "../components/Search/Provider"

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Box p="3">
        <SearchProvider>
          <SongsContainer/>
        </SearchProvider>
      </Box>
    </>
  )
}

export default HomePage
