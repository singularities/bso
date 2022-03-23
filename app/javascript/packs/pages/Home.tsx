import * as React from "react"

import SongsContainer from '../components/SongsContainer'
import SearchProvider from "../components/Search/Provider"

const HomePage = () => {
  return (
    <SearchProvider>
      <SongsContainer/>
    </SearchProvider>
  )
}

export default HomePage
